// 查看页面和编辑页面公用的参数和方法
import common from '@/config'
import { config } from '@/option/config'
import container from '@/page/group/container'
import { getList } from '@/api/map'
import { url } from '@/config';

export default {
  components: {
    container
  },
  provide () {
    return {
      main: this,
      contain: this
    };
  },
  data () {
    return {
      DIC: {
        MAP: []
      },
      contentWidth: '',
      config: config,
      obj: {},
      id: '',
      visual: {},
      nav: [],
      common: common,
      active: [],
      activeIndex: null,
      overactive: '',
      historyCache: [],// 历史操作数据用于undo redo
      currentHistoryIndex: -1,     // redo undo 指针
      copyNav: '', // 用于监听去干扰,字符串类型,方便比较,
      configData: ['header', 'query']
    }
  },
  watch: {
    nav: {
      handler (val, oldval) {
        this.recordMain(val, oldval)
      },
      deep: true
    },
    config: {
      handler (val) {
        this.configData.concat(['url']).forEach(ele => {
          window.$glob[ele] = val[ele]
        })
      },
      deep: true,
      immediate: true
    },
  },
  computed: {
    list () {
      let result = [];
      const detail = (list) => {
        list.forEach(item => {
          result.push(item)
          if (item.children) detail(item.children);
        })
      }
      detail(this.nav);
      const len = result.length - 1;
      result.forEach((ele, index) => ele.zIndex = len - index)
      return result
    },
    // 能否撤销
    canUndo () {
      return this.currentHistoryIndex > 0
    },
    canRedo () {
      return this.historyCache.length > this.currentHistoryIndex + 1
    },
  },
  created () {
    this.initDic();
  },
  methods: {
    //初始化字典
    initDic () {
      getList({
        current: 1,
        size: 100,
      }).then(res => {
        const data = res.data.data;
        this.DIC.MAP = data.records.map(ele => {
          return {
            label: ele.name,
            value: url + '/map/data?id=' + ele.id
          }
        });
      })
    },
    findnav (id) {
      let result = {}
      const detail = (list, parent, parentIndex, deep) => {
        list.forEach((item, index) => {
          if (id === item.index) {
            result = {
              index: item.index,
              deep: deep,
              item: item,
              itemIndex: index,
              itemLen: list.length - 1,
              itemList: list,
              parent: parent,
              parentIndex: parentIndex
            }
          } else if (item.children) {
            detail(item.children, item, index, deep + 1)
          }
        })
      }
      detail(this.nav, this.nav, 0, 0)
      return result
    },
    findlist (index) {
      return this.list.find(ele => ele.index == index) || {}
    },
    handleInitActive () {
      if (this.active.isNull()) return
      this.active = []
      this.activeIndex = null
    },
    handleMouseDown () {
      this.handleInitActive();
    },
    // =====================历史纪录=======================
    // 监听调用主程序
    recordMain (val, oldval) {
      //分两种情况:
      // 1. 版本在回撤时, 不要走监听(同时啥也没改)
      // 2. 版本回撤改了呢?那也要走监听重新推新的
      if (JSON.stringify(val) != this.copyNav) { // 不一样的东西才值得记录
        // 这里监听不用deep,很多移动操作无法监听,但用了deep杂质很多,随便鼠标点一下就能触发监听
        // 注意不要这么判断 (val !== oldval)  因为很多时候新老值对比是一样的
        let newst = JSON.stringify(val)
        if (newst != this.copyNav) {
          // console.log('我不一样哦');
          this.copyNav = newst
          this.addHistoryCache(val)
        } else {
          // console.log("一模一样,你记录个锤子啊!!");
          return
        }
      }
    },
    /**
  * 新增一条历史纪录
  * @param
  */
    addHistoryCache (val) {
      if (this.currentHistoryIndex + 1 < this.historyCache.length) {
        this.historyCache.splice(this.currentHistoryIndex + 1)
      }
      this.historyCache.push({
        nav: this.deepClone(val),
        // activePageUUID: this.activePageUUID,
        // activeElementUUID: this.activeElementUUID
      })
      // 限制undo 纪录步数，最多支持100步操作undo
      this.historyCache.splice(100)
      this.currentHistoryIndex++
    },
    editorUndo () {
      if (!this.canUndo) {
        return;
      }
      this.currentHistoryIndex--
      this.relapceEditorState()
    },
    editorRedo () {
      if (!this.canRedo) {
        return;
      }
      this.currentHistoryIndex++
      this.relapceEditorState()
    },
    /**
  * 更新编辑器项目数据，从history中拿数据替换
  * @param data
  */
    relapceEditorState () {
      const prevState = this.historyCache[this.currentHistoryIndex]
      this.nav = this.deepClone(prevState.nav)
      // 版本回退,本地保存一个,方便后面对比
      this.copyNav = JSON.stringify(prevState.nav)
    },
  }
}

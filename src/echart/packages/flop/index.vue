<template>
  <div :class="[b(),className]"
       :style="styleSizeName">
    <div :style="styleChartName">
      <template v-for="(item,index) in listData">
        <div :key="index"
             v-if="item.display!==false"
             :style="styleParentSize">
          <el-tooltip :disabled="!item.formatter"
                      placement="top-start"
                      :style="[styleParentName,{
               backgroundColor: item.backgroundColor || option.backgroundColor,
           },getEmpStyle(index)]">
            <div slot="content" v-html="item.formatter && item.formatter()"></div>
            <div :class="b('item',{'none':(statusDIC.includes(item) || type===''),'whole':isWhole,'img':isWhole&&(isImg || isBorder)})"
                 :style="!isWhole?'':styleName"
                 @click="handleClick(item,index)">
              <div :style="[prefixStyle,getEmpStyle(index)]"
                   v-if="getValByArray(item,'prefixText')">{{getValByArray(item,'prefixText')}}</div>
              <avue-count-up v-if="isWhole"
                             :decimals="decimals"
                             :end="item.data || item.value"></avue-count-up>
              <div :class="[b('count'),b(`count-${option.textAlign}`)]"
                   :style="styleSizeName"
                   v-else>
                <div :class="b('item',{'none':(statusDIC.includes(item) || type===''),'img':isImg})"
                     v-for="(item,index) in (item.data || item.value)+''.split(',')" :key="index"
                     @click="handleClick(item,index)"
                     :style="styleName">
                  <div v-if="statusDIC.includes(item)">{{item}}</div>
                  <avue-count-up :decimals="decimals" v-else :end="item"></avue-count-up>
                </div>
              </div>
              <div :style="[suffixStyle,getEmpStyle(index)]"
                   v-if="getValByArray(item,'suffixText')">{{getValByArray(item,'suffixText')}}</div>
            </div>
          </el-tooltip>
        </div>
      </template>
    </div>

  </div>
</template>

<script>
import create from "../../create";
export default create({
  name: "flop",
  data () {
    return {
      active: 0,
      statusDIC: [".", ","]
    };
  },
  computed: {
    isArray () {
      return Array.isArray(this.dataChart);
    },
    decimals () {
      return this.option.decimals || 0
    },
    listData () {
      if (this.isArray) {
        return this.dataChart;
      } else {
        return [this.dataChart];
      }
    },
    isWhole () {
      return this.vaildData(this.option.whole, false);
    },
    type () {
      return this.option.type;
    },
    isBorder () {
      return this.type === 'border';
    },
    isImg () {
      return this.type === 'img';
    },
    span () {
      return this.option.span || 1;
    },
    prefixStyle () {
      return {
        display: this.option.prefixInline ? 'inline-block' : 'block',
        textAlign: this.option.prefixTextAlign,
        marginBottom: this.setPx(this.option.prefixSplity),
        marginRight: this.setPx(this.option.prefixSplitx),
        color: this.option.prefixColor || "#fff",
        fontSize: this.setPx(this.option.prefixFontSize || 24)
      };
    },
    suffixStyle () {
      return {
        display: this.option.suffixInline ? 'inline-block' : 'block',
        textAlign: this.option.suffixTextAlign,
        marginTop: this.setPx(this.option.suffixSplity),
        marginLeft: this.setPx(this.option.suffixSplitx),
        color: this.option.suffixColor || "#fff",
        fontSize: this.setPx(this.option.suffixFontSize || 24)
      };
    },
    styleParentSize () {
      let obj = {
        boxSizing: 'border-box',
        display: 'inline-block',
        width: (100 / this.span) - 1 + '%'
      }
      if (this.option.splitx) {
        obj.paddingRight = this.setPx(this.option.splitx)
      }
      if (this.option.splity) {
        obj.paddingBottom = this.setPx(this.option.splity)
      }
      return obj
    },
    styleParentName () {
      let obj = {};
      if (!this.isImg && !this.isBorder) {
        obj = Object.assign(obj, {
          backgroundImage: `url(${this.option.backgroundImage})`,
          backgroundColor: this.option.backgroundColor
        });
      }
      if (this.option.padding) {
        obj.padding = this.setPx(this.option.padding)
      }
      return obj
    },
    styleName () {
      return Object.assign(
        (() => {
          let obj = {}
          if (this.option.splitx) {
            obj.marginRight = this.setPx(this.option.splitx)
          }
          if (this.option.splity) {
            obj.marginBottom = this.setPx(this.option.splity)
          }
          if (this.option.backgroundImage) {
            obj = Object.assign(obj, {
              backgroundImage: `url(${this.option.backgroundImage})`,
              backgroundSize: "100% 100%"
            })
          }
          return obj;
        })(),
        {
          textAlign: this.option.textAlign,
          backgroundColor: this.option.backgroundColor,
          color: this.option.color || "#fff",
          fontSize: this.setPx(this.option.fontSize || 64),
          fontWeight: this.option.fontWeight
        },
        (() => {
          if (this.type === "img") {
            return {
              // borderImageSource: `url(${this.option.backgroundBorder})`,
							background:`url(${this.option.backgroundBorder}) no-repeat`,
							backgroundSize:'100% 100%',
							height:this.setPx(this.option.height),
							width:this.setPx(this.option.width),
							display:'inline-block',
							lineHeight:this.styleSizeName.height
            };
          } else if (this.type === "border") {
            return {
              borderColor: this.option.borderColor || "#fff",
              borderStyle: "solid",
              borderWidth: this.setPx(this.option.borderWidth)
            };
          }
        })()
      );
    }
  },
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  created () { },
  methods: {
    handleClick (item, index) {
      this.active = index;
      this.updateClick({
        value: item.prefixText
      });
      this.clickFormatter && this.clickFormatter({
        type: index,
        item: item,
        value: item.prefixText,
        data: this.dataChart
      }, this.getItemRefs());
      if (item.href) window.open(item.href, item.target)
    },
    getEmpStyle (index) {
      let result = {}
      if (index == this.active) {
        result = {
          color: this.option.empColor
        }
      }
      return result
    },
    getValByArray (item, prop) {
      return this.isArray ? item[prop] : this.option[prop];
    }
  }
});
</script>
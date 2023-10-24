const testComponents = {
  template: `
  <div :style="[styleSizeName,styleName]" :class="className">
    <div :style="styleChartName" style="display: flex;justify-content: space-around;align-items: center;flex-wrap: wrap;textAlign:center;">
      <div v-for="(item,index) in dataChart" :key="index" :style="{marginBottom,minWidth}">
        <p :style="{color:item.labelColor || option.color,display:reverse ? 'block' : 'none'}">{{item.label}}</p>
        <p :style="{color:item.valueColor || option.valueColor,fontSize:valueFontSize,marginBottom,marginTop:marginBottom,fontWeight:fontWeight}">
					<avue-count-up :end="Number(item.value)"></avue-count-up>
        </p>
        <p :style="{color:item.labelColor || option.color,display:reverse ? 'none' : 'block'}">{{item.label}}</p>
      </div>
    </div>
  </div>
`,
  name: 'test',
  props: {
    option: Object,
    component: Object
  },
  computed: {
    styleName () {
      return {
        fontSize: this.fontSize,
        color: this.color
      }
    },
    color () {
      return this.option.color || '#fff'
    },
    fontSize () {
      return (this.option.fontSize || 30) + 'px'
    },
    valueFontSize(){
      return (this.option.valueFontSize || 30) + 'px'
    },
		fontWeight () {
		  return this.option.fontWeight
		},
    marginBottom(){
      return (this.option.marginBottom || 10) + 'px'
    },
    minWidth(){
      return (this.option.minWidth || 90) + 'px'
    },
    reverse(){      
      return this.vaildData(this.option.reverse, false)
    }
  }
}

const testOption = {
  template: `
  <div>
    <el-form-item label="反转">
			<avue-switch v-model="main.activeOption.reverse"></avue-switch>
		</el-form-item>
    <el-form-item label="最小宽度">
      <avue-input-number v-model="main.activeOption.minWidth"></avue-input-number>
    </el-form-item>
    <el-form-item label="字体大小">
      <avue-input-number v-model="main.activeOption.fontSize"></avue-input-number>
    </el-form-item>
    <el-form-item label="字体颜色">
      <avue-input-color v-model="main.activeOption.color"></avue-input-color>
    </el-form-item>
    <el-form-item label="value字体大小">
      <avue-input-number v-model="main.activeOption.valueFontSize"></avue-input-number>
    </el-form-item>
    <el-form-item label="value字体颜色">
      <avue-input-color v-model="main.activeOption.valueColor"></avue-input-color>
    </el-form-item>
		<el-form-item label="value文字粗细">
		  <avue-select v-model="main.activeOption.fontWeight" :dic="dicOption"></avue-select>
		</el-form-item>
    <el-form-item label="间距">
      <avue-input-number v-model="main.activeOption.marginBottom"></avue-input-number>
    </el-form-item>
  </div>
`,
  name: 'test',
  inject: ["main"],
	data(){
		return{
			dicOption: [{ label: 'normal', value: 'normal' }, { label: 'bold', value: 'bold' }, { label: 'bolder', value: 'bolder' }, { label: 'ligter', value: 'ligter' }]
		}
	}
}

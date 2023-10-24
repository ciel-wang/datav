<template>
	<div>
		<el-form-item label="图片宽度">
			<avue-input-number v-model="main.activeOption.imgWidth"></avue-input-number>
		</el-form-item>
		<el-form-item label="图片圆角">
			<avue-input-number v-model="main.activeOption.borderRadius"></avue-input-number>
		</el-form-item>
		<el-form-item label="字体大小">
			<avue-input-number v-model="main.activeOption.fontSize"></avue-input-number>
		</el-form-item>
		<el-form-item label="字体颜色">
			<avue-input-color color-format="hex" :show-alpha="false" v-model="main.activeOption.color"></avue-input-color>
		</el-form-item>
		<el-form-item label="文字粗细">
		  <avue-select v-model="main.activeOption.fontWeight" :dic="dicOption.fontWeight"></avue-select>
		</el-form-item>
		<el-form-item label="label字体大小">
			<avue-input-number v-model="main.activeOption.labelFontSize"></avue-input-number>
		</el-form-item>
		<el-form-item label="label字体颜色">
			<avue-input-color color-format="hex" :show-alpha="false" v-model="main.activeOption.labelColor"></avue-input-color>
		</el-form-item>
		<el-form-item label="label文字粗细">
		  <avue-select v-model="main.activeOption.labelFontWeight" :dic="dicOption.fontWeight"></avue-select>
		</el-form-item>
		<el-form-item label="label上下间隔">
			<avue-input-number v-model="main.activeOption.marginTop"></avue-input-number>
		</el-form-item>
		<el-collapse accordion>
			<el-collapse-item title="角标设置">
				<el-form-item label="X位置">
					<avue-input-number v-model="main.activeOption.markLeft"></avue-input-number>
				</el-form-item>
				<el-form-item label="Y位置">
					<avue-input-number v-model="main.activeOption.markTop"></avue-input-number>
				</el-form-item>
				<el-form-item label="宽度">
					<avue-input-number v-model="main.activeOption.markWidth"></avue-input-number>
				</el-form-item>
				<el-form-item label="高度">
					<avue-input-number v-model="main.activeOption.markHeight"></avue-input-number>
				</el-form-item>
				<el-form-item label="圆角">
					<avue-input-number v-model="main.activeOption.markBorderRadius"></avue-input-number>
				</el-form-item>
				<el-form-item label="角标字体大小">
					<avue-input-number v-model="main.activeOption.markFontSize"></avue-input-number>
				</el-form-item>
				<el-form-item label="角标字体颜色">
					<avue-input-color color-format="hex" :show-alpha="false" v-model="main.activeOption.markColor"></avue-input-color>
				</el-form-item>
				<el-form-item label="角标文字粗细">
				  <avue-select v-model="main.activeOption.markFontWeight" :dic="dicOption.fontWeight"></avue-select>
				</el-form-item>
				<el-form-item label="背景颜色">
					<avue-input-color color-format="hex" :show-alpha="false" v-model="main.activeOption.markBg"></avue-input-color>
				</el-form-item>
			</el-collapse-item>
			<el-collapse-item title="icon设置">
				<el-form-item label="X位置">
					<avue-input-number v-model="main.activeOption.iconLeft"></avue-input-number>
				</el-form-item>
				<el-form-item label="Y位置">
					<avue-input-number v-model="main.activeOption.iconTop"></avue-input-number>
				</el-form-item>
				<el-form-item label="宽度">
					<avue-input-number v-model="main.activeOption.iconWidth"></avue-input-number>
				</el-form-item>
				<el-form-item label="高度">
					<avue-input-number v-model="main.activeOption.iconHeight"></avue-input-number>
				</el-form-item>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
	import { dicOption } from '@/option/config'
	export default {
	  name: 'listInfo',
	  data () {
	    return {
	      dicOption: dicOption
	    }
	  },
	  inject: ["main"]
	}
</script>

<style>
</style>
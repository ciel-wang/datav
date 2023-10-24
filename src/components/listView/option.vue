<template>
	<div>
		<el-form-item label="卡片宽度">
			<avue-input-number v-model="main.activeOption.itemWidth"></avue-input-number>
		</el-form-item>
		<el-form-item label="卡片高度">
			<avue-input-number v-model="main.activeOption.itemHeight"></avue-input-number>
		</el-form-item>
		<el-form-item label="左右间隔">
			<avue-input-number v-model="main.activeOption.leftGap"></avue-input-number>
		</el-form-item>
		<el-form-item label="卡片上下间隔">
			<avue-input-number v-model="main.activeOption.topGap"></avue-input-number>
		</el-form-item>
		<el-form-item label="内边距">
			<avue-input-number v-model="main.activeOption.padding"></avue-input-number>
		</el-form-item>
		<el-form-item label="图片宽高">
			<avue-input-number v-model="main.activeOption.imgWidth"></avue-input-number>
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
			<avue-input-number v-model="main.activeOption.maringTop"></avue-input-number>
		</el-form-item>
		<el-collapse accordion>
			<el-collapse-item title="左角标设置">
				<el-form-item label="X位置">
					<avue-input-number v-model="main.activeOption.markLeft"></avue-input-number>
				</el-form-item>
				<el-form-item label="Y位置">
					<avue-input-number v-model="main.activeOption.markTop"></avue-input-number>
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
			</el-collapse-item>
			<el-collapse-item title="右角标设置">
				<el-form-item label="X位置">
					<avue-input-number v-model="main.activeOption.markRLeft"></avue-input-number>
				</el-form-item>
				<el-form-item label="Y位置">
					<avue-input-number v-model="main.activeOption.markRTop"></avue-input-number>
				</el-form-item>
				<el-form-item label="宽度">
					<avue-input-number v-model="main.activeOption.markRWidth"></avue-input-number>
				</el-form-item>
				<el-form-item label="高度">
					<avue-input-number v-model="main.activeOption.markRHeight"></avue-input-number>
				</el-form-item>
				<el-form-item label="行高">
					<avue-input-number v-model="main.activeOption.lineHeight"></avue-input-number>
				</el-form-item>
				<el-form-item label="角标字体大小">
					<avue-input-number v-model="main.activeOption.markRFontSize"></avue-input-number>
				</el-form-item>
				<el-form-item label="旋转角度">
					<avue-input-number v-model="main.activeOption.markRRotate"></avue-input-number>
				</el-form-item>
				<el-form-item label="角标字体颜色">
					<avue-input-color color-format="hex" :show-alpha="false" v-model="main.activeOption.markRColor"></avue-input-color>
				</el-form-item>
				<el-form-item label="角标文字粗细">
				  <avue-select v-model="main.activeOption.markRFontWeight" :dic="dicOption.fontWeight"></avue-select>
				</el-form-item>
				<el-form-item label="背景颜色">
					<avue-input-color color-format="hex" :show-alpha="false" v-model="main.activeOption.markRBg"></avue-input-color>
				</el-form-item>
			</el-collapse-item>
		</el-collapse>
		
	  <el-form-item label="背景图片">
	    <img v-if="main.activeOption.backgroundImg" :src="main.activeOption.backgroundImg" width="100%" />
	    <el-input clearable v-model="main.activeOption.backgroundImg">
	      <div @click="main.handleOpenImg('activeOption.backgroundImg','border')" slot="append">
	        <i class="iconfont icon-img"></i>
	      </div>
	    </el-input>
	  </el-form-item>
	</div>
</template>

<script>
	import { dicOption } from '@/option/config'
	export default {
	  name: 'listView',
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
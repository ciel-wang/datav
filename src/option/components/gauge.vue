<!-- 刻度盘配置 -->
<template>
	<div>
		<el-form-item label="刻度线粗度(像素)">
			<avue-input-number v-model="main.activeOption.lineSize"></avue-input-number>
		</el-form-item>
		<el-form-item label="详情顶部距离">
			<avue-input-number v-model="main.activeOption.offsetTop"></avue-input-number>
		</el-form-item>
		<el-form-item label="显示刻度">
			<avue-switch v-model="main.activeOption.axisTickShow"></avue-switch>
		</el-form-item>
		<el-form-item label="显示刻度值">
			<avue-switch v-model="main.activeOption.axisLabelShow"></avue-switch>
		</el-form-item>
		<el-form-item label="刻度字号">
			<avue-input-number v-model="main.activeOption.axisLabelFontSize"></avue-input-number>
		</el-form-item>
		<el-form-item label="显示分割线">
			<avue-switch v-model="main.activeOption.splitLineShow"></avue-switch>
		</el-form-item>
		<el-form-item label="显示指针">
			<avue-switch v-model="main.activeOption.pointerShow"></avue-switch>
		</el-form-item>
		<el-form-item label="进度条颜色">
			<avue-input-color v-model="main.activeOption.progressColor"></avue-input-color>
		</el-form-item>
		<el-form-item label="指标名称字号">
			<avue-input-number v-model="main.activeOption.nameFontSize"></avue-input-number>
		</el-form-item>
		<el-form-item label="指标字号">
			<avue-input-number v-model="main.activeOption.valueFontSize"></avue-input-number>
		</el-form-item>
	</div>
</template>

<script>
export default {
	name: "gauge",
	inject: ["main"],
};
</script>

<style></style>

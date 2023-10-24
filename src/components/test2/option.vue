<!-- 自定义配置 -->
<template>
	<div>
		<el-form-item label="字体大小">
			<avue-input-number v-model="main.activeOption.fontSize"></avue-input-number>
		</el-form-item>

		<el-form-item label="value字体大小">
			<avue-input-number v-model="main.activeOption.valueFontSize"></avue-input-number>
		</el-form-item>
		<el-form-item label="value字体颜色">
			<avue-input-color color-format="hex" :show-alpha="false" v-model="main.activeOption.valueColor"></avue-input-color>
		</el-form-item>

		<el-form-item label="label字体颜色">
			<avue-input-color color-format="hex" :show-alpha="false" v-model="main.activeOption.labelColor"></avue-input-color>
		</el-form-item>

		<el-form-item label="后缀名">
			<avue-input v-model="main.activeOption.unit"></avue-input>
		</el-form-item>

		<el-form-item label="margin值">
			<avue-input-number v-model="main.activeOption.margin"></avue-input-number>
		</el-form-item>
	</div>
</template>

<script>
export default {
	name: "test2",
	inject: ["main"],
};
</script>

<style></style>

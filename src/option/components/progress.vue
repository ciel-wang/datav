<!-- 进度条配置 -->
<template>
	<div>
		<el-form-item label="状态">
			<avue-select v-model="main.activeOption.status" :dic="statusDic"> </avue-select>
		</el-form-item>
		<el-form-item label="类型">
			<avue-radio v-model="main.activeOption.type" :dic="dicOption.line"> </avue-radio>
		</el-form-item>
		<el-form-item label="间距">
			<avue-input-number v-model="main.activeOption.split" :max="200"></avue-input-number>
		</el-form-item>
		<el-form-item label="边框颜色">
			<avue-input-color v-model="main.activeOption.borderColor"></avue-input-color>
		</el-form-item>
		<el-form-item label="边框大小">
			<avue-input-number v-model="main.activeOption.strokeWidth" :max="50"></avue-input-number>
		</el-form-item>
		<el-form-item label="字体大小">
			<avue-input-number v-model="main.activeOption.fontSize" :max="200"></avue-input-number>
		</el-form-item>
		<el-form-item label="字体颜色">
			<avue-input-color v-model="main.activeOption.color"></avue-input-color>
		</el-form-item>
		<el-form-item label="文字粗细">
			<avue-select v-model="main.activeOption.FontWeight" :dic="dicOption.fontWeight"> </avue-select>
		</el-form-item>
		<el-form-item label="前缀字体大小">
			<avue-input-number v-model="main.activeOption.prefixFontSize" :max="200"></avue-input-number>
		</el-form-item>
		<el-form-item label="前缀字体颜色">
			<avue-input-color v-model="main.activeOption.prefixColor"></avue-input-color>
		</el-form-item>
		<el-form-item label="前缀文字粗细">
			<avue-select v-model="main.activeOption.prefixFontWeight" :dic="dicOption.fontWeight"> </avue-select>
		</el-form-item>
		<el-form-item label="后缀文字">
			<avue-input v-model="main.activeOption.suffixLabel"> </avue-input>
		</el-form-item>
	</div>
</template>

<script>
import { dicOption } from "@/option/config";
export default {
	name: "progress",
	data() {
		return {
			dicOption: dicOption,
			statusDic: [
				{ value: "success", label: "正常" },
				{ value: "exception", label: "异常" },
				{ value: "warning", label: "警告" },
			],
		};
	},
	inject: ["main"],
};
</script>

<style></style>

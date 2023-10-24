<!-- 自定义配置 -->
<template>
	<div>
		<el-form-item label="字体大小">
			<avue-input-number v-model="main.activeOption.fontSize"></avue-input-number>
		</el-form-item>
		<el-form-item label="label总数">
			<avue-input-number v-model="main.activeOption.itemNum"></avue-input-number>
		</el-form-item>
		<el-form-item label="字体颜色">
			<avue-input-color color-format="hex" :show-alpha="false" v-model="main.activeOption.color"></avue-input-color>
		</el-form-item>
		<el-form-item label="是否显示图片">
			<avue-select v-model="main.activeOption.imgShow" :dic="imgShowDic"></avue-select>
		</el-form-item>
	</div>
</template>

<script>
export default {
	name: "monitorList",
	inject: ["main"],
	data() {
		return {
			imgShowDic: [
				{ value: 1, label: "是" },
				{ value: 0, label: "否" },
			],
		};
	},
};
</script>

<style></style>

<!-- pie3d配置 -->
<template>
	<div>
		<el-form-item label="自动旋转">
			<avue-switch v-model="main.activeOption.autoRotate"></avue-switch>
		</el-form-item>
		<el-form-item label="等高">
			<avue-switch v-model="main.activeOption.fixedHeight"></avue-switch>
		</el-form-item>
	</div>
</template>

<script>
export default {
	name: "pie3d",
	inject: ["main"],
};
</script>

<style></style>

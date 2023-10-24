<!-- 柱状图配置 -->
<template>
	<div>
		<el-form-item label="竖展示">
			<avue-switch type="textarea" v-model="main.activeOption.category"></avue-switch>
		</el-form-item>
		<el-collapse accordion>
			<el-collapse-item title="柱体设置">
				<el-form-item label="最大宽度">
					<avue-slider v-model="main.activeOption.barWidth"> </avue-slider>
				</el-form-item>
				<el-form-item label="顶部圆角">
					<avue-slider v-model="main.activeOption.barTopRadius"> </avue-slider>
				</el-form-item>
				<el-form-item label="底部圆角">
					<avue-slider v-model="main.activeOption.barBottomRadius"> </avue-slider>
				</el-form-item>
				<el-form-item label="最小高度">
					<avue-slider v-model="main.activeOption.barMinHeight"> </avue-slider>
				</el-form-item>
				<el-form-item label="显示背景色">
					<avue-switch v-model="main.activeOption.showBackground"> </avue-switch>
				</el-form-item>
				<el-form-item label="背景颜色">
					<avue-input-color v-model="main.activeOption.backgroundColor"> </avue-input-color>
				</el-form-item>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
export default {
	name: "bar",
	inject: ["main"],
};
</script>

<style></style>

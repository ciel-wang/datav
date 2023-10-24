<template>
	<div :class="[b(), className]" :style="styleSizeName" ref="main" @click="handleClick">
		<div :style="styleChartName">
			<div
				:class="b('text', { line: type === 'line', circle: type === 'circle' })"
				:style="{
					display: 'flex',
					'align-content': 'center',
					'justify-content': 'space-between',
					'flex-direction': type === 'line' ? 'row' : 'column',
				}"
			>
				<p :style="stylePrefixName">{{ dataChart.label }}</p>
				<p :style="styleName">
					<avue-count-up v-if="dataChart.value" :end="Number(dataChart.value)"></avue-count-up>
					<span>{{ option.suffixLabel }}</span>
				</p>
			</div>
			<el-progress
				:width="width"
				:percentage="dataChart.data"
				:status="status"
				:showText="false"
				:strokeWidth="strokeWidth"
				:type="type"
				:color="dataChart.color || color"
			></el-progress>

			<!-- <avue-progress :color="color" :width="width" :showText="false" :strokeWidth="strokeWidth" :percentage="dataChart.data" :type="type">
			</avue-progress> -->
		</div>
	</div>
</template>

<script>
import create from "../../create";
export default create({
	name: "progress",
	computed: {
		stylePrefixName() {
			return {
				fontWeight: this.option.prefixFontWeight || "normal",
				fontSize: (this.option.prefixFontSize || 16) + "px",
				color: this.option.prefixColor || "#fff",
			};
		},
		styleName() {
			return {
				marginBottom: this.option.split + "px",
				fontWeight: this.option.fontWeight || "normal",
				fontSize: (this.option.fontSize || 16) + "px",
				color: this.option.color || "#ff",
			};
		},
		type() {
			return this.option.type || "line";
		},
		color() {
			return this.option.borderColor || "";
		},
		strokeWidth() {
			return this.option.strokeWidth || 14;
		},
		status() {
			return this.option.status || "success";
		},
	},
	props: {
		option: {
			type: Object,
			default: () => {
				return {};
			},
		},
	},
	methods: {
		handleClick() {
			this.clickFormatter &&
				this.clickFormatter(
					{
						data: this.dataChart,
					},
					this.getItemRefs()
				);
		},
	},
});
</script>

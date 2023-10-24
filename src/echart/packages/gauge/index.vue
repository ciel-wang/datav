<template>
	<div :class="[b(), className]" :style="styleSizeName">
		<div :ref="id" :style="styleChartName"></div>
	</div>
</template>

<script>
import create from "../../create";
export default create({
	name: "gauge",
	computed: {
		x2() {
			return this.option.gridX2 || 20;
		},
	},

	methods: {
		updateChart() {
			const optionData = this.deepClone(this.dataChart);
			const option = {
				title: this.ishasprop(
					this.option.titleShow,
					{
						text: this.option.title,
						subtext: this.option.subtext || "",
						textStyle: {
							color: this.option.titleColor || "#333",
							fontSize: this.option.titleFontSize || 16,
						},
						left: this.option.titlePostion || "auto",
						subtextStyle: {
							color: this.option.subTitleColor || "#aaa",
							fontSize: this.option.subTitleFontSize || 14,
						},
					},
					{}
				),
				grid: {
					left: this.option.gridX || 20,
					top: this.option.gridY || 60,
					right: this.x2,
					bottom: this.option.gridY2 || 60,
				},
				series: [
					{
						name: "业务指标",
						type: "gauge",
						detail: {
							fontSize: this.option.valueFontSize || 30,
							formatter: "{value}" + optionData.unit,
							color: "#fff",
							offsetCenter: [0, this.option.offsetTop || "40%"],
						},
						min: optionData.min,
						max: optionData.max,
						axisLine: {
							lineStyle: {
								color: (() => {
									let list = [];
									(this.option.barColor || []).forEach((ele) => {
										list.push([ele.postion, ele.color1]);
									});
									if (this.validatenull(list)) {
										list = [
											[0, 2, "#91c7ae"],
											[0.8, "#638693"],
											[1, "#c23531"],
										];
									}
									return list;
								})(),
								width: this.option.lineSize || 5,
							},
						},
						axisLabel: {
							show: this.vaildData(this.option.axisLabelShow, true),
							fontSize: this.option.axisLabelFontSize || 25,
						},
						axisTick: {
							show: this.vaildData(this.option.axisTickShow, true),
							lineStyle: {
								color: this.option.lineColor || "#eee",
							},
						},
						splitLine: {
							show: this.vaildData(this.option.splitLineShow, true),
						},
						pointer: {
							show: this.vaildData(this.option.pointerShow, true),
						},
						progress: {
							show: true,
							width: this.option.lineSize || 5,
							itemStyle: {
								color: this.option.progressColor || "auto",
							},
						},
						title: {
							color: this.option.nameColor,
							fontSize: this.option.nameFontSize || 20,
						},
						data: [optionData],
					},
				],
			};
			this.myChart.resize();
			this.myChart.setOption(option, true);
		},
	},
});
</script>

<template>
	<div :class="[b(), className]" :style="styleSizeName">
		<div :ref="id" :style="styleChartName"></div>
	</div>
</template>

<script>
import create from "../../create";

export default create({
	name: "barSort",
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
				tooltip: this.ishasprop(
					this.formatter,
					{
						formatter: (name) => {
							return this.formatter(name, this.dataChart);
						},
					},
					{
						textStyle: {
							fontSize: this.option.tipFontSize,
							color: this.option.tipColor || "#fff",
						},
					}
				),
				grid: {
					left: this.option.gridX || 20,
					top: this.option.gridY || 60,
					right: this.x2,
					bottom: this.option.gridY2 || 60,
				},
				legend: {
					show: this.vaildData(this.option.legend, false),
					orient: this.option.legendOrient || "vertical",
					x: this.option.legendPostion || "left",
					top: 0,
					right: this.x2,
					textStyle: {
						fontSize: this.option.legendFontSize || 12,
					},
					data: (() => {
						return (optionData.series || []).map((ele, index) => {
							return {
								name: ele.name,
								textStyle: this.ishasprop(
									!this.switchTheme,
									{
										color: this.getColor(index, true),
									},
									{}
								),
							};
						});
					})(),
				},
				xAxis: {
					type: "value",
					max: "dataMax",
					name: this.option.xAxisName,
					axisLine: {
						show: this.vaildData(this.option.xAxisAxisLineShow, true),
						lineStyle: {
							color: this.option.lineColor || "#333",
						},
					},
					axisTick: {
						show: this.vaildData(this.option.xAxisAxisTickShow, true),
					},
					inverse: this.vaildData(this.option.xAxisInverse, false),
					show: this.vaildData(this.option.xAxisShow, true),
					splitLine: {
						show: this.vaildData(this.option.xAxisSplitLineShow, false),
					},
					axisLabel: {
						interval: this.option.xAxisinterval || "auto",
						rotate: this.option.xAxisRotate || 0,
						margin: this.option.xAxisMargin || 8,
						textStyle: {
							color: this.option.nameColor || "#333",
							fontSize: this.option.xNameFontSize || 14,
						},
					},
				},
				yAxis: {
					type: "category",
					name: this.option.yAxisName,
					max: this.option.max || null,
					data: optionData.categories || [],
					axisLabel: {
						textStyle: {
							color: this.option.nameColor || "#333",
							fontSize: this.option.yNameFontSize || 14,
						},
					},
					axisLine: {
						show: this.vaildData(this.option.yAxisAxisLineShow, true),
						lineStyle: {
							color: this.option.lineColor || "#333",
						},
					},
					axisTick: {
						show: this.vaildData(this.option.yAxisAxisTickShow, true),
					},
					inverse: true,
					show: this.vaildData(this.option.yAxisShow, true),
					splitLine: {
						show: this.vaildData(this.option.yAxisSplitLineShow, true),
					},
					animationDuration: 300,
					animationDurationUpdate: 300,
				},
				series: (() => {
					const barColor = this.option.barColor || [];
					const list = (optionData.series || []).map((ele, index) => {
						return Object.assign(ele, {
							type: "bar",
							realtimeSort: true,
							barWidth: this.option.barWidth || 16,
							barMinHeight: this.option.barMinHeight || 0,
							showBackground: this.vaildData(this.option.showBackground, false),
							backgroundStyle: {
								color: this.option.backgroundColor || "rgba(180, 180, 180, 0.2)",
								borderRadius: [
									this.option.barBottomRadius || 0,
									this.option.barTopRadius || 0,
									this.option.barTopRadius || 0,
									this.option.barBottomRadius || 0,
								],
							},
							itemStyle: this.ishasprop(
								!this.switchTheme,
								{
									color: this.getColor(index),
								},
								{
									barBorderRadius: [
										this.option.barBottomRadius || 0,
										this.option.barTopRadius || 0,
										this.option.barTopRadius || 0,
										this.option.barBottomRadius || 0,
									],
								}
							),
							label: {
								show: this.vaildData(this.option.labelShow, false), //开启显示
								position: "right", //在上方显示,
								valueAnimation: true,
								formatter: (name) => this.getLabelFormatter(name),
								textStyle: {
									//数值样式
									fontSize: this.option.labelShowFontSize || 14,
									color: this.option.labelShowColor || "#333",
									fontWeight: this.option.labelShowFontWeight || 500,
								},
							},
						});
					});
					return list;
				})(),
				animationDuration: 0,
				animationDurationUpdate: 3000,
				animationEasing: "linear",
				animationEasingUpdate: "linear",
			};
			this.myChart.resize();
			this.myChart.setOption(option, true);
		},
	},
});
</script>

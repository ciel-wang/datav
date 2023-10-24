<template>
	<div :class="[b(), className]" :style="styleSizeName">
		<div :ref="id" :style="styleChartName"></div>
	</div>
</template>

<script>
import create from "../../create";

export default create({
	name: "pie3d",
	computed: {
		x2() {
			return this.option.gridX2 || 20;
		},
	},

	methods: {
		getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h, fixedHeight) {
			// 计算
			let midRatio = (startRatio + endRatio) / 2;
			let startRadian = startRatio * Math.PI * 2;
			let endRadian = endRatio * Math.PI * 2;
			let midRadian = midRatio * Math.PI * 2;
			// 如果只有一个扇形，则不实现选中效果。
			if (startRatio === 0 && endRatio === 1) {
				isSelected = false;
			}
			// 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
			k = typeof k !== "undefined" ? k : 1 / 3;
			// 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
			let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
			let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;
			// 计算高亮效果的放大比例（未高亮，则比例为 1）
			let hoverRate = isHovered ? 1.05 : 1;
			// 返回曲面参数方程
			return {
				u: {
					min: -Math.PI,
					max: Math.PI * 3,
					step: Math.PI / 32,
				},
				v: {
					min: 0,
					max: Math.PI * 2,
					step: Math.PI / 20,
				},
				x: function (u, v) {
					if (u < startRadian) {
						return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
					}
					if (u > endRadian) {
						return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
					}
					return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
				},
				y: function (u, v) {
					if (u < startRadian) {
						return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
					}
					if (u > endRadian) {
						return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
					}
					return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
				},
				z: function (u, v) {
					if (u < -Math.PI * 0.5) {
						return Math.sin(u);
					}
					if (u > Math.PI * 2.5) {
						return fixedHeight ? Math.sin(u) : Math.sin(u) * h * 0.1;
					}
					return Math.sin(v) > 0 ? (fixedHeight ? 1 : 1 * h * 0.1) : -1;
				},
			};
		},
		updateChart() {
			const optionData = this.deepClone(this.dataChart);
			// const optionData = (() => {
			// 	let list = arr;
			// 	list.sort(function (a, b) {
			// 		return a.value - b.value;
			// 	});
			// 	return list;
			// })();
			let series = [];
			let sumValue = 0;
			let startValue = 0;
			let endValue = 0;
			let legendData = [];
			let k = 1 / 3;

			// 为每一个饼图数据，生成一个 series-surface 配置
			for (let i = 0; i < optionData.length; i++) {
				sumValue += optionData[i].value; //数据的总和

				let seriesItem = {
					name: typeof optionData[i].name === "undefined" ? `series${i}` : optionData[i].name,
					type: "surface",
					parametric: true, //是否为参数曲面
					wireframe: {
						//曲线的网格线配置
						show: false,
					},
					optionData: optionData[i],
					pieStatus: {
						selected: false,
						hovered: false,
						k: k,
					},
				};
				// 设置每个扇区的样式
				if (typeof optionData[i].itemStyle != "undefined") {
					let itemStyle = {};

					typeof optionData[i].itemStyle.color != "undefined" ? (itemStyle.color = optionData[i].itemStyle.color) : null;
					typeof optionData[i].itemStyle.opacity != "undefined" ? (itemStyle.opacity = optionData[i].itemStyle.opacity) : null;

					seriesItem.itemStyle = itemStyle;
				}
				series.push(seriesItem);
			}

			// 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
			// 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
			for (let i = 0; i < series.length; i++) {
				endValue = startValue + series[i].optionData.value;
				series[i].optionData.startRatio = startValue / sumValue;
				series[i].optionData.endRatio = endValue / sumValue;
				// 设置每个曲面的参数方程
				series[i].parametricEquation = this.getParametricEquation(
					series[i].optionData.startRatio,
					series[i].optionData.endRatio,
					true,
					false,
					k,
					(series[i].optionData.value * 100) / sumValue,
					this.option.fixedHeight
				);
				startValue = endValue;

				legendData.push(series[i].name);
			}

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
				legend: {
					show: this.vaildData(this.option.legend, false),
					orient: this.option.legendOrient || "vertical",
					x: this.option.legendPostion || "left",
					top: 35,
					right: this.x2,
					textStyle: {
						fontSize: this.option.legendFontSize || 12,
					},
					data: (() => {
						return (Array.isArray(optionData) ? optionData : []).map((ele, index) => {
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
				xAxis3D: {
					min: -1,
					max: 1,
				},
				yAxis3D: {
					min: -1,
					max: 1,
				},
				zAxis3D: {
					min: -1,
					max: 1,
				},
				grid3D: {
					show: false,
					boxHeight: 18,
					top: this.option.gridY || "middle",
					right: this.x2 || "auto",
					bottom: this.option.gridY2 || "auto",
					left: this.option.gridX || "center",
					viewControl: {
						//3d效果可以放大、旋转等，请自己去查看官方配置
						alpha: 40,
						rotateSensitivity: [1, 0],
						zoomSensitivity: 0.5,
						panSensitivity: 0,
						autoRotate: this.option.autoRotate || true,
					},
					//后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。
					// postEffect: {
					// 	//配置这项会出现锯齿，请自己去查看官方配置有办法解决
					// 	enable: true,
					// 	bloom: {
					// 		enable: true,
					// 		bloomIntensity: 0.1,
					// 	},
					// 	SSAO: {
					// 		enable: true,
					// 		quality: "medium",
					// 		radius: 2,
					// 	},
					// },
				},
				series: (() => {
					const barColor = this.option.barColor || [];
					const list = [...series];
					return list;
				})(),
			};
			this.myChart.resize();
			this.myChart.setOption(option, true);
		},
	},
});
</script>

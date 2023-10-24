<template>
	<div class="listinfo_page" :style="styleSizeName">
		<div :style="imgStyle" class="imgBox">
			<el-image :style="imgStyle" :src="dataChart.img" fit="cover"></el-image>
			<div class="mark_class" :style="markStyle">{{ dataChart.markValue }}</div>
		</div>
		<div style="width: 80%;position: relative;">
			<div v-for="obj in dataChart.itemCount" :key="'obj'+obj" style="width: 100%;display: flex;align-items: center;" :style="{marginTop}">
				<span :style="{color:labelColor,fontSize:labelFontSize,fontWeight:labelFontWeight}">{{ dataChart['label'+obj] }}</span>
				<span style="max-width: 70%;" class="u-line-1" :style="{ color,fontSize,fontWeight }">{{ dataChart['value'+obj] }}</span>
			</div>
			<svg v-show="dataChart.icon" aria-hidden="true" :style="iconStyle">
				<use :xlink:href="dataChart.icon" />
			</svg>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'listInfo',
		computed:{
			color(){
				return this.option.color || '#fff';
			},
			fontSize () {
			  return (this.option.fontSize || 26) + 'px';
			},
			fontWeight(){
				return this.option.fontWeight || 'normal';
			},
			labelColor(){
				return this.option.labelColor || '#fff';
			},
			labelFontSize () {
			  return (this.option.labelFontSize || 18) + 'px';
			},
			labelFontWeight(){
				return this.option.labelFontWeight || 'normal';
			},
			marginTop(){
				return (this.option.marginTop || 10) + 'px'
			},
			imgStyle(){
				return{
					width:(this.option.imgWidth || 150) + 'px',
					borderRadius:this.option.borderRadius + 'px'
				}
			},
			markStyle(){
				return{
					width:(this.option.markWidth || 60) + 'px',
					height:(this.option.markHeight || 60) + 'px',
					lineHeight:(this.option.markHeight || 60) + 'px',
					borderRadius:(this.option.markBorderRadius || 60) + 'px',
					right:(this.option.markLeft || 0) + 'px',
					bottom:(this.option.markTop || 0) + 'px',
					fontSize:(this.option.markFontSize || 30) + 'px',
					fontWeight:this.option.markFontWeight || 'normal',
					color:this.option.markColor || '#fff',
					backgroundColor:this.option.markBg || '#FF8D1A'
				}
			},
			iconStyle(){
				return {
					width:(this.option.iconWidth || 100) + 'px',
					height:(this.option.iconHeight || 100) + 'px',
					right:(this.option.iconLeft || 0) + 'px',
					top:(this.option.iconTop || 0) + 'px',
					position:'absolute'
				}
			}
		}
	}
</script>

<style lang="scss">
	.listinfo_page{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		.u-line-1 {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.imgBox{
			position: relative;
			.mark_class{
				position: absolute;
				z-index: 1;
				text-align: center;
			}
		}
	}
</style>
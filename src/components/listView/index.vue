<template>
	<div class="listview_page" :style="{'--leftGap':option.leftGap+'px','--topGap':option.topGap+'px','--itemWidth':option.itemWidth+'px','--itemHeight':option.itemHeight+'px',...styleSizeName}">
		<div 
			class="item_class" 
			:style="{'--padding':option.padding+'px','background-image':`url(${option.backgroundImg})`}"
			v-for="(item,i) in dataChart" :key="'listview'+i">
			<div class="mark_class" :style="{...markLStyle,color:item.markLColor || markLColor}">{{ item.markValue }}</div>
			<div class="mark_right" :style="{width:markRStyle.height,height:markRStyle.height}">
				<div :style="{...markRStyle,backgroundColor:item.markBg || option.markRBg}">
					<div :style="{transform:`rotateZ(${option.markRRotate || 45}deg)`}">{{ item.markRValue }}</div>
				</div>
			</div>
			
			<div :style="{width:imgWidth,height:imgWidth,flex:`0 0 ${imgWidth}`}">
				<el-image style="width: 100%; height: 100%;border-radius: 100%;" :src="item.img"></el-image>
			</div>
			<div class="item_right" :style="{width:`calc(100% - ${imgWidth} - 20px)`,'--maringTop':(option.maringTop || 10)+'px'}">
				<div v-for="obj in item.itemCount" :key="'obj'+obj" style="width: 100%;display: flex;align-items: center;">
					<div :style="{color:labelColor,fontSize:labelFontSize,fontWeight:labelFontWeight}">{{ item['label'+obj] }}</div>
					<div style="max-width: 70%;" class="u-line-1" :style="{ color,fontSize,fontWeight }">{{ item['value'+obj] }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'listView',
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
			markLColor(){
				return this.option.markColor || '#fff';
			},
			markLStyle(){
				return{
					left:(this.option.markLeft || 0) + 'px',
					top:(this.option.markTop || 0) + 'px',
					fontSize:(this.option.markFontSize || 30) + 'px',
					fontWeight:this.option.markFontWeight || 'normal',
				}
			},
			imgWidth(){
				return (this.option.imgWidth || 150) + 'px'
			},
			markRStyle(){
				return{
					right:(this.option.markRLeft || -12) + 'px',
					top:(this.option.markRTop || -61) + 'px',
					width:(this.option.markRWidth || 90) + 'px',
					height:(this.option.markRHeight || (this.option.markRWidth*2 || 180)) + 'px',
					lineHeight:(this.option.lineHeight || 180) + 'px',
					fontSize:(this.option.markRFontSize || 30) + 'px',
					color:this.option.markRColor || '#fff',
					fontWeight:this.option.markRFontWeight || 'normal',
					transform:`rotateZ(${this.option.markRRotate || -45}deg)`,
					position: 'absolute'
				}
			}
		}
	}
</script>

<style lang="scss">
	.listview_page{
		display: grid;
		grid-template-columns: repeat(auto-fit,minmax(var(--itemWidth),calc(33.3% - var(--leftGap))));
		align-content: flex-start;
		align-items: flex-start;
		gap: var(--topGap) var(--leftGap);
		.item_class{
			height: var(--itemHeight);
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;
			padding: var(--padding);
			background-repeat: no-repeat;
			background-size: 100% 100%;
		}
		.item_right{
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			&>div+div{
				margin-top: var(--maringTop);
			}
		}
		.mark_class{
			position: absolute;
			z-index: 1;
		}
		.mark_right{
			position: absolute;
			z-index: 1;
			text-align: left;
			top: 0;
			right: 0;
			overflow: hidden;
		}
		.u-line-1 {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
</style>
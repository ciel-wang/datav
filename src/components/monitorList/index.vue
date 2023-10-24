<template>
	<div :style="{ fontSize: fontSize, color: '#fff' }" class="custom_page">
		<div v-for="(item, index) in dataChart.data" :key="index" class="custom_page_item">
			<div>{{ dataChart.title }}{{ item.title }}</div>
			<div class="img" :style="{ display: imgShow ? 'block' : 'none' }">
				<img :src="item.url + '?' + new Date()" width="100%" height="100%" />
			</div>
			<ul>
				<li v-for="(item2, i) in itemNum" :key="i">
					<span :style="{ color: color }">{{ dataChart["label" + (i * 1 + 1)] }}：</span>
					<span>{{ item["value" + (i * 1 + 1)] }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: "monitorList",
	props: {
		option: Object,
		component: Object,
	},
	computed: {
		fontSize() {
			return (this.option.fontSize || 16) + "px";
		},
		itemNum() {
			return this.option.itemNum || 2;
		},
		color() {
			return this.option.color || "#fff";
		},
		imgShow() {
			return this.option.imgShow;
		},
	},
	methods: {},
};
</script>
<style lang="scss">
.custom_page {
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: nowrap;
	&_item {
		text-align: center;
		div {
			margin-bottom: 15px;
			text-align: left;
		}
	}
	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	li {
		margin: 6px 0;
		text-align: left;
	}
	.image-slot {
		font-size: 16px !important;
	}
	.img {
		max-width: 140px;
		min-width: 110px;
		height: 165px;
	}
}
</style>

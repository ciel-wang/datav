<template>
	<div :style="{ fontSize: fontSize, color: '#fff' }" class="custom_page2">
		<div v-for="(item, index) in dataChart" :key="index" :style="{ margin }">
			<span :style="{ color: labelColor }">{{ item.label }}</span>
			<avue-count-up
				v-if="(item.value+'').indexOf('.') >= 0"
				:end="item.value"
				style="margin: 0 10px"
				:decimals="2"
				:style="{ color: item.color ? item.color : valueColor ? valueColor : '#fff', fontSize: valueFontSize }"
			></avue-count-up>
			<avue-count-up
				v-else
				:end="item.value"
				style="margin: 0 10px"
				:decimals="0"
				:style="{ color: item.color ? item.color : valueColor ? valueColor : '#fff', fontSize: valueFontSize }"
			></avue-count-up>
			<span :style="{ color: labelColor }">{{ item.unit ? item.unit : unit }}</span>
		</div>
	</div>
</template>
<script>
export default {
	name: "test2",
	props: {
		option: Object,
		component: Object,
	},
	computed: {
		fontSize() {
			return (this.option.fontSize || 30) + "px";
		},
		valueColor() {
			return this.option.valueColor || "#fff";
		},
		labelColor() {
			return this.option.labelColor || "#fff";
		},
		unit() {
			return this.option.unit || "";
		},
		margin() {
			return (this.option.margin || 10) + "px";
		},
		valueFontSize() {
			return (this.option.valueFontSize || 40) + "px";
		},
	},
	methods: {
	},
};
</script>
<style lang="scss"></style>

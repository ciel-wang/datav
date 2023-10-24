<template>
	<div class="index">
		<div class="header">
			<img src="/img/header.jpg" alt="" width="100%" height="210px" />
			<div class="title">
				<p>
					{{ $website.name }}<br />
					<small>{{ $website.subName }}</small>
				</p>
			</div>
			<navs @change="handleChange"></navs>
		</div>
		<div class="main" v-if="activeName == 0">
			<list></list>
		</div>
		<el-scrollbar class="main">
			<maps v-if="activeName == 1"></maps>
			<category v-else-if="activeName == 2"></category>
			<db v-else-if="activeName == 3"></db>
			<document v-else-if="activeName == 4"></document>
		</el-scrollbar>
	</div>
</template>
<script>
import list from "./list/index";
import maps from "./list/map";
import category from "./list/category";
import db from "./list/db";
import document from "./list/document";
import navs from "./nav/index";
export default {
	name: "index",
	components: {
		navs,
		list,
		maps,
		category,
		db,
		document,
	},
	data() {
		return {
			activeName: 0,
		};
	},
	methods: {
		handleChange(nav, index) {
			this.activeName = index;
		},
	},
};
</script>
<style lang="scss">
.index {
	height: 100%;
	.header {
		position: relative;
		.nav {
			margin: 0 20px;
			width: 100%;
			position: absolute;
			bottom: 10px;
			border: none;
			.el-menu-item {
				background-color: rgba(0, 0, 0, 0) !important;
			}
		}
		.title {
			position: absolute;
			top: 30px;
			left: 30px;
			font-size: 34px;
			color: rgb(0, 186, 255);
			font-weight: 500;
		}
		.title small {
			font-size: 18px;
		}
	}
	.main {
		width: 100%;
		height: calc(100% - 220px);
	}
}
</style>

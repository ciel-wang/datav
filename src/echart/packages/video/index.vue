<template>
  <div :class="[b(),className]"
       :style="styleSizeName"
       ref="main"
       @click="handleClick">
    <video :style="styleChartName"
           muted
           :width="width"
           :height="height"
           :src="dataChart.value"
           v-bind="params"
           style="object-fit: fill">
    </video>
  </div>
</template>

<script>
import create from "../../create";
export default create({
  name: "video",
  data () {
    return {};
  },
  computed: {
    params () {
      let result = {}
      if (this.option.controls) result.controls = "controls"
      if (this.option.loop) result.loop = "loop"
      if (this.option.autoplay) result.autoplay = "autoplay"
      return result
    }
  },
  created () { },
  mounted () { },
  methods: {
    handleClick () {
      this.clickFormatter && this.clickFormatter({
        type: index,
        item: item,
        value: item.value,
        data: this.dataChart
      }, this.getItemRefs());
    }
  },
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
});
</script>



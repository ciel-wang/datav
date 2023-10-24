<template>
  <div :class="[b(),className]"
       :style="styleSizeName">
    <div :ref="id"
         :style="styleChartName"></div>
  </div>
</template>

<script>
import create from "../../create";
export default create({
  name: "rectangle",
  methods: {
    updateChart () {
      const optionData = this.deepClone(this.dataChart);
      const option = {
        tooltip: (() => {
          return Object.assign(
            (() => {
              if (this.formatter) {
                return {
                  formatter: name => {
                    return this.formatter(name, this.dataChart);
                  }
                };
              }
              return {};
            })(), {
            textStyle: {
              fontSize: this.option.tipFontSize,
              color: this.option.tipColor,
            }
          });
        })(),
        series: {
          type: 'treemap',
          data: optionData,
          label: {
            textStyle: {
              fontSize: this.option.fontSize,
              color: this.option.color
            }
          }
        }
      };
      this.myChart.resize();
      this.myChart.setOption(option, true);
    }
  }
});

</script>




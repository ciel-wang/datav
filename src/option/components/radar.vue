<!-- 雷达图配置 -->
<template>
  <div>
    <el-form-item label="字体大小">
      <avue-input-number v-model="main.activeOption.radarNameSize"
                         :max="200">
      </avue-input-number>
    </el-form-item>
    <el-form-item label="字体颜色">
      <avue-input-color v-model="main.activeOption.radarNameColor"
                        :max="200">
      </avue-input-color>
    </el-form-item>
    <el-form-item label="区域透明度">
      <avue-slider v-model="main.activeOption.areaOpacity"
                   :max="1"
                   :step="0.1">
      </avue-slider>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'radar',
  inject: ["main"]
}
</script>

<style>
</style>
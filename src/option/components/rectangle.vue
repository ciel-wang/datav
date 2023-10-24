<!-- 矩形图配置 -->
<template>
  <div>
    <el-form-item label="字体大小">
      <avue-input-number v-model="main.activeOption.fontSize"
                         :max="200">
      </avue-input-number>
    </el-form-item>
    <el-form-item label="字体颜色">
      <avue-input-color v-model="main.activeOption.color">
      </avue-input-color>
    </el-form-item>
    <el-form-item label="提示语字体大小">
      <avue-input-number v-model="main.activeOption.tipFontSize">
      </avue-input-number>
    </el-form-item>
    <el-form-item label="提示语字体颜色">
      <avue-input-color v-model="main.activeOption.tipColor">
      </avue-input-color>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'rectangle',
  inject: ["main"]
}
</script>

<style>
</style>
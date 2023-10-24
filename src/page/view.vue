<template>
  <el-scrollbar class="build views">
    <container :id="id"
               :option="option"
               ref="container"></container>
  </el-scrollbar>
</template>
<script>
import init from '@/mixins/'
export default {
  props: {
    option: Object,
    id: [String, Number]
  },
  mixins: [init],
}
</script>
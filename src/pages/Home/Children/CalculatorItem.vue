<template>
  <input type="text" size="21" maxlength="21" v-model="value" readonly="readonly">
</template>

<script>
export default {
  props:['inputShow'],
  computed: {
    value:function () {
      return this.inputShow.value
    }
  },
  methods:{
  },
    
}
</script>

<style>

</style>
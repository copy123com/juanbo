<template>
  <div>
    <input type="text" size="21" maxlength="21" v-model="value" readonly="readonly">
  </div>
</template>

<script>
export default {
  props:['inputShow'],
  components:{
  },
  computed: {
    value:function () {
      return this.inputShow.value
    }
  },
  methods:{
  },
    
}
</script>

<style lang="stylus" scoped>
input{
  border none
  outline none
  width 100%
}
</style>
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

<style>

</style>
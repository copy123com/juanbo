<!-- 后台 -->
<template>
    <div>
        <router-view></router-view>
        <nav-a></nav-a>
    </div>
</template>

<script>
import navA from '@/components/Admin/navA'
export default {
    data () {
        return {

        };
    },

    components: {
        navA
    },

    methods: {}
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">

</style>
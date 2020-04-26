<!-- 前台的底部导航 -->
<template>
    <div class="tabBar">
        <ul class="tabBar-list">
            <li>
                <router-link :to="{name:'Home'}" active-class="active">首页</router-link>
            </li>
            <li>
                <router-link :to="{name:'Answer'}" active-class="active">答疑</router-link>
            </li>
            <li>
                <router-link :to="{name:'Me'}" active-class="active">我的</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {

        };
    },

    components: {},

    methods: {}
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
     .tabBar
        position fixed
        bottom -1px
        width 100%
        height 50px
        background-color #eeeeee;
        padding 0px 10px
        box-sizing border-box
        .tabBar-list{
        height 100%
        display flex;
        justify-content space-between;
        align-items center
        .active{
            color red
        }
        }
</style>
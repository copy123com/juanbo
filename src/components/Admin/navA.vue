<!-- 后台导航组件 -->
<template>
    <div class="box">
        <ul class="nav-list">
            <li class="nav-item">
                <img src="./../../assets/logo.png" alt="">
            </li>
            <li  class="nav-item">
                <router-link :to="{name:'Problem'}" active-class="active">问题管理</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name:'Member'}" active-class="active">人员列表</router-link>
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
    .box
        position fixed
        left 0px
        top 0px
        width 250px
        height 100%
        background-color #6a70ec
        @media screen and (max-width:1070px){
            width 100px
        }
        .nav-list
            display flex
            flex-direction column
            align-items center
            padding 40px 0px
            .nav-item
                padding 5px
                &:nth-of-type(1)
                    border-radius 50%
                    margin-bottom 40px
                    padding 0px
                    @media screen and (max-width:1070px){
                        margin-bottom 20px
                    }
                img 
                    width 100px
                    height 100px
                    border-radius 50%
                a
                    color #ffffff
                    display block
                    width 200px
                    line-height 40px
                    border-radius 6px
                    text-align center
                    color #ffffff
                    font-size 16px
                    @media screen and (max-width:1070px){
                        width 90px
                        font-size 13px
                    }
                .active
                    background-color #eeeeee
                    color #333
</style>
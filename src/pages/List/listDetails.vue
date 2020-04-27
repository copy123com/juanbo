<template>
<div>
  <header class="header">
    <a-icon type="left" class="iLeft" @click="back" />
      <h3 class="tab">二十年后再相会 Meet in Twenty Years</h3>
  </header>
  <div class="listDetailsBox">
    <p>
      High school is a very important stage for every Chinese student, because they will study and fight for their future together. When the college entrance exam is over, it means the end of this stage. Some may go to college and some may choose to work. No matter what the choice they make, they need to be separated and begin the different chapter of life. My classmates decided to make a great appointment. We would meet in the school in twenty years. 
    </p>
    <p>
    At that time, we could see the change of the school and talk about our school time. Though we would soon to be apart, we looked forward to the future meeting and wouldn’t feel sad. Thinking about the unknown future, we were excited and scared, but we believed that we could get over and became the better ones.
  </p>
  </div>
</div>
</template>

<script>
export default {
  methods:{
     back(){
      this.$router.back();
    }
  }
}
</script>

<style lang="stylus" scoped>
.header{
  display flex
  align-items center
  height 2.346667rem
  .tab{
  text-align center
  color #000
  line-height 2.346667rem
  flex 1
  padding-right 17px
  margin-top 10px
  }
  .iLeft{
    color #000
    font-size 16px
    
  }
}
.listDetailsBox{
  padding: 15px;
}

p{
  text-indent: 2em;
}
</style>
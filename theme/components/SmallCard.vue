<template>
  <saber-link
    :to="url"
    class="small-card"
    :style="styling">
      <h3 class="h2">{{ title }}</h3>
      <slink :isLink="false" linkColor="#fff" >See more</slink>
  </saber-link>
</template>

<script>
import slink from '@/theme/components/slink.vue'  
export default {
  props: ['url', 'title', 'bgColor', 'icon'],
  components: {
    slink
  },
  computed: {
    styling() {
      return {
        // backgroundColor: this.bgColor,
        backgroundImage: 'url(' + require('@/assets/images/' + this.icon) + ')'
      }
    }
  },
}
</script>

<style lang="stylus">
  .small-card
    display flex
    flex-direction column
    padding-left 2.5rem
    padding-bottom 2rem
    padding-right 2.5rem
    border-radius 3px
    overflow hidden
    align-items flex-start
    background-position 50% 50%
    background-repeat no-repeat
    text-decoration none
    background-color #FAFAFA
    border 2px solid #F1F1F2
    border-radius 3px
    background-size cover
    
    &:before
      display none
      
    &:hover .link:before
      height 100%
      width calc(100% + 0.5em)

    h3
      margin-top auto
      font-size 30px
      line-height 42px
      margin-bottom 0

</style>

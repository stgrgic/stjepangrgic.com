<template>
  <saber-link :to="url" class="project-card" :style="styleObject">
    <simg :name="bgImage" class="bgImage" />
    <div class="info">
      <h3 class="card-title">{{title}}</h3>
      <p class="description">{{description}}</p>
      <slink>{{linkText}}</slink>
    </div>
    <div class="projectImage">
      <simg :name="projectImage"  />
    </div>
  </saber-link>
</template>

<script>
import slink from '@/theme/components/slink.vue'
import simg from '@/theme/components/simg.vue'

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    bgImage: {
      type: String,
      required: true
    },
    projectImage: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: false,
      default: "Read the case study"
    },
    underlinColor: {
      type: String,
      required: false,
      default: '#FFDB17'
    },
    textColor: {
      type: String,
      required: false,
      default: '#fff'
    }
  },
  components: {
    slink, simg
  },
  computed: {
    styleObject: function () {
      return {
        '--underlineColor': this.underlinColor,
        '--textColor': this.textColor
      }
    }
  }
}
</script>

<style lang="stylus" >
.project-card
  position relative
  display flex
  overflow hidden
  margin-bottom 1rem
  border-radius 2px
  &:after
    content ""
    display block
    width 100%
    height 100%
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    box-shadow: inset 0 0 0 2px rgba(0,0,0,0.05);

  .info
    position absolute
    bottom 3.5rem
    left 5.5rem
    z-index 9
    
    h3,
    p
      color: var(--textColor);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    p
      margin-bottom 2rem
    .link
      color var(--textColor)
      margin-top 2rem
      // display inline-block
  .card-title
    font-size 4rem
    line-height 1
    max-width 370px
  .projectImage
    position absolute
    right -20px
    top 0
    width 100%
    transition transform 0.15s ease

  &:hover
    .projectImage
      transform translateX(-20px)
    .link:before
      height 100%
      width calc(100% + 0.5em)

</style>

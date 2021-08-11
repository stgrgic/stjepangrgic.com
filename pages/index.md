---
layout: page
title: Hi to you! 👋 
subtitle: My name is Stjepan.
smallImage: desk-illustration.png
---

**I am a curious human being** exploring myself and the world through art and travel. By challenging myself to draw, [take photos](/photography), [read](/book-list), do something different every day, I am trying to grow as a person. If you’re curious, read [my story](/my-story) or find out what I am doing [now](/now).

**I’m a digital product designer** with over six years of experience working in both startups and advertising agencies. I’ve been fortunate enough to work with great companies and greater people. I shaped products and helped companies grow. Check out [my work](/work).

<section class="projects grid-width">
  <div class="title-wrap">
    <h2 class="h3">Featured projects</h2>
    <saber-link to="/work">See all</saber-link>
  </div>
  <ProjectCard
    url="/work/agrivi"
    title="Agrivi"
    right="113"
    description="Farm managment software"
    bgImage="stjepangrgic-agrivi-card-bgImage.jpg"
    projectImage="stjepangrgic-agrivi-card-projectImage.png"
    underlinColor="#5FC21E"/>
  <ProjectCard
    url="/work/share-istria"
    title="Share Istria"
    description="Creative Tourism Campaign"
    bgImage="stjepangrgic-share-istria-card-bgImage.png"
    projectImage="stjepangrgic-share-istria-card-projectImage.png"
    underlinColor="#009FE2"/>
  <ProjectCard
    url="/work/vip-xmass-chat"
    title="Vip Xmas Chat"
    description="Promotional Chat App"
    bgImage="stjepangrgic-vip-chat-card-bgImage.jpg"
    projectImage="stjepangrgic-vip-chat-card-projectImage.png"
    textColor="#000"/>
</section>

<!-- <div class="growth grid-width">
  <h2 class="h3">Growth</h2>
  <div class="growth-grid">
    <SmallCard
      url="/book-list" 
      title="Book list"
      icon="book.svg"/>
    <SmallCard
      url="/fail-list" 
      title="Fail list"
      icon="fail.svg"/>
    <SmallCard
      url="/bucket-list" 
      title="Bucket list"
      icon="bucket.svg"/>
  </div>
</div> -->

<script>
import slink from '@/theme/components/slink.vue'
import simg from '@/theme/components/simg.vue'
import sfigure from '@/theme/components/sfigure.vue'
import ProjectCard from '@/theme/components/ProjectCard.vue'
import SmallCard from '@/theme/components/SmallCard.vue'
import PageHeader from '@/theme/components/PageHeader.vue'

export default {
  components: {
    slink,
    simg,
    sfigure,
    ProjectCard,
    SmallCard,
    PageHeader
  }
}
</script>

<style lang="stylus">
.index
  .small-image
    width 785px
    bottom 0
    right 0
    transform translate(72px, 3.3613445%)
  .content
    padding-top 4rem
    
  .title-wrap
    display: flex
    flex-direction: row
    justify-content: space-between;
    align-items: baseline
    a
      line-height: 1.2
  .h3
    margin-bottom: 1.5rem;
    margin-top: 4rem;
    font-weight: 800;
    font-size: 2rem;

  .growth-grid
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-column-gap 1.6161616%
    height: 272px
    margin-bottom: 5rem;
    @media screen and (max-width 700px) {
      display: flex
      flex-direction: column
      height auto
      .small-card {
        height 272px
        margin-bottom: 1rem
      }
    }
</style>

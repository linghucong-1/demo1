<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin.js'

  import Epub from 'epubjs'
  global.epub = Epub
  export default{
    mixins:[ebookMixin],
    methods:{

      prevPage(){
        if(this.rendition){
          this.rendition.prev()
          this.hideTitleAndMenu()
        }
      },
      nextPage(){
        if(this.rendition){
          this.rendition.next()
        }
      },
      toggleTitleAndMenu(){
        if(this.setSettingVisible){
          this.setSettingVisible(-1)
        }
        //this.$store.dispatch('setMenuVisible',!this.menuVisible)
        this.setMenuVisible(!this.menuVisible)
      },
      hideTitleAndMenu(){
        //this.$store.dispatch('setMenuVisible',false)
        this.setMenuVisible(false)
        this.setSettingVisible(-1)
      },
      initEpub (){
        const url = "http://127.0.0.1:8081/epub/" + this.fileName + '.epub'
        this.book = new Epub(url)
        this.rendition = this.book.renderTo('read',{
          width:innerWidth,
          height:innerHeight,
          method:'default'
        })
        this.rendition.display()
        this.rendition.on('touchstart',event => {
          this.touchstartX = event.changedTouches[0].clientX
          this.touchStartTime = event.timeStamp
        })
        this.rendition.on('touchend',event => {
         const offsetX = event.changedTouches[0].clientX - this.touchstartX
         const time = event.timeStamp - this.touchStartTime
         if(time < 500 && offsetX > 40){
           this.prevPage()
         }else if(time < 500 && offsetX < -40){
           this.nextPage()
         }else{
           this.toggleTitleAndMenu()
         }
         event.preventDefault()
         event.stopPropagation()
        })
      }
    },
    mounted() {
        this.setFileName(this.$route.params
        .fileName.split('|').join('/'))
        .then(() => {
        this.initEpub()
      })

    }
  }
</script>

<style>
</style>

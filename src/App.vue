<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<script>
export default{}
  document.addEventListener('DOMContentLoaded',() => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    html.style.fontSize = fontSize + 'px'
  })
</script>

<style scoped>
@import url("./assets/style/global.css");
.text{
  font-family: 'Days One';
  font-size: px2rem(20);
}
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

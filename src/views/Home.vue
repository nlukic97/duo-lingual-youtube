<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data(){
    return {
      cookieObj: null,
      cookieLang: null
    }
  },
  mounted(){ //nastavlja se
   this.cookieObj = new this.$cookie;
   this.cookieLang = this.cookieObj.read('language');
   if(this.cookieLang){
     this.$router.push('/' + this.cookieLang + '/videos')
   }
  }
}
</script>

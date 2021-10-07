<template>
  <div>
    <AppHeader v-bind:str = "stringSomthing" v-on:renew="renewString"/>
    App {{ str }}
    <button v-on:click="addNum" >{{num}}</button>
  </div>
</template>

<script>

import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  data : function (){
    return {
      str : 'hi',
      num: 1,
      stringSomthing : 'props str'
    }
  },
  methods : {
    addNum : function (){
      this.num = this.num +1;
    },
    renewString : function () {
      this.stringSomthing += 'test  ';
    }
  },
  components : {
    AppHeader
  }
}
</script>

<style scoped>

</style>
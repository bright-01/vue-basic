<template>

  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id : &nbsp;</label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw : &nbsp;</label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>

import axios from 'axios';

export default {
  name: "AppTest",
  data : function (){
    return {
      username : '',
      password : ''
    }
  },
  methods :{
    submitForm : function (){
      // event.preventDefault(); << 기존 바닐라 js나 jquery에서 사용하던 방법 vue에서는 --> v-on:submit.prevent 와 동일
      console.log(this.username);
      console.log(this.password);

      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username : this.username,
        password : this.password
      }

      axios.post(url, data)
      .then(function (response){
        console.log(response);
      })
      .catch(function(err){
        console.log(err)
      })

    }
  }
}
</script>

<style scoped>

</style>
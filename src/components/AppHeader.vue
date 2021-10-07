<template>
  <header>
    <h1>
      HEADER {{str}}
      <br/>
      <button v-on:click = "testButton"> change String</button>
    </h1>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    str : String
  },
  methods : {
    testButton : function (){
      this.$emit('renew');
    }
  }

}
</script>

<style scoped>

</style>

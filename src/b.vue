<!--vue 파일은 html, script, css를 한파일로 관리 하겠다.. 싱글파일 컴포넌트
 template - html , script - javascript ( 인스턴스 옵션 ), style
 기존에 우리가 작성했던 Vue를 보자면
 var appHeader = {
    template : '<div>Header</div>',
    function : {
       addNum : function (){
          this.number = this.number+1;
       }
    }

 }
 이런식으로 작성 했는데 밑에 템플릿으로 정리 할 수 있다
-->
<template>
  <div>Header</div>
</template>

<script>
export default {
  name: "b",
  addNum : function (){
    this.number = this.number+1;
  }
}
</script>

<style scoped>

</style>
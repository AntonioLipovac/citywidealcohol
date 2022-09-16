<template>
 <div class="home">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
 </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import store from "@/store.js"

    export default{
      name:'Home',
      data:function(){
        return{
        store,
      };
    },
      components: {
        HelloWorld
      }
    }
    </script>
  
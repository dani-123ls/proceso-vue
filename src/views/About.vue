<template>
   <header>
    <img class="logo" src="@/assets/logo.png" alt="logo">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link :to="{name:'login'}">  CerrarSesión </router-link>
  </div>
  </header>

  <h1>{{ titulo }}</h1>
</template>

<script>
export default {
  data() {
    return {
      titulo:"Página de Acerca de Vue"
    };
    
  },
}
</script>
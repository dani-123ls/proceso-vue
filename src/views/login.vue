<template>
 <main>
    <img class="logo" src="@/assets/logo.png" alt="logo">
  
  <h1>Inicio de sesión</h1>
  <form action="">
      <input type="text" v-model="usuario">
      <input type="password" v-model="password">
      <button @click.prevent="iniciar" >Iniciar Sesión</button>
  </form>
  <h2 id="aviso">{{error}}</h2>
    
  </main>
   
</template>

<script>
import ClienteService from "@/services/clientes.js";
export default {
    methods:{
        iniciar(){

        ClienteService.validar(this.usuario, this.password);

        this.cliente= ClienteService.obtenerCliente();

        if(this.cliente.nombre){
            this.$router.push({name:"Compras"});
        }else{
            this.error=alert("datos inválidos");
        }
        
        }
    },
    data() {
        return{
            usuario:"",
            password:"",
            cliente:{},
            error:""
        }
    },
}
</script>
<style>
#aviso{
    font-weight: bold;
    color: #db0d0d;
}
</style>
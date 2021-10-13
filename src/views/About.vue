<template>
   <header>
    <img class="logo" src="@/assets/logo.png" alt="logo">
  <div id="nav">
    <router-link to="/">Registrar Compra</router-link> |
    <router-link to="/compras">lista de compras</router-link> |
    <router-link :to="{name: 'login'}">CerrarSesión</router-link> 
  </div>
        <h1>{{titulo}}</h1>
      </header>
      <main>
        <div>
      <h2>Listado de Compras - {{cliente.nombre}}</h2>
      <table border="1">
        <thead>
          <tr>
            <th>CLIENTE</th>
            <th>PRODUCTO</th>
            <th>CANTIDAD</th>
            <th>ENVÍO</th>
            <th>DESCUENTO</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody id="datos_compras">
          <tr v-for="(unaCompra, i) in listaCompras" :key="i">
            <td>{{ unaCompra.cliente }} ({{ unaCompra.documento }})</td>
            <td>
              {{ unaCompra.producto.nombre }} - ${{ unaCompra.producto.precio }}
            </td>
            <td>{{ unaCompra.cantidad }}</td>
            <td>{{ nombresEnvio[unaCompra.envio] }}</td>
            <td>${{ unaCompra.descuento }}</td>
            <td>${{ unaCompra.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!--Aplicar a página para velocidad -->
    <router-link class="boton" :to="{name:'Registro'}">Crear nueva Compra</router-link>
  
    </main>
<p></p>
</template>

<script>
import CompraService from "@/services/compras.js";
import ClienteService from "@/services/clientes.js";

export default {
  mounted() {
    this.listaCompras=CompraService.obtenerTodos();
    this.cliente= ClienteService.obtenerCliente();

        if(!this.cliente.nombre){//no tiene permisos, entonces salgase
           this.$router.push({name:"login"});//regresese
        }
  },
  
  data() {
    return {
      titulo:"Página de Acerca de Vue",
      listaCompras:[],
      nombresEnvio: ["Express", "Normal"],
      cliente:{}
    };
    
  },
}
</script>

<style scoped>
  .boton{
    color: white;
    background-color: tomato;
    padding: 1rem;
    text-decoration: none;
    
  }
</style>


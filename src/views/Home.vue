<template>
   <header>
        <h1>{{titulo}}</h1>
    </header>
    <main>
        <div><!--crear secciones-->
            <h2 valor ="Hello Word">Registrar compra</h2>
            <form action="#" id="form_compra">
                <label for="cliente">Cliente</label>
                <input type="text" name="cliente" v-model="compra.cliente"><!--ahí me asocia con lo que escriba en el input -->
                <label for="documento">Documento</label>
                <input type="text" name="documento" v-model="compra.documento">
                <label for="producto">Producto:</label>
                <select name="producto" id="productos" v-model="seleccion">
                    <option value="-1">Seleccione un producto</option>
                    <!--me ahorro el for de función cargar compras-->
                    <option v-for="unProducto, llave in listaProductos" v-bind:key="llave"  v-bind:value="llave">{{unProducto.nombre}} - ${{unProducto.precio}}</option>
                </select>
                <label for="cantidad">Cantidad:</label>
                <input type="number" name="cantidad" v-model="compra.cantidad">
                
                <div>
                    <input type="radio" name="envio" v-model="compra.envio" value="0">Express 
                </div>
                
                <div>
                    <input type="radio" name="envio" v-model="compra.envio" value="1"> Normal
                </div>
                <button type="reset">Limpiar</button>
                <!-- <button onclick="procesarInformacion()" type="button">Agregar Compra</button> -->
                <button @click="procesarInformacion" type="button">Agregar Compra</button><!--los ()los utilizo en la función, si voy a pasarle parametros, sino no -->
                
            </form>
            <!-- <h3>Cliente: {{compra.cliente}}</h3>
            <h3>Documento: {{prueba}}</h3> -->
        </div>
        
        <div>
            <h2 >Listado de Compras</h2>
            <table border="1" >
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
                    <tr v-for="unaCompra, i in listaCompras" :key="i">
                <td>{{unaCompra.cliente}} ({{unaCompra.documento}})</td>
                <td>{{unaCompra.producto.nombre}} - ${{unaCompra.producto.precio}}</td>
                <td>{{unaCompra.cantidad}}</td>
                <td>{{nombresEnvio[unaCompra.envio]}}</td>
                <td>${{unaCompra.descuento}}</td>
                <td>${{unaCompra.total}}</td>
            </tr>
                </tbody>
            </table>
        </div>
        
    </main>
</template>

<script>
// @ is an alias to /src


export default {
    mounted(){//para cargar información tan pronto inicie la página
        let producto1 = {"nombre": "Disco Duro", "precio": 200000};//lo mismo a java o python clave-valor
let producto2 = {"nombre": "Teclado", "precio": 100000};
let producto3 = {"nombre": "Mouse", "precio": 80000};
let producto4 = {"nombre": "Pantalla", "precio": 8000000};
let producto5 = {"nombre": "Memoria USB", "precio": 50000};

this.listaProductos = [producto1, producto2, producto3, producto4, producto5];//cuidado, el this
    
    },
    data(){//regresa un objeto,todo tipo de datos dentro de return
        return{//las represento con un diccionario
            listaProductos:[],
            titulo:"Registro y listado de compras",
            compra:{
                cliente:"",
                documento:"",
                producto:{},
                cantidad:0,//le coloca ese valor a cantidad de manera automática, tan pronto inicio la página
                envio:0,

            },
            seleccion:-1,
            nombresEnvio : ["Express","Normal"],
            valoresEnvio : [20000, 10000],
            listaCompras:[],
        };
    },
    methods:{//atributo
        procesarInformacion(){
             this.compra.total =0;
        this.compra.descuento=0;

         this.compra.producto = this.listaProductos[this.seleccion];

    let subtotal =  this.compra.producto.precio* this.compra.cantidad;
    let valorEnvio=0;
    
    
    if( this.compra.cantidad>10){
         this.compra.descuento = subtotal*0.1;
    }
    
    if(subtotal>5000000) {
        if( this.compra.envio==0){
            
            valorEnvio += this.valoresEnvio[1];//estaría en la posición de normal
            
        } else{
            valorEnvio=0;
        }
         this.compra.descuento += this.valoresEnvio[ this.compra.envio] - valorEnvio;//tener en cuenta, ya que todo inicia en la posición 0
    }else{
        
        valorEnvio = this.valoresEnvio[ this.compra.envio];//proceso con listas
    }
        
    this.compra.total = valorEnvio + subtotal -  this.compra.descuento;//falta el this?
        
    this.listaCompras.push(this.compra);    
        }
    },
  name: 'Home',
  components: {
   
  }
}
</script>

<style scoped>
body{
            padding: 1rem;
        }
        
        #form_compra{
            display: grid;
            grid-template-columns: 6rem 10rem;
            row-gap: 1rem;
        }
        main{
            display: grid;
            grid-template-columns: 4fr 8fr;
            column-gap: 1rem;
        }
        table{
            width: 80%;
            margin:auto;
        }
        
</style>

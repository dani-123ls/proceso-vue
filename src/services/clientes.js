class ClienteService{
    cliente={};
    listado=[];

    constructor(){
        this.listado=[
            {nombre:"Juan", usuario:"juan", password:"123456"},
            {nombre:"María", usuario:"maria", password:"654321"},

        ]
    }
    //método para validar información-inicializa cliente
    validar(usuario, password){
        for (const unCliente of this.listado) {
            if (unCliente.usuario==usuario&&unCliente.password==password) {
                this.cliente=unCliente;
                break;
            }else{
                this.cliente={}
                
            }
        }
    }
    //me devuelve cliente
    obtenerCliente(){
        return this.cliente;
    }

}export default new ClienteService();//si no lo coloco, no lo puedo usar en los demás componetes
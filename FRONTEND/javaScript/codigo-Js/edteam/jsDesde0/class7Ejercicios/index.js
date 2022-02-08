const productos = require('productos');

const USUARIO = {
    nombre: 'io',
    edad: 22,
    deuda: 0
} 
let pedido = []
let costoPedido = 0

const mostarMenu = () => {
    productos.forEach(producto => console.log(`${producto.nombre}\t\t $ ${producto.costo}`))
    /* Otra forma de recorrer los arrays */
    // for(let producto of productos){
    //     console.log(`${producto.nombre}\t\t $ ${producto.costo}`)
    // }
}

const pedirProducto = cod =>{
    if (!cod) return "El codigo de producto no existe intente denuevo"
    const productoEncontrado = productos.find(producto => producto.code === cod)
    if(!productoEncontrado) return "El producto no exite"
    
    pedido.push(productoEncontrado)
    console.log("Su producto ha sido aniadido en la lista");
    return verPedido()
}

const verPedido = () => pedido

const calcularCosto = () => {
    let costo
    for(producto of pedido){
        costo += pedido.costo
    }
    costoPedido = costo
    return costoPedido
}

const finalizarPedido = () =>{
    calcularCosto()
    ususario.deuda = costoPedido

    pedido = []
    costoPedido = 0

    return `${usuario.nombre}, debes pagar\t $:${usuario.deuda} `

}

const pagarPedido = montoEntregado =>{
    if(montoEntregado < ususario.deuda){
        return `Te falta ${usuario.deuda-montoEntregado} mi mai`
    }else if(montoEntregado === usuario.deuda){
        usuario.deuda = 0
        return `Tu pedido ha sido pagado en su totalidad`
    }else{
        usuario.deuda = 0
        return `Tu pedido ha sido pagado y tu cambio ${montoEntregado-usuario.deuda}`
    }
}
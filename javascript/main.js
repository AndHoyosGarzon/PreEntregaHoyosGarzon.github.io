/**
 * 1-crear un algoritmo con un condicional...Loading
 * 2-Crear un algoritmo utilizando un ciclo...loading
 * 3-Armar un simulador interactivo estructura final proyecto integrador...loading 
 * 4-Se puede utilizar funciones, clases y objetos...loading
*/

/**
 * sistema POS que solicita ingresar al usuario un articulo dependiendo la categoria que elija.
 * Este sistema da la bienvenida al usuario y solicita el nombre, despues le pregunta si le gustaria agregar un articulo al catalogo
 * despues que el usuario decide, el mismo tiene que elejir en que categoria le gustaria agregar el producto, agrega el nombre dentro de la categoria
 * y agrega el precio, dicho producto clacula el 19% de impuesto y solicita la cantidad de unidades por producto.
 * AL FINAL ENSEÑA LOS PRODUCTOS INGRESADOS POR CONSOLA CON SU RESPECTIVO DETALLE 
 */


//OBJ tipo class
class ProductObj{
    constructor(nom, prec, inv){
        this.nombre = nom,
        this.precio = prec,
        this.inventario = inv
    }
}

function productos(){
    let cantProductos = parseInt(prompt(`${saludo}, Cuantos productos quieres agregar en esta categoria ?`))
    for( let i = 1; i <= cantProductos; i++){
        let nombreProducto = prompt(`Agrega el nombre del producto # ${i}`)
        let precioProductos = parseInt(prompt(`Agrega el precio de ${nombreProducto}`))
        let inventarioProducto = parseInt(prompt(`Que cantidad llego de ${nombreProducto}`))
        const PRODUCTO_FINAL = new ProductObj(nombreProducto, precioProductos, inventarioProducto)
        console.log(`${PRODUCTO_FINAL.nombre} tiene un precio con impuestos de $ ${PRODUCTO_FINAL.precio * 1.19} su inventario es de ${PRODUCTO_FINAL.inventario} Unidades`) 
    }
}

 
let saludo = prompt(`Bienvenido a mekkatos SOFTWARE ONLINE, me puedes decir tu nombre ?`).toUpperCase()

let eleccion = parseInt(prompt(`${saludo}, Quieres agregar nuevos productos
    1- ACEPTO
    2- SALIR
`))


function elejirCategoria(){
    let categoria = parseInt(prompt(`${saludo}, Por favor elije la categoria donde quieres agregar productos
            1-PANADERIA & SNACKS
            2-LACTEOS & CHARCUTERIA
            3-ABARROTES
            4-ASEO DEL HOGAR
            5-MASCOTAS
            6-OTROS`
            ))

        switch (categoria) {
            case 1:
            case 2:
            case 3: 
            case 4:
            case 5: 
            case 6:
                return productos()    
            default:
                do {
                    categoria = parseInt(prompt(`${saludo}, Quieres seguir en el programa, Selecciona una de las siguientes opciones:
                        1- SI ACEPTO SEGUIR
                        2- NO ACEPTO SEGUIR..!
                    `))
                    if (categoria === 1) {
                        categoria = parseInt(prompt(`${saludo}, Por favor elije la categoria donde quieres agregar productos
                        1-PANADERIA & SNACKS
                        2-LACTEOS & CHARCUTERIA
                        3-ABARROTES
                        4-ASEO DEL HOGAR
                        5-MASCOTAS
                        6-OTROS`
                        )) 
                        return productos()
                    } else if(categoria === 2){
                        console.log(`Ok estas fuera de la APP`)
                    }  
                } while (categoria < 1 || categoria > 2);
                
        }
}

function categoria(){
    switch (eleccion) {
        case  1:
            return elejirCategoria()
        case 2:
            alert(`${saludo}, Esperamos verte pronto...!`)
            break;
        default:
            do {
                eleccion = Number(prompt(`${saludo}, ingresaste opcion invalida, por favor elejir entre las siguientes dos Opciones:
                    1- ACEPTAR
                    2- SALIR
                `))
            } while (eleccion < 1 || eleccion > 2);

            if( eleccion === 1){
               return elejirCategoria()  
            } else if ( eleccion === 2){
                alert('Te veremos en una proxima ocasion')
            }
            break;
    }
}

categoria()
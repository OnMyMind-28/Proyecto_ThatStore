
/*USUARIOS*/

var usuarios = [{
    nombre: "Pedro",
    apellido: "Martinez",
    ordenes: [{
        nombreProducto: "Producto 1",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        cantidad: 2,
        precio: 49.99
    },
        {
            nombreProducto: "Producto 2",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            cantidad: 2,
            precio: 49.99
        }
    ]
},
    {
        nombre: "Juan",
        apellido: "Perez",
        ordenes: [{
            nombreProducto: "Producto 3",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            cantidad: 2,
            precio: 49.99
        },
            {
                nombreProducto: "Producto 2",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad: 2,
                precio: 49.99
            }
        ]
    },
    {
        nombre: "María",
        apellido: "Rodríguez",
        ordenes: [{
            nombreProducto: "Producto 4",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            cantidad: 2,
            precio: 49.99
        },
            {
                nombreProducto: "Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad: 2,
                precio: 49.99
            }
        ]
    }
];


/*---------------------------------Categorias------------------------------*/
var categorias = [
    /***************Tecnologia**************** */
    {
        nombreCategoria: "Tecnologia",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        backgroundColor: `style="background-color: ${colorAleatorio()}"`,
        icono: "fa-solid fa-mobile-screen",
       
       /*Samdung-Marca*/
        empresas: [{
            nombreEmpresa: "Samsung",
            imagen: "img/Tecnologia/Empresas/1.emp.png",
            productos: [{
                nombreProducto: "Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 49.99
            },
                {
                    nombreProducto: "Producto 2",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                {
                    nombreProducto: "Producto 3",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                {
                    nombreProducto: "Producto 4",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                }
            ]
        },
        /*Sony-Marca*/
            {
                nombreEmpresa: "Sony",
                imagen: "img/Tecnologia/Empresas/2.emp.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            /*HP-Marca*/
            {
                nombreEmpresa: "HP",
                imagen: "img/Tecnologia/Empresas/3.emp.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 54.99
                    }
                ]
            },
            /*Apple-Marca*/
            {
                nombreEmpresa: "Apple",
                imagen: "img/Tecnologia/Empresas/4.emp.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 54.99
                    }
                ]
            }
        ]
    },
    /***********Comida-Restaurantes***************/ 
    {
        nombreCategoria: "Restaurantes",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        backgroundColor: `style="background-color: ${colorAleatorio()}"`,
        icono: "fa-solid fa-utensils",
      
        empresas: [{
             /*Little caesars-Res*/ 
            nombreEmpresa: "Little Caesars",
            imagen: "img/Comida/Restaurantes/1.res.png",
            productos: [{
                nombreProducto: "Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 49.99
            },
                {
                    nombreProducto: "Producto 2",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                {
                    nombreProducto: "Producto 3",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                {
                    nombreProducto: "Producto 4",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                }
            ]
        },
         /*KFC-Res*/ 
            {
                nombreEmpresa: "KFC",
                imagen: "img/Comida/Restaurantes/2.res.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            /*Burger king-Res*/ 
            {
                nombreEmpresa: "Burger King",
                imagen: "img/Comida/Restaurantes/3.res.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            /*Taco Bell-Res*/ 
            {
                nombreEmpresa: "Taco Bell",
                imagen: "img/Comida/Restaurantes/4.res.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
    /**********Salud-Farmacias***********/ 
    nombreCategoria: "Farmacias",
    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
    backgroundColor: `style="background-color: ${colorAleatorio()}"`,
    icono: "fa-solid fa-suitcase-medical",
   
    empresas: [{
        /*Siman-Far*/
        nombreEmpresa: "Siman",
        imagen: "img/Salud/Farmacias/1.far.png",
        productos: [{
            nombreProducto: "Producto 1",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            precio: 49.99
        },
            {
                nombreProducto: "Producto 2",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 49.99
            },
            {
                nombreProducto: "Producto 3",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 49.99
            },
            {
                nombreProducto: "Producto 4",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 49.99
            }
        ]
    },
     /*Kielsa-Far*/ 
        {
            nombreEmpresa: "Kielsa",
            imagen: "img/Salud/Farmacias/2.far.png",
            productos: [{
                nombreProducto: "Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 49.99
            },
                {
                    nombreProducto: "Producto 2",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                {
                    nombreProducto: "Producto 3",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                {
                    nombreProducto: "Producto 4",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                }
            ]
        },
         /*Farmacity-Far*/ 
        {
            nombreEmpresa: "Farmacity",
            imagen: "img/Salud/Farmacias/3.far.png",
            productos: [{
                nombreProducto: "Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 49.99
            },
                {
                    nombreProducto: "Producto 2",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                {
                    nombreProducto: "Producto 3",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                {
                    nombreProducto: "Producto 4",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                }
            ]
        },
         /*Farmacias de ahorro-Far*/ 
        {
            nombreEmpresa: "Farmacias del Ahorro",
            imagen: "img/Salud/Farmacias/4.far.png",
            productos: [{
                nombreProducto: "Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 49.99
            },
                {
                    nombreProducto: "Producto 2",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                {
                    nombreProducto: "Producto 3",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                {
                    nombreProducto: "Producto 4",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                }
            ]
        }
    ]
},
    {
        /*******Moda-Tiendas*************/ 
        nombreCategoria: "Moda",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        backgroundColor: `style="background-color: ${colorAleatorio()}"`,
        icono: "fa-solid fa-shirt",
       /*Carrion-Tienda */
        empresas: [{
            nombreEmpresa: "Carrion",
            imagen: "img/Moda/Tiendas/1.shop.png",
            productos: [{
                nombreProducto: "Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 49.99
            },
                {
                    nombreProducto: "Producto 2",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                {
                    nombreProducto: "Producto 3",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                {
                    nombreProducto: "Producto 4",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                }
            ]
        },
        /*Mendels-Tienda */
            {
                nombreEmpresa: "Mendels",
                imagen: "img/Moda/Tiendas/2.shop.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            /*Payless-Tienda */
            {
                nombreEmpresa: "Payless",
                imagen: "img/Moda/Tiendas/3.shop.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
             /*Mango-Tienda */
             {
                nombreEmpresa: "Mango",
                imagen: "img/Moda/Tiendas/4.shop.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    
   
];

//Local Storage Usuarios
var localStorageUsuario = window.localStorage;
var localStorageCat = window.localStorage;

if(localStorageUsuario.getItem('usuarios')==null){
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
} else {
    usuarios = JSON.parse(localStorageUsuario.getItem('usuarios'))
}
if(localStorageCat.getItem('categorias')==null){
    localStorage.setItem('categorias', JSON.stringify(categorias));
} else {
    categorias = JSON.parse(localStorageCat.getItem('categorias'))
}


//LocalStoraged e Categorías

//Genera las categorías
function generarCategorias(valor) {
    document.getElementById('cat').innerHTML = '';
    categorias.forEach(function (categoria,i) {
        document.getElementById('cat').innerHTML +=
            `<div class="col-auto col-sm-auto col-md-auto col-lg-auto col-xl-auto mb-2 me-2">
                    <div class="card" ${categoria.backgroundColor} onclick="modalCat(${i}, ${valor})">                 
                        <div>
                            <i class="${categoria.icono} fa-3x m-4 fa-color"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title fw-bold fs-2 text-light">${categoria.nombreCategoria}</h5>
                            <p class="card-text  fs-2  text-light">${categoria.empresas.length} comercios</p>
                        </div>
                    </div>             
            </div>`;
    })
}

//Genera los usuarios
function generarUsuarios () {
    document.getElementById('selectUsuarios').innerHTML = `<option value="-1" selected>Usuarios</option>`;
    usuarios.forEach(function (usuario, i){
        document.getElementById('selectUsuarios').innerHTML += `<option value="${i}">${usuario.nombre} ${usuario.apellido}</option>`
    })

}
generarUsuarios();

//Cambia el usuario del selectList
function cambiarUsuario (valor){
    if (valor ==-1){
        modalAlerta ();
        document.getElementById ('usuarioActual').innerHTML ='';
        document.getElementById ('saludo').innerHTML = '';
        console.log('No se ha seleccionado un usuario o la lista está vacía')
    }else {
        let usuarioActual = usuarios [valor];
        document.getElementById ('usuarioActual').innerHTML =
         `<a class="fa-solid fa-cart-shopping rounded-pill px-5 shadow-none border-0 mx-3" href="#" 
         role="button" onclick="modalPedidos(${valor})" style="background-color: white;"></a>`;
        document.getElementById ('saludo').innerHTML = `<h1 class="f-family"></h1>
            <h1></h1>`
        console.log('Este es el valor ' + valor);
        generarCategorias(valor);
    }
}

//Genera números aleatorios a partir del número 255
function generarNumero(numero){
    return (Math.random()*numero).toFixed(0);
}

//Envía el número a la función generarNumero() y retorna el color
function colorAleatorio(){
    var colorRGB = `(${generarNumero(255)},${generarNumero(255)},${generarNumero(255)})`;
    return `rgb${colorRGB}`;
}

//Ventana modal de la categoría
function modalCat(i, valor) {
    document.getElementById('modalRow').innerHTML =''
    let cat = categorias[i];
    document.getElementById('modalTitulo').innerHTML= cat.nombreCategoria;
    cat.empresas.forEach(function (empresa,j){
        let productos = '';
        empresa.productos.forEach (function (prod,k){
            productos += `<div class="col-8">
                                           <p>${prod.nombreProducto}</p>
                                        </div>
                                        <div class="col"><button class="btn btn-primary rounded-pill px-4 align-self-end" type="button" onclick="modalNegocios(${i}, ${j}, ${k}, ${valor})">Pedir</button></div>
                                        <div class="row">
                                        <div class="col">
                                            <p class="" id="descripcionProducto">${prod.descripcion}</p>
                                            <p class="text-end" id="precioProducto">${prod.precio}</p>
                                        </div>
                                    </div>`;
        });
        document.getElementById('modalRow').innerHTML += `<div class="col-md-6">
                            <div class="card">
                                <div class="card-body p-0">
                                    <div class="position-relative d-block" id="imagenModal">
                                        <img class="img-fluid rounded-top " src="${empresa.imagen}">
                                        <div class="position-absolute top fa-color text-shadow"></div>
                                    </div>
                                        <hr>
                                    <div class="row p-2" >
                                        ${productos}
                                        </div>                              
                                </div> 
                            </div>
                        </div>`
    })
    $('#modalCat').modal('show');
}

//Ventana modal de los negocios
function modalNegocios (i, j, k, valor) {
    let usuarioActual = usuarios [valor];
    let producto = categorias [i].empresas[j].productos[k];
    document.getElementById('modalNegociosTitulo').innerHTML=producto.nombreProducto;
    document.getElementById('modalDescripcionProducto').innerHTML=producto.descripcion;
    document.getElementById('modalPrecio').innerHTML=producto.precio;
    document.getElementById('inputCantidad').value;
    document.getElementById ('btnOrdenar').innerHTML = `<button type="button" class="btn btn-warning shadow-none rounded-pill " onclick="ordenar(${valor})">Procesar Orden</button>`
    $('#modalNegocios').modal('show');

}

//Función para ordenar un producto
function ordenar (valor) {
    var cant = document.querySelector('.nCantidad').value;
    let usuarioActual = usuarios [valor];
    const pedido = {
        nombreProducto: document.getElementById ('modalNegociosTitulo').innerHTML,
        descripcion:  document.getElementById('modalDescripcionProducto').innerHTML,
        cantidad: document.getElementById('inputCantidad').value,
        precio: document.getElementById('modalPrecio').innerHTML,
    }
    for (let i = 0; i <cant ; i++) {
        usuarioActual.ordenes.push(pedido);
    }
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    console.log(pedido);
    console.log (usuarioActual.ordenes);
    $('#modalNegocios').modal('hide');
}

//Ventana modal de los pedidos
function modalPedidos (valor) {
    console.log (`Usuario: ${valor}`)
    let usuario = usuarios[valor];
    document.getElementById ('modalBody').innerHTML = '';
    document.getElementById ('tituloModalPedidos').innerHTML = `${usuario.nombre}, estas son tus ordenes`;
    usuario.ordenes.forEach (function(ordenes){
        document.getElementById ('modalBody').innerHTML += `<div class="row">
                                <div class="col-12 fw-bold">
                                    ${ordenes.nombreProducto}
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    ${ordenes.descripcion}
                                </div>
                            </div><div class="row">
                                <div class="col-12 text-end">
                                    ${ordenes.precio}
                                </div>
                            </div><hr>`
    })
    $('#modalPedidos').modal('show');
}

//Ventana modal que alerta cuando no se ha seleccionado ningún usuario
function modalAlerta () {
    document.getElementById ('divModalAlerta').innerHTML = `<div class="modal fade show" id="modalAlerta" tabindex="-1" aria-labelledby="modalAlertaLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content rounded-3">
            <div class="modal-header top-thatS">
                <p class="modal-title fs-3 text-light fw-bold" >
                    ¡Hola! Registrate o inicia sesión
                </p>
            </div>
            <div class="modal-body fw-bold fs-5">
                Primero tienes que registrarte o seleccionar un usuario.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn top-thatS rounded-pill text-light" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>`
    $('#modalAlerta').modal('show');
}

//Agrega un nueva categoría
function agregarCat () {
    const cat = {
            nombreCategoria: document.getElementById('nombreCategoria').value,
            descripcion: document.getElementById('descripcionCat').value,
            backgroundColor: `style="background-color: ${colorAleatorio()}"`,
            icono: "fas fa-question",
            empresas: [{
            nombreEmpresa: "Empresa 1",
            imagen: "img/banner.jpg",
            productos: [{
                nombreProducto: "Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 49.99
            },
                {
                    nombreProducto: "Producto 2",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                {
                    nombreProducto: "Producto 3",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                {
                    nombreProducto: "Producto 4",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                }
            ]
        },
            {
                nombreEmpresa: "Empresa 2",
                imagen: "img/banner.jpg",
                productos: [{
                    nombreProducto: "Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen: "img/banner.jpg",
                productos: [{
                    nombreProducto: "Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 49.99
                },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    }
    categorias.push(cat);
    localStorage.setItem('categorias', JSON.stringify(categorias));
    generarCategorias(-1);
    $('#modalAgregar').modal('hide');
}
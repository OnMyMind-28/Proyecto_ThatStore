
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
                urlImagen: "img/Tecnologia/Productos/1.tecno.png",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 10700.00
            },
                {
                    nombreProducto: "Producto 2",
                    urlImagen: "img/Tecnologia/Productos/2.tecno.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 3999.99
                },
                {
                    nombreProducto: "Producto 3",
                    urlImagen: "img/Tecnologia/Productos/3.tecno.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 2500.00
                },
                {
                    nombreProducto: "Producto 4",
                    urlImagen: "img/Tecnologia/Productos/4.tecno.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 579.99
                }
            ]
        },
        /*Sony-Marca*/
            {
                nombreEmpresa: "Sony",
                imagen: "img/Tecnologia/Empresas/2.emp.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    urlImagen: "img/Tecnologia/Productos/5.tecno.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 1500.00
                },
                    {
                        nombreProducto: "Producto 2",
                        urlImagen: "img/Tecnologia/Productos/6.tecno.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 2380.00
                    },
                    {
                        nombreProducto: "Producto 3",
                        urlImagen: "img/Tecnologia/Productos/7.tecno.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 1999.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        urlImagen: "img/Tecnologia/Productos/8.tecno.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 10000.00
                    }
                ]
            },
            /*HP-Marca*/
            {
                nombreEmpresa: "HP",
                imagen: "img/Tecnologia/Empresas/3.emp.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    urlImagen: "img/Tecnologia/Productos/9.tecno.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 4500.00
                },
                    {
                        nombreProducto: "Producto 2",
                        urlImagen: "img/Tecnologia/Productos/10.tecno.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 5800.00
                    },
                    {
                        nombreProducto: "Producto 3",
                        urlImagen: "img/Tecnologia/Productos/11.tecno.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 13500.00
                    },
                    {
                        nombreProducto: "Producto 4",
                        urlImagen: "img/Tecnologia/Productos/12.tecno.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 11750.00
                    },
                    {
                        nombreProducto: "Producto 4",
                        urlImagen: "img/Tecnologia/Productos/13.tecno.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 599.99
                    }
                ]
            },
            /*Apple-Marca*/
            {
                nombreEmpresa: "Apple",
                imagen: "img/Tecnologia/Empresas/4.emp.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    urlImagen: "img/Tecnologia/Productos/14.tecno.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 15450.00
                },
                    {
                        nombreProducto: "Producto 2",
                        urlImagen: "img/Tecnologia/Productos/15.tecno.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 6500.00
                    },
                    {
                        nombreProducto: "Producto 3",
                        urlImagen: "img/Tecnologia/Productos/16.tecno.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 8740.00
                    },
                    {
                        nombreProducto: "Producto 4",
                        urlImagen: "img/Tecnologia/Productos/17.tecno.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 3600.00
                    },
                    {
                        nombreProducto: "Producto 4",
                        urlImagen: "img/Tecnologia/Productos/18.tecno.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 5599.99
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
                urlImagen: "img/Comida/Productos/1.food.png",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 134.99
            },
                {
                    nombreProducto: "Producto 2",
                    urlImagen: "img/Comida/Productos/2.food.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 199.99
                },
                {
                    nombreProducto: "Producto 3",
                    urlImagen: "img/Comida/Productos/3.food.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 149.99
                },
                {
                    nombreProducto: "Producto 4",
                    urlImagen: "img/Comida/Productos/4.food.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 239.99
                }
            ]
        },
         /*KFC-Res*/ 
            {
                nombreEmpresa: "KFC",
                imagen: "img/Comida/Restaurantes/2.res.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    urlImagen: "img/Comida/Productos/5.food.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 249.99
                },
                    {
                        nombreProducto: "Producto 2",
                        urlImagen: "img/Comida/Productos/6.food.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 129.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        urlImagen: "img/Comida/Productos/7.food.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 99.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        urlImagen: "img/Comida/Productos/8.food.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 79.99
                    }
                ]
            },
            /*Burger king-Res*/ 
            {
                nombreEmpresa: "Burger King",
                imagen: "img/Comida/Restaurantes/3.res.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    urlImagen: "img/Comida/Productos/9.food.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 150.00
                },
                    {
                        nombreProducto: "Producto 2",
                        urlImagen: "img/Comida/Productos/10.food.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 99.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        urlImagen: "img/Comida/Productos/11.food.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 59.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        urlImagen: "img/Comida/Productos/12.food.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 209.99
                    }
                ]
            },
            /*Taco Bell-Res*/ 
            {
                nombreEmpresa: "Taco Bell",
                imagen: "img/Comida/Restaurantes/4.res.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    urlImagen: "img/Comida/Productos/13.food.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 199.99
                },
                    {
                        nombreProducto: "Producto 2",
                        urlImagen: "img/Comida/Productos/14.food.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 249.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        urlImagen: "img/Comida/Productos/15.food.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 179.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        urlImagen: "img/Comida/Productos/16.food.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 99.99
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
            urlImagen: "img/Salud/Productos/1.farm.png",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            precio: 69.99
        },
            {
                nombreProducto: "Producto 2",
                urlImagen: "img/Salud/Productos/2.farm.png",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 599.99
            },
            {
                nombreProducto: "Producto 3",
                urlImagen: "img/Salud/Productos/3.farm.png",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 200.00
            },
            {
                nombreProducto: "Producto 4",
                urlImagen: "img/Salud/Productos/4.farm.png",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 429.99
            }
        ]
    },
     /*Kielsa-Far*/ 
        {
            nombreEmpresa: "Kielsa",
            imagen: "img/Salud/Farmacias/2.far.png",
            productos: [{
                nombreProducto: "Producto 1",
                urlImagen: "img/Salud/Productos/5.farm.png",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 189.99
            },
                {
                    nombreProducto: "Producto 2",
                    urlImagen: "img/Salud/Productos/6.farm.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 405.00
                },
                {
                    nombreProducto: "Producto 3",
                    urlImagen: "img/Salud/Productos/7.farm.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 685.00
                },
                {
                    nombreProducto: "Producto 4",
                    urlImagen: "img/Salud/Productos/8.farm.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 108.50
                }
            ]
        },
         /*Farmacity-Far*/ 
        {
            nombreEmpresa: "Farmacity",
            imagen: "img/Salud/Farmacias/3.far.png",
            productos: [{
                nombreProducto: "Producto 1",
                urlImagen: "img/Salud/Productos/9.farm.png",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 1099.99
            },
                {
                    nombreProducto: "Producto 2",
                    urlImagen: "img/Salud/Productos/10.farm.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 542.00
                },
                {
                    nombreProducto: "Producto 3",
                    urlImagen: "img/Salud/Productos/11.farm.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 985.00
                },
                {
                    nombreProducto: "Producto 4",
                    urlImagen: "img/Salud/Productos/12.farm.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 421.00
                }
            ]
        },
         /*Farmacias de ahorro-Far*/ 
        {
            nombreEmpresa: "Farmacias del Ahorro",
            imagen: "img/Salud/Farmacias/4.far.png",
            productos: [{
                nombreProducto: "Producto 1",
                urlImagen: "img/Salud/Productos/13.farm.png",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 348.00
            },
                {
                    nombreProducto: "Producto 2",
                    urlImagen: "img/Salud/Productos/14.farm.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 70.00
                },
                {
                    nombreProducto: "Producto 3",
                    urlImagen: "img/Salud/Productos/15.farm.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 593.00
                },
                {
                    nombreProducto: "Producto 4",
                    urlImagen: "img/Salud/Productos/16.farm.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 254.00
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
                urlImagen: "img/Moda/Productos/1.moda.png",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                precio: 550.00
            },
                {
                    nombreProducto: "Producto 2",
                    urlImagen: "img/Moda/Productos/1.bag.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 1000.00
                },
                {
                    nombreProducto: "Producto 3",
                    urlImagen: "img/Moda/Productos/1.fragancia.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 2500.00
                },
                {
                    nombreProducto: "Producto 4",
                    urlImagen: "img/Moda/Productos/1.men.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 670.00
                }
            ]
        },
        /*Mendels-Tienda */
            {
                nombreEmpresa: "Mendels",
                imagen: "img/Moda/Tiendas/2.shop.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    urlImagen: "img/Moda/Productos/1.woman.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 450.00
                },
                    {
                        nombreProducto: "Producto 2",
                        urlImagen: "img/Moda/Productos/7.woman.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 280.00
                    },
                    {
                        nombreProducto: "Producto 3",
                        urlImagen: "img/Moda/Productos/1.shoes.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 1750.00
                    },
                    {
                        nombreProducto: "Producto 4",
                        urlImagen: "img/Moda/Productos/1.maquillaje.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 2700.00
                    }
                ]
            },
            /*Payless-Tienda */
            {
                nombreEmpresa: "Payless",
                imagen: "img/Moda/Tiendas/3.shop.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    urlImagen: "img/Moda/Productos/2.shoes.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 2450.00
                },
                    {
                        nombreProducto: "Producto 2",
                        urlImagen: "img/Moda/Productos/3.shoes.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 900.00
                    },
                    {
                        nombreProducto: "Producto 3",
                        urlImagen: "img/Moda/Productos/4.shoes.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 1800.00
                    },
                    {
                        nombreProducto: "Producto 4",
                        urlImagen: "img/Moda/Productos/1.shoes.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 3500.00
                    }
                ]
            },
             /*Mango-Tienda */
             {
                nombreEmpresa: "Mango",
                imagen: "img/Moda/Tiendas/4.shop.png",
                productos: [{
                    nombreProducto: "Producto 1",
                    urlImagen: "img/Moda/Productos/2.woman.png",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    precio: 3500.00
                },
                    {
                        nombreProducto: "Producto 2",
                        urlImagen: "img/Moda/Productos/3.woman.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 4200.00
                    },
                    {
                        nombreProducto: "Producto 3",
                        urlImagen: "img/Moda/Productos/4.woman.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 2100.00
                    },
                    {
                        nombreProducto: "Producto 4",
                        urlImagen: "img/Moda/Productos/5.woman.png",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 1760.00
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
            `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 me-2" >
                    <div class="card" ${categoria.backgroundColor} onclick="modalCat(${i}, ${valor})">                 
                    
                    <div>
                            <i class="${categoria.icono} fa-3x m-4 fa-color"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title fw-bold fs-2 text-light">${categoria.nombreCategoria}</h5>
                            <p class="card-text  fs-2  text-light"></p>
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
        document.getElementById ('usuarioActual').innerHTML = `<a class="btn btn-lg btn-primary rounded-pill px-5 shadow-none border-0 mx-3" href="#" 
    role="button" onclick="modalPedidos(${valor})">Ver
    ordenes</a>`;

        document.getElementById ('usuarioActual').innerHTML =
         `<a class="fa-solid fa-cart-shopping rounded-pill px-5 shadow-none border-0 mx-3" href="#" 
         role="button" onclick="modalPedidos(${valor})" style=""></a>`;
        document.getElementById ('saludo').innerHTML = `<h1 class="f-family"></h1>
            <h1></h1>`
        console.log('Este es el valor ' + valor);
        generarCategorias(valor);
    }
}
/*Justamente eso 
document.getElementById ('usuarioActual').innerHTML =
         `<a class="fa-solid fa-cart-shopping rounded-pill px-5 shadow-none border-0 mx-3" href="#" 
         role="button" onclick="modalPedidos(${valor})" style=""></a>`;
*/

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
                                        
                                           <p class="mt-3 mb-3">${prod.nombreProducto}</p>
                                        </div>
                                        <img class="img-fluid" src="${prod.urlImagen}" alt="">

                                        <div class="row">
                                        <div class="col">
                                        <p class="" id="descripcionProducto">${prod.descripcion}</p>
                                            <p class="text-end prod-text" id="precioProducto">Precio: L.${prod.precio}</p>
                                            <div class="col">
                                            <button class="btn btn-warning rounded-pill px-5 align-self-end prod-text" style="color: white;" type="button" onclick="modalNegocios(${i}, ${j}, ${k}, ${valor})">Pedir</button>
                                           <hr class="">
                                            </div>
                                           
                                        </div>
                                    </div>`;
        });
        document.getElementById('modalRow').innerHTML += `<div class="col-md-6">
                            <div class="card">
                                <div class="card-body p-0">
                                    <div class="position-relative d-block" id="imagenModal">
                                        <img class="img-fluid rounded-top " src="${empresa.imagen}">
                                        <div class="position-absolute top fa-color  text-shadow"></div>
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
    document.getElementById ('btnOrdenar').innerHTML = `<button type="button" class="btn btn-warning shadow-none rounded-pill text-light" onclick="ordenar(${valor})">Procesar Orden</button>`
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
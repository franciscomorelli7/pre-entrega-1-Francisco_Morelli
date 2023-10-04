const productos = [
    {
        id: "equipacion01",
        nombre: "Camiseta titular",
        imagen: "https://i.ibb.co/hcCbtWk/prenda01.webp",
        categoria: "equipacion",
        precio:27000,
        descripcion: "Presentamos la nueva Camiseta Nike Titular San Lorenzo para la temporada 2023. Lucite en la cancha con los colores más lindos y llevá tu pasión por el Ciclón a todas partes con este nuevo modelo."
    },
    {
        id: "equipacion02",
        nombre: "Camiseta suplente",
        imagen: "https://i.ibb.co/2gtPG09/prenda02.png",
        categoria: "equipacion",
        precio:23000,
        descripcion: "San Lorenzo y su nueva camiseta. Esta casaca es una representación abstracta del cuervo. Cuenta con unos detalles geométricos de color azul que representan la furia de los cuervos; sobre una base blanca que envuelve a toda la camiseta"
    },
    {
        id: "equipacion03",
        nombre: "Camiseta titular 2019/2020",
        imagen: "https://i.ibb.co/PNGmwHZ/prenda03.jpg",
        categoria: "equipacion",
        precio:15000,
        descripcion: "Para los fanáticos del club, la Camiseta Nike San Lorenzo Stadium Home te dará frescura y ligereza al momento de gritar, saltar o correr. Su confort y transpirabilidad te harán sentir como si estuvieras en la cancha alentándolos."
    },
    {
        id: "equipacion04",
        nombre: "Camiseta alternativa",
        imagen: "https://i.ibb.co/QpHKCv6/prenda04.png",
        categoria: "equipacion",
        precio:20000,
        descripcion: ""
    },
    {
        id: "equipacion05",
        nombre: "Short blanco oficial",
        imagen: "https://i.ibb.co/31qxqbk/prenda05.jpg",
        categoria: "equipacion",
        precio:10000,
        descripcion: "Complementá la pasión por tu equipo del alma con este Short Nike San Lorenzo Stadium construido en poliéster suave y transpirable que te permite libertad de movimientos en todas las jugadas. Su tecnología DriFit absorbe la humedad, te mantiene seco todo el tiempo y te da la ligereza que necesitás para que cada minuto en la cancha des lo mejor de vos incluso en los momentos de mayor tensión."
    },
    {
        id: "equipacion06",
        nombre: "Short negro oficial",
        imagen: "https://i.ibb.co/W00g1tW/prenda06.png",
        categoria: "equipacion",
        precio:10000,
        descripcion: " Completá tu equipo de juego con el Short Nike Dri-fit Park Iii. Una prenda que te acompaña en tus entrenamientos y partidos, mientras te mantiene fiel a la esencia cuerva. Con un diseño total black para combinar con tu remera favorita del equipo y una construcción en poliéster liviano y fresco. Ajustá con el cordón en la cintura y salí a darlo todo por el equipo!"
    },
     
    {
        id: "accesorio01",
        nombre: "Gorra con escudo",
        imagen: "https://i.ibb.co/h9x4zCg/prenda07.webp",
        categoria: "accesorios",
        precio:2000,
        descripcion: "Gorra 6 paneles super bordada y estampada regulable con hebilla metálica y escudo grabado licencia oficial (original) producto con etiqueta de autenticacion y holograma numerado excelente calidad."
    },
    {
        id: "accesorio02",
        nombre: "Piluso con escudo",
        imagen: "https://i.ibb.co/p2v5jMj/prenda08.webp",
        categoria: "accesorios",
        precio:3000,
        descripcion: "Diseño con escudo e inscripción bordados, realizado en algodón 100%, cocido reforzado, ideal para protegerse del sol, y alentar a lo grande! "
    },
    {
        id: "accesorio03",
        nombre: "Gorro de lana",
        imagen: "https://i.ibb.co/kHQn2pz/prenda09.webp",
        categoria: "accesorios",
        precio:2500,
        descripcion: "Gorro lana con puño adaptable a cualquier circunferencia de cabeza, alto de producto 22 a 24 cm aproximadamente."
    },
    
    {
        id: "abrigo01",
        nombre: "Camperon Nike Oficial",
        imagen: "https://i.ibb.co/72CrpF8/prenda10.jpg",
        categoria: "abrigos",
        precio:50000,
        descripcion: "Alentá al Ciclón vayas donde vayas con la nueva campera Nike Squad SDF de San Lorenzo. Diseño de corte estándar. Las prendas con aislamiento de relleno sintético brindan una capa suave y duradera de calor para mantenerte cómodo mientras te encontrás en climas fríos. Este nuevo modelo incluye un cuello alto y capucha con cordón de ajuste. Posee un doble cierre de cremallera, puños con ajuste regulaable de velcro, y bolsillos laterales con cierre. Cintura de ajuste regulable. Presenta el logo Nike y el escudo CASLA estampados."
    },
    {
        id: "abrigo02",
        nombre: "Campera Nike de entrenamiento",
        imagen: "https://i.ibb.co/fx26JVS/prenda11.webp",
        categoria: "abrigos",
        precio:30000,
        descripcion: "Corre con más vigor que nunca con esta chaqueta deportiva de San Lorenzo. Sentirás la grandeza de San Lorenzo pulsando a través de ti y empujándote hacia adelante."
    },
    {
        id: "abrigo03",
        nombre: "Campera nike negra",
        imagen: "https://i.ibb.co/ZN5B5rH/prenda12.jpg",
        categoria: "abrigos",
        precio:20000,
        descripcion: "Corre con más vigor que nunca con esta chaqueta deportiva de San Lorenzo. Sentirás la grandeza de San Lorenzo pulsando a través de ti y empujándote hacia adelante."
    }
]

export const getProducts = () =>{

    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(productos);
        },50);
    })

}
export const getItemById = (id) =>{
    return new Promise ((resolve, reject)=>{

        const item = productos.find((element)=> element.id === id)
        if(item){
            resolve(item)
        } else{
            reject ({
                error: "No tenemos ese producto"
            })
        }
    })
}
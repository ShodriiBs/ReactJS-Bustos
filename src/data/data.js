const products = [
    {
      id: "PROC-0000001",
      name: "AMD Ryzen 5 2600X",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
      price: 240000,
      stock: 13,
      image: "/img/PROC-Ryzen5-2600x.webp",
      category: "procesadores"
    },
    {
      id: "PROC-0000002",
      name: "AMD Ryzen 5 5600",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
      price: 215000,
      stock: 13,
      image: "/img/PROC-Ryzen5-2600x.webp",
      category: "procesadores"
    },
    {
      id: "PROC-0000003",
      name: "AMD Ryzen 7 5700G",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
      price: 285000,
      stock: 13,
      image: "/img/PROC-Ryzen5-2600x.webp",
      category: "procesadores"
    },
    {
      id: "PLACAM-0000001",
      name: "Asrock Z390",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
      price: 110000,
      stock: 15,
      image: "/img/PLACAM-AsrockZ390.webp",
      category: "placas-madre"
    },
    {
      id: "MRAM-0000001",
      name: "Kingston DRR4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
      price: 65000,
      stock: 30,
      image: "/img/MRAM-KingstonDRR4.jpeg",
      category: "memorias-ram"
    },
    {
      id: "PLACAV-0000001",
      name: "Radeon RX 570 8GB",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
      price: 320000,
      stock: 3,
      image: "/img/PLACAV-RadeonRX570.jpg",
      category: "placas-video"
    },
    {
      id: "STORAGE-0000001",
      name: "Disco sólido Adata 240GB",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
      price: 45000,
      stock: 8,
      image: "/img/STORAGE-SDDAdata240.jpg",
      category: "almacenamiento"
    },
    {
      id: "FUENTE-0000001",
      name: "Gigabyte 450W 80 Plus Bronze",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
      price: 145000,
      stock: 6,
      image: "/img/FUENTE-Gigabyte450W.webp",
      category: "fuentes"
    },
  ]

  //Obtener productos
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      //Simulamos un retraso de red
      setTimeout( ()=>{
        resolve(products)
      }, 2000 )
    })
  }
  
  export { getProducts }
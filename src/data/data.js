const products = [
    {
      id: "PROC-0000001",
      name: "Procesador AMD Ryzen 5 2600X",
      description: "Procesador de 6 núcleos y 12 hilos, con una velocidad base de 3.6 GHz y un boost hasta 4.2 GHz. Ideal para multitarea y gaming.",
      price: 240000,
      stock: 13,
      image: "/img/PROC-Ryzen5-2600x.webp",
      category: "procesadores"
    },
    {
      id: "MRAM-0000001",
      name: "Memoria RAM Kingston Fury 3200MHz DRR4",
      description: "Memoria rápida con 3200 MHz, ideal para gaming y multitarea. Compatible con perfiles XMP, que facilita el overclocking.",
      price: 65000,
      stock: 30,
      image: "/img/MRAM-KingstonDDR4.jpeg",
      category: "memorias-ram"
    },
    {
      id: "STORAGE-0000001",
      name: "Disco duro Seagate Skyhawk 1TB",
      description: "HDD diseñado para videovigilancia, con 1 TB de capacidad y resistencia optimizada para operaciones 24/7, ideal para grabación continua.",
      price: 45000,
      stock: 8,
      image: "/img/STORAGE-HDDSeagate1TB.jpg",
      category: "almacenamiento"
    },
    {
      id: "FUENTE-0000001",
      name: "Fuente de alimentación MSI 750W 80 Plus Bronze",
      description: "Fuente con certificación 80 Plus Bronze, de 750W, ideal para PCs de alto rendimiento y gráficos dedicados. Ofrece eficiencia y estabilidad.",
      price: 145000,
      stock: 6,
      image: "/img/FUENTE-MSI750W.jpg",
      category: "fuentes"
    },
    {
      id: "PROC-0000002",
      name: "Procesador AMD Ryzen 7 3700x",
      description: "Con 8 núcleos y 16 hilos, alcanza una velocidad base de 3.6 GHz y boost de 4.4 GHz. Excelente rendimiento en aplicaciones pesadas y juegos.",
      price: 285000,
      stock: 13,
      image: "/img/PROC-Ryzen7-3700x.webp",
      category: "procesadores"
    },
    {
      id: "PLACAM-0000001",
      name: "Placa madre Asrock Z390",
      description: "Placa madre para Intel con chipset Z390, compatible con CPUs de 8ª y 9ª generación. Soporta overclocking, ideal para equipos de alto rendimiento.",
      price: 110000,
      stock: 15,
      image: "/img/PLACAM-AsrockZ390.jpg",
      category: "placas-madre"
    },
    {
      id: "MRAM-0000002",
      name: "Memoria RAM T-Force 3000MHz DRR4",
      description: "Ofrece rendimiento estable a 3000 MHz, perfecta para PC de gama media. Su diseño disipador ayuda a mantener temperaturas óptimas.",
      price: 65000,
      stock: 30,
      image: "/img/MRAM-TForce.jpg",
      category: "memorias-ram"
    },
    {
      id: "PLACAM-0000002",
      name: "Placa madre Gigabyte H470M H",
      description: "Micro-ATX para procesadores Intel de 10ª generación, con chipset H470. Ofrece múltiples puertos USB y ranuras de expansión, perfecta para uso general.",
      price: 110000,
      stock: 15,
      image: "/img/PLACAM-GigabyteH470MH.webp",
      category: "placas-madre"
    },
    {
      id: "PROC-0000003",
      name: "Procesador AMD Ryzen 3 3200g",
      description: "Procesador de 4 núcleos y 4 hilos, con gráficos Radeon Vega 8 integrados. Ofrece 3.6 GHz base y hasta 4.0 GHz en boost, ideal para PCs básicos.",
      price: 215000,
      stock: 13,
      image: "/img/PROC-Ryzen3-3200G.jpeg",
      category: "procesadores"
    },
    {
      id: "MRAM-0000003",
      name: "Memoria RAM HyperX 3200MHz DRR4",
      description: "Con 3200 MHz y soporte para XMP, brinda gran velocidad para juegos y edición. Disipador incorporado para un rendimiento fresco y eficiente.",
      price: 65000,
      stock: 30,
      image: "/img/MRAM-HyperXDDR4.webp",
      category: "memorias-ram"
    },
    {
      id: "PLACAV-0000001",
      name: "Placa de vídeo Radeon RX 570 Phantom Gaming 8GB",
      description: "Gráfica de gama media con 8 GB de VRAM, ideal para gaming en 1080p. Ofrece rendimiento sólido en juegos modernos y soporte para DirectX 12.",
      price: 320000,
      stock: 3,
      image: "/img/PLACAV-RadeonRX570.jpg",
      category: "placas-video"
    },
    {
      id: "MRAM-0000004",
      name: "Memoria RAM Elite 16GB 2800MHz DRR4",
      description: "Módulo de 2800 MHz, pensado para uso general y multitarea. Ofrece un equilibrio entre velocidad y capacidad para mejorar el rendimiento en PCs estándar.",
      price: 65000,
      stock: 30,
      image: "/img/MRAM-Elite.jpg",
      category: "memorias-ram"
    },
    {
      id: "PLACAM-0000003",
      name: "Placa madre ASUS Prime H510M K",
      description: "Placa compacta con chipset H510, diseñada para Intel de 10ª y 11ª generación. Conectividad básica y confiable para PCs de uso cotidiano.",
      price: 110000,
      stock: 15,
      image: "/img/PLACAM-ASUSPrimeH510MK.webp",
      category: "placas-madre"
    },
    {
      id: "PLACAV-0000002",
      name: " Placa de vídeo ASUS GeForce GTX 1650 4GB",
      description: "Tarjeta compacta y eficiente con 4 GB de VRAM, adecuada para juegos en 1080p. Consumo de energía bajo y compatible con G-Sync.",
      price: 320000,
      stock: 3,
      image: "/img/PLACAV-AsusGeforceGTX1650.jpg",
      category: "placas-video"
    },
    {
      id: "STORAGE-0000002",
      name: "Disco sólido Adata 240GB",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
      price: 45000,
      stock: 8,
      image: "/img/STORAGE-SSDAdata240.jpg",
      category: "almacenamiento"
    },
    {
      id: "FUENTE-0000002",
      name: "Fuente de alimentación Gigabyte 450W 80 Plus Bronze",
      description: "Con 450W y certificación 80 Plus Bronze, es adecuada para equipos de gama media, proporcionando eficiencia energética y fiabilidad básica.",
      price: 145000,
      stock: 6,
      image: "/img/FUENTE-Gigabyte450W.webp",
      category: "fuentes"
    },
    {
      id: "STORAGE-0000003",
      name: "Disco sólido Kingston 480GB",
      description: "SSD de 480 GB con velocidad de transferencia mejorada, ideal para almacenar el sistema operativo y aplicaciones con alta rapidez de respuesta.",
      price: 45000,
      stock: 8,
      image: "/img/STORAGE-SSDKingston480.jpg",
      category: "almacenamiento"
    },
    {
      id: "PLACAV-0000003",
      name: "Placa de vídeo Asrock Radeon RX 6600 8GB",
      description: "Con 8 GB de VRAM, brinda gran rendimiento en juegos AAA a 1080p y 1440p. Compatible con DirectX 12 y tecnología de FidelityFX.",
      price: 320000,
      stock: 3,
      image: "/img/PLACAV-RadeonRX6600.jpg",
      category: "placas-video"
    },
    {
      id: "FUENTE-0000003",
      name: "Fuente de alimentación Corsair 650W 80 Plus Bronze",
      description: "Fuente de 650W certificada en 80 Plus Bronze, pensada para PCs de gama media-alta. Equilibrio entre eficiencia, potencia y confiabilidad.",
      price: 145000,
      stock: 6,
      image: "/img/FUENTE-Corsair650W.jpg",
      category: "fuentes"
    },
    {
      id: "STORAGE-0000004",
      name: "Disco sólido M.2 Legend 710 256GB",
      description: "SSD M.2 con 256 GB, diseño compacto y velocidades rápidas de transferencia, excelente opción para laptops y equipos compactos.",
      price: 45000,
      stock: 8,
      image: "/img/STORAGE-SSDm2-Adata256.jpg",
      category: "almacenamiento"
    },
    {
      id: "PLACAV-0000004",
      name: "Placa de vídeo MSI GeForce RTX 3050 6GB",
      description: "Gráfica con 6 GB de VRAM, ideal para gaming en 1080p y experiencias en ray tracing básico. Soporta DLSS para mejor rendimiento.",
      price: 320000,
      stock: 3,
      image: "/img/PLACAV-MSIGeForceRTX3050.webp",
      category: "placas-video"
    }
  ]

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout( ()=>{
        resolve(products)
      }, 2000 )
    })
  }
  
  export { getProducts }
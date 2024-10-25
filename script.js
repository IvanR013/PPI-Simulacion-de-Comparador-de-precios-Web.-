// Productos simulados (datos precargados)

const productosSimulados = {

   
    "iPhone": [
        { tienda: "Amazon", precio: 780000,valoracion: 3, imagen: "Assets/iphoneAmazon.webp", link: "https://www.amazon.com/-/es/Boost-Mobile-Apple-iPhone-128/dp/B0DGLXYYFJ/ref=sr_1_7?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2TD2GLGZGKY8M&dib=eyJ2IjoiMSJ9.oAeWtL_ZPqk9jkYVCT3c4Za5k3u41MhsL6HsX3YQJGDEywOeZPE6YguBepr87izxHFmDAdocPPIhUpikAnorZr-PiHuR_40O3k-sb-8txiyNVfkHXwYCtW72KcNCRNJ1KaoBF5_MtlwWe9T5EEzw_6XH3WJewFCfn6SrdNnNM4SlPJnX9yYw13B9ZPbs91nyYh_djTYexAAijPDMpaUFUsM5yy1P5cpPl_wOmemKCqQ.lMrAfDBEMiM0hhFYx_PD1E0sTDiADvdICpmd6IpwHv8&dib_tag=se&keywords=iphone+15+pro+max&qid=1729887053&sprefix=iphone15+pro+max%2Caps%2C279&sr=8-7" },
        { tienda: "eBay", precio: 795000,valoracion: 2, imagen: "Assets/iphone_eBay.jpg", link: "https://www.ebay.com/itm/276217995756?_skw=iphone+15+pro+max&epid=3062772406&itmmeta=01JB2MDGCQZRRJ5S0MNSDGCTE4&hash=item404fe021ec%3Ag%3A%7EhYAAOSwiMJlc1PB&itmprp=enc%3AAQAJAAAA8HoV3kP08IDx%2BKZ9MfhVJKnJr1p6Lr1Sl5GHUMag4s%2Fy%2BkskNzR9iBEpAtNxz5uGWC6kPtCyyh6c%2FciJ6lDyEdOBqb5uNbtY%2FTl7J2KZlhwYFgLdt5w98X8wBwrB85W77VS23OqpVXFHZlfElcqo%2FYKYCBanh7%2FUgrLUVj4pGCyryrgS3%2BVdPKINluzOa9cus2biYx662XAEhzWsY1nxd%2BHLqKq7suAsGgDmEEB3CEKknWZVdTAIxc0SyY7BTGv%2FkgcpgWVX56HmhfVDuHfYb1E0xLhJlEzEwuxB9pvGKJpAUB%2FYdDsnGSg1EUTBmfw7Wg%3D%3D%7Ctkp%3ABk9SR7qGttTYZA&var=578596161787" },
        { tienda: "MercadoLibre", precio: 2707000,valoracion: 5, imagen: "Assets/IphoneMELI.webp", link: "https://www.mercadolibre.com.ar/apple-iphone-15-pro-max-256-gb-titanio-blanco/p/MLA27172715#polycard_client=search-nordic&wid=MLA1937791480&sid=search&searchVariation=MLA27172715&position=1&search_layout=stack&type=product&tracking_id=c582f753-941d-4281-9bb3-617ebf6455f7" }
    ],


    "Laptop": [
        { tienda: "Amazon", precio: 178000, valoracion: 1,imagen: "Assets/lapamazon.jpg",link: "https://www.amazon.com/-/es/Computadora-port%C3%A1til-almacenamiento-microborde-Microsoft/dp/B0947BJ67M/ref=sr_1_6?dib=eyJ2IjoiMSJ9.-f7qjP0gZVYmhEFKxp7YwJfqhWbRifJb0ZlvQzvrdgM-RL3QCNLA4rRv_N58RO0BKn90KWVq2bSCmScp9SqeU6esQW3UtKwoWy1DPYQLPJNrMOZIV0rwtZt5ig-pmklOuQCeTQiUz02bh5ZoLhU_XBluDRtR1iHWeHDVAS9s1fcAnU1rH3MlnzkFjPsIxt8TM9xT1fvxzPJlby7J4OTs9uQJg4liFw0Sp5KzLUMCVX4._Aom0tq9Yd5KuWGo6CxyvzbQB4CtD0R9lXo4o_XsA_o&dib_tag=se&keywords=laptop&qid=1729885798&sr=8-6" },
        { tienda: "BestBuy", precio: 120000 ,valoracion: 5, imagen: "Assets/bestuy.webp", link: "https://www.bestbuy.com/site/asus-14-fhd-laptop-intel-celeron-n4500-with-4gb-memory-64gb-emmc-star-black/6568803.p?skuId=6568803" },
        { tienda: "eBay", precio:476000 ,valoracion: 3, imagen: "Assets/ebaylaptop.webp", link: "https://www.ebay.com/itm/335333304416?var=544912129470" },
        { tienda: "MercadoLibre", precio: 348999,valoracion: 2, imagen: "Assets/lapMELI.webp", link: "https://www.mercadolibre.com.ar/notebook-lenovo-ideapad-1-4gb-128gb-14-intel-celeron-w11-color-plateado/p/MLA29590978?pdp_filters=item_id:MLA1852373098#is_advertising=true&searchVariation=MLA29590978&position=1&search_layout=stack&type=pad&tracking_id=ef01cced-7e35-4fc1-bcaa-e766338b0f90&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=YWQwYTk0MTQtOGIyMi00YTAyLThiMDYtYjI4ZDgxNzlmYjky" }
    ]



};



// Función para simular la búsqueda de productos

function simularBusqueda() {
    
    const productoBuscado = document.getElementById('producto').value;
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores

    if (productoBuscado in productosSimulados) {
        
        // Inicializar variables para el precio más bajo
        let precioMasBajo = productosSimulados[productoBuscado][0].precio;
        let tiendaMasBarata = productosSimulados[productoBuscado][0].tienda;
        let imagenProducto = productosSimulados[productoBuscado][0].imagen;
        let linkProducto = productosSimulados[productoBuscado][0].link;
        let valoracionMasAlta = productosSimulados[productoBuscado][0].valoracion;

        // Primer bucle: Encontrar el producto con el precio más bajo
        productosSimulados[productoBuscado].forEach(producto => {
           
            if (producto.precio <= precioMasBajo) {
          
                precioMasBajo = producto.precio;
                tiendaMasBarata = producto.tienda;
                imagenProducto = producto.imagen;
                linkProducto = producto.link;
                valoracionMasAlta = producto.valoracion;
            }
        });

        // Segundo bucle: Crear tarjetas normales, excluyendo el producto con el precio más bajo
   
        productosSimulados[productoBuscado].forEach(producto => {
   
            if (!(producto.precio === precioMasBajo && producto.tienda === tiendaMasBarata)) {
   
                const card = document.createElement('div');
   
                card.classList.add('card');
   
                card.innerHTML = `
   
                <a href="${producto.link}" target="_blank">
   
                <img src="${producto.imagen}" alt="${producto.tienda}">
   
                </a>
   
                <h3>${producto.tienda}</h3>
   
                <p class="price">$${producto.precio}</p>
   
                <p>Valoración: ${producto.valoracion} Estrellas</p>
   
                <div>${generarEstrellas(producto.valoracion)}</div>`;
   
                    resultadosDiv.appendChild(card);
   
            }
        });

        // Crear tarjeta para el producto de precio más bajo
   
        const tarjetaPrecioBajo = document.createElement('div');
   
        tarjetaPrecioBajo.classList.add('cardLowPrice');
   
        tarjetaPrecioBajo.innerHTML = `
   
        <a href="${linkProducto}" target="_blank">
                <img src="${imagenProducto}" alt="${tiendaMasBarata}">
            </a>
            <h3>Precio más bajo: ${tiendaMasBarata}</h3>
            <p class="price">Precio: $${precioMasBajo}</p>
            <p>Valoración: ${valoracionMasAlta} Estrellas</p>
            <div>${generarEstrellas(valoracionMasAlta)}</div>`;
        
        resultadosDiv.appendChild(tarjetaPrecioBajo);
   
    } else {
       
        resultadosDiv.innerHTML = `<p>No se encontraron resultados para "${productoBuscado}".</p>`;
   
    }
}


// Función para generar estrellas en base a la valoración
function generarEstrellas(valoracion) {
   
    let estrellas = '';
   
    for (let star = 0; star < 5; star++) { // Asumiendo una valoración de 5 estrellas
   
        if (star < valoracion) {
   
            estrellas += '★'; // Estrella llena
   
        } else {
   
            estrellas += '☆'; // Estrella vacía
        }
    }
   
    return estrellas; // Devuelve las estrellas generadas
}

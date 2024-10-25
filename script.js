// Productos simulados con datos estáticos predefinidos (Los nombres de los arrays serían las búsquedas simuladas).

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
    ],

    "PlayStation 5":[
        { tienda: "Amazon", precio: 542000, valoracion: 1,imagen: "Assets/ps5_amazon.jpg",link: "https://www.amazon.com/-/es/PlayStation%C2%AE5-console-slim-SPORTS-College-Football/dp/B0D9JLP9N8/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1W4NXZWR4TH6T&dib=eyJ2IjoiMSJ9.8d7qTXJ3Plr94uTfOIz-FfK_yKomwtymNChct9W-q3nifAV11wUq4ZFNKX8IEMynZnnC-ykCacZIl2rdXlym7_4Vn0B6CarPJrNLo3tOX2Q79FlMqQZAyGrGhG6RRvO7YfSBfL_CfWwIhaLbOrcrd6TNx_ekVvkZIdoDmCWq7DwAWfmOEV4CCEc-bZriflltgwWQ9rA4ki33kgWWM0PmDjHcOrBia48ZslrM0PbnrC8.vGi-xgmLeZWQiR3B2paBPBX3Ep5o0wVTCqeCkOoT-M4&dib_tag=se&keywords=PlayStation+5&qid=1729891220&sprefix=playstation+5%2Caps%2C441&sr=8-1" },
        { tienda: "BestBuy", precio: 450000 ,valoracion: 5, imagen: "Assets/ps5_bb.webp", link: "https://www.bestbuy.com/site/sony-playstation-5-slim-console-digital-edition-white/6566040.p?skuId=6566040" },
        { tienda: "eBay", precio: 143000 ,valoracion: 3, imagen: "Assets/ps5_bb.webp", link: "https://www.ebay.com/itm/335620589902?_skw=playstation5&itmmeta=01JB2RZWA53XXM2HJAZ3QH3G93&hash=item4e248bc94e:g:3x0AAOSwegdnDntT&itmprp=enc%3AAQAJAAAA8HoV3kP08IDx%2BKZ9MfhVJKmGr3dLIFaoAkm5m1KCY2Q1hfl2sEktzh%2FDu7MqEFWwWn51%2BlSXpUxZY2QJMeBva7ahtQtNK6Jehon3vv8RsZM87r3ARzrGC1E6EDvGoZ%2BmM3n9QkUdDmb0At64W6QTE1RHrB6%2B32iL9g1tJtNuFBH1W0xn8JT%2FSWT1FrC9XkvxCRYOoz3xmmMwSka1NCndamqY6rhdg6mOOcQQN5goEHSUdbhU7DTTeY6BstjN1bw79dNqgeN7DM7tTmsZMLmrVMidXc1%2FiI3zqrCKRyWEw%2BcYlkNcEwcVxuaUSvo3kKz0%2FA%3D%3D%7Ctkp%3ABk9SR5TF_9jYZA" },
        { tienda: "MercadoLibre", precio: 1650000,valoracion: 2, imagen: "Assets/ps5_meli.webp", link: "https://www.mercadolibre.com.ar/sony-playstation-5-slim-1tb-extra-dualsense-controller-color-blanco-2023/p/MLA29725752#polycard_client=search-nordic&wid=MLA1433434665&sid=search&searchVariation=MLA29725752&position=16&search_layout=stack&type=product&tracking_id=90e2caef-c8c3-4c2e-b6f7-1bb173899d9b" }
    ],

    "Tv QLED 4K":[
        { tienda: "Amazon", precio: 447000, valoracion: 1,imagen: "Assets/tv_amazon.webp",link: "https://www.amazon.com/-/es/pulgadas-seguimiento-acelerador-movimiento-incorporado/dp/B0CVRZKW9M/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3D04OTMTVGIUJ&dib=eyJ2IjoiMSJ9.2NrbNoMZNYbpC9nXsCRmH-LAB2f_VbYixEfE3LxIsLEBTPa30H17cQD9dSB2U4SxRZfvwZCRhCSxqRmaVj1m7fHEApFITLb6b_EVTXPKxfFeGT-uutWbX9ZC7quDfC8F9PZhFBTYz6zwox12tWsTLhfH1cz9O965pHeLM5ORa9ZdKeTzQXxC2sWYA3XvOAZFNGRUPp0u4MXhXjQ80KcYGMNXSZkm0dcOFWOhNUfcwg8.5j_ON7pre5eHhom09_F0fOoicNfGU9nL0gKIFMkCt6U&dib_tag=se&keywords=Samsung%2BQLED%2B4K&qid=1729891605&sprefix=playstation%2B5%2Caps%2C633&sr=8-1&th=1" },
        { tienda: "BestBuy", precio: 1500000 ,valoracion: 5, imagen: "Assets/tv_bb.webp", link: "https://www.bestbuy.com/site/samsung-55-class-ls03d-the-frame-series-qled-4k-with-anti-reflection-and-slim-fit-wall-mount-included-2024/6576585.p?skuId=6576585" },
        { tienda: "eBay", precio: 1230000 ,valoracion: 3, imagen: "Assets/tv_ebay.webp", link: "https://www.ebay.com/itm/226311009665?_skw=Samsung+QLED+4K&itmmeta=01JB2S5WJ7CZ8MJZ0HQK79HDBG&hash=item34b12ff581:g:H0IAAOSwzvxmyU70&itmprp=enc%3AAQAJAAAA0HoV3kP08IDx%2BKZ9MfhVJKnMQ1JF%2Buz2Gu6S6mojqiM5fv2IDShoE4Z3Rn7ji0BLdKZA7nnFJa5%2BoTicjYdWs%2BDFNwZnT0S7t4u%2BgUb0r4nIwViNghqPrV0314XSPbPWTNPsD67SstiTupDCPd5uJSu%2BQ6tZ4EJDF9%2FBdyX8tVox5JQK%2FPBxY9iIfbuv4g8iNZxAkqfHA1f3dD94qciYwUqzzQhwVXYR37PAduFWgDayd1UyrqxSJOEaXj0HQOcCZQyP36pZz7DFBttYcV4woRw%3D%7Ctkp%3ABk9SR5jJl9nYZA" },
        { tienda: "MercadoLibre", precio: 2250000,valoracion: 2, imagen: "Assets/tv_meli.webp", link: "https://www.mercadolibre.com.ar/smart-tv-samsung-gaming-50-neo-qled-4k-qn90c/p/MLA28619210#polycard_client=search-nordic&wid=MLA1592108396&sid=search&searchVariation=MLA28619210&position=3&search_layout=stack&type=product&tracking_id=aa8fe5f6-6087-45e0-b6f3-b1ff480f59b1" }
    ]

};



// Función para simular el Web-Scrapping de productos

function simularBusqueda() {
    
    const productoBuscado = document.getElementById('producto').value;
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores

    if (productoBuscado in productosSimulados) {
        
        // Éstas variables guardan la info de los productos con precio más bajo

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

        // Segundo bucle: Crear tarjetas normales, sacando el producto con el precio más bajo
   
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

        // Se crea la tarjeta para el producto con precio más bajo
   
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
   
    for (let star = 0; star < 5; star++) { // Asumiendo una valoración máxima de 5 estrellas
   
        if (star < valoracion) {
   
            estrellas += '★';
   
        } else {
   
            estrellas += '☆'; 
        }
    }
   
    return estrellas; // Como las estrellas son un str, las tengo que devolver para que se muestren en el HTML.
}

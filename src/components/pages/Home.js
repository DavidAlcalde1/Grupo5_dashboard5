import MenuHeader from "../MenuHeader";

export default function Home() {
  return (
    <div>
        <div>
            <MenuHeader/>
        </div>
        <div className="contenedorWa">
            <a
            className="btnWa"
            target="_blank" // Cambiado "tarjet" a "target"
            // onClick debe manejarse de manera diferente en React
            href="https://api.whatsapp.com/send?phone=51946559236&text=Estoy%20interesado%20en%20sus%20productos."
            >
            <i className="fab fa-whatsapp my-float"></i>
            </a>
        </div>
        <main>
            <section className="section-products">
            <div className="product-home">
                <img className="sport-home" src="/images/sport-home.jpg" alt="Sport" />
                <div className="caption">
                <a className="categoria" id="sport" href="productsCategory/1">
                    <h1>SPORT</h1>
                </a>
                </div>
            </div>

            <div className="product-home">
                <img className="cassual-home" src="/images/cassual-home.jpg" alt="Casual" />
                <div className="caption">
                <a className="categoria" id="casual" href="productsCategory/2">
                    <h1>CASUAL</h1>
                </a>
                </div>
            </div>

            <div className="product-home">
                <img className="formal-home" src="/images/formal-home.jpg" alt="Formal" />
                <div className="caption">
                <a className="categoria" id="formal" href="productsCategory/3">
                    <h1>FORMAL</h1>
                </a>
                </div>
            </div>
            </section>

            <section className="section-collection">
            <div className="new-collection">
                <img className="img-new-collection" src="/images/new-collection-home.jpg" alt="New Collection" />
                <div className="description">
                <h1>TREND BOUTIQUE</h1>
                <h2>New Collection</h2>
                <div className="text-description">
                    <p>Inspirado en las nuevas tendencias</p>
                    <p>de la moda, reinventándonos siempre.</p>
                </div>
                <div className="conoce-mas">
                    <a href="products">CATÁLOGO COMPLETO</a>
                </div>
                </div>
            </div>
            </section>
        </main>
    </div>
  );
}


// import MenuHeader from "../MenuHeader";
// export default function Home() {
//     return <div>
//         <div>
//             <MenuHeader/>
//         </div>
//         <body>
            
//             <div class="contenedorWa">
//                 <a class="btnWa" tarjet="_blank" onclick="gtag_report_conversion_wa();" href="https://api.whatsapp.com/send?phone=51946559236&text=Estoy%20interesado%20en%20sus%20productos.">
//                     <i class="fab fa-whatsapp my-float"></i>
//                 </a>
//             </div>



//             <main>

//                 <section class="section-products">

//                     <div class="product-home">
//                         <img class="sport-home" src="/images/sport-home.jpg"/>
//                             <div class="caption">

//                                 <a class="categoria" id="sport" href="productsCategory/1" ><h1>SPORT</h1></a>
//                             </div>
//                     </div>


//                     <div class="product-home">
//                         <img class="cassual-home" src="/images/cassual-home.jpg"/>
//                             <div class="caption">

//                                 <a class="categoria" id="casual" href="productsCategory/2" ><h1>CASSUAL</h1></a>
//                             </div>
//                     </div>

//                     <div class="product-home">
//                         <img class="formal-home" src="/images/formal-home.jpg"/>
//                             <div class="caption">

//                                 <a class="categoria" id="formal" href="productsCategory/3" ><h1>FORMAL</h1></a>
//                             </div>
//                     </div>

//                 </section>

//                 <section class="section-collection">
//                     <div class="new-collection">
//                         <img class="img-new-collection" src="/images/new-collection-home.jpg"/>
//                             <div class="description">
//                                 <h1>TREND BOUTIQUE</h1>
//                                 <h2>New Collection</h2>
//                                 <div class="text-description">
//                                     <p>Inspirado en las nuevas tendencias </p>
//                                     <p>de la moda, reinventándonos siempre.</p>
//                                 </div>
//                                 <div class="conoce-mas">
//                                     <a href="products">CATÁLOGO COMPLETO</a>
//                                 </div>
//                             </div>
//                     </div>
//                 </section>
//             </main>

//         </body>


//     </div>
// };
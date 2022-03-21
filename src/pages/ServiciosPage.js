import '../styles/components/pages/ServiciosPage.css'

const ServiciosPage = (props) => {
    return (

        <main className="holder">
            <h2>Servicios</h2>
            <div className="servicios">
                <img src="img/servicios/aereo.jpg" alt="" />
                <div className="informacion">
                    <h4>Transporte Aereo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum saepe voluptates eos earum animi tempora cum? A est excepturi magni, ut sit voluptas debitis repellendus voluptatum culpa earum totam minima!</p>
                </div>
            </div>

            <div className="servicios">
                <img src="img/servicios/terrestre.jpg" alt="" />
                <div className="informacion">
                    <h4>Transporte Terrestre</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum saepe voluptates eos earum animi tempora cum? A est excepturi magni, ut sit voluptas debitis repellendus voluptatum culpa earum totam minima!</p>
                </div>
            </div>

            <div className="servicios">
                <img src="img/servicios/maritimo.jpg" alt="" />
                <div className="informacion">
                    <h4>Transporte Maritimo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum saepe voluptates eos earum animi tempora cum? A est excepturi magni, ut sit voluptas debitis repellendus voluptatum culpa earum totam minima!</p>
                </div>
            </div>

            <div className="servicios ">
                <img src="img/servicios/ferroviario.jpg" alt="" />
                <div className="informacion">
                    <h4>Transporte Ferroviario</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum saepe voluptates eos earum animi tempora cum? A est excepturi magni, ut sit voluptas debitis repellendus voluptatum culpa earum totam minima!</p>
                </div>
            </div>

        </main>
    );
}
export default ServiciosPage;
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="avion" />

            </div>
            <div className="columnas">
                <div className="bienvenidos izquierda">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, quod dolore optio
                        eligendi eos excepturi porro vero consequuntur. Autem nesciunt suscipit ea eum aliquid nemo. Dicta eaque vitae asperiores illum.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus vero repudiandae sunt non illo
                        excepturi porro velit ipsa quaerat voluptatibus molestias quibusdam aut, ad commodi, eligendi harum debitis. Corporis!
                    </p>

                </div>

                <div className="testimonios derecha">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Exelente</span>
                        <span className="autor"> German Murua - Jugador de E-sport profesional</span>
                    </div>

                </div>
            </div>

        </main>

    );

}

export default HomePage
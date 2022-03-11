const GaleriaPage = (props) => {
    return (
        <main className="holder">
            <h2 className=" fotosvehiculos">Fotos de nuestros vehiculos</h2>
            <div className="fotos">
                <div className="foto"><img src="img/galeria/img01.jpg" alt=""/></div>
                <div className="foto"><img src="img/galeria/img02.jpg" alt=""/></div>
                <div className="foto"><img src="img/galeria/img03.jpg" alt=""/></div>

            </div>

            <div className="fotos">
                <div className="foto"><img src="img/galeria/img04.jpg" alt=""/></div>
                <div className="foto"><img src="img/galeria/img05.jpg" alt=""/></div>
                <div className="foto"><img src="img/galeria/img06.jpg" alt=""/></div>

            </div>
        </main>
    );
}
export default GaleriaPage
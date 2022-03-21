import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna izquierda">
                <h2>Contacto</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" />
                    </p>

                    <p>
                        <label for="">Email</label>
                        <input type="text" />
                    </p>

                    <p>
                        <label for="">Telefono</label>
                        <input type="text" />
                    </p>

                    <p>
                        <label for="comentario">Comentario</label>
                        <textarea name="" id="comentario" cols="30" rows="10"></textarea>
                    </p>

                    <p className="acciones">
                        <input type="submit" value="enviar" />
                    </p>
                </form>
            </div>

            <div className="columna derecha">
                <h2>Otras vias de contacto</h2>
                <p>Tambien se puede comunicar con nosotros</p>
                <ul>
                    <li>Telefono:2134-4564</li>
                    <li>Email:</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Discord:</li>
                </ul>


            </div>


        </main>

    );

}

export default ContactoPage
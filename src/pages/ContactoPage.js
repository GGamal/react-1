const ContactoPage = (props) => {
    return (
        <main class="holder">
            <div class="columna izquierda">
                <h2>Contacto</h2>
                <form action="" method="" class="formulario">
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

                    <p class="acciones">
                        <input type="submit" value="enviar" />
                    </p>
                </form>
            </div>

            <div class="columna derecha">
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
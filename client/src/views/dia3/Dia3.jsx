import React from 'react';

import style from './Dia3.module.css';
import Titulo from '../../assets/webp/Titulo.webp';

import ReactPlayer from 'react-player'

const Dia3 = () => {
    return (
        <div className={style.container}>

            <section className={style.portada}>
                <img src={Titulo} alt="Titulo" />
            </section>

            <section className={style.sectionExtra}>
                <div className={style.divtituloExtra}>
                    <h1 className={style.tituloExtra}>
                        <strong className={style.resaltadoExtra}>Orar, invitar, movilizar</strong> <br />
                        para ser un cristiano global</h1>
                </div>
                <div className={style.divParrafoExtra}>
                    <p>
                        ¿Sabías qué es ser un CRISTIANO GLOBAL? <br />
                        Un "cristiano global" es aquel que entiende que Dios ama a todas las naciones y se compromete activamente a trabajar para cumplir ese propósito. No importa cuál sea su profesión, vive con los ojos abiertos y está dispuesto a participar en la misión de Dios para llevar Su amor a todos.
                        <br /><strong>Ser un cristiano global implica 5 prácticas fundamentales que iremos descubriendo y desarrollando entre hoy y mañana.</strong>
                    </p>

                    <p><strong className={style.resaltadoExtra}>¿Realmente hay poder en la oración?</strong></p>

                    <p>
                        La <strong>oración</strong> es el recurso más poderoso para la misión de Dios.
                        Jesús nos enseña en <strong>Mateo 9:37-38</strong> a pedir por obreros para la cosecha,
                        recordándonos que la oración moviliza personas, recursos y herramientas, y que todo depende de Dios.
                    </p>

                    <p><strong className={style.resaltadoExtra}>Invitar puede cambiarlo todo</strong></p>

                    <p>
                        El que invita es quien acoge a las naciones que Dios ama,
                        presentes en nuestras comunidades, como estudiantes internacionales, inmigrantes, refugiados y viajeros.
                        A través de la hospitalidad y el servicio, <strong>busca construir relaciones para compartir el amor de Cristo.</strong>
                    </p>

                    <p><strong className={style.resaltadoExtra}>Deja de ser espectador y moviliza</strong></p>

                    <p>
                        <strong>Un <strong className={style.resaltadoExtra}>MOVILIZADOR</strong> es un líder apasionado </strong> por involucrar a otros en la Gran Comisión.
                        Aunque podrían ir ellos mismos, <strong>eligen usar sus talentos para movilizar a muchos hacia el campo misionero.</strong>
                    </p>

                    <p>
                        Hoy, como cristiano global, eres desafiado a:
                    </p>

                    <p>
                        * <strong>Interceder</strong> por los misioneros y las etnias que aún no conocen de Dios. <br />
                        * ¿Cómo puedes <strong>invitar</strong> a alguien esta semana (y cuando vuelvas a casa) para mostrar hospitalidad a alguien de una cultura diferente a la tuya? <br />
                        * ¿Conoces a alguien que podría ser movilizado hacia un rol estratégico en la Gran Comisión? ¿Cómo podrías animarle esta semana? ¿Cómo podrías ser movilizador?

                    </p>
                </div>
            </section>

            <section>
                <ReactPlayer
                    height={'700px'}
                    controls={true}
                    url='https://vimeo.com/1094657389?share=copy#t=0' />
            </section>

            <section className={style.sectionImgMovida}>
                <img className={style.imgMovida} src="https://i.postimg.cc/QtCf6GpV/movidacol.png" alt="Movida en Numeros" />
            </section>

            <section className={style.sectionIngles}>
                <h1 className={style.tituloingles} > <strong className={style.resaltadoExtra}>Who will go?</strong> <br /> The challenge of the muslim world</h1>
                Preaching to Muslim people is an <strong> urgent, challenging, and deeply meaningful </strong> task within the global mission of the Church. More than<strong>1.8 billion people </strong> around the world identify as Muslim—many of them with no close access to a Christian community and having never heard the message of Jesus clearly, contextually, and with love. <br />
                Islam offers a religious vision that emphasizes obedience, fear of God, and communal identity, but leaves a deep void when it comes to <strong>grace, forgiveness,</strong> and a <strong>personal relationship</strong> with a God who is Father. That’s why speaking to them about <strong>Jesus—not just as a prophet, but as the Son of God who gave His life out of love—is offering the chance to know the living God who transforms hearts and brings true freedom.</strong> <br />
                <strong>Allan Matamoros</strong>, a missionary from Costa Rica, works by sending Latin American missionaries to unreached communities, especially in the Muslim world. He has lived and served in countries like Jordan, Cyprus, and Spain, and has worked throughout North Africa, the Middle East, and West Africa. His work urges the Church <strong>not to look at Muslims with fear or prejudice, but with the eyes of Christ:</strong> as people deeply loved by God, in need of salvation, and with a place in His Kingdom. <br />
                <strong>Preaching to Muslims is not just another missionary task—it is an obedient response to the call to take the gospel “to the ends of the earth” (Acts 1:8).</strong> It is an act of love, courage, and hope. That is why the testimony of people like Allan Matamoros inspires us to <strong>pray, support, and participate</strong> in this mission, knowing that <strong>the Kingdom of God is advancing even in the Muslim world.</strong> <br />
                Now the question is: <strong>what part will you play in reaching those who have never heard?</strong>
            </section>


            <section className={style.sectionImg}>
                <h1 className={style.tituloMapa} > Como leíamos ayer, la persecusión es grande. No podemos permanecer indiferentes.</h1>

                <img className={style.mapaImg} src="https://i.postimg.cc/50qsghNF/Captura-de-pantalla-2025-06-19-013101.png" alt="" />
            </section>


            <section>
                <ReactPlayer
                    height={'700px'}
                    controls={true}
                    url='https://vimeo.com/1094635158?share=copy#t=0' />
            </section>

            <section className={style.sectionOperacionCima}>
                <h1 className={style.tituloOperacionCima}>Operación Cima</h1>
                <p>
                    Mañana vamos a estar saliendo a Operación CIMA. Por eso, aquí te dejamos unas recomendaciones: <br />
                    ● Vístete cómodo, y fresco: hay mucho trabajo por hacer y muchas calles que recorrer.<br />
                    ● Lleva agua: es fundamental que te mantengas hidratado.<br />
                    ● Lleva tu escarapela: esto es por tu seguridad, así logramos identificarnos unos a otros.<br />
                    ● Presta atención a tu líder: durante toda la salida te estaremos dando indicaciones, es
                    vital que puedas prestar atención para saber puntos de encuentro tanto para salir
                    como para regresar.
                </p>
            </section>

            <section className={style.sectionPDP}>
                <h1 className={style.tituloPDP}>Experimenta de Pastores en Suiza y Medio Oriente</h1>

                <p>
                    En esta ocasión, será una experiencia exclusiva para <strong>pastores</strong> de <strong>Colombia,</strong> en el cual tendrán la oportunidad de hacer un <strong>viaje misionero de corto plazo,</strong> donde se sumergirán en un aprendizaje transcultural e intercultural, conocerán sobre la actualidad y los desafíos del Evangelio y la Misión de Dios en Europa y Medio Oriente, así mismo escucharán los testimonios de primera mano de los obreros, pastores y líderes en estos lugares y especialmente cómo podemos crear lazos y puentes de servicio y apoyo para el avance de la obra misionera y extensión del Reino de Dios en Europa y Medio Oriente.
                    <strong>Aún estás a tiempo de formar parte de este experimenta. Si estás interesado en participar, por favor acércate a Danilo Zuhul.</strong>

                </p>
            </section>


            <section className={style.sectionExperimenta}>
                <h1 className={style.tituloExperimenta}>
                    ¿Sabías que en experimenta Bogotá vas a apoyar a la Escuela Bíblica Infantil de Vacaciones en la iglesia El Olivar?
                </h1>
                <img className={style.imagenExperimenta} src="https://i.postimg.cc/xCjVQyZh/Foto-experimenta.jpg" alt="" />

                <p className={style.textoExperimenta}>¡No te pierdas esta oportunidad y sé parte!
                    Inscríbete en el Stand de Experimenta.</p>
            </section>

            <section className={style.sectionGabi}>
                <h1 className={style.tituloGabi}>Fidelidad en el reino - <br />La Gaby</h1>
                <p>
                    A través del ejemplo de Enoc, Gaby nos enseñó que es posible vivir una vida de obediencia y comunión constante con Dios. La fidelidad de Enoc fue reconocida por el Señor, y nos inspira a vivir comprometidos con su Reino en cada área de nuestra vida: familia, estudios, trabajo, redes, política o deporte. Nuestra fidelidad cotidiana puede ser una forma poderosa de mostrar a quién pertenecemos y cómo queremos vivir bajo el gobierno de Dios.

                    Porque más allá de nuestras circunstancias, ser fieles es una decisión.
                </p>
            </section>

        </div>
    );
};

export default Dia3;
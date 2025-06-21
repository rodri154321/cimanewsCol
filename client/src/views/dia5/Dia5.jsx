import React from 'react';
import style from './Dia5.module.css';
import Titulo from '../../assets/webp/Titulo.webp';
import ReactPlayer from 'react-player';


const Dia5 = () => {
    return (
        <div className={style.container}>

            <section className={style.portada}>
                <img src={Titulo} alt="Titulo" />
            </section>


            <section>
                <ReactPlayer
                    height={'700px'}
                    controls={true}
                    url='https://vimeo.com/1095204992?share=copy' />
            </section>

            <section className={style.articulo}>
                <h1 className={style.articuloH1}>CIMA REGIONAL<strong className={style.resaltarNaranja}>2027</strong></h1>

                <p>Algo grande está pasando. Tu historia continúa. Encuentra tu misión en el CIMA Regional de enero en Panamá. 2027. Agéndalo.
                </p>
            </section>

            <section className={style.articulo}>
                <h1 className={style.articuloH1}><strong className={style.resaltarNaranja}>¿Y ahora qué?</strong></h1>

                <p>
                    El CIMA termina, pero la misión no. Lo que viviste esta semana no fue un evento, fue un impulso. Un entrenamiento para vivir una vida en misión con Jesús, todos los días, donde estés.
                </p>

                <p>
                    ¿Y los próximos pasos?
                </p>

                <p>
                    👉 Seguí conectado con lo que Dios empezó en tu vida. <br />
                    👉 Sumate a los procesos de seguimiento que cada país ofrece: grupos, desafíos, mentorías. No camines solo. <br />
                    👉 Movida tiene actividades durante todo el año: jornadas de misión, entrenamientos, talleres, viajes y oportunidades concretas para servir. <br />
                    👉 Y si sientes que esto es apenas el comienzo… ¡prepárate para más! Hay caminos abiertos para servir en tu ciudad, en tu país o donde Dios te llame.

                </p>

                <p>El CIMA fue una chispa. Ahora es tiempo de que ese fuego crezca.</p>

                <p>Una misión, una vida. ¡Movete!</p>

            </section>

            <section className={style.articulo}>
                <h1 className={style.articuloH1}>Encuentro de <strong className={style.resaltarNaranja}>Voluntarios</strong> Mayo 2026</h1>

                <p>
                    Siempre es importante pasar tiempo juntos entre nosotros. Ven al encuentro de voluntarios el año que viene. ¡No te lo pierdas!
                </p>
            </section>

            <section className={style.articulo}>
                <h1 className={style.articuloH1}>Llamados a vivir en <br /> <strong className={style.resaltarNaranja}> el reino </strong> - Allan Matamoros</h1>

                <p>
                    El camino de las promesas y el llamado muchas veces pasa por la entrega total. Abraham fue conociendo a Dios en distintas versiones conforme fue caminando y escuchando la voz del rey. A veces sin saber o entenderlo todo, hacía lo mejor que podía. Y con nosotros es igual, somos llamados a vivir en constante comunión con Dios y eso es lo que logrará que conozcamos nuestro propósito.
                </p>
            </section>


        </div>
    );
};

export default Dia5;
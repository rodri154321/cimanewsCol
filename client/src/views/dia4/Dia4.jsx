import React from 'react';
import style from './Dia4.module.css';
import Titulo from '../../assets/webp/Titulo.webp';
import ReactPlayer from 'react-player';

const Dia4 = () => {
    return (
        <div className={style.container}>
            <section className={style.portada}>
                <img src={Titulo} alt="Titulo" />
            </section>
            <section className={style.articulo}>
                <h1 className={style.articuloH1}><strong className={style.resaltarNaranja}>Enviar e ir. </strong><br /> Siendo cristianos <strong className={style.resaltarNaranja}>globales</strong></h1>
                <p>
                    Ser "el que <strong className={style.resaltarNaranja}>envía" </strong> también es fundamental. Son personas que saben administrar recursos y ponen en marcha planes para apoyar a los que están saliendo al campo misionero. Su contribución va más allá del dinero, incluyendo tecnología, logística y otros medios.
                    <br />“El que <strong className={style.resaltarNaranja}> va”</strong> participa llevando el mensaje de reconciliación con Dios, ya sea dentro o fuera de su país, a corto o a largo plazo.
                </p>

                <p> <strong className={style.resaltarNaranja}>Hoy, como cristiano global, <br />eres desafiado a:</strong></p>

                <p>¿Qué recursos tienes (financieros, tecnológicos o habilidades) que podrías ofrecer para apoyar a quienes están en la misión? ¿Sabes si tu iglesia está apoyando a algún misionero que esté por salir o ya esté en el campo? ¡Tú puedes ser la respuesta a la oración de muchos que quieren <strong className={style.resaltarNaranja}>ir</strong>, pero necesitan ser enviados!
                    ¿Qué pasos concretos puedes tomar esta semana para explorar oportunidades de servicio misionero, ya sea a corto o largo plazo? Hacer un EXPERIMENTA puede ser el primer paso para <strong className={style.resaltarNaranja}>IR</strong>, servir y darle un giro a tu vida. </p>
            </section>

            <section className={style.OpeCimSection}>
                <h1 className={style.OpeCim}> <strong className={style.resaltarNaranja}>¡Llegó el día de Operación CIMA! </strong> Hoy vamos a salir a las calles a compartir del amor de Dios con la ciudad.
                    <strong className={style.resaltarNaranja}>¡Prepárate!</strong></h1>
            </section>

            <section>
                <ReactPlayer
                    height={'700px'}
                    controls={true}
                    url='https://vimeo.com/1094918185/7d6accab94?share=copy#t=0' />
            </section>

            <section className={style.ofrendaSection}>
                <h1 className={style.ofrenda}>Ofrenda para Familia Fernández Sánchez y el ministerio de La Gaby (esto se recogerá el día sábado 21 en la mañana)</h1>
                <p className={style.ofrendaP}>
                    Mejor es dar
                    Este sábado tenemos la oportunidad de sembrar en personas que respondieron al llamado y están formando parte de la misión de Dios.
                    Por un lado, ofrendaremos para apoyar a la familia Fernández Sánchez, que está en camino a Walsenhausen para servir en la casa de Movida que se encuentra allí.
                    Y también queremos bendecir el ministerio de Los Gaby’s, una pareja que trabaja incansablemente desde el proyecto “Tu casa a las naciones”, movilizando y discipulando.
                    Tu ofrenda es parte de esta historia.
                    Cada peso sembrado es una respuesta al llamado de Dios.
                    Porque una misión no se sostiene sola… ¡Se sostiene en comunidad!
                </p>
            </section>

            <section>
                <ReactPlayer
                    height={'700px'}
                    controls={true}
                    url='https://vimeo.com/1094924401' />
            </section>

            <section>
                <ReactPlayer
                    height={'700px'}
                    controls={true}
                    url='https://vimeo.com/1094925871?share=copy#t=0' />

            </section>

            <section className={style.refugiadosSection}>
                <h1 className={style.refugiadosH1}>Cuando <strong className={style.resaltarNaranja}>irse</strong> es la última salida</h1>
                <img className={style.imgRefugiados} src="https://i.postimg.cc/mrcN9t54/eom.png" alt="" />
                <p>
                    Muchos tal vez tenemos planes de irnos a vivir a otro país que no sea el nuestro. Soñamos con la experiencia de una cultura diferente, cómo va a ser trabajar con personas con las que no crecimos ni vivimos antes, la experiencia de hacer incluso las cosas más sencillas en un contexto diferente. Pero, ¿qué pasaría si no tuvieses elección? ¿Cuán diferente sería ese sueño si lo que te lleva a irte no es un sueño de un cambio, sino el tener que cuidar de tu propia vida y la de tu familia?
                    Los más de 23 millones de refugiados que hay en América Latina no tienen elección, más de 7 millones de refugiados son venezolanos que han abandonado su país tras el colapso de la economía nacional. Otra de las situaciones preocupantes se está dando en Centroamérica, particularmente con los desplazados de Honduras, El Salvador y Guatemala, que huyen de conflictos, guerra y violencia. Es irse o morir en su ciudad. Y cuando se van, suelen ser estigmatizados, dejados de lado, discriminados por las ciudades donde buscan refugio.
                    Y tú, ¿los ves? Ahí, en tu ciudad, en tus veredas, en tus mercados. El Padre los ve, su propio Hijo una vez fue refugiado en la tierra a la que venía a salvar. Su corazón se duele por ellos. ¿Y el tuyo? ¿Qué vas a hacer para sumarte a la misión del Padre para rescatarlos? “Pues tuve hambre, y me alimentaron. Tuve sed, y me dieron de beber. Fui extranjero, y me invitaron a su hogar.” - Mateo 25:35.

                </p>
            </section>

            <section>
                <h2>Tu propósito en <strong className={style.resaltarNaranja}>el reino </strong>- Victor Morán</h2>
                <p>Hoy aprendimos que Dios no sólo nos salva, sino que también nos da un propósito claro dentro de su Reino. Así como Noé y su familia recibieron la responsabilidad de multiplicarse, cuidar la creación y representar a Dios en la tierra, también nosotros somos llamados a vivir como portadores de su imagen. También vimos que nuestro propósito se cumple cuando compartimos el Evanelio y hacemos visible su gloria en cada área de nuestra vida. Al recordar el pacto de Dios y su fidelidad, reafirmamos que existimos por sus promesas y vivimos para extender su Reino.</p>
            </section>


        </div>
    );
};

export default Dia4;
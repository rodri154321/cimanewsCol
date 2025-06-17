import React from 'react';
import ReactPlayer from 'react-player'

import style from './Dia1.module.css';
import Titulo from '../../assets/webp/Titulo.webp';
import castillo from '../../assets/svg/castillo.svg';
import marco from '../../assets/webp/marcoCortado.webp';
import borde from "../../assets/svg/B10.svg"

const Dia1 = () => {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <img src={Titulo} alt="Titulo" />
            </div>
            <img className={style.imgCastillo} src={castillo} alt="fondo" />

            <section className={style.sectionVid}>
                <ReactPlayer controls={true}
                    url='https://vimeo.com/1093840804/eefd29d426?ts=0&share=copy' />
            </section>

            <section className={style.sectionEtnia}>
                <img className={style.imgMarco} src={marco} alt="marco" />
                <div>
                    <h1 className={style.tituloEtnia}>Etnia de los Awá</h1>
                </div>

                <div className={style.divImgEtnias}>
                    <img className={style.imgEtnias} src="https://occidentexxi.com/wp-content/uploads/2023/05/awa.jpg.webp" alt="Awá" />
                </div>

                <div>
                    <p>
                        <strong>Ubicación:</strong> Colombia y Ecuador <br />
                        <strong>Población:</strong> 32.843 personas aproximadamente
                    </p>
                </div>

                <div className={style.cuerpoEtnia}>
                    <p>
                        El pueblo Awá, también conocido como Cuaquier o Kwaiker, vive en zonas rurales del suroccidente colombiano. La mayoría reside en resguardos indígenas, aunque una parte también vive en comunidades afrocolombianas. <br />
                        <br />
                        La mayor necesidad espiritual del pueblo Awá es conocer el amor de Dios. Muchos niños y familias que conocen a Jesús enfrentan oposición dentro de su propia cultura. Como animistas, creen que todo en la naturaleza tiene un poder espiritual que influye en sus vidas. <br />
                        🛐 Motivos de oración: ora por los líderes cristianos entre los Awá, para que sus familias sean fortalecidas. Pide que Dios los llene de sabiduría y que usen sus dones para formar discípulos tanto en Colombia como en Ecuador.
                    </p>
                </div>

                <img className={style.imgMarcoAbajo} src={marco} alt="marco" />
            </section>

            <section className={style.section}>
                <div className={style.bordeContainer}>
                    <img className={style.esqIzquierda} src={borde} alt="" />
                    <img className={style.esqDerecha} src={borde} alt="" />
                </div>
                {/* <img className={style.marco} src={marco} alt="" /> */}

                <h1 className={style.spoiler}><strong>SPOILER</strong></h1>
                <div className={style.spoilerContainer}>
                    <p className={style.spoilerText}><strong>¡Hoy empiezan los talleres</strong>,
                        un espacio para que puedas capacitarte en lo que te gusta con personas idóneas del tema!
                        <strong>¿Estás preparado para elegir?</strong><br />
                        Selecciona con cuidado, <br />
                        ya que tendrás que continuar en ese taller durante los próximos tres días.</p>
                </div>

                <div>
                    <ReactPlayer controls={true}
                        url='https://vimeo.com/1093847985/a84fadb1cc' />

                </div>

                <div className={style.bordeContainer}>
                    <img className={style.esqIzquierdaAbajo} src={borde} alt="" />
                    <img className={style.esqDerechaAbajo} src={borde} alt="" />
                </div>
            </section>
            <section className={style.explayar}>
                <div>
                    <h1>CUARTO DE ORACIÓN</h1>
                </div>
                <div className={style.textoOracion} >

                    <h2><strong>“La oración no es una parte más de la misión… es el corazón de ella.”</strong></h2>

                    <div className={style.textoOracion2}>
                        <p>Como seguidores de Jesús, estamos llamados a vivir una vida en comunión con Dios. Pero esa comunión no se limita a lo personal: impacta también en la obra misionera y el avance del Reino. Por eso, durante estos días, el <strong>cuarto de oración</strong> será un espacio clave para interceder por <strong>Colombia</strong>, por las <strong>etnias no alcanzadas de COMIBAM</strong>, por los <strong>misioneros</strong> presentes en este CIMA y por cada paso de lo que Dios está haciendo.
                            Te invitamos a ser parte de este movimiento. Cada mañana a partir de las 8:00 y cada tarde desde las 17:30, los cimeños y voluntarios se reunirán para orar por motivos específicos y etnias asignadas. Habrá facilitadores guiando este tiempo. También podrás dejar tus propias peticiones escritas.
                            Además, estarás rodeado de personas que han entregado su vida por esta causa. Algunos de los misioneros que nos acompañan y por los que puedes orar: <br />
                            <strong>- Allan Matamoros</strong> - trabaja con agencias que plantan iglesias entre musulmanes.<br /><br />
                            <strong>- David y Zoe</strong> - sirvieron en Jordania y Medio Oriente; hoy lideran la base de envío Fronteras Colombia.<br /><br />
                            <strong>- Fernando Bolaños</strong> - desarrolla proyectos en comunidades de alto riesgo o pobreza extrema.<br /><br />
                            <strong>- Karen Marín </strong>- misionera de Movida USA e Internacional desde 2022.<br /><br />
                            <strong>- La Gaby </strong> - junto a su esposo, plantaron iglesias en Asia y Argentina. Dirige “De tu casa a las naciones”.<br /><br />
                            <strong>- Pablo Kim </strong>- de Avant Ministries, discipula líderes en América Latina.<br /><br />
                            <strong>- Zacarías Powell </strong>- nacido en India, criado en Argentina; hoy vive y sirve entre inmigrantes en Francia.</p><br /><br />
                    </div>

                    <h2>Dios quiere usarte también aquí. ¿Te unes a clamar por las naciones?</h2>
                </div>
            </section>

            <section className={style.sectionExtra}>
                <div className={style.TituloExtra}>
                    <h1>GENESIS</h1>
                </div>
                <div className={style.textoExtra}>
                    <p>
                        “Génesis” es la palabra griega para “origen” o “comienzo”. Los hebreos al Génesis lo llaman “Bereshit”, que es la primera palabra del libro. Ellos también nombran a los libros del Éxodo, Levítico, Números, Deuteronomio y Lamentaciones, de acuerdo a la primera palabra de cada uno de sus libros.
                        Génesis proporciona una introducción apropiada a la Biblia. Es un libro de comienzos: el universo físico, las plantas, los animales y la vida humana; además de muchas ideas claves de la Palabra de Dios.
                        Génesis traza el inicio de la obra redentora de Dios con la humanidad. Después que Adán y Eva pecaron, la redención llegó a ser absolutamente necesaria. En Génesis 3:15, el lector se da cuenta que el Redentor vendría de “la simiente de la mujer”. El enfoque se reduce a la familia de Sem (Gn 9:26,27), y luego a la familia de Abraham (Gn 12:3). La línea del Mesías continuaría por la línea de Isaac, y después por la de Jacob. El enfoque en Génesis se estrecha aún más a la familia de Judá.
                        De los ocho pactos más importantes en las Escrituras, cuatro se encuentran en Génesis: el Edénico, el Adámico, el de Noé y el de Abraham. En cada uno de esos casos, Dios prueba a sus hijos respecto a algún aspecto de su voluntad; cada vez, el hombre falla la prueba.
                        Desde los tiempos bíblicos, los primeros cinco libros de la Biblia se han tratado como un todo y son llamados la “ley” o el “Pentateuco” (del que Moisés es el autor). Génesis es la introducción lógica y necesaria al Pentateuco. Este libro se compone de once documentos: un relato introductorio de los días de la creación, seguido por diez secciones, que comienzan con: “Estas son las generaciones de…”. El material de Génesis se divide en dos partes naturales: los primeros once capítulos tratan cuatro acontecimientos claves: la creación, la caída, el diluvio y la torre de Babel con la resultante dispersión de los habitantes a través del mundo.
                    </p>
                </div>

            </section>

        </div>
    );
};

export default Dia1;
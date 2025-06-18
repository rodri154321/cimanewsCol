import React from 'react';
import style from './Dia2.module.css';

import ReactPlayer from 'react-player'

const Dia2 = () => {
    return (
        <div className={style.container}>
            <section className={style.portada}>
                <h1 className={style.titulo}>DÍA 2</h1>
                <p className={style.subtitulo}>¡Bienvenidos al segundo día de nuestro viaje!</p>
            </section>
            <section className={style.spoilerSection}>

                <h1 className={style.tituloSpoiler}><strong>  SPOILER  </strong></h1>
                <div className={style.videoSpoiler}>
                    <ReactPlayer
                        height={'700px'}
                        controls={true}
                        url='https://vimeo.com/1094266106' />
                </div>

                <div className={style.textoSpoilerContainer}>
                    <p>
                        <strong className={style.textoSpoiler}>Las plenarias paralelas <br /> </strong>
                        son una manera excelente de seguir aprendiendo. <br />
                        ¿Ya leíste cuáles son las de hoy? <br />
                        <strong className={style.textoSpoiler}>Míralo en la agenda. <br /></strong>
                    </p>
                </div>

            </section>

            <section className={style.explayarSection}>
                <div className={style.explayarTitulo}>
                    <h1 className={style.tituloExplayar}>Persecuted Church</h1>
                </div>
                <div className={style.divTextoExplayar}>
                    <p className={style.textoExplayar}>
                        It's the middle of the night. The streets are silent. Everyone has gone home to sleep. The streets seem deserted. We all know that nighttime is often the most dangerous time to be out.
                        But if you pay attention to that corner, there's a shadow moving in the darkness. <strong className={style.textoResaltar}>Something</strong> is hidden beneath their clothes. Their eyes scan the surroundings carefully before slipping out of hiding and walking toward a house where everyone seems asleep.
                        A cautious hand reaches out from under the garment and knocks in a rhythmic pattern on the door. As quickly as it opens to let them in, it closes behind them.
                        The host and the guest <strong className={style.textoResaltar}>say nothing</strong>. The homeowner pulls back a rug, revealing a trapdoor. In silence, they descend, and there, lit by the dim glow of a few candles, several dozen eyes welcome them.
                        They recognize a friend. Silent smiles are exchanged. And in the center of the room lies <strong className={style.textoResaltar}>the most precious thing they have</strong>. Maybe it's not new—it has passed through dozens of hands, <strong className={style.textoResaltar}>all longing to read even just a fragment.</strong>
                        Yet in that dark, quiet basement, this book — banned in their country — <strong className={style.textoResaltar}>is their greatest secret, but also their greatest treasure.</strong>
                        Each visit to their underground church could be their last day on Earth.

                        Scenes like this take place all over the world because, even today, over 360 million Christians around the globe face high levels of persecution and discrimination for their faith. North Korea, Somalia, and Libya top the list of countries with the most severe persecution according to Open Doors' research.
                        But persecution also exists in Latin American countries, like <strong className={style.textoResaltar}>Colombia</strong>, where guerrilla groups and armed gangs still control and fight over much of the national territory; in Cuba, where the Church is constantly persecuted by the communist regime; and in Mexico, where organized crime groups funded by powerful drug cartels threaten and even kill those who preach against their activities.

                        <strong><br />Those who are persecuted are willing to give everything for Jesus.
                            <br />And us—what are we doing with the freedom we've been given?</strong>

                    </p>
                </div>
            </section>

            <section>
                <div className={style.divMapa}>

                </div>


            </section>

            <section className={style.cumpleSection}>
                <img className={style.cumpleFoto} src="https://i.postimg.cc/L82jr435/Matamoros-Felizcumple-jpg.png" alt="" />
            </section>

            <section className={style.extraSection}>
                <div className={style.divExtra}>
                    <h3 className={style.extra}>Una noche que no es cualquier noche. En sólo dos horas, tu mirada puede cambiar para siempre… </h3>
                </div>
                <div className={style.divTextoExtra}>
                    <p>
                        En una Noche en Misión, podrás tener un encuentro en tu iglesia local donde explorarán temáticas clave del mundo actual a la luz de la Palabra de Dios.
                        Podrás expandir tu visión con información relevante y desafiante, conectar la Biblia con realidades globales y descubrir cómo puedes ser parte activa de la misión de Dios orando, colaborando y movilizando.
                        Y no sólo eso, sino que tendrás diferentes experiencias de donde escoger:
                    </p>

                    <p className={style.textoIzquierda}>
                        <strong className={style.resaltado}>- Missio Dei</strong>. El gran plan de Dios desde la creación hasta hoy. ¿Qué papel juegas tú? <br />
                        <br /><strong className={style.resaltado}>- Jesús: refugiado y migrante</strong>. La historia de millones que buscan refugio… ¡y cómo Dios está presente en medio de eso! <br />
                        <br /><strong className={style.resaltado}>- El Libro de los Libros</strong>. ¿La Biblia es confiable? ¿Todos tienen acceso a ella? ¿Qué puedes hacer al respecto? <br />
                        <br /><strong className={style.resaltado}>- Alerta roja. Pobreza, hambre, trata, religiones</strong>. ¿Dónde está Dios en medio del caos? ¿Y tú? <br />
                        <br /><strong className={style.resaltado}>- Agnostos Theos - Dios desconocido</strong>. Todavía hay pueblos que nunca oyeron de Jesús. ¿Por qué? ¿Qué falta? ¿Qué puedes hacer? <br />

                    </p>
                </div>
            </section>

            <section>
                <div className={style.divVideo}>
                    <ReactPlayer
                        className={style.video}
                        height={'700px'}
                        controls={true}
                        url='https://vimeo.com/1094277880/78add1c9f2' />
                </div>

            </section>

            <section>
                <div className={style.divTexto}>
                    <h1 className={style.tituloTexto}>¡Tú también puedes ser parte!</h1>
                    <p className={style.texto}>
                        Sube una foto a tu Instagram con el merch que compraste en el stand, etiqueta a <strong>@movidaacol</strong> y estarás participando por un descuento del 20% en cualquier artículo de la tienda.
                        <br /> <strong className={style.resaltado}>¡Vamos! ¡Sólo habrá un ganador!</strong>
                    </p>
                </div>
            </section>

            <section className={style.piza}>

                <img className={style.Harina} src="https://i.postimg.cc/qvvr7Ysw/nose.png" alt="" />
            

            </section>

            <section>
                <h2>Commentary on Genesis <br /> chapters 1 to 4</h2>
                <div className={style.divGenesis}>
                    <p>
                        <strong>1:1 In the beginning.</strong>
                        This phrase, found here and in John 1:1, indicates that before the universe and everything in it were created, God, the Son, and the Holy Spirit, by divine plan and purpose, created everything from nothing.
                        <br />
                        <br /> <strong>...the heavens and the earth. </strong>
                        Scripture often uses two opposites to refer to the extremes and everything in between.
                        <br /> <strong>1:26 Let us make.</strong>
                        The use of us in this verse seems to support what is said elsewhere in Scripture about the role of the Father, the Son, and the Holy Spirit in creation.
                        <br /> <strong>F3:33 The tree of life.</strong>
                        This symbolizes that human life is not inherent to our physical nature, but rather a gift from God. In this sense, life implies fellowship with God, just as death implies the end of that fellowship. The fruit of the tree of life could be eaten before the fall, but access was forbidden after the rebellion.
                    </p>
                </div>

            </section>

            <section className={style.nocheAnterior}>
                <h2>Kingdom-focused - Zacarías Powell</h2>

                <div className={style.divtextonoche}>
                    <p>
                        <strong>In Genesis 3 </strong>, we see how Adam and Eve lost focus on God’s Kingdom by listening to other voices and making decisions outside the Father’s will. As a result, sin entered the world, causing a deep disconnection that still affects all of humanity today. <br /><br />
                        Satan managed to get Eve to question God and turn away from what truly mattered. He did it with subtle but effective lies, because the real issue lies within the human heart. We often hear the phrase “follow your heart,” but the Bible warns us that the heart is deceitful and desires things that <strong>God does not.</strong> <br /><br />
                        This story challenges us with a current truth: we too are at risk of trying to build our own kingdom, apart from God. Yet God calls us to stay centered on His Kingdom, even when that means doing things that don’t always make logical sense to us.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default Dia2;
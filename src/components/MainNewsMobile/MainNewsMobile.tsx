import Banner from '../../assets/images/image-web-3-mobile.jpg';
import styles from "./MainNewsMobile.module.sass";

export default function MainNewsMobile(){
    return(
        <section className={styles.container}>
            <img src={Banner} alt='Banner' className={styles.container__image}/>
            <h1 className={styles.container__title}>The Bright Future of Web 3.0 ?</h1>
            <p className={styles.container__text}>We dive into the next evolution of the web that claims
                to put the power of the platforms back
                into
                the hands of the people. But is it really fuifilling its promise ?</p>
            <button className={styles.container__button}>READ MORE</button>
        </section>
    )
}
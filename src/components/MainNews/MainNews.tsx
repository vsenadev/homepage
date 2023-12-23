import styles from './MainNews.module.sass';
import Banner from '../../assets/images/image-web-3-desktop.jpg';

export default function MainNews(){
    return(
        <section className={styles.container}>
            <img src={Banner} alt='Banner' className={styles.container__image}/>
            <div className={styles.container__box}>
                <h1 className={styles.container__box_title}>The Bright Future of Web 3.0 ?</h1>
                <div className={styles.container__box_description}>
                    <p className={styles.container__box_description_text}>We dive into the next evolution of the web that claims to put the power of the platforms back
                        into
                        the hands of the people. But is it really fuifilling its promise ?</p>
                    <button className={styles.container__box_description_button}>READ MORE</button>
                </div>
            </div>
        </section>
    )
}
import styles from './Home.module.sass';
import Header from "../../components/Header/Header";
import MainNews from "../../components/MainNews/MainNews";

export default function Home(){
    return(
        <main className={styles.container}>
            <section className={styles.container__box}>
                <Header/>
                <MainNews/>
            </section>
        </main>
    )
}
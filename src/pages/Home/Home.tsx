import styles from './Home.module.sass';
import Header from "../../components/Header/Header";

export default function Home(){
    return(
        <main className={styles.container}>
            <section className={styles.container__box}>
                <Header/>
            </section>
        </main>
    )
}
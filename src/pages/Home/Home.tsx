import styles from './Home.module.sass';
import Header from "../../components/Header/Header";
import MainNews from "../../components/MainNews/MainNews";
import AsideNews from "../../components/AsideNews/AsideNews";
import HistoryNews from "../../components/HistoryNews/HistoryNews";

export default function Home(){
    return(
        <main className={styles.container}>
            <section className={styles.container__box}>
                <Header/>
                <div className={styles.container__box_div}>
                    <MainNews/>
                    <AsideNews/>
                </div>
                <HistoryNews/>
            </section>
        </main>
    )
}
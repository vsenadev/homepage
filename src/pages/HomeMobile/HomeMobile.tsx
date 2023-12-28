import styles from './HomeMobile.module.sass';
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";
import MainNewsMobile from "../../components/MainNewsMobile/MainNewsMobile";
import AsideNews from "../../components/AsideNews/AsideNews";
import HistoryNews from "../../components/HistoryNews/HistoryNews";

export default function HomeMobile(){
    return(
        <main className={styles.container}>
            <section>
                <HeaderMobile/>
            </section>
            <section className={styles.container__box}>
                <MainNewsMobile/>
                <AsideNews/>
                <HistoryNews/>
            </section>
        </main>
    )
}
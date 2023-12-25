import styles from './HomeMobile.module.sass';
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";

export default function HomeMobile(){
    return(
        <main className={styles.container}>
            <section>
                <HeaderMobile/>
            </section>
        </main>
    )
}
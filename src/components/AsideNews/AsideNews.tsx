import styles from './AsideNews.module.sass';
import {useContext, useEffect} from "react";
import {getAsideNews} from "../../requests/Home.request";
import {GlobalContext} from "../../store/GlobalState";
import {IAsideNews} from "../../interface/Home.interface";

export default function AsideNews() {
    const { asideNews, setAsideNews }: any = useContext(GlobalContext);

    useEffect(() => {
        getAsideNews(setAsideNews)
    }, []);

    return(
        <aside className={styles.container}>
            <h2 className={styles.container__title}>New</h2>
            <div className={styles.container__news}>
                {
                    asideNews?.map( (element: IAsideNews) => (
                        <div className={styles.container__news_div} key={element.title}>
                            <h3 className={styles.container__news_div_title}>{element.title}</h3>
                            <p className={styles.container__news_div_text}>{element.description}</p>
                        </div>
                    ))
                }
            </div>
        </aside>
    )
}
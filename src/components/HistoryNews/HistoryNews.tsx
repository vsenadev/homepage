import styles from './HistoryNews.module.sass';
import {useContext, useEffect} from "react";
import {getHistoryNews} from "../../requests/Home.request";
import {GlobalContext} from "../../store/GlobalState";
import {IHistoryNews} from "../../interface/Home.interface";

export default function HistoryNews(){
    const { historyNews, setHistoryNews }: any = useContext(GlobalContext);

    useEffect(() => {
        getHistoryNews(setHistoryNews)
    }, []);

    return(
        <section className={styles.container}>
            {
                historyNews?.map( (element: IHistoryNews) => (
                    <div key={element.number} className={styles.container__box}>
                        <div>
                            <img src={element.image} alt={element.title}/>
                        </div>
                        <div className={styles.container__box_news}>
                            <span className={styles.container__box_news_number}>{element.number}</span>
                            <h4 className={styles.container__box_news_title}>{element.title}</h4>
                            <p className={styles.container__box_news_description}>{element.description}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}
import styles from './Header.module.sass';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {getPages} from "../../requests/Home.request";
import {GlobalContext} from "../../store/GlobalState";

export default function Header(){
    const { pages, setPages }: any = useContext(GlobalContext);

    useEffect(() => {
        getPages(setPages)
    }, []);

    return(
        <header className={styles.container}>
            <Logo/>
            <nav className={styles.container__links}>
                <ul className={styles.container__links_list}>
                    {
                        pages?.name.map((element: string) => (
                            <li key={element}><Link to={"/"}>{element}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}
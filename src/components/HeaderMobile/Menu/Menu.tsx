import styles from './Menu.module.sass';
import close from '../../../assets/images/icon-menu-close.svg';
import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {GlobalContext} from "../../../store/GlobalState";
import {getPages} from "../../../requests/Home.request";

interface IMenu {
    setCallMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MenuElement(props: IMenu){
    const { pages, setPages }: any = useContext(GlobalContext);

    useEffect(() => {
        getPages(setPages)
    }, []);

    return(
        <div className={styles.container}>
            <nav className={styles.container__menu}>
                <div className={styles.container__menu_image}>
                    <img src={close} alt='fechar' onClick={() => props.setCallMenu(false)}/>
                </div>
                <ul className={styles.container__menu_links}>
                    {
                        pages?.map((element: string) => (
                            <li key={element}><Link to={"/"}>{element}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}
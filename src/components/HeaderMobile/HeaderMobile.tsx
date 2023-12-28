import styles from './HeaderMobile.module.sass';
import Menu from '../../assets/images/icon-menu.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import {useContext, useEffect, useState} from "react";
import MenuElement from "./Menu/Menu";
import {GlobalContext} from "../../store/GlobalState";
import {getPages} from "../../requests/Home.request";

export default function HeaderMobile() {
    const [callMenu, setCallMenu] = useState(false)
    const { pages, setPages }: any = useContext(GlobalContext);

    useEffect(() => {
        getPages(setPages)
    }, []);

    return(
        <header className={styles.container}>
            <Logo/>
            <img src={Menu} alt='menu' onClick={() => setCallMenu(!callMenu)}/>
            {
                callMenu&&(
                    <MenuElement
                        setCallMenu={setCallMenu}
                    />
                )
            }
        </header>
    )
}
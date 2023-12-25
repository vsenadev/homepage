import styles from './HeaderMobile.module.sass';
import Menu from '../../assets/images/icon-menu.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import {useState} from "react";
import MenuElement from "./Menu/Menu";

export default function HeaderMobile() {
    const [callMenu, setCallMenu] = useState(false)

    return(
        <header className={styles.container}>
            <Logo/>
            <img src={Menu} alt='menu' onClick={() => setCallMenu(!callMenu)}/>
            {
                callMenu&&(
                    <MenuElement/>
                )
            }
        </header>
    )
}
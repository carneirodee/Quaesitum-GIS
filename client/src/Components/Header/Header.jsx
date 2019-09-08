import React from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import iconMap from "../../assets/map-icon.png";

const Header = () => {
    return (
        <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light`}>
            <div className={styles.bodyHeader}>
                <div className={styles.leftHeader}>
                    <a className="navbar-brand" href="/#">
                        <img src={iconMap} alt="_" />
                        Quaesitum GIS
                    </a>
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item actived ${styles.option}`}>
                            <Link className="nav-link" to="/">Cadastro</Link>
                        </li>
                        <li className={`nav-item ${styles.option}`}>
                            <Link className="nav-link" to="/about">Sobre</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.rightHeader}>
                    <div className={styles.btnArea}>
                        <Link to="/login">
                            <Button text="Entrar" grayDark />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
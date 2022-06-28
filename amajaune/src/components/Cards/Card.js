import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
    const { title, link, imgsrc, linkText } = props;
    return (
        <div className={styles.card}>
            <div className={styles.cardtitle}>{title ?? "Erreur titre"}</div>
            <img
                className={styles.images_card}
                src={
                    imgsrc ??
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Test.svg/1240px-Test.svg.png"
                }
                alt=""
            ></img>
            <a
                className={styles.about}
                href={link ?? "https://github.com/clementciron"}
            >
                {linkText ?? "En savoir plus"}
            </a>
        </div>
    );
};

export default Card;

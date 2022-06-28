import styles from "./cardsmenu.module.css";
import Cards from "./Cards";

export default function () {
    return (
        <div className={styles.cardsmenu_container}>
            <Cards />
        </div>
    );
}

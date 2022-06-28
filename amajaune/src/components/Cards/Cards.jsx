import styles from "./card.module.css";
import Card from "./Card";
import Cardlist from "./cardlist.json";

export default function Cards() {
    return (
        <>
            <div className={styles.card_container}>
                {Cardlist.list.map((card, idx) => {
                    return <Card {...card} key={idx} />;
                })}
            </div>
        </>
    );
}

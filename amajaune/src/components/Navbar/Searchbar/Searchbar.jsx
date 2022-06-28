import styles from "./searchbar.module.css";

export default function Searchbar() {
    return (
        <div className={styles.searchcontainer}>
            <div className="search">
                <div className="categories">Toutes nos categories</div>
                <input className="barre" type="text" placeholder=""></input>
                <a className="fa fa_search"></a>
            </div>
        </div>
    );
}

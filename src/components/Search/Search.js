import React from "react";
import styles from './Search.module.css';

export const Search = () => {



    return  (

        <div className={styles.d3}>
            <form>
                <input type="text" placeholder="Search..."></input>
                <button type="submit"></button>
            </form>
        </div>

    )

}
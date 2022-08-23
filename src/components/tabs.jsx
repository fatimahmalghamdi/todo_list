import React, { useState } from 'react';
import styles from "./components/styles.module.css"

function Tabs(props){
    return (
        <div className={styles.box}>
            <p>{ props.myTab }</p>
        </div>
    );

}

export default Tabs;
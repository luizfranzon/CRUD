import { FloppyDisk } from "phosphor-react"

import styles from "./InputPanel.module.css"

export function InputPanel() {
    return (
        <div className={styles.panel}>
            <div className={styles.dataInputBox}>
                <div className={styles.inputBox}>
                    <label htmlFor="">Name:</label>
                    <input type="text" />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="">Address:</label>
                    <input type="text" />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="">Birthdate:</label>
                    <input type="text" />
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.saveButton}> 
                    <FloppyDisk size={32}/>
                </button>
            </div>
        </div>
    )
}
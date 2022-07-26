import { HardDrives } from "phosphor-react"
import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Crud Panel</h1>
            <HardDrives size={48} color="white"/>
        </header>
    )
}
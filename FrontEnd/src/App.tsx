import { Header } from './components/Header'
import { InputPanel } from './components/InputPanel'
import { UsersPanel } from './components/UsersPanel'

import styles from "./styles/App.module.css"

export function App() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <InputPanel />
                <UsersPanel />
            </main>
        </>
    )
}

import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
                src='https://plus.unsplash.com/premium_photo-1661270437172-97ae8d858a80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50'/>

            <div className={styles.profile}>
                <img className={styles.avatar} src='https://media.licdn.com/dms/image/C4E03AQEbRCkeXSLobg/profile-displayphoto-shrink_800_800/0/1552956995115?e=1692835200&v=beta&t=CfQmof3GloFy_3V5M7S0qVEA6qWjKsaPqBL3jTQEXxY' />
                <strong>Thiago Silva</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size="15" />
                    Editar o seu perfil
                </a>
            </footer>

        </aside>
    )
}
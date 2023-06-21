import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(props) {
    
    return (

        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/C4E03AQEbRCkeXSLobg/profile-displayphoto-shrink_800_800/0/1552956995115?e=1692835200&v=beta&t=CfQmof3GloFy_3V5M7S0qVEA6qWjKsaPqBL3jTQEXxY"/>
            
            <div className={styles.commentBox}>
                
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Silva</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2023-06-24">Cerca de 1h</time>
                        </div>
                        
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>

            

                <footer>
                    <button>
                        <ThumbsUp /> 
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}
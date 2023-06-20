import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post() {
    
    return (
        <article className={styles.post}>
            
            <header>
                <div className={styles.author}>
                    <Avatar src="https://media.licdn.com/dms/image/C4E03AQEbRCkeXSLobg/profile-displayphoto-shrink_800_800/0/1552956995115?e=1692835200&v=beta&t=CfQmof3GloFy_3V5M7S0qVEA6qWjKsaPqBL3jTQEXxY"/>
                    <div className={styles.authorInfo}>
                        <strong>Thiago Silva</strong>
                        <span>Developer</span>
                    </div>
                </div>
                <time title="11 de Maio às 08:13h" dateTime="2023-06-24">Publicado há 1h</time>
            </header>
            
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ex iusto consequatur ab nostrum, quibusdam veritatis nisi soluta deserunt earum atque. Earum in eos enim similique dolor veritatis nobis accusantium.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ex iusto consequatur ab nostrum, quibusdam veritatis nisi soluta deserunt earum atque. Earum in eos enim similique dolor veritatis nobis accusantium.</p>
                <p>Lorem ipsum <a href='#'>#novoprojeto</a> <a href='#'>#nlw</a> <a href='#'>#rocketseat</a>.</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>

        </article>
    )
    
}
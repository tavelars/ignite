import { Avatar } from './Avatar';
import { Comment } from './Comment';
import ptBR from 'date-fns/locale/pt-BR';
import { format, formatDistanceToNow } from 'date-fns';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({author, publishedAt, content}) {
    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});
    
    const [comments, setComments] = useState(['Post muito interessante sobre tecnologia.']);

    const [newCommentText, setNewCommentText] = useState(['']);
    
    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    return (
        <article className={styles.post}>
            
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()} >{publishedDateRelativeToNow}</time>
            </header>
            
            <div className={styles.content}>
                {content.map(line => {
                    
                    if(line.type == 'paragraph'){
                        return <p>{line.content}</p>;
                    }else if(line.type=='link'){
                        return <p><a href="#">{line.content}</a></p>;
                    }

                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea name="comment" placeholder="Deixe um comentário" onChange={handleNewCommentChange} value={newCommentText} />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map( comment => {
                    return <Comment content={comment} />
                })}
                
            </div>

        </article>
    )
    
}
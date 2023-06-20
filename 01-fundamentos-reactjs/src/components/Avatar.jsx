import styles from './Avatar.module.css';

// Aplicou desestruturacao nas propriedades.
export function Avatar({hasBorder = true, src}) {
    
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar } src={src} />
    )

}
import { useState } from 'react'
import styles from './App.module.css';
import './global.css'

import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

const posts = [
   {
     key:1, 
     id:1,
     author: {
        avatarUrl: 'https://media.licdn.com/dms/image/C4E03AQEbRCkeXSLobg/profile-displayphoto-shrink_800_800/0/1552956995115?e=1692835200&v=beta&t=CfQmof3GloFy_3V5M7S0qVEA6qWjKsaPqBL3jTQEXxY',
        name: 'Thiago Silva',
        role: 'Software Developer'
     },
     content: [
        {type: 'paragraph', content: 'Olá pessoal, eu Thiago gostaria de desejar boas vindas a todos!'},
        {type: 'paragraph', content: 'Estamos atualizando o portifólio de projetos para o ano de 2023 utilizando React.'},
        {type: 'link', content: 'https://github.com/tavelars/ignite#bulb-descri%C3%A7%C3%A3o-do-projeto'}
     ],
     publishedAt: new Date('2023-06-25 20:30:00')
   },

   {
    key:2,
    id:2,
    author: {
       avatarUrl: 'https://media.licdn.com/dms/image/C4D03AQFIsn48el7Qkg/profile-displayphoto-shrink_800_800/0/1652357507196?e=1693440000&v=beta&t=LD6AOyYcCPDpilR7Ui2D_lL58sE7V842nL3iEdzAM3g',
       name: 'Marieta Silva',
       role: 'Developer'
    },
    content: [
       {type: 'paragraph', content: 'Olá pessoal, bem vindos!'},
       {type: 'paragraph', content: 'Atualizando o portifólio de projetos para o ano de 2023 utilizando PHP e MongoDB.'},
       {type: 'link', content: 'https://github.com/tavelars/ignite#bulb-descri%C3%A7%C3%A3o-do-projeto'}
    ],
    publishedAt: new Date('2023-06-25 19:30:00')
  }

];


export function App() {
  
  return (
    
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          
          {posts.map(post=>{
              return(
                  <Post key={post.key} id={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
              )}
          )}

        </main>
      </div>
      
    </div>

  )
  
}

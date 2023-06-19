import { useState } from 'react'
import {Post} from './Post'
import styles from './App.module.css';

import './global.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

export function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post autor="Thiago" conteudo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eveniet necessitatibus hic minus a iste pariatur tenetur. Nihil ullam nulla doloremque praesentium est rem explicabo. Id sint eaque non quibusdam." />
        </main>
      </div>
      
    </div>

  )
  
}

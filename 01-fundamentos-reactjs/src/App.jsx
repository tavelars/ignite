import { useState } from 'react'
import {Post} from './Post'
import './styles.css'
import { Header } from './components/Header'

export function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <Header></Header>
      <h1>Bem vindo ao curso Ignite!</h1>
      <Post autor="tavelars" conteudo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae iure, veritatis sit voluptates necessitatibus voluptatem quo illum, consequatur minus exercitationem. Unde maiores, commodi amet et corrupti ea incidunt repellat!"></Post>
    </div>

  )
}

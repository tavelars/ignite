import { useState } from 'react'
import {Post} from './Post'

export function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <h1>Bem vindo ao curso Ignite!</h1>
      <Post autor="tavelars" conteudo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae iure, veritatis sit voluptates necessitatibus voluptatem quo illum, consequatur minus exercitationem. Unde maiores, commodi amet et corrupti ea incidunt repellat!"></Post>
    </div>

  )
}

import { Counter } from './components/Counter'
import { RepositoryList } from './components/RepositoryList'
import './style/global.scss'

export function App() {
  return (
    // a tag sem nada dentro <> no react significa que é um fragmento (frag), na hora de renderizar ele fica direto os elementos em tela.
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}

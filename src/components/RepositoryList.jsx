import { RepositoryItem } from "./RepositoryItem"

import '../style/repositories.scss'

const repository ={
  name: 'unform',
  description: 'Forms in react',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositório</h1>
      <ul>
        <RepositoryItem repository={repository}/>       
        <RepositoryItem repository={repository}/>       
        <RepositoryItem repository={repository}/>       
        <RepositoryItem repository={repository}/>       
      </ul>
    </section>
  )
}
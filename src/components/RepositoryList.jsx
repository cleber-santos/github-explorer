import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"

import '../style/repositories.scss'

const repository ={
  name: 'unform',
  description: 'Forms in react',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos') // buscar (fetch), os repositórios na API do github
      .then(response => response.json()) // quando (then) o fetch me devolver uma resposta vai converter essa reposta para .json
      .then(data => setRepositories(data)) //quando a reposta para json terminar de ser convertida terei os dados (data) desta resposta. E será armazenada na variável setRepositories.
  }, [])

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
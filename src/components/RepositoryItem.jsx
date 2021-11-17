export function RepositoryItem(props) {
  return (
    <li>
      <strong>{ props.repository.name ?? 'Default' }</strong> {/* O ?? equivale ao || (ou) */}
      <p>{ props.repository.description }</p>
      <a href={ props.repository.link }>
        Acessar repositórios
      </a>
    </li>
  )
}
function Header({ showForm, setShowForm }) {
  const appTitle = 'Dev Posts'

  return (
    <header className="header">
      <div className="logo">
        <h1>{appTitle}</h1>
      </div>
    </header>
  )
}

export default Header

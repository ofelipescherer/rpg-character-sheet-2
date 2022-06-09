const Header = () => {
  function changeTheme() {
    let theme = document.documentElement.getAttribute('data-theme')
    document.documentElement.setAttribute(
      'data-theme',
      theme === 'dark' ? 'light' : 'dark'
    )
  }

  return (
    <div className="p05 flex flex-column accent-container">
      <h1 className="font-size-title">What Happened in that Day</h1>

      <span className="font-size-text mt05">Code: mockado</span>
      <button onClick={changeTheme}>Troca</button>
    </div>
  )
}

export default Header

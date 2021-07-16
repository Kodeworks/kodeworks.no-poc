const Header = ({children}) => {
  return (
    <header className="fixed top-0 right-0">
      <button className="p-6 text-2xl hover:underline">Meny</button>
      {children}
    </header>
  )
}

export default Header

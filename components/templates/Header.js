const Header = ({children}) => {
  return (
    <header className="fixed top-0 right-0 z-50">
      <button className="p-6 text-2xl bg-opacity-50 bg-main-gray-500 hover:underline">
        Meny
      </button>
      {children}
    </header>
  )
}

export default Header

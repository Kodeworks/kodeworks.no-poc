const Header = ({children}) => {
  return (
    <header>
      <div className="relative flex items-center justify-center isolate m-28">
        <img src="/Logo.svg" alt="Kodeworks Logo" className="h-12 ml-5 z-10" />
        <img
          src="/Logo-symbol.svg"
          alt="Kodeworks Logo"
          className="h-64 ml-5 absolute z-0"
        />
      </div>
      {children}
    </header>
  )
}

export default Header

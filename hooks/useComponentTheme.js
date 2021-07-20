import {useState, createContext, useContext} from 'react'
import ComponentTheme from '../components/atoms/ComponentTheme'

const ComponentThemeContext = createContext()

function useComponentTheme() {
  const context = useContext(ComponentThemeContext)
  if (!context) {
    throw new Error(
      'useComponentTheme should be used within a ComponentThemeProvider',
    )
  }
  return context
}

function ComponentThemeProvider({
  initialComponentTheme = ComponentTheme.MAIN_GRAY,
  ...props
}) {
  const [componentTheme, setComponentTheme] = useState(initialComponentTheme)
  return (
    <ComponentThemeContext.Provider
      value={[componentTheme, setComponentTheme]}
      {...props}
    />
  )
}

export {useComponentTheme, ComponentThemeProvider}

import React from 'react'

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  logoUrl:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
}

const Themecontext = React.createContext({
  theme: lightTheme,
  toggleTheme: () => {},
  activeTab: 'Home',
})

export default Themecontext

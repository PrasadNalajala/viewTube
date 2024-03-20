import './App.css'
import {Component} from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Login from './components/login/index'
import ThemeContext from './context/ThemeContext'
import Home from './components/Home/index'

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  logoUrl:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
}
const darkTheme = {
  background: '#121212',
  text: '#ffffff',
  logoUrl:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
}

class App extends Component {
  state = {theme: darkTheme}

  toggleTheme = () => {
    // console.log('toggledTheme')
    this.setState(prev => ({
      theme: prev.theme === lightTheme ? darkTheme : lightTheme,
    }))
  }

  render() {
    const {theme} = this.state
    return (
      <ThemeContext.Provider value={{theme, toggleTheme: this.toggleTheme}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App

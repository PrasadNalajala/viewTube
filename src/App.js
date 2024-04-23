import './App.css'
import {Component} from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Login from './components/login/index'
import ThemeContext from './context/ThemeContext'
import Home from './components/Home/index'
import VideoDetails from './components/VideoDetails'

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  logoUrl:
    'https://i.postimg.cc/brFgm1sT/viewtube-high-resolution-logo-transparent.png',
}
const darkTheme = {
  background: '#121212',
  text: '#ffffff',
  logoUrl:
    'https://i.postimg.cc/fRjhVPGh/viewtube-high-resolution-logo-white-transparent.png',
}

class App extends Component {
  state = {theme: darkTheme, activeTab: 'home'}

  toggleTheme = () => {
    // console.log('toggledTheme')
    this.setState(prev => ({
      theme: prev.theme === lightTheme ? darkTheme : lightTheme,
    }))
  }

  onClickTab = tab => {
    this.setState({activeTab: tab})
  }

  render() {
    const {theme, activeTab} = this.state
    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: this.toggleTheme,
          activeTab,
          onClickTab: this.onClickTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/videos/:id" component={VideoDetails} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App

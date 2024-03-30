import {FaMoon} from 'react-icons/fa'
import {IoSunny} from 'react-icons/io5'
import {Box, Para, Heading, Logo, Button, Img} from '../login/styles'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => {
  const onclick = () => {}
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme, toggleTheme} = value
        return (
          <Box
            theme={theme}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="18px"
            width="100vw"
            position="fixed"
          >
            <Img src={theme.logoUrl} height="35px" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              {theme.background === '#ffffff' ? (
                <FaMoon className="mode-icon" onClick={toggleTheme} />
              ) : (
                <IoSunny className="mode-icon" onClick={toggleTheme} />
              )}
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                height="35px"
                mLeft="15px"
              />
              <Button
                color="#3b82f6"
                bgColor="transparent"
                height="35px"
                width="87px"
                border="2px solid #3b82f6;"
                mLeft="15px"
              >
                Logout
              </Button>
            </Box>
          </Box>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Navbar

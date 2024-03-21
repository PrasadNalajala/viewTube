import {AiFillHome} from 'react-icons/ai'
import {HiTrendingUp} from 'react-icons/hi'
import {RiGamepadFill} from 'react-icons/ri'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'
import {Box, Heading, Para, Img} from '../login/styles'
import '../Navbar/index.css'

const Sidebar = () => {
  const display = () => {}
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <Box
            theme={theme}
            width="270px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="90vh"
            padding="15px"
          >
            <Box>
              <Box display="flex" alignItems="center" padding="5px">
                <AiFillHome className="side-bar-icon" />
                <Heading fontSize="20px" fontFamily="Roboto" fw="400">
                  Home
                </Heading>
              </Box>
              <Box display="flex" alignItems="center" padding="5px">
                <HiTrendingUp className="side-bar-icon" />
                <Heading fontSize="20px" fontFamily="Roboto" fw="400">
                  Trending
                </Heading>
              </Box>
              <Box display="flex" alignItems="center" padding="5px">
                <RiGamepadFill className="side-bar-icon" />
                <Heading fontSize="20px" fontFamily="Roboto" fw="400">
                  Gaming
                </Heading>
              </Box>
              <Box display="flex" alignItems="center" padding="5px">
                <MdPlaylistAdd className="side-bar-icon" />
                <Heading fontSize="20px" fontFamily="Roboto" fw="400">
                  Saved videos
                </Heading>
              </Box>
            </Box>
            <Box>
              <Heading fontSize="17px" fontFamily="sans-serif">
                CONTACT US
              </Heading>
              <Box>
                <Img
                  height="35px"
                  mr="10px"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                />
                <Img
                  height="35px"
                  mr="10px"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                />
                <Img
                  height="35px"
                  mr="10px"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                />
              </Box>
              <Para fontSize="20px">
                Enjoy! Now to see your channels and recommendations
              </Para>
            </Box>
          </Box>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Sidebar

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
        const {theme, activeTab, onClickTab} = value
        const activeTabStyle =
          theme.background === '#ffffff' ? 'activeTabLight' : 'activeTabDark'
        return (
          <Box
            theme={theme}
            width="17%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="90vh"
            padding="15px"
            position="fixed"
          >
            <Box>
              <Box
                display="flex"
                alignItems="center"
                padding="5px"
                onClick={() => onClickTab('home')}
                cursor="pointer"
                className={activeTab === 'home' ? activeTabStyle : ''}
              >
                <AiFillHome className="side-bar-icon" />
                <Heading fontSize="20px" fontFamily="Roboto">
                  Home
                </Heading>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                padding="5px"
                onClick={() => onClickTab('trending')}
                cursor="pointer"
                className={activeTab === 'trending' ? activeTabStyle : ''}
              >
                <HiTrendingUp className="side-bar-icon" />
                <Heading fontSize="20px" fontFamily="Roboto" fw="400">
                  Trending
                </Heading>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                padding="5px"
                cursor="pointer"
                onClick={() => onClickTab('gaming')}
                className={activeTab === 'gaming' ? activeTabStyle : ''}
              >
                <RiGamepadFill className="side-bar-icon" />
                <Heading fontSize="20px" fontFamily="Roboto" fw="400">
                  Gaming
                </Heading>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                padding="5px"
                onClick={() => onClickTab('savedVideos')}
                cursor="pointer"
                className={activeTab === 'savedVideos' ? activeTabStyle : ''}
              >
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

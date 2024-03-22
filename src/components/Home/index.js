import {CgClose} from 'react-icons/cg'
import {useState} from 'react'
import {Box, Heading, Para, Img, Logo, Button} from '../login/styles'
import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar/index'
import ThemeContext from '../../context/ThemeContext'

const Home = () => {
  const [disablePopup, setDisablePopup] = useState(false)
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <>
            <Navbar />
            <Box display="flex">
              <Sidebar />
              <Box width="83%" theme={theme}>
                <Box
                  bgImg="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
                  width="100%"
                  height="240px"
                  display={disablePopup ? 'none' : 'flex'}
                  justifyContent="space-between"
                  padding="20px"
                  br="5px 10px 5px 5px"
                >
                  <Box>
                    <Img
                      src="https://i.postimg.cc/brFgm1sT/viewtube-high-resolution-logo-transparent.png"
                      height="30px"
                    />
                    <Para color="#000">
                      Buy ViewTube Premium prepaid plans with UPI
                    </Para>
                    <Button
                      height="35px"
                      width="120px"
                      bgColor="transparent"
                      mTop="20px"
                    >
                      GET IT NOW
                    </Button>
                  </Box>
                  <Box>
                    <Box>
                      <Button
                        border="none"
                        bgColor="transparent"
                        onClick={() => setDisablePopup(true)}
                      >
                        <CgClose className="side-bar-icon" />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default Home

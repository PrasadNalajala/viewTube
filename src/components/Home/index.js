import {Box, Heading, Para, Img, Logo, Button} from '../login/styles'
import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar/index'
import ThemeContext from '../../context/ThemeContext'

const Home = () => {
  const getImg = () => {}
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <>
            <Navbar />
            <Box display="flex">
              <Sidebar />
              <Box bgImg="">
                <Img src={theme.logoUrl} height="20px" />
                <Para>Buy ViewTube Premium prepaid plans with UPI</Para>
                <Button height="35px" width="120px">
                  GET IT NOW
                </Button>
              </Box>
            </Box>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default Home

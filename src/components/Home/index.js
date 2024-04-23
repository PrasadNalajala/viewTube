import {CgClose} from 'react-icons/cg'
import {useState, useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import Cookies from 'js-cookie'
import {formatDistance} from 'date-fns'
import {Link} from 'react-router-dom'
import {PulseLoader} from 'react-spinners'
import {Box, Heading, Para, Img, Logo, Button, Input} from '../login/styles'
import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar/index'
import ThemeContext from '../../context/ThemeContext'
import '../../App.css'

const Home = () => {
  const [disablePopup, setDisablePopup] = useState(false)
  const [videosArray, setVideosArray] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [inputSearch, setInputSearch] = useState('')

  const fetchHomeVideos = async () => {
    const jwtToken = Cookies.get('jwtToken')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${inputSearch}`,
      options,
    )
    const videos = await response.json()
    setVideosArray(videos.videos)
    setIsLoading(false)
    // console.log(videos.videos)
  }
  const onChangeSearchInput = e => {
    setInputSearch(e.target.value)
  }

  useEffect(() => {
    fetchHomeVideos()
  }, [])

  console.log(inputSearch, videosArray)

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <>
            <Navbar />
            <Box display="flex" paddingTop="70px">
              <Sidebar />
              {!isLoading ? (
                <Box width="83%" theme={theme} mLeft="17%" minHeight="90vh">
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
                  <Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      mTop="20px"
                      border=" 1px solid #ccc"
                      width="fit-content"
                    >
                      <Input
                        type="search"
                        bgColor={theme.background}
                        placeholder="Search"
                        color="#fff"
                        bRight="#0.5px solid #ccc"
                        value={inputSearch}
                        onChange={onChangeSearchInput}
                      />
                      <FaSearch
                        className="side-bar-icon"
                        onClick={fetchHomeVideos}
                      />
                    </Box>
                  </Box>
                  <Box display="flex" wrap="wrap">
                    {videosArray.length !== 0 ? (
                      videosArray.map(each => {
                        // console.log(each)
                        let a
                        return (
                          <Link to={`/videos/${each.id}`} className="link">
                            <Box mTop="15px" mRight="20px">
                              <Img
                                src={each.thumbnail_url}
                                height="230px"
                                width="396px"
                                br="10px"
                              />
                              <Box
                                display="flex"
                                alignItems="flex-start"
                                mTop="5px"
                              >
                                <Img
                                  src={each.channel.profile_image_url}
                                  height="40px"
                                  mr="7px"
                                />
                                <Box>
                                  <Para
                                    width="350px"
                                    margin="0"
                                    fw="bold"
                                    lines="2"
                                    color={theme.text}
                                  >
                                    {each.title}
                                  </Para>
                                  <Para margin="2px" color="#808080">
                                    {each.channel.name}
                                  </Para>
                                  <Para margin="2px" color="#808080">
                                    {each.view_count} Views ·
                                    {formatDistance(
                                      new Date(),
                                      new Date(each.published_at),
                                    )}
                                  </Para>
                                </Box>
                              </Box>
                            </Box>
                          </Link>
                        )
                      })
                    ) : (
                      <Box
                        theme={theme}
                        mLeft="30%"
                        mTop="50px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                        height="500px"
                      >
                        <Img
                          height="300px"
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                        />
                        <Heading>No Results Found</Heading>
                        <Para mTop="5px">Try using different keywords</Para>
                        <Button
                          bgColor="#289119"
                          color="#ffffff"
                          height="35px"
                          width="100px"
                          border="none"
                          br="5px"
                        >
                          Retry
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Box>
              ) : (
                <Box
                  mLeft="17%"
                  display="flex"
                  theme={theme}
                  alignItems="center"
                  height="90vh"
                  width="100%"
                  justifyContent="center"
                >
                  <PulseLoader color="#3498db" size={15} />
                </Box>
              )}
            </Box>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default Home

import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player/youtube'
import {formatDistance, formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Navbar from '../Navbar/index'
import {Box, Heading, Para, Img} from '../login/styles'
import Sidebar from '../Sidebar/index'
import ThemeContext from '../../context/ThemeContext'

const VideoDetails = props => {
  const [videoDetails, setVideoDetails] = useState({})
  const [isLoading, toggleIsLoading] = useState(true)
  console.log(videoDetails)
  const fetchVideoDetails = async () => {
    const {match} = props
    const {id} = match.params
    const jwtToken = Cookies.get('jwtToken')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      setVideoDetails(data.video_details)
      toggleIsLoading(false)
    } else {
      setVideoDetails({})
      toggleIsLoading(false)
    }
  }

  useEffect(() => {
    fetchVideoDetails()
  }, [])

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <>
            <Navbar />
            <Box paddingTop="70px" theme={theme}>
              <Sidebar />
              <Box mLeft="17%" minHeight="90vh" theme={theme}>
                {Object.keys(videoDetails).length !== 0 ? (
                  <>
                    <ReactPlayer
                      url={videoDetails.video_url}
                      controls
                      width="100%"
                      height="500px"
                    />
                    <Para fontSize="20px">{videoDetails.title}</Para>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Para margin="2px" color="#808080">
                          {videoDetails.view_count} Views ·
                          {formatDistanceToNow(
                            new Date(videoDetails.published_at),
                          )}
                        </Para>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Box display="flex" alignItems="center" mRight="7px">
                          <BiLike />
                          <Para>Like</Para>
                        </Box>
                        <Box display="flex" alignItems="center" mRight="7px">
                          <BiDislike />
                          <Para>Dislike</Para>
                        </Box>
                        <Box display="flex" alignItems="center" mRight="5px">
                          <MdPlaylistAdd />
                          <Para>Save</Para>
                        </Box>
                      </Box>
                    </Box>
                    <hr />
                    <Box display="flex" alignItems="flex-start" mTop="5px">
                      <Img
                        src={videoDetails.channel.profile_image_url}
                        height="40px"
                        mr="7px"
                      />
                      <Box>
                        <Para margin="2px" color="#808080">
                          {videoDetails.channel.name}
                        </Para>
                        <Para margin="2px" color="#808080">
                          {videoDetails.channel.subscriber_count}
                          subscribers
                        </Para>
                        <Para>{videoDetails.description}</Para>
                      </Box>
                    </Box>
                  </>
                ) : (
                  ''
                )}
              </Box>
            </Box>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoDetails

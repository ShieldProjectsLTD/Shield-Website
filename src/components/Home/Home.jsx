import React from 'react'
import Rules from '../ALLRules/Rules'
import VideoContainer from '../ALLRules/VideoContainer'
import Subscription from '../ALLRules/Subscription'
import NewsButton from '../ALLRules/NewsButton'
import NewDonat from '../ALLRules/NewDonat'




const Home = () => {
  return (
   
<div className='app'>
  <Rules />
  <VideoContainer />
  <Subscription />
  <NewDonat />
  <NewsButton />
</div>
 

  )
}

export default Home

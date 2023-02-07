import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'
import './index.css'

const Home = props => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    const {history} = props
    return history.replace('/login')
  }
  return (
    <div className="home-container">
      <Header />
      <div className="home-body-con">
        <h1 style={{textAlign: 'center'}}>Clothes That Get You Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="image-clothes"
        />
        <p style={{textAlign: 'center'}}>
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So,celebrate the seasons new and exiting fashion in
          your own way.
        </p>
        <button type="button">Shop Now</button>
      </div>
    </div>
  )
}

export default Home

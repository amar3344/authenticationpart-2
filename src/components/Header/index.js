import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="header-cont">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
          alt="nav logout"
          className="nav-logout"
          onClick={onClickLogout}
        />
      </div>
      <ul>
        <li>
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav-home"
              className="nav-links"
            />
          </Link>
        </li>
        <li>
          <Link to="/products">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
              alt="nav-products"
              className="nav-links"
            />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav-cart"
              className="nav-links"
            />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Header)

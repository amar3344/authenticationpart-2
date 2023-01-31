import './index.css'

const Header = () => (
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
      />
    </div>
    <nav>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav-home"
        className="nav-links"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
        alt="nav-products"
        className="nav-links"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav-cart"
        className="nav-links"
      />
    </nav>
  </div>
)

export default Header

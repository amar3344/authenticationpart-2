import Header from '../Header'
import './index.css'

const Products = () => (
  <div className="products-container">
    <div>
      <Header />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="product-image"
      />
    </div>
  </div>
)

export default Products

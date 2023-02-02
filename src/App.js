import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import Products from './components/Products'
import Cart from './components/Cart'

import './App.css'
import ProtectedRouter from './components/ProtectedRouter/protected'

const App = () => (
  <div className="react-app">
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRouter exact path="/" component={Home} />
      <ProtectedRouter exact path="/products" component={Products} />
      <ProtectedRouter exact path="/cart" component={Cart} />
      <Route exact path="/not found" component={NotFound} />
      <Redirect to="/not found" />
    </Switch>
  </div>
)

export default App

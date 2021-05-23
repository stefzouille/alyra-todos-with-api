import { Switch, Route, Redirect } from "react-router-dom"
import Home from "./Page/Home"
import Login from "./Page/Login"

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Redirect to="/" />

    </Switch>
  )
}

export default App

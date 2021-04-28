import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import ArticlesScreen from "./screens/Articles_screen"
import './App.css'
import BlogScreen from "./screens/Blog-screen"

function App() {
  return (
    <Container
      className="align-items-center justify-content-center"
      style={{ minHeight: "1000vh" }}
    >

        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/" component={ArticlesScreen}/>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/blog" component={BlogScreen} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
    </Container>
  )
}

export default App

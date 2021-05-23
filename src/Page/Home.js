import React from 'react'
import Todos from "../components/Todos"
import ColorModeContainer from "../components/ColorModeContainer"
import Navigation from '../components/Navigation'

const Home = () => {
  return (
    <div classname="page-home">
      <ColorModeContainer>
        <Navigation />
        <div className="container my-4">
          <h1 className="text-center">ToDos App</h1>
          <Todos />
        </div>
      </ColorModeContainer>
    </div>
  )
}

export default Home



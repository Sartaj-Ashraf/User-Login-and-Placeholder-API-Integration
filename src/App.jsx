
import './App.css'

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom"

const Homepage = lazy(() => import("/src/Pages/Homepage/Homepage.jsx"));
const LoginPage = lazy(() => import("/src/Pages/Login/LoginPage.jsx"));

function App() {
  return (
    <>
      {/* Suspense provides a loading screen when the component or page is to be rendered */}
      <Suspense fallback={<h1 style={{ textAlig: 'center' }}>Loading</h1>}>

        <Routes>
          {/* Setting the paths for the router to different pages */}
          <Route exact path="/" element={<LoginPage />}></Route>
          <Route exact path="/" element={<Homepage />}></Route>
        </Routes >

      </Suspense>

    </>
  )
}

export default App

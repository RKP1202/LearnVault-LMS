import React from 'react'
import { Button } from './components/ui/button'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Hero from './pages/student/HeroSection'
import CourseSection from './pages/student/Courses'
import MyCourses from './pages/student/MyCourses'
import ProfilePage from './pages/student/Profile'

const appRoute = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/", 
        element:
        <>
          <Hero/>
          {/* Courses */}
          <CourseSection/>
        </>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/MyCourses",
        element:<MyCourses/>
      },
      {
        path: "/Profile",
        element: <ProfilePage/>
      }
    ]
  }
])

const App = () => {
  return (
  
      <RouterProvider router={appRoute}/>

  )
}

export default App

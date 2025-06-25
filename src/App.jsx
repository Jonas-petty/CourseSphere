import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import ProtectedRoutes from './components/utils/ProtectedRoutes'

import LoginPage from './components/pages/LoginPage.jsx'
import SignupPage from './components/pages/SignupPage.jsx'
import HomePage from './components/pages/HomePage.jsx'
import NotFoundPage from './components/pages/NotFoundPage.jsx'
import CourseDetailsPage from './components/pages/CourseDetailsPage.jsx'
import CreateCoursePage from './components/pages/CreateCoursePage.jsx'


function App() {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage setIsLogged={setIsLogged}/>}/>
        <Route path='/signup' element={<SignupPage setIsLogged={setIsLogged}/>}/>
        <Route path='*' element={<NotFoundPage />}/>

        <Route element={<ProtectedRoutes isLogged={isLogged}/>}>
            <Route path='/' index element={<HomePage />} />
            <Route path='/course/:courseId' element={<CourseDetailsPage />} />
            <Route path='create/course' element={<CreateCoursePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

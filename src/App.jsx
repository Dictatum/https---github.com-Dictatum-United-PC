import { Routes, Route} from 'react-router-dom'
import LandingPage from './pages/landing-pages'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import PageNotFound from './pages/404'
import GenericLayout from './layout/genericLayout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='*' element={<PageNotFound />} />

      <Route element={<GenericLayout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
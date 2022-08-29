import { useState, useEffect, useContext } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Header from './Component/Layout/Header'
import Pages from './Component/Layout/Pages'
import Profil from './Component/Profil'
import Overview from './Component/Overview'
import Repostories from './Component/Repostories'
import Projects from './Component/Projects'
import Packages from './Component/Packages'
import Footer from './Component/Layout/Footer'
import Followers from './Component/Followers'
import Login from './Component/Login'
import API from './Component/API'
import dataContext from './Component/Context/dataContext'

function App() {

  const[data, setData] = useState([])
  const[repos, setRepos] = useState([])
  const [name, setName] = useState('mukhriddin-dev')
  const [page, setPage] = useState(1)
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const reposSize = data.public_repos

  async function fetchData() {
    try{
      const response = await API.get_Data(name)
      setData(response.data)
    } catch (e){
      alert(e.message)
    }
  }

  async function reposData() {
    const response = await API.get_Repos(name, page)
    setRepos(response.data)
  }

  useEffect(() => {
    fetchData()
    setPage(1)
  }, [name]);


  useEffect(() => {
    reposData()
  }, [page, name]);

  const user = {
    name: 'dilmurod',
    password: 'hover55'
  }

  function useAuth(params) {
    user.name === params.name && user.password === params.password

    ? navigate('/home') : '/'
  }

  return (
    <>
    <dataContext.Provider value={{data, repos, page, setPage, setName, useAuth, reposSize}}>
    {pathname === '/' ? '' : <Header />}

    {pathname === '/' ? <Login />

    :

      <main>
      <section className='main'>
        <div className="containers-main main__containers-main d-flex">
          <Profil />

          <div className='pages-wrapper'>
          <Pages />

            <Routes>

              <Route path='/' element={<Login />} />
              <Route path='/overview' element={<Overview/>} />
              <Route path='/repositories' element={<Repostories/>} />
              <Route path='/projects' element={<Projects/>} />
              <Route path='/packages' element={<Packages/>} />
              <Route path='/followers' element={<Followers />} />

            </Routes>
          </div>
        </div>
      </section>
      </main>

    }

      {pathname === '/' ? '' : <Footer />}
    </dataContext.Provider>
    </>
  )
}

export default App

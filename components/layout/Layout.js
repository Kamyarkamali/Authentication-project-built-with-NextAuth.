//component module
import Footer from '../module/Footer/Footer'
import Navbar from '../module/Navbar/Navbar'



function Layout({children}) {
  return (
    <div>
        <Navbar/>

        <div className='min-h-[600px]'>{children}</div>

        <Footer/>
    </div>
  )
}

export default Layout
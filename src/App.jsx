
import './App.css'
import Navbar from './Navbar/Navbar'
import Axios from './component/Axios/Axios'
import Priceoptions from './component/Pricesoption/Priceoptions'
import Rechart from './component/Rechart/Rechart'

function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Priceoptions></Priceoptions>
    <Rechart></Rechart>
    <Axios></Axios>
    </>
  )
}

export default App

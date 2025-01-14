import Createframe from "./components/Createframe"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <div className='bg-gray-300 h-[100%] min-h-screen'>
      <Navbar/>
      <Createframe/>
    </div>
  )
}

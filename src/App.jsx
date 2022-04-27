import './App.css'
import Card from './components/Card/Card'
import Navbar from './components/Header/Navbar'
import data from '../src/components/Card/data'

function App() {
  return (
    <div className='m-3 flex justify-center flex-col align-middle'>
      <Navbar />
      <div className='mx-auto'>
        <div>
          {data.map((item) => {
            return <Card key={item.id} item={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App

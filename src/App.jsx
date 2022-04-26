import './App.css'
import Card from './components/Card/Card'
import Navbar from './components/Header/Navbar'
import data from '../src/components/Card/data'

function App() {
  return (
    <div className='m-3'>
      <Navbar />
      <div>
        {data.map((item) => {
          return <Card key={item.id} item={item}/>
        })}
      </div>
    </div>
  )
}

export default App

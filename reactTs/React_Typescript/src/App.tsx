import { ChaiCard } from './components/ChaiCard.tsx'
import './App.css'
import { Counter } from './components/Counter.tsx'
import type { User } from './types.ts'
import { ChaiList } from './components/ChaiList.tsx'
import { OrderForm } from './components/OrderForm.tsx'
import { Card } from './components/Card.tsx'

const menu: User[] = [
  {fullName:"Bhavishya", course: "BCA", price:242027},
  {fullName:"ironman", course: "B-tech", price:242028},
]

function App() {
  return (
    <>
      <h1>React with Typescript</h1>
      <ChaiCard 
      name= "Bhavishya" 
      price={100} 
      isSpecial={true} />
      <Counter />
      <div>
        <ChaiList details={menu}/>
      </div>
      <div>
        <OrderForm onSubmit={(order) => 
          console.log(`your order: ${order.name}, ${order.cups} cups`)
        }/>
      </div>
      <div>
        <Card title='Typescript series' footer={<button>click me!</button>} />
      </div>
    </>
  )
}

export default App

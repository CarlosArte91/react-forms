import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LoginForm from './components/login_form/login_form'
import RegisterForm from './components/register_form/register_form'
import UpdateForm from './components/update_form/update_form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
			<UpdateForm />
    </div>
  )
}

export default App

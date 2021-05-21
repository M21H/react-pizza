import * as axios from 'axios'
import React from 'react'
import { Route } from 'react-router'
import { useDispatch } from 'react-redux'

import { setPizzas } from './redux/actions/pizzas'

import { Header } from './components'
import { Home, Cart } from './pages'

function App() {
	const dispatch = useDispatch()

	React.useEffect(() => {
		axios.get('http://localhost:3001/pizzas').then(({ data }) => {
			dispatch(setPizzas(data))
		})
	}, [])

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Route exact path='/' component={Home} />
				<Route exact path='/cart' component={Cart} />
			</div>
		</div>
	)
}

export default App

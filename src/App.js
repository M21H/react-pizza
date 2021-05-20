import * as axios from 'axios'
import React from 'react'
import { Route } from 'react-router'

import { setPizzas } from './redux/actions/pizzas'

import { Header } from './components'
import { Home, Cart } from './pages'
import { connect } from 'react-redux'

// function App() {
// 	// const [pizzas, setPizzas] = React.useState(null)

// 	React.useEffect(() => {
// 		axios.get('http://localhost:3000/db.json').then(({ data }) => setPizzas(data.pizzas))
// 	}, [])

// 	return (
// 		<div className='wrapper'>
// 			<Header />
// 			<div className='content'>
// 				<Route exact path='/' render={() => <Home items={pizzas} />} />
// 				<Route exact path='/cart' component={Cart} />
// 			</div>
// 		</div>
// 	)
// }

class App extends React.Component {
	componentDidMount() {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			this.props.setPizzas(data.pizzas)
		})
	}
	render() {
		return (
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<Route exact path='/' render={() => <Home items={this.props.items} />} />
					<Route exact path='/cart' component={Cart} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	items: state.pizzas.items,
})

export default connect(mapStateToProps, { setPizzas })(App)

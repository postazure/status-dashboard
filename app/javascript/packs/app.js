import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Feed from './components/Feed'

class App extends React.Component {
	render () {
		return (
			<Router>
				<Route path="/feed" component={Feed} />
			</Router>
		)
	}
}

App.propTypes = {
	route: PropTypes.string.isRequired
}

document.addEventListener('DOMContentLoaded', () => {
	const node = document.getElementById('current_route')
  const props = JSON.parse(node.getAttribute('props'))
	
  ReactDOM.render(
    <App {...props}/>,
    document.body.appendChild(document.createElement('div')),
  )
})

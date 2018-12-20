import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class App extends React.Component {
	render () {
		return (
			<div>
				React App {this.props.route}
			</div>
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

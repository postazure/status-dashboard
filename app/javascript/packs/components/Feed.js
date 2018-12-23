import React from "react"

export default class Feed extends React.Component {
  state = {events: []}
  
  componentDidMount() {
    fetch("/api/events")
      .then(res => res.json())
      .then(json => this.setState({events: json.events}))
  }
  
	render() {
		return(
      <div>
	  		<div>Feed</div>
        {this.state.events.map(event => <div key={event.id}>{event.description}</div>)}
      </div>
		)
	}
}
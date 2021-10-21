import React, { Component } from 'react'

export default class ToDoList extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 
		}
	}	
    render() {
        return (
            <div>
              <form className='todo-form'>
								<input type='text' className='todo-input' placeholder='I beg you...' />
								<button className='todo-button'>Add a goal</button>
							</form>
            </div>
        )
    }
}

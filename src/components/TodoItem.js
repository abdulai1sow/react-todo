import React, { Component } from 'react'
import { BsPen, BsTrash } from 'react-icons/bs'


export default class TodoItem extends Component {
  render() {
    return (
      <li className='list-group-item text-autoCapitalize d-flex justify-content-between mx-2'>
        <h6>title</h6>
        <div className='todo-icon'>
          <span className='mx-2 text-success'>
            <BsPen/> 
          </span>
          <span className='mx-2 text-danger'>
            <BsTrash/>
          </span>
        </div>
      </li>
    )
  }
}

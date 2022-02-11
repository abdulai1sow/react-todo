import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from "uuid";
// uuid.v4();

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false
  }
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
      
    }


    const updatedItems = [...this.state.items, newItem];
    console.log(newItem);

    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      editeItem: false
    });
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'></div>
          <h3 className='text-capitalize text-center'>todo app</h3>
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <TodoList items={this.state.items}/>
        </div>
      </div>
    );
  }
}

export default App;

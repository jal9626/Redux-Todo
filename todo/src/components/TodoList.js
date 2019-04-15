import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNewTodo, toggleTodo } from '../actions'

class TodoList extends Component {
    state = {
       value: ""
    }

    handleChanges = event => {
        this.setState({ value: event.target.value })
    }

    addTodo = event => {
        event.preventDefault();
        this.props.addNewTodo(this.state.value)
    }

    toggleTodo = (event, index) => {
        event.preventDefault();
        this.props.toggleTodo(index);
    }

    render() {
        return (
            <div>
                <div className='todo-list'>
                    {this.props.todos.map((todo, index) => (
                        <h3 
                            onClick={event => this.toggleTodo(event, index)} key={index}
                            style={todo.completed ? { color: '#d3d3d3', textDecoration: 'line-through' } : null }  
                        >
                            {todo.value}
                        </h3>
                    ))}
                </div>
                <form>
                    <input
                        type='text'
                        value={this.state.value}
                        onChange={this.handleChanges}
                        placeholder='Add new todo'
                    />
                    <button onClick={this.addTodo}>Add</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    todos: state.todos
    };
};

export default connect(
    mapStateToProps,
    { addNewTodo, toggleTodo }
)(TodoList);


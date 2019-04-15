import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNewTodo } from '../actions'

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

    render() {
        return (
            <div>
                <div className='todo-list'>
                    {this.props.todos.map((todo, index) => (
                        <div>
                            {todo.value}
                        </div>
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
    { addNewTodo }
)(TodoList);


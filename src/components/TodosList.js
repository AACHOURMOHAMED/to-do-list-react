/* eslint-disable react/prop-types, react/destructuring-assignment */
import React from 'react';
import Proptypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todos,
  handleChangeProps,
  deleteTodoProps,
  setUpdate,
}) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  todos: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number.isRequired,
      title: Proptypes.string.isRequired,
      completed: Proptypes.bool.isRequired,
    }),
  ).isRequired,
  handleChangeProps: Proptypes.func.isRequired,
  deleteTodoProps: Proptypes.func.isRequired,
  setUpdate: Proptypes.func.isRequired,
};

export default TodosList;

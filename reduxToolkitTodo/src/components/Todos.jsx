import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setNewText(todo.text); 
  };

  const handleUpdate = (id) => {
    if (newText.trim()) {
      dispatch(updateTodo({ id, newText }));
      setEditId(null); 
    }
  };

  return (
    <>
      <ul className="list-none mt-10">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="bg-gray-700 text-white px-2 py-1 rounded"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div className="flex space-x-2">
              {editId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-white bg-green-500 py-1 px-4 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-blue-500 py-1 px-4 rounded"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 py-1 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;

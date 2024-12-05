// src/pages/ListTodosPage.js  
import React, { useState, useEffect } from 'react';  
import axios from 'axios';  

const ListTodosPage = () => {  
  const [todos, setTodos] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {  
    fetchTodos();  
  }, []);  

  const fetchTodos = async () => {  
    try {  
      const response = await axios.get('http://localhost:3000/todos');  
      setTodos(response.data);  
      setLoading(false);  
    } catch (error) {  
      setError('Todolar yüklenirken bir hata oluştu');  
      setLoading(false);  
    }  
  };  

  if (loading) return <div className="container mt-4">Yükleniyor...</div>;  
  if (error) return <div className="container mt-4 alert alert-danger">{error}</div>;  

  return (  
    <div className="container mt-4">  
      <h2>Todo Listesi</h2>  
      <div className="row">  
        {todos.map(todo => (  
          <div key={todo.id} className="col-md-4 mb-3">  
            <div className="card">  
              <div className="card-body">  
                <h5 className="card-title">{todo.title}</h5>  
                <p className="card-text">{todo.description}</p>  
                <div className="d-flex justify-content-between align-items-center">  
                  <span className={`badge bg-${todo.priority === 'high' ? 'danger' : todo.priority === 'normal' ? 'warning' : 'info'}`}>  
                    {todo.priority}  
                  </span>  
                  <small className="text-muted">Bitiş: {new Date(todo.dueDate).toLocaleDateString()}</small>  
                </div>  
              </div>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default ListTodosPage;  
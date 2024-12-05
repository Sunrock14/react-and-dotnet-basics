// src/pages/CreateTodoPage.js  
import React, { useState } from 'react';  
import axios from 'axios';  

const CreateTodoPage = () => {  
  const [todo, setTodo] = useState({  
    title: '',  
    description: '',  
    priority: 'normal',  
    dueDate: ''  
  });  
  const [message, setMessage] = useState({ text: '', type: '' });  

  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setTodo(prevTodo => ({  
      ...prevTodo,  
      [name]: value  
    }));  
  };  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    try {  
      const response = await axios.post('http://localhost:3000/todos', todo);  
      setMessage({ text: 'Todo başarıyla oluşturuldu!', type: 'success' });  
      setTodo({  
        title: '',  
        description: '',  
        priority: 'normal',  
        dueDate: ''  
      });  
    } catch (error) {  
      setMessage({ text: 'Bir hata oluştu!', type: 'danger' });  
      console.error('Error:', error);  
    }  
  };  

  return (  
    <div className="container mt-4">  
      <h2>Yeni Todo Ekle</h2>  
      
      {message.text && (  
        <div className={`alert alert-${message.type}`} role="alert">  
          {message.text}  
        </div>  
      )}  

      <form onSubmit={handleSubmit}>  
        <div className="mb-3">  
          <label htmlFor="title" className="form-label">Başlık</label>  
          <input  
            type="text"  
            className="form-control"  
            id="title"  
            name="title"  
            value={todo.title}  
            onChange={handleChange}  
            required  
          />  
        </div>  

        <div className="mb-3">  
          <label htmlFor="description" className="form-label">Açıklama</label>  
          <textarea  
            className="form-control"  
            id="description"  
            name="description"  
            value={todo.description}  
            onChange={handleChange}  
            rows="3"  
          ></textarea>  
        </div>  

        <div className="mb-3">  
          <label htmlFor="priority" className="form-label">Öncelik</label>  
          <select  
            className="form-select"  
            id="priority"  
            name="priority"  
            value={todo.priority}  
            onChange={handleChange}  
          >  
            <option value="low">Düşük</option>  
            <option value="normal">Normal</option>  
            <option value="high">Yüksek</option>  
          </select>  
        </div>  

        <div className="mb-3">  
          <label htmlFor="dueDate" className="form-label">Bitiş Tarihi</label>  
          <input  
            type="date"  
            className="form-control"  
            id="dueDate"  
            name="dueDate"  
            value={todo.dueDate}  
            onChange={handleChange}  
          />  
        </div>  

        <button type="submit" className="btn btn-primary">Todo Ekle</button>  
      </form>  
    </div>  
  );  
};  

export default CreateTodoPage;  
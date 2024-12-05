import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './layouts/Navbar';  
import HomePage from './pages/Home';  
import CreateTodoPage from './pages/CreateTodoPage';  
import ListTodosPage from './pages/ListTodosPage';  
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {  
  return (  
      <div>  
        <Navbar />  
        <Routes>  
          <Route path="/" element={<HomePage />} />  
          <Route path="/create" element={<CreateTodoPage />} />  
          <Route path="/list" element={<ListTodosPage />} />  
        </Routes>  
      </div>  
  );  
};  

export default App;  
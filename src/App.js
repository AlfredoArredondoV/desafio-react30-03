import { useEffect, useState } from "react";
import './App.css';
// import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Item from "./components/Item.jsx";
import {BaseColaboradores} from "./components/Colaboradores"

const App = () => {
  const [todos, setTodos] = useState(BaseColaboradores);
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onSubmit = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleSearch = (search) => {
    search.preventDefault();
    const newArray = todos.filter((item) => {return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())} );
    console.log("me diste click");
    console.log(search);
    setTodos(newArray);
  };

  return (
    <div className="container">
      <div className='navbar'>
            <p className='fs-1 text-white p-2'>Buscador de Colaboradores</p>
            <form className="d-flex p-2" role="search" >
                <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Search" 
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    />
                <button className="btn btn-outline-success" type="submit"  onClick={() =>handleSearch({search})}>Search</button>
            </form>
        </div>

      {/* <Header titulo="Buscador de Colaboradores"/> */}
      <Form onSubmit={onSubmit} />
      <Footer titulo="Lista de Colaboradores"/>
      <ul className="list-group">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              todo={todo}
              handleSearch={handleSearch}
            />
          );
        })}
      </ul>
      
    </div>
  );
}

export default App;
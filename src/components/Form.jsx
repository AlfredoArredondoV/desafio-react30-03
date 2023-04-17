import { useState } from "react";

const Form = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            name: name,
            email: email,
            id: Date.now(),
        };
        onSubmit(newTodo);
        setName("");
        setEmail("");
    };

    return (
        <div className="container p-3">
            
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre del colaborador</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ingrese el nombre"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
                </div>                
                <div className="mb-3">
                    <label className="form-label">Nombre del colaborador</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                </div>

                <button className="btn btn-primary" type="submit">Agregar colaborador</button>
            </form>
        </div>
    );
};

export default Form;

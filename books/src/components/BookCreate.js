import { useState } from "react";
function BookCreate({onCreate}){
    const [title,setTitle] = useState('');

    const handleChange = (event) =>{
        setTitle(event.target.value);
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };

    return <div className="book-create">
        <form onSubmit={handleFormSubmit}> 
            <label>Enter Book title</label>
            <input value={title} className="input" onChange={handleChange}></input>
            <button className="button">Save</button>
        </form>
    </div>;
}

export default BookCreate;
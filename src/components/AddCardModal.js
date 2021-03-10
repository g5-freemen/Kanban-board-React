import React, {useState, useEffect} from 'react';

export default function AddCardModal() {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ usersList, setUsersList ] = useState([]); 

    const getUsers = () => fetch(`${'https://jsonplaceholder.typicode.com/users'}`)
        .then(response => response.json())
        .then(result => result.map(item => 
                setUsersList(prev => prev.concat(item.name)
        )));

    useEffect( () => getUsers(), [])

    return (
        <React.Fragment>
        <button className="board__add-card-btn" onClick={()=>setIsOpen(true)}>Add new</button>

        {isOpen &&
        <div className="modal-window">
            <form className="card-form">
            <span className="card-form--top-field">
                    <label>Title *
                    <input className="card-form--title" type="text" placeholder="Enter Card Title" maxLength="27" required />
                    </label>
                    <button className="card-form--close-btn" onClick={()=>setIsOpen(false)} />
                </span>
                <label>Description *
                <textarea className="card-form--desc" rows="8" cols="40" placeholder="Enter Card Description" required />
                </label>
                <label>User *
                <select name="userName" id="usersList" required>
                    <option value="">Select user</option>
                    {usersList && usersList.map(item => <option value={item}>{item}</option> )}                    
                </select>
                </label>
                <input className="card-form--save-btn" type="submit" value="Save" />
            </form>    
        </div>
        }
        </React.Fragment>
    )
}
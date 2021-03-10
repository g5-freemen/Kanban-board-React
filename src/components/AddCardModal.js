import React, {useState, useEffect, useContext} from 'react';
import uuid from 'react-uuid';

import {CardsContext} from '../App';

export default function AddCardModal() {
    const   [ isOpen, setIsOpen ] = useState(false),
            [ usersList, setUsersList ] = useState([]),
            [ cardTitle, setCardTitle ] = useState(''),
            [ cardDesc, setCardDesc ] = useState(''),
            [ user, setUser ] = useState('');

    const { cards, setCards } = useContext(CardsContext);

    console.log(cards);
    // console.log(setCards)

    
    const getUsers = () => fetch(`${'https://jsonplaceholder.typicode.com/users'}`)
        .then(response => response.json())
        .then(result => result.map( item => setUsersList(prev => prev.concat(item.name) )));

    function submitHandler(event) {
        event.preventDefault();
        const getDate = () => new Date(Date.now()).toLocaleDateString();
        const card = { cardTitle, cardDesc, user, date: getDate(), id: uuid(), column: 0 };
        alert(JSON.stringify(card));
        setCards(prev=>prev.concat(card));
        console.log(cards);
        localStorage.setItem('cards', JSON.stringify(cards));
        setCardTitle('');
        setCardDesc('');
        setUser('');
        setIsOpen(false);
    }

    useEffect( () => getUsers(), []);

    return (
        <React.Fragment>
        <button className="board__add-card-btn" onClick={()=>setIsOpen(true)}> Add new </button>

        {isOpen &&
        <div className="modal-window">
            <form className="card-form" onSubmit={submitHandler}>
            <span className="card-form--top-field">
                    <label>Title *
                    <input  className="card-form--title"
                            type="text"
                            placeholder="Enter Card Title"
                            maxLength="27"
                            value={cardTitle}
                            onChange={ev=>setCardTitle(ev.target.value)}
                            required />
                    </label>
                    <button className="card-form--close-btn" onClick={()=>setIsOpen(false)} />
                </span>
                <label>Description *
                <textarea   className="card-form--desc"
                            rows="8"
                            cols="40"
                            placeholder="Enter Card Description"
                            value={cardDesc}
                            onChange={ev=>setCardDesc(ev.target.value)}
                            required />
                </label>
                <label>User *
                <select name="userName" id="usersList" value={user} onChange={ev=>setUser(ev.target.value)} required>
                    <option key={uuid()} value="">Select user</option>
                    {usersList && usersList.map(item => <option key={uuid()} value={item}>{item}</option> )}                    
                </select>
                </label>
                <input className="card-form--save-btn" type="submit" value="Save"/>
            </form>    
        </div>
        }
        </React.Fragment>
    )
}
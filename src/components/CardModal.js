import React, {useState, useContext, useEffect} from 'react';
import uuid from 'react-uuid';

import {CardsContext} from '../App';

export default function CardModal({id, setEditCard}) {
    const { users, cards, setCards } = useContext(CardsContext);

    const   [ card, setCard ] = useState((id && cards.filter(item=>item.id===id)[0]) || {}),
            [ isOpen, setIsOpen ] = useState((id && true) || false),
            [ cardTitle, setCardTitle ] = useState((id && card.cardTitle) || ''),
            [ cardDesc, setCardDesc ] = useState((id && card.cardDesc) || ''),
            [ user, setUser ] = useState((id && card.user) || '');

console.log('card=',card);

    function submitHandler(event) {
        event.preventDefault();
        const getDate = () => new Date(Date.now()).toLocaleDateString();
        let newCard = { cardTitle, cardDesc, user, date:getDate(), id:uuid(), column:0 };
        if (!id) setCards(prev=>prev.concat(newCard));
        setCardTitle('');
        setCardDesc('');
        setUser('');
        setIsOpen(false);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
        if (id) {setEditCard(false)};
    }

    return (
        <React.Fragment>
        {!id && <button className="board__add-card-btn" onClick={()=>setIsOpen(true)}> Add new </button> }

        {(isOpen) &&
        <div className="modal-window">
            <form className="card-form" onSubmit={submitHandler}>
            {id && <span>Edit Card</span>}
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
                    <button className="card-form--close-btn" onClick={handleCloseModal} />
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
                    {users && users.map(item => <option key={uuid()} value={item}>{item}</option> )}                    
                </select>
                </label>
                <input className="card-form--save-btn" type="submit" value="Save"/>
            </form>    
        </div>
        }
        </React.Fragment>
    )
}
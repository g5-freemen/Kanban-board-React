import React, {useState, useContext} from 'react';
import uuid from 'react-uuid';

import {CardsContext} from '../App';

export default function CardModal() {
    const { users, cards, setCards, modalState, setModalState } = useContext(CardsContext);

    const   [ card, setCard ] = useState((modalState[1] && cards.filter(item=>item.id===modalState[1])[0]) || {} ),
            [ cardTitle, setCardTitle ] = useState((modalState[1] && card.cardTitle) || ''),
            [ cardDesc, setCardDesc ] = useState((modalState[1] && card.cardDesc) ||  ''),
            [ user, setUser ] = useState((modalState[1] && card.user) || '');

    function submitHandler(event) {
        event.preventDefault();
        if (modalState[0]==='add') {
            const getDate = () => new Date(Date.now()).toLocaleDateString();
            let newCard = { cardTitle, cardDesc, user, date:getDate(), id:uuid(), column:0 };
            setCards(prev=>prev.concat(newCard));
        } else {
            let editCard = { cardTitle, cardDesc, user, date:card.date, id:card.id, column:card.column };
            const prevState = [...cards];
            const cardToReplace = prevState.find(item => item.id === modalState[1]);
            prevState.splice(prevState.indexOf(cardToReplace), 1, editCard);
            setCards(prevState);
        }
        setCardTitle('');
        setCardDesc('');
        setUser('');
        setModalState(null);
    }

    function handleCloseModal(ev) {
        ev.preventDefault();
        setModalState(null);
    }

    return (
        <div className="modal-window">
            <form className="card-form" onSubmit={submitHandler}>
            {modalState[1] && <span>Edit Card</span>}
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
    )
}
import React, {useState, useContext} from 'react';

import {CardsContext} from '../App';

export default function ClearColumn({column}) {
    const   [ isOpen, setIsOpen ] = useState(false);

    const { cards, setCards } = useContext(CardsContext);

    const handleClearColumn = (col) => col===1 ? setIsOpen(true) : ClearColumn(col);

    const ClearColumn = (col) => setCards(cards.filter(item => item.column!==col));

    return (
        <React.Fragment>
        <div className="board--delBtn" onClick={()=>handleClearColumn(column)} />

        {isOpen &&
        <div class="modal-window--confirm">
            <div class="modal-window--container">
                <div class="confirm-text">Delete all 'In Progress' Cards?</div>
                <div class='card--edit-field center'>
                    <button id='deleteInProgressCards' onClick={()=>ClearColumn(column)}>YES</button>
                    <button id='notDeleteInProgressCards' onClick={()=>setIsOpen(false)}>NO</button>
                </div>
            </div>
        </div>
        }
        </React.Fragment>
    )
}
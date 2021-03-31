import React, {useState, useContext} from 'react';

import {CardsContext} from '../App';

export default function ClearColumn({column}) {
    const   [ isOpen, setIsOpen ] = useState(false),
            [ posLeft, setPosLeft ] = useState(1),
            [ posTop, setPosTop ] = useState(1),
            [ moveLeft, setMoveLeft ] = useState(0);

    const { cards, setCards } = useContext(CardsContext);

    const handleClearColumn = (col) => col===1 ? setIsOpen(true) : ClearColumn(col);

    const ClearColumn = (col) => setCards(cards.filter(item => item.column!==col));

    let styles = { pos: { left: posLeft-moveLeft, top: posTop } };

    return (
        <React.Fragment>
        <div className="board--delBtn"
            onClick={ () => handleClearColumn(column) }
            onMouseOver={ ev => {
                setPosLeft(ev.clientX);
                setPosTop(ev.clientY);
                setMoveLeft(document.querySelector('.board--delBtn-tooltip').clientWidth);
            } } />
        <span className="board--delBtn-tooltip" style={styles.pos}> Delete all cards </span>

        {isOpen &&
        <div className="modal-window--confirm">
            <div className="modal-window--container">
                <div className="confirm-text">Delete all 'In Progress' Cards?</div>
                <div className='card--edit-field center'>
                    <button id='deleteInProgressCards' onClick={()=>ClearColumn(column)}>Yes</button>
                    <button id='notDeleteInProgressCards' onClick={()=>setIsOpen(false)}>No</button>
                </div>
            </div>
        </div>
        }
        </React.Fragment>
    )
}
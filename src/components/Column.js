import { useContext, useEffect } from "react";
import uuid from 'react-uuid';

import CardModal from "./CardModal";
import Card from './Card';
import ClearColumn from './ClearColumn';
import {CardsContext} from '../App';

export default function Column({name}) {
    let shortName = name.toLowerCase().replace(' ','-'),
        containerName = 'board__'+shortName+'--container',
        idName = shortName+'-title';
        
    let column = 0;
    if (name==='In Progress') column=1
    else if (name==='Done') column=2;

    const { cards, setCards } = useContext(CardsContext);

    let cardsCounter = cards.filter(el=>el.column===column).length;

    let styles = { hide: { visibility: 'hidden' } };
    
    useEffect(()=> localStorage.setItem('cards', JSON.stringify(cards)), [cards]);

    return (
        <div className={containerName}>
            <div className="board__title-bar">
                <div className="board__title" id={idName}>{name}
                        <div className="board--card_counter" style={cardsCounter===0 ? styles.hide : null}>
                        {cardsCounter}
                        </div>
                </div>
                {cardsCounter>0 && <ClearColumn column={column}/>}
            </div>
            <ul className="board__cards">
                {cardsCounter>0 && 
                    cards.filter(el=>el.column===column).map(item=> <Card key={uuid()} data={item}/> ) 
                }
            </ul>
            {name === 'To do' && <CardModal />}
        </div> 
    )
}
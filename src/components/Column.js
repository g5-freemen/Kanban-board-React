import { useContext, useEffect } from "react";
import AddCardModal from "./AddCardModal";
import Card from './Card'
import {CardsContext} from '../App';

export default function Column({name}) {
    let shortName = name.toLowerCase().replace(' ','-'),
        containerName = 'board__'+shortName+'--container',
        idName = shortName+'-title';

    const { cards } = useContext(CardsContext);

    useEffect(()=> localStorage.setItem('cards', JSON.stringify(cards)), [cards])

    return (
        <div className={containerName}>
            <div className="board__title-bar">
                <div className="board__title" id={idName}>{name}
                    <div className="board--card_counter"></div></div>
                <div className="board--delBtn"></div>
            </div>
            <ul className="board__cards">
                {cards.length ?
                    name === 'To do' && cards.filter(el=>el.column===0).map(item=> <Card data={item} /> ) 
                    : <p>no cards</p>}
            </ul>
            {name === 'To do' && <AddCardModal/>}
        </div> 
    )
}
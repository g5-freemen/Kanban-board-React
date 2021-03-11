import { useContext } from "react";
import AddCardModal from "./AddCardModal"
import {CardsContext} from '../App';

export default function Column({name}) {
    let shortName = name.toLowerCase().replace(' ','-'),
        containerName = 'board__'+shortName+'--container',
        idName = shortName+'-title';

    const { cards } = useContext(CardsContext);

    return (
        <div className={containerName}>
            <div className="board__title-bar">
                <div className="board__title" id={idName}>{name}
                    <div className="board--card_counter"></div></div>
                <div className="board--delBtn"></div>
            </div>
            <ul className="board__cards">
                {cards.length ? <p>{JSON.stringify(cards)}</p> : <p>no cards</p>}
            </ul>
            {name === 'To do' && <AddCardModal/>}
        </div> 
    )
}
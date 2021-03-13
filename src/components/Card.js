import { useContext } from 'react';
import { CardsContext } from '../App';

export default function Card(props) {
    const { cardDesc:desc, cardTitle:title, date, id, user } = props.data;

    const { cards, setCards, setModalState } = useContext(CardsContext);

    const handleDeleteCard = (id) => setCards(cards.filter(item => item.id!==id));

    function handleMoveCard(id) {
        setCards( cards.map( item => {
            item.id === id && (item.column<2 ? item.column++ : item.column=0) ;
            return item;
            }
        ) )
    }

    function handleCardClick(trgClass) {
        (!trgClass.includes('delete') && !trgClass.includes('move')) && setModalState([`edit`,id]);
    }

    return (
        <li className='card' id={id} onClick={ev=>handleCardClick(ev.target.className)}>
            <div className='card--user-field'>
                <span className='card--user'>{user}</span>
            </div>
            <span className='card--title'>{title}</span>
            <div className='card--desc'>{desc}</div>
            <div className='card--bottom'>
                <span className='card--date'>{date}</span>
                <button className='card--delete-btn' onClick={() => handleDeleteCard(id)} />
                <button className='card--move-btn' onClick={() => handleMoveCard(id)} />
            </div>
        </li>
    )
}
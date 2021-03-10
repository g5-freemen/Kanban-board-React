import AddCardModal from "./AddCardModal"

export default function Column({name}) {
    let shortName = name.toLowerCase().replace(' ','-'),
        containerName = 'board__'+shortName+'--container',
        idName = shortName+'-title';

    return (
        <div className={containerName}>
            <div className="board__title-bar">
                <div className="board__title" id={idName}>{name}
                    <div className="board--card_counter"></div></div>
                <div className="board--delBtn"></div>
            </div>
            <ul className="board__cards"></ul>
            {name==='To do' && <AddCardModal/>}
        </div> 
    )
}
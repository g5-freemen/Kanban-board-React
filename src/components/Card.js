export default function Card(props) {
    const { cardDesc:desc, cardTitle:title, date, id, user } = props.data;

    return (
        <li className='card' id={id}>
            <span className='title'>{title}</span>
            <div className='desc'>{desc}</div>
            <span className='user'>{user}</span>
            <div className='card--bottom'>
                <span className='date'>{date}</span>
                <button className='delete-btn' />
                <button className='move-btn' />
            </div>
        </li>
    )
}
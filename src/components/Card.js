export default function Card(props) {
    const { cardDesc:desc, cardTitle:title, date, id, user } = props.data;

    return (
        <li className='card' id={id}>
            <span className='card--title'>{title}</span>
            <div className='card--desc'>{desc}</div>
            <span className='card--user'>{user}</span>
            <div className='card--bottom'>
                <span className='card--date'>{date}</span>
                <button className='card--delete-btn' />
                <button className='card--move-btn' />
            </div>
        </li>
    )
}
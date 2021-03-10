import Column from './Column';

export default function Main() {
    return (
        <main className="board">
            
            <span className="board--delBtn-tooltip">Delete all cards</span>

            <Column name='To do'/>
            <Column name='In Progress'/>
            <Column name='Done'/>

        </main>
    )
}
import {lessons, times} from '../../lessonsList';
import './timetablePage.css';
const TimetablePage = () => {
    const renderItems = (arr, title, day) => {
        const array = arr[day];
        return(
            <div className="timetable__item item">
                <div className="item__title">{title}</div>
                <div className="item__column">
                    <ul className="column__list">
                        {array.map((item, i) => {
                            return (
                                <li key={i} className="list__item monday">{i + 1}. {item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
    return(
        <div className="timetable-wrapper">
            <h1 className="timetable__title">Расписание 10A класса</h1>
            <div className="lesson">Идёт урок</div>
            <div className="timetable__content">
                <div className="timetable__container">
                    {renderItems(times, 'Звонки', 'all')}
                    {renderItems(lessons, 'Понедельник', 'monday')}
                    {renderItems(lessons, 'Вторник', 'tuesday')}
                    {renderItems(lessons, 'Среда', 'wednesday')}
                    {renderItems(lessons, 'Четверг', 'thursday')}
                    {renderItems(lessons, 'Пятница', 'friday')}
                </div>
            </div>
        </div>
    )
}
export default TimetablePage;
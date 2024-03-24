import './day.css';

export default function Day({day, /*handlerDay*/}){

    /*function handlerClick(e){
        e.stopPropagation();
        handlerDay(day)
    }*/
    return (
        <div data-day={day} className="day">{day}</div>
    )
}
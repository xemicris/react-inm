import GeneradorDias from './GeneradorDias.js';
import Day from './Day.js';
import styles from './Calendario.module.css';


function Calendario() {
  function handlerDay(day){
    console.log(day);
  }
  function handlerClick(e){
    e.stopPropagation();
    const node = e.nativeEvent.composedPath().find(n=>n.dataset && 'day' in n.dataset)
    if(node){
      const {day} = node.dataset
      console.log(day);
    }
  }
  const day = [...GeneradorDias()];
  return (
    <div onClick={handlerClick} className={styles.calendarioContenedor}>
       {day.map(day => <Day key={day} {...{day, handlerDay}}/>)}
    </div>
  );
}

export default Calendario;
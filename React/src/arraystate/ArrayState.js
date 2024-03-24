import { useState } from "react";

export default function ArrayState() {
    const [data, setData] = useState([1, 2, 3]);

    function handlerClick() {
        // Se debe evitar modificar directamente el estado
        // Se crea una nueva copia del array y se agrega un nuevo elemento
        const newData = [...data, data.length + 1];
        setData(newData);
    }

    return (
        <>
            <button onClick={handlerClick}>Add</button>
            {data.map(v => <div key={v}>{v}</div>)}
        </>
    );
}

import { useParams } from "react-router-dom";

export default function Pagina1(){
    //hook para capturar de la ruta activa el objeto con los parámetros
    const data = useParams()
    console.log(data);
    return(
        <div>Pagina1</div>
    )
}
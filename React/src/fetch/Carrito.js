import { useEffect, useState } from "react";

export default function Carrito(){
    const [data, setData] = useState([])
    useEffect(()=>{
        const handlerCarrito = (e)=>{
            ///data.push(e.detail);
            setData([...data,[...e.detail]])
        }
        window.addEventListener("carrito", handlerCarrito)
        return ()=>window.removeEventListener("carrito", handlerCarrito)
    })
    return(
        <div>carrito: {data.length}</div>
    )
}
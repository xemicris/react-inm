import { useEffect, useRef } from "react"

export default function Dialog({ children, open, confirm }) {

    const dialogRef = useRef();
    useEffect(() => {
        open.set(dialogRef);
    }, [open]);

    function handlerClose(ev){
        ev.stopPropagation();
        dialogRef.current.close();
    }
    function handlerSubmit(ev){
        ev.stopPropagation();        
        dialogRef.current.close();
        confirm();
    }
    
    return (
        <dialog ref={dialogRef}>
            <form action="dialog" onSubmit={(ev) => ev.preventDefault()}>
                {children}
                <menu>
                    <button type="reset" onClick={handlerClose}>Cerrar</button>
                    <button type="submit" onClick={handlerSubmit}>Confirmar</button>
                </menu>
            </form>
        </dialog>
    )
}
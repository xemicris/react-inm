import { useRef } from "react"
import { DIALOGMODE } from "./dialogMode";

export default function Dialog({ children, open, confirm }) {

    const dialogRef = useRef();
    
    open.set(openDialog);

    function openDialog(ev, mode){
        ev.stopPropagation();
        if(mode === DIALOGMODE.show){
            dialogRef.current.show();
        }else{
            dialogRef.current.showModal();
        }
    }
   
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
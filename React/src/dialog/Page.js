import Dialog from "./Dialog"
import { useDialog } from "./useDialog";


export default function Page(){

    const open = useDialog();

    /*function openDialog(e){
        e.preventDefault();
        const dialog = openCb()
        dialog.current.show();
    }*/
    function confirmDialog(){
        alert("Diálogo confirmado"); 
    }

    return (
        <>
            <Dialog confirm={confirmDialog} open={open}>
                <p>Hola soy un parrafo</p>
            </Dialog>
            <button onClick={open}>Abrir dialog</button>
        </>
    )

}
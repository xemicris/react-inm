import Dialog from "./Dialog"
import { useDialog } from "./useDialog";


export default function Page(){
    const open = useDialog();

    const openCb = open();

    function openDialog(e){
        e.preventDefault();
        const dialog = openCb()
        dialog.current.show();
    }
    function confirmDialog(e){
        console.log("Diálogo confirmado"); 
    }
    return (
        <>
            <Dialog confirm={confirmDialog} open={openCb}>
                <p>Hola soy un parrafo</p>
            </Dialog>
            <button onClick={openDialog}>Abrir dialog</button>
        </>
    )

}
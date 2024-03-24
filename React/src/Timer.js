import { useTimer } from "./useTimer";


export default function Timer(){
    const date = useTimer(new Date())
    
    return(
        <>
            <p>{date}</p>
        </>
        
    )
    
}
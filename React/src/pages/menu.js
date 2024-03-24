import {Link} from "react-router-dom"

export default function Menu(){
    return(
        <nav>
            <li><Link to="pagina1">Pagina1</Link></li>
            <li><Link to="pagina2?name=chema&page=1&size=25">Pagina2</Link></li>
            <li><Link to="pagina3">Pagina3</Link></li>
        </nav>
    )
}
import { Outlet } from "react-router-dom";
import Menu from "./menu";
import "./layout.css";

export default function Layout(){
    return (
        <div>
            <Menu />
            <div className="layout">
                <Outlet />
            </div>
        </div>
    )
}
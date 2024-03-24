import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import { Suspense, lazy } from 'react';

const Pagina1 = lazy(()=>import('./pagina1'));
const Pagina2 = lazy(()=>import('./pagina2'));
const Pagina3 = lazy(()=>import('./pagina3'));

export default function RoutesApp(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="pagina1/:id" element={<Pagina1 />} />
                    <Route path="pagina2" element={<Pagina2 />} />
                    <Route path="pagina3" element={<Pagina3 />} />
                </Route>
            </Routes>
        </Suspense>
    )
}
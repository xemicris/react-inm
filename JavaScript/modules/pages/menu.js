!function menu(){
    document.addEventListener('click', (e)=>{
        e.stopPropagation();
        e.preventDefault();
        //composedPath -> 
        const node = e.composedPath().find((n)=> n.dataset && 'page' in n.dataset)
        if(node){
            const {page} = node.dataset
            const url = `./${page}.js`
            import(url).then(m=>m.default())
        }
    })
}
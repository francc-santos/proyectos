const ajax = peticion =>{
    return new Promise ((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open(peticion.method, request.url, true)
        xhr.addEventListener('load',e=>{
            resolve(e.target)
        })
        xhr.send()
    })
}

btn.addEventListener('click',showMarvel)

const showMarvel = async ()=>{
    const r = { method: 'GET', url:url}
    const response = await ajax(r)
    switch(response.status){
        case 200:
            draw(JSON.parse(response.responseText).data.results)
            break
        case 400:
            setText('Error de cliente'+response.status)
            break
        default:
            setText('Eror desconocido'+ response.status)
    }
}


const draw = data =>{
// logica de acomodo de los hijos del resultado de la peticion 
}

btn.addEventListener('click', ()=>{showMarvel})
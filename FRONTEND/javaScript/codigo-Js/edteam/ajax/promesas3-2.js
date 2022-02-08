// Solo cuando se termine de ejecutar una promesa podemos ejecutar lo que sigue, sin importar cuanto dure en sesolverse la promesa 

const setText = data =>{
    myContent.textContent = data
}

const getData=()=>{
    return new Promise((resolve, reject)=>{
        setText('Solicitando autorizacion')
        setTimeout(()=>{
            resolve(true)
        },1000)
    })

}

const showData = () =>{
    return new Promise((resolve,reject)=>{
        setText("Esperando para mostrar la informacion")
        setTimeout(()=>{
            resolve({name: "promesas"})
        },1000)
    })
}

// Definiendo que se hace con los resolve de las promesas 
btn.addEventListener('click', () =>{
    getData()
    .then(authorization =>{
        if(authorization){
            return showData()
        }
    })
    .then(user=>{
        setText(user.name)
    })
})
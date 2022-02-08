// Funciones callback , una fiçuncion que puede ser ejecutada dentro de una fuincion en el proceso inicial

const setText = data =>{
    myContent.textContent = data
}

const getData = callback =>{
    setText('Solicitando autorizacion')
    setTimeout(()=>{
        callback(true)
    },1000)
}


const showData = callback =>{
    setText("Esperando para mostrar la informacion")
    setTimeout(()=>{
        callback({name: "carol"})
    },1000)
}

// Aqui de definen las funciones callback que se reciben en las otras funciones 

btn.addEventListener('click', () =>{
    getData( authorization =>{
        if(authorization){
            showData(user =>{
                setText(user.name)
            })
        }
    })
})
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
            resolve({name: "carol"})
        },1000)
    })
}

// Se espera la respuesta para continar con el proceso de ejecucion
btn.addEventListener('click', () =>{
    let user = null
    const autorization = await getData()
    if (autorization) {
        user = await showData()
    }
    setText(user)
})
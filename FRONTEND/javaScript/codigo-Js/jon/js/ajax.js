// funcion anonima autoejecutable sintaxis clasica
// XMLHTtpRequest
(()=>{
    // 1.-instanciar el objeto htmlhttprequest
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment =document.createDocumentFragment();

        // 2.-asignarle los eventos que se va a manipular en la peticion
        // en la callback va la programacion
        xhr.addEventListener("readystatechange",e=>{
            // solo se ejecuta cuando este en 4
            if (xhr.readyState !== 4) return("salio algo mals");
            
            if(xhr.status>=200 && xhr.status<300) {
                // console.log(xhr.status);
                // console.log("salio con exito,la url es real hasta la muerte beibi prrr")
                // // console.log(xhr.responseText);
                let json = JSON.parse(xhr.responseText);
                // console.log(json);
                json.forEach(element => {
                    const $li= document.createElement("li");
                    $li.innerHTML = `${element.name}--${element.email}--${element.phone}`;
                    $fragment.appendChild($li);
                });
                $xhr.appendChild($fragment);
            }else{
                console.error("algo salio mal, verifica que la url a la que intentas acceder sea real prrr");
                let message = xhr.statusText || "ocurrio un error prr";
                $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
            }
            // esto podria servir para poner un loader 
            // console.log("este mensaje de todas formas se ejecuta");
        });

    // 3.-Abrir la peticion, establecer el metodo con el que lo vamos a hacer
    // y el denpoint al que vamos a acceder
        xhr.open("GET","https://jsonplaceholder.typicode.com/users");
    // 4.- enviar la peticion con el metodo send, cuando sol se quiere leer va vacio
        xhr.send();
})();

// funcion anonima auto ejecutable sintaxis facebook, 
// FETCH CON PROMESAS
!function(){
    const $fetch = document.getElementById("fetch"),
        $fragment =document.createDocumentFragment();
    fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res=>{
    //     // console.log(res);
    //     return res.ok? res.json(): Promise.reject(res);
    // })
    .then(res=>(res.ok? res.json() : Promise.reject(res)))
    
    .then(json=>{
        // console.log(json);
        json.forEach(element => {
            const $li= document.createElement("li");
            $li.innerHTML = `${element.name}--${element.email}--${element.phone}`;
            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment);
    })
    .catch(err=>{
        // console.log(err);
        console.error("algo salio mal, verifica que la url a la que intentas acceder sea real prrr");
        let message = err.statusText || "ocurrio un error prr";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(()=>{
        // console.log("esto se ejecuta sin importar lo que suceda");
    });
}();

// funcion anonima autoejecutable sintaxis crockford-unaria
// FETCH PROMESAS + FUNCTION ASYNC AWAIT
+function(){
    const $fetchAsyncAwait = document.getElementById("fetch-async-await"),
        $fragment =document.createDocumentFragment();

    async function getData(){
        try{
            // el await es pa decirle perame tantito
            let res= await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await res.json();

            // console.log(json,res);
            // lanzando el error al catch como un objeto
            if (!res.ok) throw {status: res.status, statusText: res.statusText}
            
            json.forEach(element => {
                const $li= document.createElement("li");
                $li.innerHTML = `${element.name}--${element.email}--${element.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsyncAwait.appendChild($fragment);
        }
        catch(err){
            console.error("algo salio mal, verifica que la url a la que intentas acceder sea real prrr");
            let message = err.statusText || "ocurrio un error prr";
            $fetchAsyncAwait.innerHTML = `Error ${err.status}: ${message}`;
        }finally{
            // console.log("ete es el que siempre se ejecuta");
        }
    }
    getData();
}();

// fucnion anonima autoejecutable sintaxis de crockford
// AXIOS
((function(){
    const $axios = document.getElementById("axios"),
        $fragment =document.createDocumentFragment();
    
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        // console.log(res);
        let json = res.data;
        json.forEach(element=>{
            const $li = document.createElement("li");
            $li.innerHTML = `${element.name}--${element.email}--${element.phone}`
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment);
    })
    .catch(err=>{
        // console.log("estamos en el error", err);
        let message = err.response.statusText || "ocurrio un error prr";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(()=>{
        // console.log("esto se ejecutara de todos modos");
    });
})());

// AXIOS + ASYNC AWAIT
!function(){
    const $axiosAsync = document.getElementById("axios-async-await"),
        $fragment =document.createDocumentFragment();
        
        async function getData(){
            try{
                let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                    json = await res.data;
                    // console.log(res,json);
                    json.forEach(element=>{
                        const $li = document.createElement("li");
                        $li.innerHTML = `${element.name}--${element.email}--${element.phone}`
                        $fragment.appendChild($li);
                    });
                    $axiosAsync.appendChild($fragment);
            }catch(err){
                let message = err.response.statusText || "ocurrio un error prr";
                $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;    
            }finally{
                // console.log("se ejecuta independientemente");
            }
        }
        getData();
}();


// +++++++++++++++++++++TERMINA AJAX++++++++++++++++++++++++++++++
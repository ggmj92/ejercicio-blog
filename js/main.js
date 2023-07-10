//variables + constantes
let arrayPosts = [];



// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res=>res.json())
//     .then(respuesta=> arrayPosts = respuesta)
//     console.log(arrayPosts);

//eventos

//funciones


// const datos = async () => {
//     try {
//         let resp = await fetch("https://jsonplaceholder.typicode.com/posts")
//         if (resp.ok) {
//             resp = await resp.json()
//             arrayPosts = resp
//             console.log(arrayPosts);
//         } else {
//             throw ('error');
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };
// datos();

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response)=> {
//         if (!response.ok) {
//              throw Error(response.statusText);
//         } else {
//             response=response.json();
//             console.log(response)
//         }
//     }).catch((error)=> {
//         console.log(error);
//     });

const info = async()=>{
    try {
        let resp = await fetch('https://jsonplaceholder.typicode.com/posts')

        if(resp.ok){
            arrayPosts=await resp.json();
            pintarArray();

        }else{
            throw('error!') 
        }
    } catch (error) {
        console.log(error);
    }
};

function pintarArray() {
    const cajaPost = document.createElement('section');

    for (let i = 0; i < arrayPosts.length; i++) {
        const titulo = document.createElement('h3');
        const texto = document.createElement('p');

        titulo.textContent = arrayPosts[i].title;
        texto.textContent = arrayPosts[i].body;

        cajaPost.appendChild(titulo);
        cajaPost.appendChild(texto);
    }

    document.getElementById('titulo').appendChild(cajaPost);
    document.getElementById('texto').appendChild(cajaPost);
}

info();










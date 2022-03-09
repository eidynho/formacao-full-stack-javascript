

function job() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve('Ok, parece que funcionou!')
        }, 10000)
    })
}

job().then(msg => console.log(msg))
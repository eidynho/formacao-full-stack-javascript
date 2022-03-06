/*

    AJAX - 2005

    Aynchronous JavaScript And XML


    rotas ou endpoint

*/

    let title = document.querySelector('.title')

    let img = document.querySelector('.img')


const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText)

        console.log(response)

    }
}

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
xhttp.send()



const name = document.querySelector('#inputName').value
const inputMonthly = document.querySelector('#inputMonthly')
const selectTime = document.querySelector('#select-time') //teste (e ver o .value)
const interestRate = document.querySelector('#interest-rate')
const btnSimular = document.querySelector('#btn-simular')



btnSimular.onclick = async(e) => {
    e.preventDefault()

    const configs = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            "expr": [
                `${inputMonthly.value} * (((1 + ${interestRate.value}) ^ ${selectTime.value} - 1) / ${interestRate.value})`
            ]
            
        }),
    }


    await fetch ('http://api.mathjs.org/v4/', configs)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
        
}


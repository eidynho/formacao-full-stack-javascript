const Main = {

    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() {
        this.$title = document.querySelector('.title')
        this.$form = document.querySelector('#form')
        this.$name = document.querySelector('#inputName')
        this.$inputMonthly = document.querySelector('#inputMonthly')
        this.$selectTime = document.querySelector('#select-time')
        this.$interestRate = document.querySelector('#interest-rate')
        this.$btnSimular = document.querySelector('#btn-simular')
        this.$divResult = document.querySelector('.result')
        this.$btnRefresh = document.querySelector('.btn-refresh')
    },

    bindEvents: function() {
        const self = this

        this.$btnSimular.onclick = self.Events.simulateButton_click.bind(this)
        this.$btnRefresh.onclick = self.Events.refreshButton_click
    },

    Events: {
        simulateButton_click: async function(e) {
           e.preventDefault()

            let hasError = false
           if (!this.$name.value) {
               hasError = true
                this.$name.classList.add('error')
                this.$name.classList.remove('ok')
            } else {
                this.$name.classList.remove('error')
                this.$name.classList.add('ok')
            }

            if(!this.$inputMonthly.value) {
                hasError = true
                this.$inputMonthly.classList.add('error')
                this.$inputMonthly.classList.remove('ok')
            } else {
                this.$inputMonthly.classList.remove('error')
                this.$inputMonthly.classList.add('ok')
            }

            if(!this.$selectTime.value) {
                hasError = true
                this.$selectTime.classList.add('error')
                this.$selectTime.classList.remove('ok')
            } else {
                this.$selectTime.classList.remove('error')
                this.$selectTime.classList.add('ok')
            }

            if(!this.$interestRate.value) {
                hasError = true
                this.$interestRate.classList.add('error')
                this.$interestRate.classList.remove('ok')
            } else {
                this.$interestRate.classList.remove('error')
                this.$interestRate.classList.add('ok')
            }

            if (hasError) {
                return
            }

            const configs = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
        
                    "expr": [
                        `${this.$inputMonthly.value} * (((1 + ${this.$interestRate.value/100}) ^ ${this.$selectTime.value} - 1) / ${this.$interestRate.value/100})`
                    ]
                    
                })
            }
        
            await fetch ('http://api.mathjs.org/v4/', configs)
                .then(response => response.json())
                .then(data => {
                    const result = Number(data.result).toFixed(2)
                    const resultString = result.toString().replace(".", ",")

                    this.$title.innerHTML = 'Resultado'
                    this.$form.classList.add('none')
                    this.$divResult.innerHTML += `
                        Olá ${this.$name.value}, juntando R$ ${this.$inputMonthly.value} todo mês, com uma taxa mensal de ${this.$interestRate.value}% você terá <strong>R$ ${resultString}</strong> em ${this.$selectTime.value} meses.
                    `
                    this.$btnRefresh.classList.remove('none')
                    
                })
                .catch(error => console.log(error))

                
        },

        refreshButton_click: function() {
            location.reload()
        }
    }
}

Main.init()
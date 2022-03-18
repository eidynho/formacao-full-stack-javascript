const Main = {

    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() {
        this.$name = document.querySelector('#inputName').value
        this.$inputMonthly = document.querySelector('#inputMonthly')
        this.$selectTime = document.querySelector('#select-time')
        this.$interestRate = document.querySelector('#interest-rate')
        this.$btnSimular = document.querySelector('#btn-simular')
    },

    bindEvents: function() {
        const self = this

        this.$btnSimular.onclick = self.Events.simulateButton_click.bind(this)
    },

    Events: {
        simulateButton_click: async function(e) {
            e.preventDefault()
        
            const configs = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
        
                    "expr": [
                        `${this.$inputMonthly.value} * (((1 + ${this.$interestRate.value}) ^ ${this.$selectTime.value} - 1) / ${this.$interestRate.value})`
                    ]
                    
                }),
            }
        
            await fetch ('http://api.mathjs.org/v4/', configs)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
        }
    }
}

Main.init()
















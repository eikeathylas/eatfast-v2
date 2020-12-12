(function(window, document) {
    'use strict'
    const supports = !!document.querySelector

    const defaults = {
        eleMain: document.getElementById('info'),

        logo: '#logo',
        tables: '#tables',

        ordem: ["Entrada", "Caldinho", "Bebidas", "Cervejas", "Vinhos"]
    }

    const settings = {}

    const main = (event) => {
        sets()
        constructLayout()
    }

    const sets = () => {
        if (localStorage.getItem('mode') == 'true') {
            settings.body.classList.add('dark')
            settings.logo.src = 'img/Eat Fast - Preto.png'
        } else {
            settings.body.classList.remove('dark')
            settings.logo.src = 'img/Eat Fast - Branco.png'
        }

    }

    const constructLayout = () => {
        var xhr = new XMLHttpRequest()
        xhr.open("POST", 'https://script.google.com/macros/s/AKfycbyB6tDLEKrjbY1mgyejY4siSRGdqqQ7bK7LQWp8lT5CMcF6NZgF/exec', false)
        xhr.send(JSON.stringify({
            method: "GET",
            sheet: "Produtos"
        }))
        var data = JSON.parse(xhr.responseText)["data"]

        var div = document.createElement('div')
        var titulo = document.createElement('h3')
        div.className = 'box1'
        titulo.innerHTML = defaults.ordem[0]
        div.appendChild(titulo)
        for (var i in data) {
            if (data[i]["category"] == defaults.ordem[0]) {
                if (data[i]["status"]) {
                    if (data[i]["photo"] != "") {
                        var div2 = document.createElement('div')
                        var div3 = document.createElement('div')
                        var div4 = document.createElement('div')
                        var product = document.createElement('p')
                        var price = document.createElement('b')
                        var hr = document.createElement('hr')
                        var img = document.createElement('img')

                        div2.className = 'row align-items-center'
                        div3.className = 'col'
                        div4.className = 'col-auto'
                        price.className = 'float-right'
                        img.className = 'img-product'

                        if (data[i]["desc"] != "") {
                            var desc = document.createElement('p')
                            desc.className = 'desc'

                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            desc.innerHTML = data[i]["desc"]
                            img.src = data[i]["photo"]

                            div3.appendChild(price)
                            div3.appendChild(product)
                            div3.appendChild(desc)
                            div4.appendChild(img)
                            div2.appendChild(div3)
                            div2.appendChild(div4)
                            div.appendChild(div2)
                            div.appendChild(hr)
                        } else {
                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            img.src = data[i]["photo"]

                            div3.appendChild(price)
                            div3.appendChild(product)
                            div4.appendChild(img)
                            div2.appendChild(div3)
                            div2.appendChild(div4)
                            div.appendChild(div2)
                            div.appendChild(hr)
                        }
                    } else {
                        var product = document.createElement('p')
                        var price = document.createElement('b')
                        var hr = document.createElement('hr')
                        price.className = 'float-right'

                        if (data[i]["desc"] != "") {
                            var desc = document.createElement('p')
                            desc.className = 'desc'

                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            desc.innerHTML = data[i]["desc"]

                            product.appendChild(price)
                            div.appendChild(product)
                            div.appendChild(desc)
                            div.appendChild(hr)
                        } else {
                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')

                            product.appendChild(price)
                            div.appendChild(product)
                            div.appendChild(hr)
                        }
                    }
                }
            }
        }
        div.removeChild(hr)
        settings.tables.appendChild(div)


        var div = document.createElement('div')
        var titulo = document.createElement('h3')
        div.className = 'box2'
        titulo.innerHTML = defaults.ordem[1]
        div.appendChild(titulo)
        for (var i in data) {
            if (data[i]["category"] == defaults.ordem[1]) {
                if (data[i]["status"]) {
                    if (data[i]["photo"] != "") {
                        var div2 = document.createElement('div')
                        var div3 = document.createElement('div')
                        var div4 = document.createElement('div')
                        var product = document.createElement('p')
                        var price = document.createElement('b')
                        var hr = document.createElement('hr')
                        var img = document.createElement('img')

                        div2.className = 'row align-items-center'
                        div3.className = 'col'
                        div4.className = 'col-auto'
                        price.className = 'float-right'
                        img.className = 'img-product'

                        if (data[i]["desc"] != "") {
                            var desc = document.createElement('p')
                            desc.className = 'desc'

                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            desc.innerHTML = data[i]["desc"]
                            img.src = data[i]["photo"]

                            div3.appendChild(price)
                            div3.appendChild(product)
                            div3.appendChild(desc)
                            div4.appendChild(img)
                            div2.appendChild(div3)
                            div2.appendChild(div4)
                            div.appendChild(div2)
                            div.appendChild(hr)
                        } else {
                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            img.src = data[i]["photo"]

                            div3.appendChild(price)
                            div3.appendChild(product)
                            div4.appendChild(img)
                            div2.appendChild(div3)
                            div2.appendChild(div4)
                            div.appendChild(div2)
                            div.appendChild(hr)
                        }
                    } else {
                        var product = document.createElement('p')
                        var price = document.createElement('b')
                        var hr = document.createElement('hr')
                        price.className = 'float-right'

                        if (data[i]["desc"] != "") {
                            var desc = document.createElement('p')
                            desc.className = 'desc'

                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            desc.innerHTML = data[i]["desc"]

                            product.appendChild(price)
                            div.appendChild(product)
                            div.appendChild(desc)
                            div.appendChild(hr)
                        } else {
                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')

                            product.appendChild(price)
                            div.appendChild(product)
                            div.appendChild(hr)
                        }
                    }
                }
            }
        }
        div.removeChild(hr)
        settings.tables.appendChild(div)


        var div = document.createElement('div')
        var titulo = document.createElement('h3')
        div.className = 'box1'
        titulo.innerHTML = defaults.ordem[2]
        div.appendChild(titulo)
        for (var i in data) {
            if (data[i]["category"] == defaults.ordem[2]) {
                if (data[i]["status"]) {
                    if (data[i]["photo"] != "") {
                        var div2 = document.createElement('div')
                        var div3 = document.createElement('div')
                        var div4 = document.createElement('div')
                        var product = document.createElement('p')
                        var price = document.createElement('b')
                        var hr = document.createElement('hr')
                        var img = document.createElement('img')

                        div2.className = 'row align-items-center'
                        div3.className = 'col'
                        div4.className = 'col-auto'
                        price.className = 'float-right'
                        img.className = 'img-product'

                        if (data[i]["desc"] != "") {
                            var desc = document.createElement('p')
                            desc.className = 'desc'

                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            desc.innerHTML = data[i]["desc"]
                            img.src = data[i]["photo"]

                            div3.appendChild(price)
                            div3.appendChild(product)
                            div3.appendChild(desc)
                            div4.appendChild(img)
                            div2.appendChild(div3)
                            div2.appendChild(div4)
                            div.appendChild(div2)
                            div.appendChild(hr)
                        } else {
                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            img.src = data[i]["photo"]

                            div3.appendChild(price)
                            div3.appendChild(product)
                            div4.appendChild(img)
                            div2.appendChild(div3)
                            div2.appendChild(div4)
                            div.appendChild(div2)
                            div.appendChild(hr)
                        }
                    } else {
                        var product = document.createElement('p')
                        var price = document.createElement('b')
                        var hr = document.createElement('hr')
                        price.className = 'float-right'

                        if (data[i]["desc"] != "") {
                            var desc = document.createElement('p')
                            desc.className = 'desc'

                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            desc.innerHTML = data[i]["desc"]

                            product.appendChild(price)
                            div.appendChild(product)
                            div.appendChild(desc)
                            div.appendChild(hr)
                        } else {
                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')

                            product.appendChild(price)
                            div.appendChild(product)
                            div.appendChild(hr)
                        }
                    }
                }
            }
        }
        div.removeChild(hr)
        settings.tables.appendChild(div)


        var div = document.createElement('div')
        var titulo = document.createElement('h3')
        div.className = 'box2'
        titulo.innerHTML = defaults.ordem[3]
        div.appendChild(titulo)
        for (var i in data) {
            if (data[i]["category"] == defaults.ordem[3]) {
                if (data[i]["status"]) {
                    if (data[i]["photo"] != "") {
                        var div2 = document.createElement('div')
                        var div3 = document.createElement('div')
                        var div4 = document.createElement('div')
                        var product = document.createElement('p')
                        var price = document.createElement('b')
                        var hr = document.createElement('hr')
                        var img = document.createElement('img')

                        div2.className = 'row align-items-center'
                        div3.className = 'col'
                        div4.className = 'col-auto'
                        price.className = 'float-right'
                        img.className = 'img-product'

                        if (data[i]["desc"] != "") {
                            var desc = document.createElement('p')
                            desc.className = 'desc'

                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            desc.innerHTML = data[i]["desc"]
                            img.src = data[i]["photo"]

                            div3.appendChild(price)
                            div3.appendChild(product)
                            div3.appendChild(desc)
                            div4.appendChild(img)
                            div2.appendChild(div3)
                            div2.appendChild(div4)
                            div.appendChild(div2)
                            div.appendChild(hr)
                        } else {
                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            img.src = data[i]["photo"]

                            div3.appendChild(price)
                            div3.appendChild(product)
                            div4.appendChild(img)
                            div2.appendChild(div3)
                            div2.appendChild(div4)
                            div.appendChild(div2)
                            div.appendChild(hr)
                        }
                    } else {
                        var product = document.createElement('p')
                        var price = document.createElement('b')
                        var hr = document.createElement('hr')
                        price.className = 'float-right'

                        if (data[i]["desc"] != "") {
                            var desc = document.createElement('p')
                            desc.className = 'desc'

                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            desc.innerHTML = data[i]["desc"]

                            product.appendChild(price)
                            div.appendChild(product)
                            div.appendChild(desc)
                            div.appendChild(hr)
                        } else {
                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')

                            product.appendChild(price)
                            div.appendChild(product)
                            div.appendChild(hr)
                        }
                    }
                }
            }
        }
        div.removeChild(hr)
        settings.tables.appendChild(div)


        var div = document.createElement('div')
        var titulo = document.createElement('h3')
        div.className = 'box1'
        titulo.innerHTML = defaults.ordem[4]
        div.appendChild(titulo)
        for (var i in data) {
            if (data[i]["category"] == defaults.ordem[4]) {
                if (data[i]["status"]) {
                    if (data[i]["photo"] != "") {
                        var div2 = document.createElement('div')
                        var div3 = document.createElement('div')
                        var div4 = document.createElement('div')
                        var product = document.createElement('p')
                        var price = document.createElement('b')
                        var hr = document.createElement('hr')
                        var img = document.createElement('img')

                        div2.className = 'row align-items-center'
                        div3.className = 'col'
                        div4.className = 'col-auto'
                        price.className = 'float-right'
                        img.className = 'img-product'

                        if (data[i]["desc"] != "") {
                            var desc = document.createElement('p')
                            desc.className = 'desc'

                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            desc.innerHTML = data[i]["desc"]
                            img.src = data[i]["photo"]

                            div3.appendChild(price)
                            div3.appendChild(product)
                            div3.appendChild(desc)
                            div4.appendChild(img)
                            div2.appendChild(div3)
                            div2.appendChild(div4)
                            div.appendChild(div2)
                            div.appendChild(hr)
                        } else {
                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            img.src = data[i]["photo"]

                            div3.appendChild(price)
                            div3.appendChild(product)
                            div4.appendChild(img)
                            div2.appendChild(div3)
                            div2.appendChild(div4)
                            div.appendChild(div2)
                            div.appendChild(hr)
                        }
                    } else {
                        var product = document.createElement('p')
                        var price = document.createElement('b')
                        var hr = document.createElement('hr')
                        price.className = 'float-right'

                        if (data[i]["desc"] != "") {
                            var desc = document.createElement('p')
                            desc.className = 'desc'

                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')
                            desc.innerHTML = data[i]["desc"]

                            product.appendChild(price)
                            div.appendChild(product)
                            div.appendChild(desc)
                            div.appendChild(hr)
                        } else {
                            product.innerHTML = data[i]["product"]
                            price.innerHTML = 'R$ ' + data[i]["price"].toFixed(2).replace('.', ',')

                            product.appendChild(price)
                            div.appendChild(product)
                            div.appendChild(hr)
                        }
                    }
                }
            }
        }
        div.removeChild(hr)
        settings.tables.appendChild(div)
    }

    const identific = (event) => {
        // console.log(event.composedPath())
        // console.log(event.composedPath()[0].value)
        // console.log(event.composedPath()[0].id)
        // console.log(event.composedPath().length)


        if (event.composedPath()[0].value == 'light') {
            settings.body.classList.toggle('dark')

            if (settings.body.className == 'dark') {
                settings.logo.src = 'img/Eat Fast - Preto.png'
                localStorage.setItem('mode', true)
            } else {
                settings.logo.src = 'img/Eat Fast - Branco.png'
                localStorage.setItem('mode', false)
            }

        }
    }

    const setUp = () => {
        settings.body = defaults.eleMain
        settings.logo = defaults.eleMain.querySelector(defaults.logo)
        settings.tables = defaults.eleMain.querySelector(defaults.tables)
    }

    const events = () => {
        window.addEventListener('load', main)
        window.addEventListener('click', identific)
    }

    const init = (options) => {
        if (!supports) return
        setUp()
        events()
    }

    init()
}(window, document))
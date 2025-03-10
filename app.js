const cups = [
    {name: 'Cup(easy)',
        value: "3 value",
        image: './Снимок экрана 2025-03-10 213618.png'
    },
    {name:"Cup(medium)",
        value: "7 value",
        image: "./Снимок экрана 2025-03-10 214424.png"

    },
    {name:"Cup(Event cup 2025)",
        value: "15 value",
        image: "./Снимок экрана 2025-03-10 214424.png"

    }
]
const conteyner = document.getElementById('card-conteyner')
function createcard(Cup){
    const card = document.createElement("div")
    const  title = document.createElement("h3")
    title.innerHTML = Cup.name
    card.appendChild(title)
    const value = document.createElement("div")
    value.innerHTML = Cup.value
    card.appendChild(value)
    const image = document.createElement("img")
    image.src = Cup.image
    card.appendChild(image)
    conteyner.appendChild(card)
}
cups.forEach(Cup=>createcard(Cup))
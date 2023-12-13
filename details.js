let id = new URLSearchParams(window.location.search).get("id")
const sekiller= document.querySelector('.sekil-two')
fetch(`http://localhost:3000/security/${id}`)
.then(response=>response.json())
.then (sekill=>{
    sekiller.innerHTML +=`
    <div class="pict">
            <img src="${sekill.image}" alt="">
            </div>
            <div class="pict2">
                <h3>${sekill.name}</h3>
                <p class="text9">${sekill.desc}</p>
            </div>`
    
})
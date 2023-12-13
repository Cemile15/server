const sekiller = document.querySelector('.sekil')
fetch("http://localhost:3000/security")
.then(response=>response.json())
.then(data=>{
    data.forEach(bsekil => {
        sekiller.innerHTML +=`
        <div class="fff">
        <div class="picture"></div>
        <div class="text3">
            <a href="#">
                <h3>${bsekil.name}</h3>
            </a>
            <p class="text4">
                ${bsekil.desc}
            </p>
            <button type="button" class="btn2"><a href="./details.html?id=${bsekil.id}">Details</a></button>
            <button type="button" class="btn3">Delete</button>
        </div>
    </div>
        `
    });
})
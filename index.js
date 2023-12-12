const sekiller = document.querySelector('.sekil')
fetch("http://localhost:3000")
.then(response=>response.json())
.then(data=>{
    data.forEach(bsekil => {
        sekiller.innerHTML +=`
        <div class="fff">
        <div class="picture"></div>
        <div class="text3">
            <a href="#">
                <h3>Basic & Common Repairs</h3>
            </a>
            <p class="text4">
                Computer users and programmers have become so accustomed to using Windows, even for the
                changing capabilities and the appearances of the graphical.
            </p>
            <input type="button" class="btn2" value="">
            <input type="button" class="btn3" value="">
        </div>
    </div>
    <div class="fff">
        <div class="picture1"></div>
        <div class="text3">
            <a href="#">
                <h3>Brake Repairs&Services</h3>
            </a>
            <p class="text4">
                Computer users and programmers have become so accustomed to using Windows, even for the
                changing capabilities and the appearances of the graphical.
            </p>
            <input type="button" class="btn2" value="">
            <input type="button" class="btn3" value="">
        </div>
    </div>
    <div class="fff">
        <div class="picture2"></div>
        <div class="text3">
            <a href="#">
                <h3>Preventive Maintenance</h3>
            </a>
            <p class="text4">
                Computer users and programmers have become so accustomed to using Windows, even for the
                changing capabilities and the appearances of the graphical.
            </p>
            <input type="button" class="btn2" value="">
            <input type="button" class="btn3" value="">
        </div>
        `
    });
})
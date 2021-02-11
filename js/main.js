/* varibles */
let navIcon     = document.querySelector(".nav-icon i"),
    boxIcon     = document.querySelector(".box-icon i"),
    navbar      = document.querySelector(".navbar"),
    settingsBox = document.querySelector(".settings-box"),
    mainColor = localStorage.getItem("main-color"),
    imgSrc = document.querySelector(".about-img img");

// chick on Local Storage
if (mainColor !== null) {
    document.documentElement.style.setProperty("--main-color", mainColor);        
    document.querySelectorAll(".colors-list li").forEach(ele => {
            // Remove color-active Class
            ele.classList.remove("color-active");
            // Add color-active Class
            if (ele.dataset.color == mainColor) {
                 ele.classList.add("color-active");
            }
           
        });   
}

// Chaing  About Image
    
let getAboutImg = localStorage.getItem("about-img");
// chick on Local Storage
if (getAboutImg !== null) { 
    imgSrc.src = getAboutImg;
}


// Show and Hied the Navbar
navIcon.onclick = function () {
    navbar.classList.toggle('nav-show');
}
// Show and Hied the Box Setting
boxIcon.onclick = function () {
    settingsBox.classList.toggle('box-show');
    this.classList.toggle('fa-spin');
}

// Select All Li
let colorList = document.querySelectorAll(".colors-list li");

//  Loop For Li
colorList.forEach(li => {
    li.addEventListener('click', (e) => {
        // chaing value of Main Color
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        // Add Main Color in local Storage
        localStorage.setItem("main-color", e.target.dataset.color);
        // Remove color-active Class
        let activeList = e.target.parentElement.querySelectorAll(".color-active");
        activeList.forEach(ele => {
            ele.classList.remove("color-active");
        });

        // Add color-active Class
        e.target.classList.add("color-active");


        // Chaing  About Image
        let aboutImgSrc = `images/about/${e.target.dataset.img}.svg`;
        imgSrc.src = aboutImgSrc;
        // Add Main Color in local Storage
        localStorage.setItem("about-img", aboutImgSrc);
    });
});


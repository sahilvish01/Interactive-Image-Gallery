let grid = document.querySelector(".grid")
let ZoomIn = document.querySelector(".ZoomIn")
let cross = document.querySelector(".cross")
let Images = document.querySelectorAll("img")

let currentImage = 0;

let arrImg = [...grid.children]

grid.addEventListener("click", (e) =>
{

    
    if(e.target.tagName != "IMG")
    {
        return;
    }


    ZoomIn.style.display = "block"
    ZoomIn.style.backgroundImage = `url(${e.target.getAttribute("src")})`;
    currentImage = arrImg.indexOf(e.target);
    
})

cross.addEventListener(`click`, () => 
{
    ZoomIn.style.display = "none"
})

ZoomIn.addEventListener(`click`, (e) => 
{
    if(e.target.tagName != "BUTTON")
    {
        return;
    }

    if(e.target.textContent == ">")
    {
        currentImage = (currentImage + 1)%(Images.length);
        ZoomIn.style.backgroundImage = `url(${Images[currentImage].getAttribute(`src`)})`;
    }

    if(e.target.textContent == "<")
    {
        currentImage = (currentImage - 1);
        if(currentImage < 0)
        {
            currentImage = (Images.length-1)
        }
        ZoomIn.style.backgroundImage = `url(${Images[currentImage].getAttribute(`src`)})`;
    }
})
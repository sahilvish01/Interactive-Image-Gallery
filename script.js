let grid = document.querySelector(".grid")
let ZoomIn = document.querySelector(".ZoomIn")
let cross = document.querySelector(".cross")
let Images = document.querySelectorAll("img")

let currentImage = 0;
// console.dir(Images);
// console.log(Images["0"].getAttribute(`src`));

let arrImg = [...grid.children]

console.log(arrImg);

grid.addEventListener("click", (e) =>
{

    // console.log(e.target);
    
    console.log(arrImg.indexOf(e.target));
    if(e.target.tagName != "IMG")
    {
        return;
    }

    // console.log("clicked");

    ZoomIn.style.display = "block"
    ZoomIn.style.backgroundImage = `url(${e.target.getAttribute("src")})`;
    // currentImage = Number(`${e.target.getAttribute("id")}`)
    currentImage = arrImg.indexOf(e.target);
    console.log(currentImage);
    
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
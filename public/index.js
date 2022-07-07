import { createMainContent } from './main.js';

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);
};

window.onload = () => {
    initializePage();
    createMainContent();
};
const updatepicture = async (e) => {
    e.preventDefault();
    // let itemName = "Test"
    // let newcatpicture = document.createElement('li')
    // newcatpicture.innerHTML = itemName
    // Catpic.appendChild(newcatpicture)
        // Fetch image from API and set img url
        try {
            const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
            // Converts to JSON
            const kittenData = await kittenResponse.json();
            // console.log(kittenData);
            const kittenImg = document.querySelector("img");
            kittenImg.src = kittenData[0].url;
        } catch (e) {
            console.log("Failed to fetch image", e);
        }
    };



window.addEventListener("DOMContentLoaded", event => {
    const changePicBtn = document.getElementById('picturechange')
    changePicBtn.addEventListener('click', updatepicture)

})

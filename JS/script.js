// Määritellään 16 testattavaa väriä
const colors = [
    { name: "Fiesta", hex: "#DD4132" },
    { name: "Jester Red", hex: "#9E1030" },
    { name: "Turmeric", hex: "#FE840E" },
    { name: "Living Coral", hex: "#FF6F61" },
    { name: "Pink Peacock", hex: "#C62168" },
    { name: "Pepper Stem", hex: "#8D9440" },
    { name: "Aspen Gold", hex: "#FFD662" },
    { name: "Princess Blue", hex: "#00539C" },
    { name: "Toffee", hex: "#755139" },
    { name: "Mango Mojito", hex: "#D69C2F" },
    { name: "Terrarium Moss", hex: "#616247" },
    { name: "Sweet Lilac", hex: "#E8B5CE" },
    { name: "Soybean", hex: "#D2C29D" },
    { name: "Eclipse", hex: "#343148" },
    { name: "Sweet Corn", hex: "#F0EAD6" },
    { name: "Brown Granite", hex: "#615550" }
];


document.addEventListener('DOMContentLoaded', function() {
    createColorPalette();
});

// Funktio väripaletin luomiseen
function createColorPalette() {
    const paletteElement = document.getElementById('color-palette');
    let paletteHTML = '';
    
    colors.forEach(color => {
        paletteHTML += `
            <div class="color-swatch card" style="background-color: ${color.hex}" data-color="${color.hex}" data-name="${color.name}">
                <div class="color-tooltip">${color.name} - ${color.hex}</div>
            </div>`;
    });
    
    paletteElement.innerHTML = paletteHTML;
}
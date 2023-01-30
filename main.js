import './style.css'

const COLOR_PALLETE= {
  '#574D68': 'Independance Violet',
  '#F4DBD8' : 'Misty Rose:',
  '#BEA8A7': 'Tuscany pale',
  '#81B29A': 'Green Sheen',
  '#C1DBE3': 'Columbia Blue',
  '#061A40': 'Oxford Blue',
  '#C6ECAE' : 'Tea Green',
  '#38726C': 'Myrtle Green',
  '#846B8A': 'Chinese Violet',
  '#60492C': 'Dark Brown',
  '#BB8588': 'Old Rose',
  '#D8A48F': 'Tumbleweed',
  '#EFEBCE': 'Beige',
  '#D6CE93': 'Mediume Champagne',
  '#A3A380': 'Artichoke',
}

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALLETE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALLETE[color];

    colorPickerSelect.append(option);
  })
}
const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  colorPickerSelect.addEventListener("change", (event) => {

    const newColor = event.target.value; 
    //Almacenamos el código de color

    document.body.style.backgroundColor = newColor;
    //Le aplicamos el background color con el código de color seleccionado
    
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();

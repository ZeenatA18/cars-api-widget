const allCarsTemplate = document.querySelector('.allCarsTemplate');
const carsTemplate = Handlebars.compile(allCarsTemplate.innerText);

const carsElem = document.querySelector('.cars');

axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
    .then(result => {
        const cars_results = result.data;

        carsElem.innerHTML = carsTemplate({
            cars_results
        })
    })

const allColorsTemplate = document.querySelector('.allColorsTemplate');
const colorsTemplate = Handlebars.compile(allColorsTemplate.innerText);

const colorElem = document.querySelector('.all_colors');


axios
    .get("https://api-tutor.herokuapp.com/v1/colors")
    .then(result => {
        const colors = result.data;

        colorElem.innerHTML = colorsTemplate({
            colors
        })
    })

const allBrandsTemplate = document.querySelector('.allBrandsTemplate');
const brandsTemplate = Handlebars.compile(allBrandsTemplate.innerText);

const brandsElem = document.querySelector('.brands');


axios
    .get("https://api-tutor.herokuapp.com/v1/makes")
    .then(result => {
        const brands = result.data;

        brandsElem.innerHTML = brandsTemplate({
            brands
        })
    })
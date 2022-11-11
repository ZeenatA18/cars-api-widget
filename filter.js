const allBrandsTemplate = document.querySelector('.allBrandsTemplate');
const brandsTemplate = Handlebars.compile(allBrandsTemplate.innerText);

const makes = document.querySelector('.makes')

axios
    .get("https://api-tutor.herokuapp.com/v1/makes")
    .then(result => {
        const brands = result.data;

        makes.innerHTML = brandsTemplate({
            brands
        })
    })

const allColorsTemplate = document.querySelector('.allcolorsTemplate');
const colorsTemplate = Handlebars.compile(allColorsTemplate.innerText);

const color = document.querySelector('.colorss')

axios
    .get("https://api-tutor.herokuapp.com/v1/colors")
    .then(result => {
        const colors = result.data;

        color.innerHTML = colorsTemplate({
            colors
        })
    })

 const submit = document.querySelector('.submit')
 const filterMakeTemplate = document.querySelector('.filterMakeTemplate');
 const makeTemplate = Handlebars.compile(filterMakeTemplate.innerText);

 const filter = document.querySelector('.filter')


 submit.addEventListener('click', function(){
   
if(makes.value && color.value){
    axios
    .get("https://api-tutor.herokuapp.com/v1/cars/make/"+makes.value+"/color/"+color.value)
    .then(result => {
        const filtering = result.data;

        console.log(filtering);
        filter.innerHTML = makeTemplate({
            filtering
            })

    })
}

else if(color.value){
    axios
    .get("https://api-tutor.herokuapp.com/v1/cars/color/"+color.value)
    .then(result => {
        const filtering = result.data;

        console.log(filtering);
        filter.innerHTML = makeTemplate({
            filtering
            })

    })
}

     else if (makes.value){
         axios
         .get("https://api-tutor.herokuapp.com/v1/cars/make/"+makes.value)
         .then(result => {
            const filtering = result.data;

            console.log(filtering);
            filter.innerHTML = makeTemplate({
                filtering
                })
    
         })
     }
     else{
        filter.innerHTML = "Please select a car brand or color or both! "
     }

    
         })
let css = document.querySelector('h3');
let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let body = document.querySelector('#gradient');
let random = document.querySelector('#random');
// console.log(css);
// console.log(color1);
// console.log(color2);

function setGradient() {
    
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ';';
}


color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);


body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

css.textContent = body.style.background + ';';



let random_hex_color_code1 = () => {
    let m = (Math.random() * 0xfffff * 1000000).toString(16);
    return `#${m.slice(0, 6)}`;
    
};
let random_hex_color_code2 = () => {
    let m = (Math.random() * 0xfffff * 1000000).toString(16);
    return `#${m.slice(0, 6)}`;
};

random.addEventListener('click', () => {

    color1 = random_hex_color_code1();
    color2 = random_hex_color_code2();
    body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    css.textContent = body.style.background + ';';
    return
})
setGradient();
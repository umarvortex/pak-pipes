let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick= () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll= () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}






const typed = new Typed('.multiple-text', {
    strings: [ 'Anywhere in Karachi', 
        'Fast and Secure Delivery',
        'Best Quality Pipes', 
        'Affordable Prices', 
        "Karachi's Most Trusted Pipes Supplier",
        '24/7 Customer Support', 
        'No.1 in Karachi', 
        'Same-Day Delivery Guaranteed',
        'Wide Range of Products', 
        'Trusted by Thousands', 
        'Easy Online Ordering',
        'Premium Quality, Affordable Rates',
        'Durable and Reliable Pipes',
        'Certified and Tested Products',
        'Trusted by Homeowners and Builders', 
        'Quick Installation Services',
        'Eco-Friendly Pipes and Fittings',],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1050,
    loop: true,
});

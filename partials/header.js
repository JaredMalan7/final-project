export {buildHeader};
  
function buildHeader(){


    const header = document.createElement('header');
    header.classList.add('header-container');

    // Logo
    const logoDiv = document.createElement('div');
    const logo = document.createElement('img');
    logo.classList.add('img-logo');
    logo.setAttribute('src', '../images/yum-logo.png');
    const logoLink = document.createElement('a');
    logoLink.setAttribute('href', '../index.html');
    logoLink.appendChild(logo);
    logoDiv.appendChild(logoLink);
    header.appendChild(logoDiv);
 
    //Navigation Bar
    const nav = document.createElement('nav');
    nav.classList.add('desktop-nav');
    const ul = document.createElement('ul');
    ul.classList.add('navigation');


    // Home Page Link
    const home = document.createElement('li');
    home.innerHTML = '<a href="index.html">Home</a>';
    ul.appendChild(home);

    // Recipes Page Link
    const recipes = document.createElement('li');
    recipes.innerHTML = '<a href="recipes.html">Recipes</a>';
    ul.appendChild(recipes);

    // About Us    
    const about = document.createElement('li');
    about.innerHTML = '<a href="about-us.html">About Us</a>';
    ul.appendChild(about);


    document.body.insertBefore(header, document.body.firstChild);


    // User
    const user = document.createElement('div');
    user.innerHTML = '<a href="../pages/user.html"><img class="user-icon" src="../images/user-icon-wt.png"></a>';
    user.classList.add('user-img')
   header.appendChild(user);    

    nav.appendChild(ul);
    header.appendChild(nav);


    //hambuger menu
    const hamburger = document.createElement('button')
    hamburger.innerHTML = '<span id="hamburger"> &#9776; </span><span class="hidden close-btn">x</span></button>';
    hamburger.classList.add('menu');
    header.appendChild(hamburger)


    const menubutton = document.querySelector('.menu');
    const mainnav = document.querySelector('.navigation');
    const closebutton = document.querySelector('.hidden');
    const hamburgerBtn = document.querySelector('#hamburger');

    menubutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive');
        closebutton.classList.toggle('hidden');
        hamburgerBtn.classList.toggle('hidden');
    }, false);



    header.appendChild(nav);

}


function createHome(){
    const home = document.createElement("div");
    home.classList.add("home");

    const title = document.createElement("h1");
    title.textContent="Welcome to Food World !";
    const quote = document.createElement("h5");
    quote.textContent = "Good Food Is Good Mood!";
    home.appendChild(title);
    home.appendChild(quote);

    const about = document.createElement("div");
    about.classList.add("about-card");
    const aboutheading = document.createElement("h3");
    aboutheading.textContent = "About";
    const para = document.createElement("p");
    para.classList.add("about-para");
    para.textContent="It's time to eat good food and relax. We here at Food world believe that Good Food is Good Mood. So what are you waiting for? Enjoy delicious, healty food with your friends and family in the Food World! ";

    about.appendChild(aboutheading);
    about.appendChild(para);
    home.appendChild(about);

    return home;
}
function navBtnActive() {
    const activeBtn = document.querySelector('.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const homeBtn = document.getElementById("home");
    homeBtn.classList.add('active');
  }

function loadHome(){
    const content = document.getElementById("tab-content");

    content.textContent = "";
    navBtnActive();
    const home = createHome();
    content.appendChild(home);
}

export {loadHome};
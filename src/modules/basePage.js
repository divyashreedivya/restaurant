import { create } from "lodash";

function createBtn(id,text){
    const btn = document.createElement("button");
    btn.setAttribute("id",id);
    btn.innerText=text;
    return btn;
}

function createNav(){
    const nav = document.createElement("nav");
    nav.setAttribute("id","nav");

    const homeBtn = createBtn("home","Home");
    const menuBtn = createBtn("menu","Menu");
    const contactBtn = createBtn("contact","Contact");
    
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function createTabContent(){
    const content = document.createElement("section");
    content.setAttribute("id","tab-content");
    return content;
}

function createFooter(){
    const footer = document.createElement("footer");
    const res = document.createElement("span");
    res.classList.add("footer-span1");
    res.textContent = "Food World";
    const dev = document.createElement("span");
    dev.classList.add("footer-span2");
    dev.textContent= "Developed with ❤️ by Divyashree";
    footer.appendChild(res);
    footer.appendChild(dev);

    return footer;
}

function loadPage(){
    const content = document.getElementById("content");
    const nav = createNav();
    content.appendChild(nav);

    const tabContent = createTabContent();
    content.appendChild(tabContent);

    const footer = createFooter();
    content.appendChild(footer);
}

export {loadPage};
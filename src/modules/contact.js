function navBtnActive() {
    const activeBtn = document.querySelector('.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const contactBtn = document.getElementById("contact");
    contactBtn.classList.add('active');
  }

function createContact(){
    const contact = document.createElement("div");
    contact.classList.add("contact");
    
    const title = document.createElement("h1");
    title.textContent = "Contact Us";
    contact.appendChild(title);

    const content = document.createElement("div");
    content.classList.add("contact-card");
    
    const hours = document.createElement("p");
    hours.classList.add("hours");
    hours.innerHTML="<span>Hours :</span><ul><li>Mon-Thu : 7.30am- 9pm</li><li>Fri-Sun : 7.30am-11pm</li></ul>";
    const location = document.createElement("p");
    location.innerHTML = "<span>Location :</span> Jalebi Nagar";
    const phone = document.createElement(("p"));
    phone.innerHTML = "<span>Phone No :</span> xxxxxxxxxx";
    
    content.appendChild(hours);
    content.appendChild(location);
    content.appendChild(phone);
    contact.appendChild(content);

    return contact;

}

function loadContact(){
    const content = document.getElementById("tab-content");

    content.textContent = "";
    navBtnActive();
    const contact = createContact();
    content.appendChild(contact);

}    

export {loadContact};
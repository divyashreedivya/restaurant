function navBtnActive() {
    const activeBtn = document.querySelector('.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const menuBtn = document.getElementById("menu");
    menuBtn.classList.add('active');
  }

function createFood(text, price){
    const food = document.createElement("tr");
    food.classList.add("food-tr");
    const foodname = document.createElement("td");
    foodname.classList.add("food-td");
    foodname.textContent = text;
    const foodprice = document.createElement("td");
    foodprice.classList.add("food-td");
    foodprice.textContent = "Rs."+ price;

    food.appendChild(foodname);
    food.appendChild(foodprice);

    return food;
}

function IceCream(){
    const content = document.createElement("div");
    const title = document.createElement("h3");
    title.classList.add("food-title");
    title.textContent="Ice creams";
    content.appendChild(title);
    const icecreamtable = document.createElement("table");
    icecreamtable.classList.add("food-table");
    const icecreams = [
        createFood(
            "Gadbad",
            "110"
        ),
        createFood(
            "Tiramisu",
            "180"
        ),
        createFood(
            "Falooda",
            "100"
        ),
        createFood(
            "Dilkush",
            "170"
        )
    ];
    icecreams.forEach((icecream)=>{
        icecreamtable.appendChild(icecream);
    });
    content.appendChild(icecreamtable);
    return content;
}
function Chaats(){
    const content = document.createElement("div");
    const title = document.createElement("h3");
    title.classList.add("food-title");
    title.textContent="Chaats";
    content.appendChild(title);
    const chaattable = document.createElement("table");
    chaattable.classList.add("food-table");
    const chaats = [
        createFood(
            "Sev Puri",
            "60"
        ),
        createFood(
            "Dahi Puri",
            "70"
        ),
        createFood(
            "Bhel Puri",
            "50"
        ),
        createFood(
            "Pani Puri",
            "50"
        ),
        createFood(
            "Masala Puri",
            "50"
        ),
        createFood(
            "Pav Bhaji",
            "45"
        ),
        createFood(
            "Vada Pav",
            "35"
        ),
        
    ];
    chaats.forEach((chaat)=>{
        chaattable.appendChild(chaat);
    });
    content.appendChild(chaattable);
    return content;
}

function Soups(){
    const content = document.createElement("div");
    const title = document.createElement("h3");
    title.classList.add("food-title");
    title.textContent="Soups";
    content.appendChild(title);
    const souptable = document.createElement("table");
    souptable.classList.add("food-table");
    const soups = [
        createFood(
            "Tomato Soup",
            "70"
        ),
        createFood(
            "Veg Soup",
            "75"
        ),
        createFood(
            "Sweet Corn Soup",
            "75"
        ),
        createFood(
            "Hot & Sour Soup",
            "85"
        ),
        createFood(
            "Palak Soup",
            "85"
        )
    ];
    soups.forEach((soup)=>{
        souptable.appendChild(soup);
    });
    content.appendChild(souptable);
    return content;    
}

function Starters(){
    const content = document.createElement("div");
    const title = document.createElement("h3");
    title.classList.add("food-title");
    title.textContent="Starters";
    content.appendChild(title);
    const starterstable = document.createElement("table");
    starterstable.classList.add("food-table");
    const starters = [
        createFood(
            "Gobi Manchurian",
            "110"
        ),
        createFood(
            "Gobi Chilly",
            "120"
        ),
        createFood(
            "Panner Chilly",
            "150"
        ),
        createFood(
            "Babycorn dry",
            "150"
        ),
        createFood(
            "Paneer Spring Roll",
            "160"
        ),
        createFood(
            "Mushroom Manchurian",
            "150"
        )
    ];
    starters.forEach((starter)=>{
        starterstable.appendChild(starter);
    });
    content.appendChild(starterstable);
    return content;      
}

function Tandoori(){
    const content = document.createElement("div");
    const title = document.createElement("h3");
    title.classList.add("food-title");
    title.textContent="Tandoori";
    content.appendChild(title);
    const tandooritable = document.createElement("table");
    tandooritable.classList.add("food-table");
    const tandoories = [
        createFood(
            "Roti",
            "30"
        ),
        createFood(
            "Kulcha",
            "40"
        ),
        createFood(
            "Naan",
            "40"
        ),
        createFood(
            "Aloo Paratha",
            "60"
        ),
        createFood(
            "Garlic Naan",
            "55"
        )
    ];
    tandoories.forEach((tandoori)=>{
        tandooritable.appendChild(tandoori);
    });
    content.appendChild(tandooritable);
    return content;       
}

function SideDishes(){
    const content = document.createElement("div");
    const title = document.createElement("h3");
    title.classList.add("food-title");
    title.textContent="Side Dishes";
    content.appendChild(title);
    const sideDishtable = document.createElement("table");
    sideDishtable.classList.add("food-table");
    const sidedishes = [
        createFood(
            "Veg Kolhapuri",
            "140"
        ),
        createFood(
            "Paneer Tikka Masala",
            "200"
        ),
        createFood(
            "Veg Kadai",
            "175"
        ),
        createFood(
            "Veg Hydrabadi",
            "150"
        ),
        createFood(
            "Navaratna Kurma",
            "180"
        ),
        createFood(
            "Palak Paneer",
            "160"
        )
    ];
    sidedishes.forEach((sideDish)=>{
        sideDishtable.appendChild(sideDish);
    });
    content.appendChild(sideDishtable);
    return content;       
}

function Beverages(){   
    const content = document.createElement("div");
    const title = document.createElement("h3");
    title.classList.add("food-title");
    title.textContent="Beverages";
    content.appendChild(title);
    const beveragetable = document.createElement("table");
    beveragetable.classList.add("food-table");
    const beverages = [
        createFood(
            "Tea/Coffee",
            "25"
        ),
        createFood(
            "Lassi",
            "55"
        ),
        createFood(
            "Fresh Lemon Soda",
            "55"
        ),
        createFood(
            "Mixed Fruit Juice",
            "75"
        ),
        createFood(
            "Chocolate Milkshake",
            "80"
        )
    ];
    beverages.forEach((beverage)=>{
        beveragetable.appendChild(beverage);
    });
    content.appendChild(beveragetable);
    return content;           
}

function RiceNoodles(){
    const content = document.createElement("div");
    const title = document.createElement("h3");
    title.classList.add("food-title");
    title.textContent="Rice & Noodles";
    content.appendChild(title);
    const ricenoodletable = document.createElement("table");
    ricenoodletable.classList.add("food-table");
    const ricenoodles = [
        createFood(
            "Veg Fried Rice",
            "145"
        ),
        createFood(
            "Schezwan Fried Rice",
            "150"
        ),
        createFood(
            "Veg Pulao",
            "140"
        ),
        createFood(
            "Kashmiri Pulao",
            "160"
        ),
        createFood(
            "Veg Noodles",
            "150"
        ),
        createFood(
            "American Chopsuey",
            "175"
        )
    ];
    ricenoodles.forEach((ricenoodle)=>{
        ricenoodletable.appendChild(ricenoodle);
    });
    content.appendChild(ricenoodletable);
    return content;       
}

function createMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const title= document.createElement("h1");
    title.textContent = "Menu";

    menu.appendChild(title);

    const chaats = Chaats();
    menu.appendChild(chaats);
    const soups = Soups();
    menu.appendChild(soups);
    const starters = Starters();
    menu.appendChild(starters);
    const tandoori =Tandoori();
    menu.appendChild(tandoori);
    const sidedish = SideDishes();
    menu.appendChild(sidedish);
    const ricenoodles = RiceNoodles();
    menu.appendChild(ricenoodles);
    const beverages= Beverages();
    menu.appendChild(beverages);
    const icecream = IceCream();
    menu.appendChild(icecream);    

    return menu;
}

function loadMenu(){
    const content = document.getElementById("tab-content");
    content.textContent = "";
    navBtnActive();
    const menu = createMenu();
    content.appendChild(menu);

}

export {loadMenu};
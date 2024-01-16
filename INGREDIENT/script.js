const signup = document.getElementById('signup');
const login = document.getElementById('login');

signup.addEventListener('click', function() {
    window.location = "/signuppage.html";
    // Add your desired JavaScript logic here
  });

login.addEventListener('click', function() {
    window.location = "loginpage.html";
  });


// ------------Signup page--------------

const btn = document.getElementsByClassName("btn");

btn.addEventListener("click", function(){
    window.location = "Seccesfully Signed Up";
});

//------------login page ------------------

const btn1 = document.getElementsByClassName("btn");

btn1.addEventListener("click", function(){
    window.location = "Seccesfully logged In";
});


// -------------search bar-------------------


// let ingredients = {
//   food_colours: [...199],
//   preservatives:[200,...299],
//   antioxidants:[300,...399],
//   thickner:[400,...499],
//   acidity_regular: [500,...599],
//   flavour_enhancer: [600,...699],
//   antibiotics:[700,...799]
// }

const ingredientList = {
    "flavour enhancer": ["MSG", "Salt", "Sugar"],
    "color": ["Red", "Yellow", "Green"],
    "preservatives": ["Sodium benzoate", "Sulfur dioxide"],
    "antioxidants": ["Vitamin C", "Vitamin E"],
    "antibiotics": ["Penicillin", "Tetracycline"]
};

const searchBox = document.getElementById('search');
const resultContainer = document.getElementById('result-box');

searchBox.addEventListener('input', function () {
    const searchTerm = searchBox.value.toLowerCase();
    const results = [];

    for (const category in ingredientList) {
        const categoryItems = ingredientList[category];

        const matchingItems = categoryItems.filter(item => item.toLowerCase().includes(searchTerm));
        
        results.push(...matchingItems.map(matchingItem => ({ category, item: matchingItem })));
    }

    displayResults(results);
});

function displayResults(results) {
    resultContainer.innerHTML = '';

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.textContent = `${result.category}: ${result.item}`;

        resultItem.addEventListener('click', function () {
            searchBox.value = `${result.category}: ${result.item}`;
            resultContainer.innerHTML = '';
        });

        resultContainer.appendChild(resultItem);
        resultItem.style.display = 'block';
    });
}




// ----------------explore--------------------


const explore = document.getElementById("#more");

explore.addEventListener("click", function(){
  window.location.href = "/Information.html";
});

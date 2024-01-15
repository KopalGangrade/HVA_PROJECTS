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

// let ingredients =[
// "css",
// "js",
// "python"];

// const resultsbox = document.querySelector('.result-box');
// const inputbox = document.getElementById('search');

// inputbox.onkeyup = function(){
//     let result =[];
//     let input = inputbox.value;
//     if (input.length){
//         result = ingredients.filter((keyword)=>{
//             return keyword.toLowerCase().includes(input.toLowerCase());
//         });
//         console.log(result);
//     }
//     display(result);

//     if(!result.length){
//         resultsbox.innerHTML = '';
//     }
// }

// function display(result){
//     const content = result.map((list)=>{
        
//         return "<li onclick=selectInput(this)>"+list+"</li>";
//     });
//     resultsbox.innerHTML = "<ul>"+content.join('')+"</ul>";
// }


// function selectInput(list){
//     inputbox.value = list.innerHTML;
//     resultsbox.innerHTML = '';
// }


// let ingredients = ["css", "js", "python"];

// const resultsbox = document.querySelector('result-box');
// const inputbox = document.getElementById('search');

// inputbox.addEventListener('input', function () {
//     let result = [];
//     let input = inputbox.value;
    
//     if (input.length) {
//         result = ingredients.filter((keyword) => {
//             return keyword.toLowerCase().includes(input.toLowerCase());
//         });
//     }

//     display(result);

//     if (!result.length) {
//         resultsbox.innerHTML = '';
//     }
// });

// function display(result) {
//     const content = result.map((item) => {
//         return "<li onclick='selectInput(this)'>" + item + "</li>";
//     });
//     resultsbox.innerHTML = "<ul>" + content.join('') + "</ul>";
// }

// function selectInput(list) {
//     inputbox.value = list.innerHTML;
//     resultsbox.innerHTML = '';
// }


// let ingredients = {
//   food_colours: [...199],
//   preservatives:[200,...299],
//   antioxidants:[300,...399],
//   thickner:[400,...499],
//   acidity_regular: [500,...599],
//   flavour_enhancer: [600,...699],
//   antibiotics:[700,...799]
// }



const ingredients = [
    "CSS",
    "JavaScript",
    "Python",
    "HTML",
    "React",
    "Node.js"
];

const resultsBox = document.querySelector('.result-box');
const inputBox = document.getElementById('#search');

inputBox.addEventListener('input', function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = ingredients.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);

    if (!result.length) {
        resultsBox.style.display = 'none';
    } else {
        resultsBox.style.display = 'block';
    }
});

function display(result) {
    const content = result.map((item) => {
        return `<li onclick="selectInput('${item}')">${item}</li>`;
    });
    resultsBox.innerHTML = `<ul>${content.join('')}</ul>`;
}

function selectInput(item) {
    inputBox.value = item;
    resultsBox.style.display = 'none';
}


// ----------------explore--------------------


const explore = document.getElementById("#more");

explore.addEventListener("click", function(){
  window.location.href = "/Information.html";
});

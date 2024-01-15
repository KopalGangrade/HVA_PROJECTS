// let submitbutton = document.getElementById('button');

// submitbutton.addEventListener('click',function(){
//         let isSubmitted=true;
//         if (isSubmitted){
//             console.log('submitted!');
//         }else{
//             console.log('Try again');
//         }
// })



// let submitButton = document.getElementById('button');
// let isSubmitted = false;
// submitButton.addEventListener('click', function button() {
//     if (isSubmitted) {
//         alert('Already submitted!');
//     } else {
//         alert('Submitted!');
//         // Update the submission status
//         isSubmitted = true;
//     }
//     // button();
// });

// function button(){
//     let isSubmitted = true;
//     if (isSubmitted){
//         console.log('submitted!');
//     } else {
//         console.log('Try again');
//     }

// function button(){
//     let submitbutton=true;
//     if (submitbutton){
//         console.log('submitted!');
//     }else{
//         console.log('Try again');
//     }
// }


// ----------function------------

document.getElementById('button').addEventListener('click', function() {
    // Validate form fields before submission
    if (validateForm()) {
        document.getElementById('admissionForm').submit();
    } else {
        alert('Please fill in all required fields.');
    }
});

function validateForm() {
    // Your validation logic goes here
    // Check if all required fields are filled
    var inputs = document.querySelectorAll('#admissionForm [required]');
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value.trim()) {
            return false;
        }
    }
    return true;
}
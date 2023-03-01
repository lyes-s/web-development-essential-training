/**
 * Event Handling
 * 
 * onload : Execute a JavaScript immediately after a page has been loaded
 * 
 * onfocus : Call a function when an input field gets focus
 * 
 * onclick : Call a function when a button is clicked
 * 
 * onmouseover : Call a function when moving the mouse pointer
 * 
 * onmouseout : Call a function when moving the mouse pointer out of
 * 
 * onmouseup : Call a function when releasing a mouse button over a paragraph
 * 
 * onmousedown : Call a function when pressing a mouse button over a paragraph
 * 
 *  The typeof operator checks if a value has type of primitive type which can be one of boolean , function , object , number , string , undefined and symbol (ES6). 
 * 
 * The instanceof operator checks if a value is an instance of a class or constructor function.
 * 
 * 
 * Call, Apply and Bind : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 */

function onFocus(x) {
    x.style.background = "yellow";
}

function onClick() {
    document.getElementById("demo").innerHTML = "Hello World";
}

function onLoad() {
    alert("Page is loaded");
}

function onMouseOver(x) {
    x.style.background = "red";
}

function onMouseOut(x) {
    x.style.background = "gray";
}

function onMouseUp(x) {
    x.style.color = "blue";
}

function onMouseDown(x) {
    x.style.color = "red";
}

function onChange(x){
    document.bgColor=x.value;
}

function onChangeBackgroundImage(x){
    document.body.style.backgroundImage = "url('"+ x.value + "')";
}

function onKeyPress(x) {
    alert("You pressed a key inside the input field" + x.value);
}

function onLoadRedirect() {
    window.location = "https://www.google.com/";
}

function onSubmit() {
    alert("Submitting the form");
}

function onTick() {
    setInterval(tick, 1);
}

function tick() {
    let now = new Date();
    document.getElementById("dateInfo").innerHTML = now.toLocaleString();
}

function onClickButton() {
    document.getElementById("clickMeButton").addEventListener("click", onClickButtonListener);
}

function onClickButtonListener() {
    alert("Click Event");
}

window.addEventListener("load", onClickButton)


function removeOnClick() {
    // Remove Child
    document.getElementById("parentDiv").removeChild(document.getElementById("childP1"));
    // Add Child
    document.getElementById("parentDiv")
                .appendChild(document.createElement("p")
                    .appendChild(document.createTextNode("AYAY YAY!!!")));
}

// BOM

function onHistoryForward() {
    window.history.forward();
}

function onHistoryBack() {
    window.history.back();
}


function validateForm() {
    let x = document.forms.myForm.fname.value;
    if (x === "") { 
      document.getElementById("span").innerHTML = "Fname should not be empty!";
      return false;
    }
} 

function validateChecBoxesForm() {
    let checkBoxeYesValue = document.getElementById("yes").checked;
    let checkBoxeNoValue = document.getElementById("no").checked;
    if(!checkBoxeNoValue && !checkBoxeYesValue) {
        document.getElementById("checkboxeserrorspan").innerHTML = "Please Select Yes/No !";
        return false;
    }
}


function validateRadioForm() {
    let selectedRadio = document.querySelector("input[type='radio'][name=radio]:checked").value;
    document.getElementById("checkradioserrorspan").innerHTML = "You Selected " + selectedRadio.toUpperCase() ;
}

function regexValidation() {
    let expression = /[A-Za-z]+/;
    let firstname = document.regexValidationForm.firstname.value;
    let lastname = document.regexValidationForm.lastname.value;
    let isFirstNameValid = expression.test(firstname);
    let isLastNameValid = expression.test(lastname);
    if(!isFirstNameValid || !isLastNameValid) {
        document.getElementById("textValidationError").innerHTML = "The firstname or the lastname should contain alphabetics letters only!";
        return false;
    }
    const person = new Person(firstname, lastname);
    console.log("Hi !" + person.toString());
}

class Person {

    #firstname = "";
    #lastname = "";

    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    get firstname() {
        return this.#firstname;
    }
    // if not defined, the _firstname will be readOnly
    set firstname(firstname){
        this.#firstname = firstname;
    }

    get lastname() {
        return this.#lastname;
    }
    // if not defined, the _lastname will be readOnly
    set lastname(lastname) {
        this.#lastname = lastname;
    }

    toString() {
        return this.firstname + " " + this.lastname;
    }
}
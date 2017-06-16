// make our image change on click
var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/silhouette-photographer.jpg'){
        myImage.setAttribute('src','images/cat_photographer.jpg');
    }
    else{
        myImage.setAttribute('src','images/silhouette-photographer.jpg');
    }
}


//add button and say hello to the current user
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name.'); // prompt will bring up a dialog box that ask user to enter something.
    localStorage.setItem('name',myName); // API localStorage create and store a data item called 'name'
    myHeading.innerText = 'Hello, ' + myName;
}

if(localStorage.getItem('name') != null){
    var storedName = localStorage.getItem('name');
    myHeading.innerText = 'Hello, ' + storedName;
} else {
    setUserName();    
}

myButton.onclick = function(){
    setUserName();
}
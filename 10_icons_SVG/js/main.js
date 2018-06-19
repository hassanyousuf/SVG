
(() => {
	console.log("Icons fired up");

var cameraIcon = document.querySelector('#cameraIcon');

function changeCameraX() {
	console.log("cameraIcon moves on x")
	document.getElementById("cameraIcon").style.left = "200px";
}

cameraIcon.addEventListener("click", changeCameraX);
// class "." id "#"

// this is for cameraIcon and need to do it for each one


var clockIcon = document.querySelector('#clockIcon');

function changeClockX() {
	console.log(" clock icon moves on its x axes")
	document.getElementById("clockIcon").style.left = "200px";
}

clockIcon.addEventListener("click", changeClockX);

// this is for clockIcon


var locationIcon = document.querySelector('#locationIcon');

function changeLocationX() {
	console.log("location icon moves on its x axes")
	document.getElementById("locationIcon").style.left = "200px";
}

locationIcon.addEventListener("click", changeLocationX);

// this is for locationIcon


var phoneIcon = document.querySelector('#phoneIcon');

function changePhoneX() {
	console.log("phone icon moves on its x axes")
	document.getElementById("phoneIcon").style.left = "200px";
}

phoneIcon.addEventListener("click", changePhoneX);

// this is for phoneIcon


var settingIcon = document.querySelector('#settingIcon');

function changeSettingIconX() {
	console.log(" setting icon moves on its x axes")
	document.getElementById("settingIcon").style.left = "200px";
}

settingIcon.addEventListener("click", changeSettingIconX);

// this is for settingIcon


var snapchatIcon = document.querySelector('#snapchatIcon');

function changeSnapchatIconX() {
	console.log("snapchat icon moves on its x axes")
	document.getElementById("snapchatIcon").style.left = "200px";
}

snapchatIcon.addEventListener("click", changeSnapchatIconX);

// this is for snapchatIcon


var cloudIcon = document.querySelector('#cloudIcon');

function changeCloudX() {
	console.log("cloud icon moves on its x axes")
	document.getElementById("cloudIcon").style.left = "200px";
}

cloudIcon.addEventListener("click", changeCloudX);


// this is for musicIcon

var downloadIcon = document.querySelector('#downloadIcon');

function changeDownloadX() {
	console.log(" download icon moves on its x axes")
	document.getElementById("downloadIcon").style.left = "200px";
}

downloadIcon.addEventListener("click", changeDownloadX);

// this is downloadIcon


var mailIcon = document.querySelector('#mailIcon');

function changeMailX() {
	console.log("mail icon moves on its x axes")
	document.getElementById("mailIcon").style.left = "200px";
}

mailIcon.addEventListener("click", changeMailX);


var musicIcon = document.querySelector('#musicIcon');

function changeMusicX() {
	console.log("music icon moves on its x axes")
	document.getElementById("musicIcon").style.left = "200px";
}

musicIcon.addEventListener("click", changeMusicX);


// this is for mailIcon

// need to tell console to make a message that the icon has been clicked when pressed.
// so the cosole should tell us what was just clicked.

// if completed on time make an animation of the image flipping over with description on the background



// add event listenr to make cards flip

// add variable for resetting guesses




})();

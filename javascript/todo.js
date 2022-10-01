// // // to do logic // // // // // // // // // // // // // // // // // // // // // //
// [1] => when click on "New Task" button popup will appear                         //
// [2] => the popup will have questions to make details like date and describe      //
// [3] => this details will be the task informations                                //
// [4] => the task will be a tab have that informations                             //
// [5] => when click on the task the tab will apear                                 //
// [6] => Task Options Remove, Progress and achieve                                 //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// checks
// [1] => use the data in localStorage to make the task div and the task page

if (window.localStorage.task) {
	let tasksParse = JSON.parse(window.localStorage.task);
	for (let i = 0; i < tasksParse.length; i++) {
		createTaskDiv(
			tasksParse[i].taskTitle,
			tasksParse[i].taskId,
			tasksParse[i].taskDescirbtion,
			tasksParse[i].taskDate,
			tasksParse[i].taskTime
		);
	}
	tasksParse.forEach((task) => {
		document
			.querySelector(`[id='${task.taskId}']`)
			.setAttribute("inProgress", task.taskProgress);
	});
	let taskDivs = Array.from(document.querySelectorAll("[inProgress='true']"));
	taskDivs.forEach((taskDiv) => {
		document.querySelector(".progress-tasks").prepend(taskDiv);
		taskDiv.children[0].children[0].children[0].classList.add("fa-spin");
	});
	// // // // //// /// // // // // // / // // // // // // // //

	tasksParse.forEach((task) => {
		document
			.querySelector(`[id='${task.taskId}']`)
			.setAttribute("achieved", task.taskAchieved);
	});
	let taskDivs2 = Array.from(document.querySelectorAll("[achieved='true']"));
	taskDivs2.forEach((taskDiv) => {
		document.querySelector(".achieved-tasks").prepend(taskDiv);
	});
}
// [2] =>  to change boxs
if (document.querySelector(".progress-tasks").innerHTML != "") {
	// side work
	// // change boxs update box and achieve box
	document.querySelectorAll(".progress-tasks .task .svg-box").forEach((box) => {
		box.remove();
	});
	document.querySelectorAll(".progress-tasks .task").forEach((task) => {
		let newBox = document.createElement("div");
		newBox.classList.add("achieve-box");
		task.children[0].prepend(newBox);
	});
}
// // // // // // // // // // /// // // // //

if (document.querySelector(".achieved-tasks").innerHTML != "") {
	// side work
	// // change boxs update box and achieve box
	document.querySelectorAll(".achieved-tasks .task .svg-box").forEach((box) => {
		box.remove();
	});
	document.querySelectorAll(".achieved-tasks .task").forEach((task) => {
		let newBox = document.createElement("div");
		newBox.classList.add("achieve-box");
		task.children[0].prepend(newBox);
	});
	document
		.querySelectorAll(".achieved-tasks .task .progress-box")
		.forEach((box) => {
			box.remove();
		});
}
function switchColors(array, variablecolor, name) {
	array.forEach((li) => {
		// add click event
		li.addEventListener("click", function (e) {
			document.documentElement.style.setProperty(
				variablecolor,
				e.target.dataset.color
			);
			// remove and add active class after click
			handleActive(e);
			// set color in localstorage
			window.localStorage.setItem(name, e.target.dataset.color);
		});
	});
}
// // // // // // // // // // // // // // //  // // // // //  // // // //
// switch colors
let colorli1 = Array.from(document.querySelectorAll(".color-list.one li"));

switchColors(colorli1, "--main-color", "color");
// // // // // // // // // // // // // // //  // // // // //  // // // //
// localStorage colors
if (window.localStorage.getItem("color")) {
	// set color property from localStorage
	document.documentElement.style.setProperty(
		"--main-color",
		window.localStorage.getItem("color")
	);
	// remove and add active class from localStorage
	colorli1.forEach((li) => {
		li.classList.remove("active");
		if (li.dataset.color === window.localStorage.getItem("color")) {
			li.classList.add("active");
		}
	});
}
// // // // // // // // // // // // // // //  // // // // //  // // // //
// switch colors
let colorli2 = Array.from(document.querySelectorAll(".color-list.two li"));

switchColors(colorli2, "--second-color", "color2");
// // // // // // // // // // // // // // //  // // // // //  // // // //
// localStorage colors
if (window.localStorage.getItem("color2")) {
	// set color property from localStorage
	document.documentElement.style.setProperty(
		"--second-color",
		window.localStorage.getItem("color2")
	);
	// remove and add active class from localStorage
	colorli2.forEach((li) => {
		li.classList.remove("active");
		if (li.dataset.color === window.localStorage.getItem("color2")) {
			li.classList.add("active");
		}
	});
}
// // // // // // // // // // // // // // //  // // // // //  // // // //
// switch colors
let colorli3 = Array.from(document.querySelectorAll(".color-list.three li"));

switchColors(colorli3, "--third-color", "color3");
// // // // // // // // // // // // // // //  // // // // //  // // // //
// localStorage colors
if (window.localStorage.getItem("color3")) {
	// set color property from localStorage
	document.documentElement.style.setProperty(
		"--third-color",
		window.localStorage.getItem("color3")
	);
	// remove and add active class from localStorage
	colorli3.forEach((li) => {
		li.classList.remove("active");
		if (li.dataset.color === window.localStorage.getItem("color3")) {
			li.classList.add("active");
		}
	});
}

// stop creating task fuction
function stopCreating(e) {
	e.preventDefault();
	document.querySelector('[placeholder="Task Title"]').style.cssText =
		"border: 2px solid red";
}
// local Storage function
function localStorageData(data) {
	let updateDataStringify2 = JSON.stringify(data);
	window.localStorage.task = updateDataStringify2;
}
// handle active
function handleActive(ev) {
	ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
		element.classList.remove("active");
	});
	ev.target.classList.add("active");
}
// [1] => when click on "New Task" button
// and
// [2] => the popup questions
function createPopup() {
	// add overlay
	document.body.classList.add("overlay");
	// create the popup
	// popup
	let popup = document.createElement("div");
	popup.classList.add("popup");
	// popup button
	let popupBtn = document.createElement("button");
	popupBtn.className = "btn delete-popup";
	popupBtn.textContent = "X";
	// form
	let form = document.createElement("form");
	form.classList.add("row");
	// // inputs divs
	for (let i = 0; i < 5; i++) {
		let inputDivs = document.createElement("div");
		let girdSystem = [
			"input-div col-sm-12 col-md-6",
			"input-div col-sm-12 col-md-6",
			"input-div col-sm-12 col-md-6",
			"input-div col-sm-12 col-md-6",
			"",
		];
		inputDivs.className = girdSystem[i];
		let inputs = document.createElement("input");
		let types = ["text", "text", "date", "time", "submit"];
		inputs.setAttribute("type", types[i]);
		let placeholder = ["Task Title", "Task Describtion", "", ""];
		inputs.setAttribute("placeholder", placeholder[i]);
		let values = ["", "", "", "", "Create Task"];
		inputs.value = values[i];
		inputDivs.append(inputs);
		form.append(inputDivs);
	}

	// popup
	popup.append(popupBtn);
	document.body.prepend(popup);
	// popup button
	popupBtn.onclick = function (e) {
		e.target.parentElement.remove();
		document.body.classList.remove("overlay");
	};
	// popup form
	popup.append(form);
}
// Create the Popup in the page
document.getElementById("new-task").addEventListener("click", (e) => {
	createPopup();
	scrollTo({
		top: 0,
	});
});
// // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // side work
// // [1] => Create the task div
function createTaskDiv(divTitle, divId, divDescribtion, divDate, divTime) {
	let div = document.createElement("div");
	div.classList.add("task");
	div.id = divId;
	div.setAttribute("inProgress", false);
	div.setAttribute("achieved", false);
	div.append(document.createTextNode(divTitle));
	document.querySelector(".tasks-page").prepend(div);
	// // // // // // // // // // // // // // // //
	// // side work
	// // [2] => Create box of tools
	let toolsBox = document.createElement("div");
	toolsBox.className = "tools-box";
	let removediv = document.createElement("div");
	removediv.className = "remove-box";
	removediv.textContent = "X";
	let svgBox = document.createElement("div");
	svgBox.classList.add("svg-box");
	let svg = document.createElement("i");
	svg.className = "fa-solid fa-pen";
	let progressBox = document.createElement("div");
	progressBox.className = "progress-box";
	let progressSvg = document.createElement("i");
	progressSvg.className = "fa-solid fa-gear";
	svgBox.appendChild(svg);
	progressBox.appendChild(progressSvg);
	toolsBox.appendChild(progressBox);
	toolsBox.appendChild(svgBox);
	toolsBox.appendChild(removediv);
	div.appendChild(toolsBox);

	//	[3] => the task will be a tab have that informations
	// [4] => create the tab
	let divPage = document.createElement("div");
	divPage.classList.add("task-page");
	divPage.classList.add("active-task-page");
	divPage.dataset.id = divId;
	let divBtn = document.createElement("btn");
	divBtn.className = "btn back-btn fs-1";
	document.querySelector(".page-content .container").appendChild(divPage);
	divPage.innerHTML = ` <button class="btn back-btn fs-1">Back</button>
	<p><b>Task Title: </b>${divTitle}</p>
	<p><b>Task Describtion: </b>${divDescribtion}</p>
	<p><b>Task Date: </b>${divDate}</p>
	<p><b>Task Time: </b>${divTime}</p>`;
}
// [3] => make the task informations by localStorage
// set the data to add it to localStorage
function setData(e) {
	// it's happen by make object and push it to array the will be saved in local storage
	// by JSON.stringify
	let informationsArray = [];
	// to make sure the array data don't change by get the data in local storage
	// by JSON.parse
	if (window.localStorage.task) {
		let localStorageValueParse = JSON.parse(
			window.localStorage.getItem("task")
		);
		informationsArray = localStorageValueParse;
	}
	// make the object and the task data
	let informationsObject = {
		taskTitle: document.querySelector("[placeholder='Task Title']").value,
		taskDescirbtion: document.querySelector("[placeholder='Task Describtion']")
			.value,
		taskDate: document.querySelector("[type='date']").value,
		taskTime: document.querySelector("[type='time']").value,
		taskId: Date.now(),
		taskProgress: false,
		taskAchieved: false,
	};
	informationsArray.push(informationsObject);
	let localStorageValue = JSON.stringify(informationsArray);
	window.localStorage.setItem("task", localStorageValue);
	document.querySelector(".popup").remove();
	document.body.classList.remove("overlay");
	// create task div
	createTaskDiv(
		informationsObject.taskTitle,
		informationsObject.taskId,
		informationsObject.taskDescirbtion,
		informationsObject.taskDate,
		informationsObject.taskTime
	);
}
// click conditions
document.addEventListener("click", (e) => {
	e.stopPropagation();
	// create the task
	if (
		e.target.value === "Create Task" &&
		e.target.classList.contains("changeDetails") !== true &&
		document.querySelector("[placeholder='Task Title']").value != "" &&
		document.querySelector("[placeholder='Task Title']").value.length <= 28
	) {
		e.preventDefault();
		setData(e);
	} else if (e.target.classList.contains("task")) {
		let taskPages = Array.from(document.querySelectorAll("task-page"));
		// [5] => when click on the task the tab will apear
		let targetId = e.target.id;
		document
			.querySelector(`[data-id='${targetId}']`)
			.classList.remove("task-page");

		document.querySelector(".tasks-page").style.cssText =
			"display: none !important;";
	} else if (e.target.classList.contains("back-btn")) {
		// back button
		e.target.parentElement.classList.add("task-page");
		document.querySelector(".tasks-page").style.cssText =
			"display: block !important;";
	} else if (e.target.classList.contains("remove-box")) {
		// Tools Box
		// // Remove tool
		let taskDiv = e.target.parentElement.parentElement;
		taskDiv.remove();
		let updateDataParse = JSON.parse(window.localStorage.getItem("task"));
		for (let i = 0; i < updateDataParse.length; i++) {
			if (taskDiv.id == updateDataParse[i].taskId) {
				updateDataParse.splice(i, 1);
				localStorageData(updateDataParse);
			}
		}
	} else if (
		// // Progress Tool

		e.target.parentElement.classList.contains("progress-box") &&
		e.target.parentElement.parentElement.parentElement.getAttribute(
			"inProgress"
		) != "true"
	) {
		e.target.classList.add("fa-spin");
		document
			.querySelector(".progress-tasks")
			.prepend(e.target.parentElement.parentElement.parentElement);
		e.target.parentElement.parentElement.parentElement.setAttribute(
			"inProgress",
			true
		);
		let taskDiv = e.target.parentElement.parentElement.parentElement;
		let updateDataParse2 = JSON.parse(window.localStorage.getItem("task"));
		for (let i = 0; i < updateDataParse2.length; i++) {
			if (taskDiv.id == updateDataParse2[i].taskId) {
				updateDataParse2[i].taskProgress = true;
				localStorageData(updateDataParse2);
			}
		}
		// // change boxs update box and achieve box
		document
			.querySelectorAll(".progress-tasks .task .svg-box")
			.forEach((box) => {
				box.remove();
			});
		let newBox = document.createElement("div");
		newBox.classList.add("achieve-box");
		e.target.parentElement.parentElement.prepend(newBox);
	} else if (
		e.target.parentElement.classList.contains("progress-box") &&
		e.target.parentElement.parentElement.parentElement.getAttribute(
			"inProgress"
		) == "true"
	) {
		e.target.classList.remove("fa-spin");
		document
			.querySelector(".tasks-page")
			.prepend(e.target.parentElement.parentElement.parentElement);
		e.target.parentElement.parentElement.parentElement.setAttribute(
			"inProgress",
			false
		);
		let taskDiv = e.target.parentElement.parentElement.parentElement;
		let updateDataParse2 = JSON.parse(window.localStorage.getItem("task"));
		for (let i = 0; i < updateDataParse2.length; i++) {
			if (taskDiv.id == updateDataParse2[i].taskId) {
				updateDataParse2[i].taskProgress = false;
				localStorageData(updateDataParse2);
			}
		}
		// // change boxs update box and achieve box
		e.target.parentElement.parentElement.children[0].remove();

		let svgBox = document.createElement("div");
		svgBox.classList.add("svg-box");
		let svg = document.createElement("i");
		svg.className = "fa-solid fa-pen";
		svgBox.append(svg);
		e.target.parentElement.parentElement.insertBefore(
			svgBox,
			e.target.parentElement.parentElement.children[1]
		);
	} else if (
		e.target.classList.contains("achieve-box") &&
		e.target.parentElement.parentElement.getAttribute("achieved") == "false"
	) {
		// Achieved Tool
		e.target.parentElement.children[1].remove();

		document
			.querySelector(".achieved-tasks")
			.prepend(e.target.parentElement.parentElement);
		e.target.parentElement.parentElement.setAttribute("achieved", true);
		let taskDiv = e.target.parentElement.parentElement;
		let updateDataParse2 = JSON.parse(window.localStorage.getItem("task"));
		for (let i = 0; i < updateDataParse2.length; i++) {
			if (taskDiv.id == updateDataParse2[i].taskId) {
				updateDataParse2[i].taskAchieved = true;
				localStorageData(updateDataParse2);
			}
		}
	} else if (
		e.target.classList.contains("achieve-box") &&
		e.target.parentElement.parentElement.getAttribute("achieved") == "true"
	) {
		let progressBox = document.createElement("div");
		progressBox.classList.add("progress-box");
		let i = document.createElement("i");
		i.className = " fa fa-gear fa-spin";
		progressBox.append(i);
		e.target.parentElement.insertBefore(
			progressBox,
			e.target.parentElement.children[1]
		);
		document
			.querySelector(".progress-tasks")
			.prepend(e.target.parentElement.parentElement);
		e.target.parentElement.parentElement.setAttribute("achieved", false);
		let taskDiv = e.target.parentElement.parentElement;
		let updateDataParse2 = JSON.parse(window.localStorage.getItem("task"));
		for (let i = 0; i < updateDataParse2.length; i++) {
			if (taskDiv.id == updateDataParse2[i].taskId) {
				updateDataParse2[i].taskAchieved = false;
				localStorageData(updateDataParse2);
			}
		}
	} else if (e.target.parentElement.classList.contains("svg-box")) {
		// change data tool
		createPopup();
		document
			.querySelector("[value='Create Task']")
			.classList.add("changeDetails");
		let task = e.target.parentElement.parentElement.parentElement;
		document.querySelector(".popup .changeDetails").onclick = function (e) {
			e.preventDefault();
			let divTitle = document.querySelector("[placeholder='Task Title']").value;
			let divDescribtion = document.querySelector(
				"[placeholder='Task Describtion']"
			).value;
			let divDate = document.querySelector("[type='date']").value;
			let divTime = document.querySelector("[type='time']").value;
			task.childNodes[0].textContent = divTitle;
			document.querySelector(
				`[data-id='${task.id}']`
			).innerHTML = ` <button class="btn back-btn fs-1">Back</button>
	<p><b>Task Title: </b>${divTitle}</p>
	<p><b>Task Describtion: </b>${divDescribtion}</p>
	<p><b>Task Date: </b>${divDate}</p>
	<p><b>Task Time: </b>${divTime}</p>`;
			let updateDataParse2 = JSON.parse(window.localStorage.getItem("task"));
			for (let i = 0; i < updateDataParse2.length; i++) {
				if (task.id == updateDataParse2[i].taskId) {
					updateDataParse2[i].taskTitle = divTitle;
					updateDataParse2[i].taskDescirbtion = divDescribtion;
					updateDataParse2[i].taskDate = divDate;
					updateDataParse2[i].taskTime = divTime;
					localStorageData(updateDataParse2);
				}
			}
			e.target.parentElement.parentElement.parentElement.remove();
			document.body.classList.remove("overlay");
		};
	} else if (
		// conditions of how to fill data
		e.target.value == "Create Task" &&
		document.querySelector("[placeholder='Task Title'").value == ""
	) {
		stopCreating(e);
	} else if (
		e.target.value == "Create Task" &&
		document.querySelector("[placeholder='Task Title'").value.length >= 28
	) {
		stopCreating(e);
	}
});

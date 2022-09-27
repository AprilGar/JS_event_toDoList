const button = document.querySelector('#enter');

button.addEventListener("click", function () {
    // adding input to the list 
    console.log("click");
    const newToDo = document.createElement('li');
    const list = document.querySelector('#list');
    const cList = document.querySelector('#completed-list');
    const input = document.querySelector('#new-todo');
    newToDo.innerText = input.value;
    list.appendChild(newToDo);
    const newButton = document.createElement("button");
    list.appendChild(newButton);
    newButton.innerText = "Delete"
    // ADD CHECKBOX to be generated when added to list

    //button to delete item from list
    if (newButton.addEventListener("click", function () {
        console.log("delete");
        list.removeChild(newToDo);
        this.remove(newButton);
    }));

    // completed items move to completed tasks (cList)

});

// show date button
const dateButton = document.querySelector('#show-date');
dateButton.addEventListener("click", function () {
    console.log("Date");
    var date = new Date();
    document.getElementById("show-date").innerHTML = date;
});

// var checkComplete = document.querySelector("#list");
// checkComplete.addEventListener("click", function(complete){
//     if(
//         complete.target.
//     )
// }) 
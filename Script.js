const input =  document.querySelector("#input-box"); 
const button = document.querySelector("button");
console.log(button);
const listContainer = document.querySelector("#list-container"); 
const massage = document.querySelector("#msg"); 


console.log(listContainer) ; 

button.addEventListener("click" , ()=>{
    if(input.value === ''){
       alert("Input can not we empty ")
    }else{
        let li = document.createElement("li"); 
        li.innerHTML = input.value ; 
        listContainer.appendChild(li);
        let span = document.createElement("span"); 
        span.innerHTML = "Delete" ; 
        li.appendChild(span) ;
    }
    input.value = "" ; 
    saveData()
    listContainer.addEventListener("click", (e)=>{
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked") ; 
            saveData();
        }
     
        else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove(); 
            saveData();
        }
    })

})
function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML); 
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data") ; 
}
showTask(); 
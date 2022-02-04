document.getElementById("myBttn").addEventListener("click",function(){
    const chapList = document.getElementById("thechapters").value ;
    console.log(chapList)
    if (chapList!==""){
        // console.log("Inside the IF statements")
        const newBttn = document.createElement("button");
        newBttn.innerHTML = "\u274C";
        const newLi =document.createElement("li");
        newLi.textContent = chapList;
        newLi.appendChild(newBttn);
        

       

       document.getElementById("scriptureList").appendChild(newLi);
       document.getElementById("thechapters").value="";

    }

      
});
document.getElementById("scriptureList").addEventListener("click",function listItemClickHandler(e) {
    e.target.parentNode.remove();
  
}); 
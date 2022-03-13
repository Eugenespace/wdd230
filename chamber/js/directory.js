// DIRECTORY
const requestURL = "./localDirectory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const localdirectories = jsonObject['localdirector'];
    localdirectories.forEach(displaydirectoies);
  });


function displaydirectoies(localdirectory){
  // Create elements to add to the document
  let card = document.createElement("section");
  let name_con = document.createElement("h5");
  let address_con = document.createElement("p");
  let phone_con = document.createElement("p");
  let link = document.createElement("a");
  let img = document.createElement("img");
  let dir = document.querySelector("#directory");
  let classDir = document.querySelector(".card__directory");
  let dir1 = document.querySelectorAll(".dir1");
  let dir1Even = document.querySelectorAll(".dir1:nth-child(even)");
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  // Property of the elements
  name_con.textContent = `${localdirectory.name}`;
  address_con.textContent = `${localdirectory.address}`;
  phone_con.textContent = `${localdirectory.phone}`;
  link.textContent = `${localdirectory.website}`;
  link.setAttribute("href", `http://${localdirectory.website}`);
  img.setAttribute("src", `${localdirectory.imageUrl}`);
  img.setAttribute("alt", `${localdirectory.name}`);

  // Default
  function defaultView() {
    // Add to first append 
    card.appendChild(img);
    card.appendChild(name_con);
    name_con.classList.add("hidden");
    card.appendChild(address_con);
    card.appendChild(phone_con);

    card.appendChild(link);
    card.classList.add("dir1");

    // Add/append to class
    document.querySelector("div.card__directory").appendChild(card);
    if (vw >= 1024) {
        classDir.classList.add("dir-lrg");
      }
  }


        // Call defaultView function
        defaultView();

  // Grid and List View Layout Buttons + Event Listeners
  const gridViewbtn = document.querySelector(".fa-table-cells");
  const listViewbtn = document.querySelector(".fa-list");

  listViewbtn.addEventListener("click", function () {
      console.log("Mysecond button click");
    listView();
  });
  gridViewbtn.addEventListener("click", function () {
    console.log("Myfirst button click")
    defaultView();
    listViewRemove();
  });

    // LIST VIEW changes
    function listView() {
        // Show company Name
        name_con.classList.remove("hidden");
        name_con.style.fontWeight = "bold";
    
        // Hide company logo
        img.classList.add("hidden");
    
        // Set list view btn to active and remove from grid view btn
        listViewbtn.classList.add("view-active");
        gridViewbtn.classList.remove("view-active");
    
        // Set even rows with coloured background
        dir1Even.forEach((even) => {
          even.classList.add("list-view");
        });
    
        // Set last row to have coloured background
        dir.lastElementChild.classList.add("list-view");
    
        // Remove border for each company
        card.style.border = 0;
    
        // If medium and above viewport
        if (vw >= 560) {
          // Change layout of companies to list in one column
          dir.classList.add("list-layout-med");
    
          // Display details for each company to display to four columns
          dir1.forEach((section) => {
            section.classList.add("list-col");
          });
    
          // Display details for last company row to four columns
          dir.lastElementChild.classList.add("list-col");
          classDir.classList.remove("dir-lrg");
        }
      }
    
      // Back to default changes
      function listViewRemove() {
        // Hide company name
        name_con.classList.add("hidden");
    
        // Show company image
        img.classList.remove("hidden");
    
        // Set grid view btn to active and remove from list view btn
        listViewbtn.classList.remove("view-active");
        gridViewbtn.classList.add("view-active");
    
        // Remove coloured background for even row companies
        dir1Even.forEach((even) => {
          even.classList.remove("list-view");
        });
    
        // Remove coloured background for last row
        dir.lastElementChild.classList.remove("list-view");
    
        // Revert border for each company card
        card.style.border = null;
    
        // If medium viewport and above
        if (vw >= 560) {
          // Remove column layout and back to grid
          dir.classList.remove("list-layout-med");
    
          // Remove four column details layout for each company
          dir1.forEach((section) => {
            section.classList.remove("list-col");
          });
    
          // Remove column layout and back to grid for last company row
          dir.lastElementChild.classList.remove("list-col");
        }
      }

}



    
 
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
  // Create elements
  let card = document.createElement("section");
  let name_con = document.createElement("h5");
  let address_con = document.createElement("p");
  let phone_con = document.createElement("p");
  let link = document.createElement("a");
  let img = document.createElement("img");
  let dir = document.querySelector("#directory");
  let classDir = document.querySelector(".card__directory");
  let directory1 = document.querySelectorAll(".directory1");
  let directory1Even = document.querySelectorAll(".directory1:nth-child(even)");
  const view_port = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  // Property
  name_con.textContent = `${localdirectory.name}`;
  address_con.textContent = `${localdirectory.address}`;
  phone_con.textContent = `${localdirectory.phone}`;
  link.textContent = `${localdirectory.website}`;
  link.setAttribute("href", `http://${localdirectory.website}`);
  img.setAttribute("src", `${localdirectory.imageUrl}`);
  img.setAttribute("alt", `${localdirectory.name}`);

  // Default
  function defaultViewPort() {
    // First append 
    card.appendChild(img);
    card.appendChild(name_con);
    name_con.classList.add("hidden");
    card.appendChild(address_con);
    card.appendChild(phone_con);

    card.appendChild(link);
    card.classList.add("directory1");
    classDir.classList.add("card__directory")

    // Append
    document.querySelector("div.card__directory").appendChild(card);
    if (view_port >= 1024) {
        classDir.classList.add("dir-lrg");
      }
  }


        // defaultViewPort
        defaultViewPort();

  // Grid Event Listeners
  const gridbtn = document.querySelector(".fa-table-cells");
  const listbtn = document.querySelector(".fa-list");

  listbtn.addEventListener("click", function () {
      console.log("Mysecond button click");
    listView();
  });
  gridbtn.addEventListener("click", function () {
    console.log("Myfirst button click")
    defaultViewPort();
    listRemove();
  });

    // LIST VIEW changes
    function listView() {
        // Show company Name
        name_con.classList.remove("hidden");
        name_con.style.fontWeight = "bold";
    
        // Hide company logo
        img.classList.add("hidden");
    
        // Set list view btn to active and remove from grid view btn
        listbtn.classList.add("view-active");
        gridbtn.classList.remove("view-active");
    
        // Set even rows with coloured background
        directory1Even.forEach((even) => {
          even.classList.add("list-view");
        });
    
        // Set last row to have coloured background
        dir.lastElementChild.classList.add("list-view");
    
        // Remove border for each company
        card.style.border = 0;
    
        // If medium and above viewport
        if (view_port >= 560) {
          // Change layout of companies to list in one column
          dir.classList.add("list-layout-med");
        
          classDir.classList.remove("card__directory")
    
          // Display details for each company to display to four columns
          directory1.forEach((section) => {
            section.classList.add("list-col");
          });
    
          // Display details for last company row to four columns
          dir.lastElementChild.classList.add("list-col");
          classDir.classList.remove("dir-lrg");
        }
      }
    
      // Back to default changes
      function listRemove() {
        // Hide company name
        name_con.classList.add("hidden");
    
        // Show company image
        img.classList.remove("hidden");
    
        // Set grid view btn to active and remove from list view btn
        listbtn.classList.remove("view-active");
        gridbtn.classList.add("view-active");
    
        // Remove coloured background for even row companies
        directory1Even.forEach((even) => {
          even.classList.remove("list-view");
        });
    
        // Remove coloured background for last row
        dir.lastElementChild.classList.remove("list-view");
        
        // Revert border for each company card
        card.style.border = null;
        // classDir.classList.add("card__directory")
        // If medium viewport and above
        if (view_port >= 560) {
          // Remove column layout and back to grid
          dir.classList.remove("list-layout-med");
          
          // Remove four column details layout for each company
          directory1.forEach((section) => {
            section.classList.remove("list-col");
          });
    
          // Remove column layout and back to grid for last company row
          dir.lastElementChild.classList.remove("list-col");
        }
      }

}



    
 
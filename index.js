// 1. Specify API Url
const Url = "https://jsonplaceholder.typicode.com/users";

// 2. Fetch users from the API Url
function fetchusers(){
    // 2.1 Make use of the browser fetch API
    fetch(Url)
        .then((Response)=>Response.json())
        .then((data) => { 
            // 2.2 passing the user data to the renderUsers function
            renderUsers(data);
        });
} 


// 3. Render the users in the DOM
function renderUsers(usersData) {
    console.log("from renderUsers");
    console.log(usersData);
    const ul = document.getElementById("user-list-container");
    console.log(ul);

    // 3.1 Render an li tag for each of the users
    usersData.forEach((user, index)=>{
        // console.log(user, index + 1);
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${index + 1}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        `;

        // 3.2 Append the current user li tag to the UL tag
        ul.appendChild(li);

    });
        
    };
   

// 4. Add a search function to the DOM
function searchUsersbyUsername(){
    const input = document.getElementById("searchbox");
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toUpperCase();
    const usersList = ul.querySelectorAll("li");

    // console.log(usersList);

    // 4.1 To loop through all the users and render the ones that match the search
    for (let i = 0; i < usersList.length; i++) {
        const usernameSpanTag = usersList[i].querySelector(".username");
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
        const isMatch = usernameSpanTagValue.indexOf(inputValue) >  -1;

        // console.log(usernameSpanTag); 

        if (isMatch) {
            usersList[i].style.display = "block";
        } else {
            usersList[i].style.display = "none";
        }

    }
  
}

// Calling the fetch function
fetchusers();
searchUsersbyUsername();

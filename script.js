const userInput = document.getElementById("userName");
const getDeatailsButton = document.getElementById("getDetails");
const profileInfo = document.getElementById("profileInfo");
const repoInfo = document.getElementById("repoInfo");
getDeatailsButton.addEventListener("click",async() =>{
    const userName = userInput.value;
    //console/log(userName);
//!Using the github
const res = await fetch(`https://api.github.com/users/${userName}`);
const data = await res.json();
getProfile(data);
getRepo(userName);
});

//!Get profile function it is used to get the used details from the serveer.
function getProfile(data){
    console.log(data);
    profileInfo.innerHTML =`<div class ="card">
    <div class ="card-img">
    <img src=${data.avatar_url} class="card-img-top img" alt=${data.name}>
    </div>
    <div class = "card-body">
    <h5 class = "card-title">${data.name || "No Name"}<h5>
    <h5 class = "card-subHeading">${data.login || "No Login"}<h5>
    <h5 class = "card-text">${data.bio || "No Bio"}<h5>
    <p><i class="fa-solid fa-user-group"></i>${data.followers} Followers ${data.following}Following</p>
<p><i class="fa-solid fa-location-dot"></i>${data.location}</p>
<button>
<a href = ${data.html_url} target="_blank">Visit Profile</a>
</button>
</div>
</div>
</div>`;
}

//!get repositories based on the username and passing another api to get that
async function getRepo(userName){
const res = await fetch(`https://api.github.com/users/${userName}/repos`);
const projects = await res.json();
for(let i=0;i<projects.length;i++){
    repoInfo.innerHTML +=`
    <div class ="col-sm-10 col-md-6 col-12 col-lg-4">
    <div class = "card">
    <div class ="card-body">
    <div class = "card-title">${projects[i].name}</div>
    <div class ="card-subHeading">${projects[i].language}</div>
    <div class="d-flex justify-content-center">
    <button>
    <a href = "${projects[i].html_url}" target="_blank" class="btn btn-primary">Visit Repo</a>
    </button>
    </div>
    </div>
    </div>
    `;

}
}

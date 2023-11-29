const userInput = document.getElementById("userName");
const getDeatailsButton = document.getElementById("getDetails");
const profileInfo = document.getElementById("profileInfo");
const repoinfo = document.getElementById("repoInfo");
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
    profileInfo.innerHtml =`<div class ="card">
    <div class ="card-img">
    <img src=${data.avatar_url} alt=${data.name}>
    </div>
    <div class = "card-body">
    <div class = "card-title">${data.name}</div>
    <div class = "card-subHeading">${data.login}</div>
    <div class = "card-text">
    <p>${data.bio}</p>
    <p><i class="fa-solid fa-users" style="color: #461f51;"></i>${data.followers}Followers ${data.following}Following</p>
<p><i class="fa-solid fa-magnifying-glass-location" style="color: #411e76;"></i>${data.location}</p>
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
    repoinfo.innerHtml +=`<div class = "card">
    <div class ="card-body">
    <div class = "card-title">${projects[i].name}</div>
    <div class ="card-subHeading">${projects[i].language}</div>
    <div class="card-text">
    <button>
    <a href = ${projects[i].html_url} target="_blank">Visit Repo</a>
    </button>
    </div>
    </div>
    </div>
    `;

}
}

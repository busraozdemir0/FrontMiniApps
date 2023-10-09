// GitHub API ve Axios ile github kullanici arama islemi

const API_URL="https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");


async function getUser(username){
    try{
        const {data} = await axios(API_URL + username);
        //console.log(data)
        createUserCard(data);
        getRepos(username);

    }catch(err){
        // console.log(err)
        createErrorCard("Üzgünüz, aradığınız kullanıcı bulunamadı. :(");
    }
}

form.addEventListener("submit", (e)=>{  // inputa veri girilip submit olduktan sonra calisacak
    e.preventDefault();

    const user=search.value;

    if(user){
        getUser(user);

        search.value="";
    }
})

function createUserCard(user){
    const userName= user.name || user.login;  // Name'i varsa onu yazdir o yoksa login adini yazdir
    const userBio = user.bio ? `<p> ${user.bio} </p>` : ""; // aranan kullanicinin biyografi yazisi varsa onu dondursun yoksa bos string dondursun

    const cardHTML =`
    <div class="card">
    <img class="user-image" src="${user.avatar_url}" alt="${user.name}" />

    <div class="user-info">
        <div class="user-name">
            <h2>${userName}</h2>
            <small>${user.login}</small>
        </div>
    </div>

    <p>
        ${userBio}
    </p>

    <ul>
        <li>
            <i class="fa-solid fa-user-group"></i> ${user.followers}
            <strong>Followers</strong>
        </li>
        <li>${user.following} <strong>Following</strong></li>
        <li>
            <i class="fa-solid fa-bookmark"></i> ${user.public_repos} <strong>Repository</strong>
        </li>
    </ul>

    <div class="repos" id="repos">

    </div>

</div>
    `;

    main.innerHTML=cardHTML;
}

function createErrorCard(message){
    const cardErrorHTML= `
    <div class="card"> 
        <h2>${message}</h2>

    </div>

    `;

    main.innerHTML=cardErrorHTML;
}


async function getRepos(username){
    try{
        const {data} = await axios(API_URL + username + "/repos");
       // console.log(data)
       addReposToCard(data);
    }catch(err){
        createErrorCard("Üzgünüz, repoları çekerken hata oluştu. :(")
    }
}

function addReposToCard(repos){
    const reposEl = document.getElementById("repos");
    repos.slice(0,3).forEach((repo) => {  // ilk uc repo icerisinde donsun ve getirsin
        const reposLink=document.createElement("a");
        reposLink.href=repo.html_url;  // ilgili reponun linki
        reposLink.target="_blank";  // a tagina tiklaninca farkli bir sekmede acilmasini istedigimiz icin
        reposLink.innerHTML=` <i class="fa-solid fa-book-bookmark"></i> ${repo.name} `;

        reposEl.appendChild(reposLink);
    })
}
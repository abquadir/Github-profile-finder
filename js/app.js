// Accesing DOM Element

const user_input = document.getElementById("user_value")
const btn = document.querySelector(".btn")
const name = document.getElementById("name")
const repo = document.getElementById("repo")
const username = document.getElementById("username")
const url = document.getElementById("url")

// Github Api 
const  client_id =  'Iv1.697be4ac9516d10d'
const client_secret = '116cfd8d7f0601e30994acfea954879969ed6b0a'

btn.addEventListener("click",()=>{
 showData()
})

const fetchUser = async(user)=>{
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`)
    const data = await api_call.json()
    return { data }
}


const showData= ()=>{
    fetchUser(user_input.value)
    .then((res)=>{
    //    console.log(res);
       
       name.textContent = `Name : ${res.data.name}`
       repo.textContent = `Repository : ${res.data.public_repos}`
    username.textContent =`Username : ${res.data.login}`
    url.textContent = `url : ${res.data.html_url}`
    })
}
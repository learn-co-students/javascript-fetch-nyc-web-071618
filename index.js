const app = "I don't do much.";

const token = 'd2986644d8d6dfbf9a3989ab99f430dfc0e57a29'

fetch('https://api.github.com/user/repos',{
    headers:{Authorization:`token ${token}`}
}).
    then(res=>res.json()).
    then(json=>console.log(json))
const app = "I don't do much.";

const BASE_URL = "https://api.github.com"
const user = "cmonkey03"

fetch(BASE_URL + '/' + user + '/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(r => r.json())
  .then(json => {
    console.log(json)
  })

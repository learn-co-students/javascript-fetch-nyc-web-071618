document.addEventListener('DOMContentLoaded', function(){
  const base_url = 'https://api.github.com'
  let form = document.querySelector('form')

  form.addEventListener('submit', function(event){
    event.preventDefault()

    let username = document.getElementById('username').value

    fetch(base_url + `/users/${username}`)
    .then(res => res.json())
    .then(json => {
      console.log(json)

      let body = document.body
      let name = document.createElement('h2')
      name.innerText = json.name

      let profile = document.createElement('img')
      profile.src = json.avatar_url

      body.append(name)
      body.append(profile)
    });
  })
})

// const token = 'XXXX'
// , {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }

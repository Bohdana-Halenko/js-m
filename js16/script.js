// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => { })
//     .catch(error => console.log(error))


// // const headers = {
// //     'Content-Type': "application/json",
// //     "X-Custom-Header": 'custom value',
// // }

// fetch("test", {
//   headers: {
//     ContentType: "application/json",
//     //     "X-Custom-Header": 'custom value',
//   },
// });


// const button = document.getElementById("getCatFact");
const p = document.getElementById("catFact");

// button.addEventListener('click', () => {
//     fetch("https://catfact.ninja/fact")
//         .then(response => response.json())
//         .then(data => {
//             p.textContent = data.fact;
//         })
//         .catch(error => {
//             p.textContent = "Сталася помилка  😿";
//             console.log("Error: ", error)
//     })
// })



// GET
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(r => r.json())
    .then(users => console.log(users))
    .catch(error => console.log(error));


//POST
const addPost = {
    author: 'Misha',
    body: 'I love JavaScript',
} 
const options = {
    method: 'POST',
    body: JSON.stringify(addPost),
    headers: {
        'Content-Type': 'application/json'
    }
}
fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then(r => r.json())
    .then(post => console.log(post))
    .catch(error => console.log(error))


// PATCH
const updatePost = {
    id: 101,
    body: 'I love HTML, CSS, JS',
}

const options1 = {
  method: "PATCH",
  body: JSON.stringify(updatePost),
  headers: {
    "Content-Type": "application/json",
  },
};
fetch(`https://jsonplaceholder.typicode.com/posts/${updatePost.id}`, options1)
  .then((r) => r.json())
  .then((post) => console.log(post))
    .catch((error) => console.log(error));
  
//PUT
const updatePost1 = {
    id: 101,
    author: 'Misha',
    body: "I love HTML, CSS, JS",
};

const options2 = {
  method: "PUT",
  body: JSON.stringify(updatePost),
  headers: {
    "Content-Type": "application/json",
  },
};
fetch(`https://jsonplaceholder.typicode.com/posts/${updatePost1.id}`, options2)
  .then((r) => r.json())
  .then((post) => console.log(post))
    .catch((error) => console.log(error)); 
  

// DELETE
const idPost = 2;
fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`, { method: 'DELETE' })
    .then(() => console.log('Ваш пост видалено'))
    .catch(error => console.log(error))


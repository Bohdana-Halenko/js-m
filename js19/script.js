// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
// }
// fetchUsers().then(users => console.log(users));

// async function add()...
// const add = async function()...
// const user = {
//     async add(){}
// }
// class User{
//     async add() {
//     }
// }


// const fetchUsers = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const users = await response.json();
//         console.log(users);
//     } catch (error) {
//         console.log(error)
//     }
// };
// fetchUsers()


// const fetchUsers = async () => {
//     const url = "https://jsonplaceholder.typicode.com";
//     const first = await fetch(`${url}/users/1`);
//     const second = await fetch(`${url}/users/2`);
//     const third = await fetch(`${url}/users/3`);

//     const firstUser = await first.json();
//     const secondUser = await second.json();
//     const thirdUser = await third.json();

//     console.log(firstUser, secondUser, thirdUser)
// }
// fetchUsers();


// const fetchUsers = async () => {
//     const url = "https://jsonplaceholder.typicode.com";
//     const idsUsers = [1, 2, 3];

//     const arrPromises = idsUsers.map(async idUser => {
//         const response = await fetch(`${url}/users/${idUser}`);
//         return response.json()
//     })

//     const users = await Promise.all(arrPromises);
//     console.log(users);
// }
// fetchUsers();




// GET
// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(r => r.json())
//     .then(users => console.log(users))
//     .catch(error => console.log(error));

// async function getUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//         const user = await response.json();
//         console.log(user)
//     } catch (error) {
//         console.log(error);
//     }
// }


// //POST
// const addPost = {
//     author: 'Misha',
//     body: 'I love JavaScript',
// }
// const options = {
//     method: 'POST',
//     body: JSON.stringify(addPost),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }
// fetch("https://jsonplaceholder.typicode.com/posts", options)
//     .then(r => r.json())
//     .then(post => console.log(post))
//     .catch(error => console.log(error))


// async function createPost() {
//     const addPost = {
//       author: "Misha",
//       body: "I love JavaScript",
//     };
//     const options = {
//       method: "POST",
//       body: JSON.stringify(addPost),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//         const post = await response.json();
//         console.log(post);
//     } catch (error) {
//         console.log(error);
//     }
// }


// // // PATCH
// // const updatePost = {
// //     id: 101,
// //     body: 'I love HTML, CSS, JS',
// // }

// // const options1 = {
// //   method: "PATCH",
// //   body: JSON.stringify(updatePost),
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// // };
// // fetch(`https://jsonplaceholder.typicode.com/posts/${updatePost.id}`, options1)
// //   .then((r) => r.json())
// //   .then((post) => console.log(post))
// //     .catch((error) => console.log(error));



// async function patchPost() {
//     const updatePost = {
//       id: 101,
//       body: "I love HTML, CSS, JS",
//     };

//     const options1 = {
//       method: "PATCH",
//       body: JSON.stringify(updatePost),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     try {
//         const r = await fetch('https://jsonplaceholder.typicode.com/posts/${updatePost.id}', options1);
//         const post = await r.json();
//         console.log(post);
//     } catch (error) {
//         console.log(error)
//     }
// }
  
// // //PUT
// // const updatePost1 = {
// //     id: 101,
// //     author: 'Misha',
// //     body: "I love HTML, CSS, JS",
// // };

// // const options2 = {
// //   method: "PUT",
// //   body: JSON.stringify(updatePost),
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// // };
// // fetch(`https://jsonplaceholder.typicode.com/posts/${updatePost1.id}`, options2)
// //   .then((r) => r.json())
// //   .then((post) => console.log(post))
// //     .catch((error) => console.log(error));
  

// // // DELETE
// // const idPost = 2;
// // fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`, { method: 'DELETE' })
// //     .then(() => console.log('Ваш пост видалено'))
// //     .catch(error => console.log(error))

// async function deletePost() {
//     const idPost = 2;
//     try {
//         await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`, { method: 'DELETE' });
//         console.log('Ваш пост видалено')
//     } catch (error) {
//         console.log(error);
//     }
// }

// getUser();
// createPost();
// patchPost();
// deletePost();



// async function fetchPost() {
//     try{
//     const result = await fetch('https://jsonplaceholder.typicode.com/posts/101');
//     const data = await result.json();
//     console.log(data);
//     } catch(err){
//         console.log(err);
//     }
// } fetchPost();

// async function createPost() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       title: 'Hello',
//       body: 'This is a post',
//       userId: 1
//     })
//   });

//   const data = await res.json();
//   console.log(data);
// }

// createPost();



const API_KEY=""
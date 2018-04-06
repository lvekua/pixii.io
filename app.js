// var database = [
//     {
//         username: "leo",
//         password: "Karamazu"
//     },
//     {
//         username: "yo",
//         password: "123"
//     },
//     {
//         username: "zen",
//         password: "555"
//     }
// ];

// var newsFeed = [
//     {
//         username: "maicon",
//         timeline: "This is a great way to learn JS!"
//     },
//     {
//         username: "zambrota",
//         timeline: "waht a wonderful day!"
//     },
//     {
//         username: "chuchu",
//         timeline: "create something new every day!"
//     }
// ];

// function validUser(username, password){
//     for(var i = 0; i < database.length; i++){
//         if(database[i].username === username &&
//             database[i].password === password){
//                return true;
//            }
//     }
//     return false;
// }

// function login(username, password){
//     if(validUser(username, password)){
//         console.log(newsFeed);
//     } else{
//         alert("sorry, wrong user name or password");
//     }
// };

// var usernamePrompt = prompt("Please enter your user name");
// var passwordPrompt = prompt("Please enter your password");

// login(usernamePrompt, passwordPrompt);
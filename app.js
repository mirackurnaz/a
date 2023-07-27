import axios from "axios";

 export default async function getData(number) {
    
     const Users = async (number) => {
         const {data } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
         console.log(data);
     }

     const Post =async (number) => {
         const {data } = await axios ("https://jsonplaceholder.typicode.com/posts?id=" + number );
         console.log(data);
    }
    
     const user = await Users(number)
    const post = await Post(number)
     return user + post ;
 }

 getData;

import axios from "axios";

export async function getData(number) {
    const {data: userId} = await axios( `https://jsonplaceholder.typicode.com/users/${number}`)
    const {data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);

    console.log(userId)
    console.log(post)
    
    return userId, post

}
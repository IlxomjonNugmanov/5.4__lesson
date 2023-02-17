import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./user.css"


function User() {
    const [Userlist, setUserlist] = useState([])
    const [ postList , setPostList] = useState([])
    const [ commentsList , setCommentsList] = useState([])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => setUserlist(res.data)).catch(res => console.log(res))
        //  setUserlist(...Userlist, data.data)
    }, [])
  

    const btnShow = (e) => {
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
       .then(res => setPostList(res.data.filter((iteam) => iteam.userId === e.target.id - 0)))
       .catch(res => console.log(res))
    }
    const btnShowCommit = (e) => {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
         .then(res => setCommentsList(res.data.filter((iteam) => iteam.postId === e.target.id - 0)))
         .catch(res => console.log(res))
    }
    
    return (
        <div className='listsWrap'>
            <ul className='userlistWrap'>
                {Userlist.length > 0 && Userlist.map((iteam) => 
                <li key={iteam.id} id= {iteam.id}>
                    <h2>{iteam.username}</h2>
                    <p>{iteam.name}</p>
                    <p>{iteam.email}</p>
                    <button id={iteam.id}  onClick={ btnShow}>Show more</button>
               
                </li>)}
            </ul>
            <ul className='postListWrap'>
                {postList.length > 0 && postList.map((iteam) => 
                <li key={iteam.id}>
                    <h2>{iteam.title}</h2>
                    <p>{iteam.body}</p>
                    <button id={iteam.id} onClick={ btnShowCommit }>Show comments</button>
                </li>)}
            </ul>
            <ul className='commentsListWrap'>
                {commentsList.length > 0 && commentsList.map((iteam) => 
                <li key={iteam.id}>
                    <h2>{iteam.name}</h2>
                    <p>{iteam.email}</p>
                    <p>{iteam.body}</p>

                    {/* <button>Show post</button> */}
                </li>)}
            </ul>
      
        </div>
    )
}

export default User
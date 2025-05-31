import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [posts, setPosts] = useState()
  const [users, setUsers] = useState()

  
  const backendUrl = import.meta.env.MODE == 'development' ? 'http://localhost:8080' : '';
  console.log(backendUrl)

  if (import.meta.env.MODE == 'development') {
    console.log('Running in development mode');
  } else {
    console.log('Running in production mode');
  }
  const getPosts = async () => {
    const response = await fetch('http://10.105.81.238/api/posts')
    const posts = await response.json()
    setPosts(posts)
  }

  const getUsers = async () => {
    const response = await fetch('http://10.105.81.238/api/users')
    const users = await response.json()
    setUsers(users)
  }
  useEffect(() => {
    getUsers()
    getPosts()
  }, [])


  return (
    <div className='m-4'>

      <div className='main_logo flex justify-center items-center'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>


      {/* Posts */}
      <div className=''>
        <h1 className='text-3xl font-light'>Recent Posts</h1>
        {!posts && <p>loading</p>}
        {posts && posts.map((post, index) => (
          <div key={post.id} className='bg-rose-500 rounded-lg p-3 my-3'>
            <h6 className=''>Title: {post.title}</h6>
            <p>
              Content: {post.body}
            </p>
          </div>
        ))}
      </div>

      {/* Users */}
      <div className=''>
        <h1 className='text-3xl font-light'>Recent Users</h1>
        {!users && <p>loading</p>}
        {users && users.map((user, index) => (
          <div key={user.id} className='bg-sky-200 rounded-lg p-3 my-3'>
            <h6>Name: {user.name}</h6>
            <p>Email: {user.email}</p>
            <h6>Company Name: {user.company.name}</h6>
            <h6>Company Address: {user.company.catchPhrase}</h6>
            <p>City: {user.address.city}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App

import React from 'react'
import Navbar from '../components/Navbar'
import { Route } from 'react-router-dom'
import Post from './Post/Posts'
import CreatePost from './create/createPosts'


const Home = () => {
    return (
        <div>
            
            <Navbar />

            <Route path='/posts'>
                <Post />
            </Route>

            <Route path='/create'>
                <CreatePost />
            </Route>

        </div>
    )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return <div>
        <h2>This is the fucking home page</h2>
        List of Post
        <ul>
            <li><Link to="/post/1">Post 1</Link></li>
            <li><Link to="/post/2">Post 2</Link></li>
            <li><Link to="/post/3">Post 3</Link></li>
        </ul>
    </div>
}

export default Home
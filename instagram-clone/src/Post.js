import React from 'react'
import './Post.css'

function Post() {
    return (
        <div className="post">
            {/* header ==>> Profile Pic Avator and Username  */}
            <h3>Username</h3>

            {/* Image */}
            <img className="post_image" src='https://www.trishanatechnologies.com/images/reactjs.jpg'
                alt="Uploaded Image"/>

            {/* Username + Caption */}
            <h4>Username: Caption</h4>
        </div>
    )
}

export default Post

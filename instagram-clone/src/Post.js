import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

function Post({username ,caption,imageURL}) {
    return (
        <div className="post">
            <div className="post_header">
                {/* header ==>> Profile Pic Avator and Username  */}
                <Avatar
                    className="post_avatar"
                    alt={username}
                    src ="/static/images/avatar/1.jpg"
                />
                <h3>{username}</h3>
            </div>
            {/* Image */}
            <img className="post_image" src={imageURL}
                alt="Uploaded Image"/>

            {/* Username + Caption */}
            <p className="post_text"><strong>{username}</strong> {caption}</p>
        </div>
    )
}

export default Post

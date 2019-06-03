import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Photo(props) {
    const post = props.post
    const { id, description, imageLink} = post
    console.log(post)
    console.log(id)
    return <figure className='figure'>
        <Link to={`/single/${id}`}><img src={post.imageLink} alt={post.description}/></Link>
        <figcaption> 
            <p> 
                {post.description} 
            </p>
        </figcaption>
        <div className='button-container'>
            <button onClick={() => {
                props.removePost(props.index)
                props.history.push('/')
            }}>
                Remove 
            </button>
            <Link className='button' to={`/single/${id}`}>
                <div className='comment-count'>
                    <div className='speech-bubble'></div>
                    {props.comments[post.id] ? props.comments[post.id].length : 0}
                </div>
            </Link>
        </div>
    </figure>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
}

export default Photo
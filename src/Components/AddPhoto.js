import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit =this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: 0,
            description: description,
            imageLink : imageLink
        }

        if (description && imageLink) {
            this.props.addPost(post)
            this.props.onHistory.push('/')
        }
    }

    render() {
        return (
            <div>
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' name="link" placeholder='Link'/>
                        <input type='text' name="description" placeholder='Description'/>
                        <button> Post </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto
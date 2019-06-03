import React, {Component} from 'react'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import Single from './Single'
import {Route, Link} from 'react-router-dom'
import {removePost} from '../redux/actions'


class Main extends Component {

    state = { loading: true }

    constructor() {
        super()
        this.state = {
            posts: {}
        }
    }

    componentDidMount() {
        this.props.startLoadingPosts().then(() => {
            this.setState({loading: false})
        })
        this.props.startLoadingComments()
    }

    render() {
        return (
        <div>
            <h1> <Link to="/"> Photowall </Link></h1>

            <Route exact path="/" render={() => (
                <div>
                    <PhotoWall {...this.props} />
                </div>
            )}/>

            <Route path="/AddPhoto" render =  {({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>
            )} />

            <Route path="/single/:id" render= {(params) => (
                <Single loading={this.state.loading} {...this.props} {...params} />
            )}/>
        </div>)
    }
}

export default Main




import React, {Component} from 'react';
import axios from "axios";
import {Col, Spinner} from "react-bootstrap"
import CardRessources from "../CardRessources";
import getUserAuth from "../../helpers/getUserAuth";
import authService from "../api-authorization/AuthorizeService";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resources_data: null,
            aUserId: null, /* User ID of the actual session*/
        }
        this.isLiked = this.isLiked.bind(this);
        this.isBookmark = this.isBookmark.bind(this);
    }

    async componentDidMount() {
        /* Declaration of the user in session rn */
        const auth = await getUserAuth.isThisLoged();
        let user;

        if (auth) {
            user = await authService.getUser()
            user = user.sub
        }
        await this.setState({currentUser: user})
        /* End For user in session statement*/

        /* Fetch of the ressources by the type need */
        /* Is this view is only for the user or not*/
        const userOnly = this.props.userOnly;
        if (userOnly) {
            axios.get(`https://localhost:5001/api/Ressource/usr/${this.state.currentUser}`)
                .then(res => {
                    const data = res.data;
                    this.setState({resources_data: data});
                })
            
        } else {
            axios.get(`https://localhost:5001/api/Ressource`)
                .then(res => {
                    const data = res.data;
                    this.setState({resources_data: data});
                })
        }
        /* End of fetch */
    }


    /* Fetch to get bool of like of the resource*/
    isLiked = async (id) => {

        let result = null;
        try {
            const response = await axios.get(`https://localhost:5001/api/UserInteraction/Like/${this.state.currentUser}/${id}`);
            result = response.data
            return result
        } catch (err) {
            /*TODO Needing add of error output or actions, to define */
        }
    }

    /* Fetch to get bool of Favorite of the resource*/
    isBookmark = async (id) => {

        let result = null;
        try {
            const response = await axios.get(`https://localhost:5001/api/UserInteraction/Favorite/${this.state.currentUser}/${id}`);
            result = response.data
            return result
        } catch (err) {
            /*TODO Needing add of error output or actions, to define */
        }
    }


    render() {
        return (
            <>
                {/*If the content is empty display loading*/}
                {this.state.resources_data != null ?
                    /*Mapping of the resources*/
                    this.state.resources_data.map((data, i) =>
                        <Col xs={11} md={4} className="g-4" align="center" key={data.id}>
                            <CardRessources
                                username={data.fullName}
                                isUserRess={data.userId === this.state.currentUser}
                                img={`https://source.unsplash.com/random/800x400?sig=${i}`}
                                title={data.title}
                                isLiked={this.isLiked(data.id)}
                                isBookmark={this.isBookmark(data.id)}
                                dateTime={data.releaseDate}
                                id={data.id}
                                key={data.id + '_content'}
                                canEdit={this.props.canEdit}
                                userId={this.state.currentUser}
                                rUserId={data.userId}
                                history={this.props.history}
                            />
                        </Col>
                    )
                    :
                    <div className="customLoadingSection">
                        <Spinner className="customLoading" animation="grow" size="xs" variant="secondary"/>
                    </div>
                }
            </>
        );
    }
}

export default Index;
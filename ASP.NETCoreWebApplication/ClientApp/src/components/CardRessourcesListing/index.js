import React, {Component} from 'react';
import axios from "axios";
import {Col, Spinner} from "react-bootstrap"
import CardCustom from "../CardRessources";
import CardRessources from "../CardRessources";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ressources_data: null,
        }
    }


    async componentDidMount() {
        /*const userOnly = this.props.userOnly;*/
        const userOnly = this.props.userOnly;
        let userId = null;
        await this.props.userId.then(function(result) {
            userId = result
        })

        await this.setState({aUserId: userId})
        
        /*Is true*/
        if (userOnly) {
            axios.get(`https://localhost:5001/api/Ressource/usr/${userId}`)
                .then(res => {
                    const debate = res.data;
                    this.setState({ressources_data: debate});
                })
        } else {
            axios.get(`https://localhost:5001/api/Ressource`)
                .then(res => {
                    const debate = res.data;
                    this.setState({ressources_data: debate});
                })
        }
    }


    render() {
        return (
            <>
                {this.state.ressources_data != null ?
                    this.state.ressources_data.map((data, i) =>
                        <Col xs={11} md={4} className="g-4" align="center" key={data.id}>
                            <CardRessources
                                username={data.userName}
                                isUserRess={data.userId === this.state.aUserId}
                                img={"https://via.placeholder.com/800x400.png/24A5AD/FFFFFF"}
                                title={data.title}
                                isLiked={i % 2 == 0 ? true : false}
                                isBookmark={i % 2 != 0 ? true : false}
                                dateTime={data.releaseDate}
                                id={data.id}
                                key={data.id + '_content'}
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
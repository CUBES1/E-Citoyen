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


    componentDidMount() {
        axios.get(`https://localhost:5001/api/Debat`)
            .then(res => {
                const debate = res.data;
                this.setState({ressources_data: debate});
            })
    }


    render() {
        return (
            <>
                {this.state.ressources_data != null ?
                    this.state.ressources_data.map((data, i) =>
                        <Col xs={11} md={4} className="g-4" align="center">
                            <CardRessources
                                username={data.userId}
                                img={"https://via.placeholder.com/800x400.png/24A5AD/FFFFFF"}
                                title={data.title}
                                isLiked={i % 2 == 0 ? true : false}
                                isBookmark={i % 2 != 0 ? true : false}
                                dateTime={data.releaseDate}
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
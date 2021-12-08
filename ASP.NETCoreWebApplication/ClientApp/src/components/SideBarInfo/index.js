import React, { Component } from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap';
import './style.css';
import Avatar from '../../assets/avatar.png'
import { flexbox, textAlign } from '@mui/system';

export default class CardCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Card className="cardStyle" >
                <Card.Body>

                    <Card.Title>Nos meilleurs ressources</Card.Title>
                    {
                        [1, 2, 3, 4, 5, 6].map((x, i) =>
                            <Card className="SideBarCardStyle">
                                <div className="cardContainer-sidebar">
                                    <div className="containerUser">
                                        <img alt="toto" src={Avatar} className="avatarOnSidbar" />
                                    </div>
                                    <div className="textContainer">
                                        <div>
                                            <p className="topTitle">Je suis un titre plutôt long qui défini une réssource</p>
                                        </div>
                                        <div>
                                            <p className="topUserName">Abib Assam</p>
                                        </div>
                                        <div>
                                            <p className="topLike">{i} likes</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        )
                    }

                    {/* <div className="containerUser">
                        <img alt="toto" src={Avatar} className="avatarOnRessource" />
                        <p className="userName">{this.props.username}</p>
                    </div>

                    <div className="imageContainer">
                        <img src={this.props.img} alt="" className="card-img-top" />
                        <p className="ressourceTitle">{this.props.title}</p>
                    </div>
                    <div className="footerCard">
                        <div>
                            {!this.props.isLiked ?
                                <Card.Link href="#"><FavoriteBorderIcon sx={{ color: "#022922" }} fontSize="medium" /></Card.Link>
                                :
                                <Card.Link href="#"><FavoriteIcon sx={{ color: "#E45E66" }} fontSize="medium" /></Card.Link>
                            }

                            {!this.props.isBookmark ?
                                <Card.Link href="#"><BookmarkBorderIcon sx={{ color: "#022922" }} fontSize="medium" /></Card.Link>
                                :
                                <Card.Link href="#"><BookmarkIcon sx={{ color: "#022922" }} fontSize="medium" /></Card.Link>
                            }

                            <Card.Link href="#"><ReplyIcon sx={{ color: "#022922" }} fontSize="medium" /></Card.Link>
                        </div>
                        <div>
                            <p>{this.props.dateTime}</p>
                        </div>
                    </div> */}
                </Card.Body>
            </Card>

        )
    }
}

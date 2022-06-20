import React, {Component} from 'react'
import {Container, Card, Col, Row} from 'react-bootstrap';
import './style.css';
import Avatar from 'react-avatar';
import {flexbox, textAlign} from '@mui/system';

let fakeDataTableToDemo = [
    {
        id: 1,
        name: 'Jean Michel',
        like: 12,
        title: "Les recettes de notres enfances",
    },
    {
        id: 2,
        name: 'Pierre Henry',
        like: 10,
        title: "L'homme et la lune, la marche des morts",
    },
    {
        id: 3,
        name: 'Pierre Lachaise',
        like: 9,
        title: "Un passé et un avenir",
    },
    {
        id: 4,
        name: 'Anne-Marie Lefevre',
        like: 9,
        title: "La rue de la paix",
    },
    {
        id: 5,
        name: 'Axel Bélanger',
        like: 9,
        title: "Le monde de la guerre",
    },
    {
        id: 6,
        name: 'Thierry Cazalet',
        like: 8,
        title: "Portrait de l'homme",
    },
    
]


export default class CardCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Card className="cardStyle">
                <Card.Body>

                    <Card.Title>Nos meilleurs ressources</Card.Title>
                    {
                        fakeDataTableToDemo.map((x, i) =>
                            <Card className="SideBarCardStyle" key={i}>
                                <div className="cardContainer-sidebar">
                                    <div className="containerUser">
                                        <Avatar className="avatar-sidebar" size={50} round="50px" name={x.name} className={"avatarOnSidbar"}/>
                                    </div>
                                    <div className="textContainer">
                                        <div>
                                            <p className="topTitle">{x.title}</p>
                                        </div>
                                        <div>
                                            <p className="topUserName">{x.name}</p>
                                        </div>
                                        <div>
                                            <p className="topLike">{x.like} j'aimes</p>
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

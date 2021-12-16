import React, { Component } from 'react'
import { Container, Card, Col } from 'react-bootstrap';
import './style.css';
import Avatar from '../../assets/avatar.png'
import { textAlign } from '@mui/system';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ReplyIcon from '@mui/icons-material/Reply';
import moment from 'moment';
moment().format();
let iamDate = "";

export default class CardRessources extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
   
  

    render() {
        return (
            <Card className="cardStyle" >
                <Card.Body>
                    <div className="containerUser">
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
                            <p>{moment(this.props.dateTime, 'YYYY-MM-DD[T]HH:mm:ss').format("DD/MM/YYYY HH:mm")}</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>

        )
    }
}

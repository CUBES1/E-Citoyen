import React, {Component} from 'react'
import {Container, Card, Col, Button} from 'react-bootstrap';
import './style.css';
import Avatar from "react-avatar";
import {textAlign} from '@mui/system';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ReplyIcon from '@mui/icons-material/Reply';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import moment from 'moment';
import {Link} from "react-router-dom";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

moment().format();
let iamDate = "";

export default class CardRessources extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLiked: false, isBookmark: false,
        }
        this.likeResource = this.likeResource.bind(this);
    }

    deleteRessource(id) {
        axios.delete(`https://localhost:5001/api/Ressource/${id}`)
            .then(() => {
                window.location.reload()
                return axios.get(`https://localhost:5001/api/Ressource/`)
            })
            .then(res => {
                // Update users in state as per-usual
                const ressource = res.data;
                this.setState({ressource});
            })
    }

    addFriend() {
        axios.post(`https://localhost:5001/api/Relation/${this.props.rUserId}`)
            .then(() => {
                {
                    alert("You have add friend");
                }
            })
    }

    async componentDidMount() {

        /* Waiting for promise to set state */
        let isLiked = false;
        await this.props.isLiked.then(function (result) {
            isLiked = result
        })

        let isBookmark = false;
        await this.props.isBookmark.then(function (result) {
            isBookmark = result
        })
        /* End of waiting, setting state */
        await this.setState({isLiked: isLiked, isBookmark: isBookmark})

    }

    likeResource = async () => {
        let isLiked = await this.state.isLiked;

        /* Check if already liked to delete, or post on the call to the API */
        if (isLiked) {
            await axios.delete(`https://localhost:5001/api/UserInteraction/Like/${this.props.userId}/${this.props.id}`)
                .then(function (response) {
                    isLiked = false
                })
                .catch(function (error) {
                    /*TODO Needing add of error output or actions, to define */
                });
        } else {
            await axios.post('https://localhost:5001/api/UserInteraction/Like', {
                UserId: this.props.userId, RessourceId: this.props.id,
            })
                .then(function (response) {
                    isLiked = true
                })
                .catch(function (error) {
                    /*TODO Needing add of error output or actions, to define */
                });
        }

        /* Setting new state */
        await this.setState({isLiked: isLiked});
    }

    bookmarkResource = async () => {
        let isBookmark = await this.state.isBookmark;

        /* Check if already bookmarked to delete, or post on the call to the API */
        if (isBookmark) {
            await axios.delete(`https://localhost:5001/api/UserInteraction/Favorite/${this.props.userId}/${this.props.id}`)
                .then(function (response) {
                    isBookmark = false
                })
                .catch(function (error) {
                    /*TODO Needing add of error output or actions, to define */
                });
        } else {
            await axios.post('https://localhost:5001/api/UserInteraction/Favorite', {
                UserId: this.props.userId, RessourceId: this.props.id,
            })
                .then(function (response) {
                    isBookmark = true
                })
                .catch(function (error) {
                    /*TODO Needing add of error output or actions, to define */
                });
        }

        /* Setting new state */
        await this.setState({isBookmark: isBookmark});
    }

    deleteRessource() {
        if (window.confirm("Voulez vous vraiment suprimmer la ressource \"" + this.props.title + "\"")) {
            axios.delete(`https://localhost:5001/api/Ressource/${this.props.id}`)
                .then(res => {
                    /*TODO Error handling*/
                    /*Going back in history after delete*/
                    window.location.reload()
                })
        } else {

        }

    }
    editRessource() {
        let redirect = "/edit-ressource/" + this.props.id;
        this.props.history.push({
            pathname: redirect,
        });
    }

    render() {
        return (<Card className="cardStyle">
            <Card.Body>
                <div className="containerUser">
                    <Link to={{
                        pathname: `/profile/${this.props.rUserId}`,
                        state: {rUserId: this.props.rUserId}
                    }} className={"linkBlank"}>
                        <Avatar name={this.props.username} size={35} round={true} className="avatarOnRessource"/>
                    </Link>
                    <Link to={{
                        pathname: `/profile/${this.props.rUserId}`,
                        state: {rUserId: this.props.rUserId}
                    }} className={"linkBlank"}>
                        <p className="userName">{this.props.username}</p>
                    </Link>
                  
                </div>

                <Link to={{
                    pathname: `/ressource/${this.props.id}`,
                    state: {userId: this.props.userId, id: this.props.id, canEdit: false}
                }}
                      className={"linkBlank"}>
                    <div className="imageContainer">
                        <img src={this.props.img} alt="" className="card-img-top"/>
                        <p className="ressourceTitle">{this.props.title}</p>
                    </div>
                </Link>
                <div className="footerCard">
                    <div>
                        {this.state.isLiked === true ?
                            <Card.Link
                                onClick={this.props.userId != null ? this.likeResource : ''/*TODO add message of error user not connected*/}
                                className={"actionLink"}><FavoriteIcon
                                sx={{color: "#E45E66"}}
                                fontSize="medium"/></Card.Link> :
                            <Card.Link
                                onClick={this.props.userId != null ? this.likeResource : ''/*TODO add message of error user not connected*/}
                                className={"actionLink"}><FavoriteBorderIcon
                                sx={{color: "#022922"}}
                                fontSize="medium"/></Card.Link>}


                        {this.state.isBookmark === true ?
                            <Card.Link
                                onClick={this.props.userId != null ? this.bookmarkResource : ''/*TODO add message of error user not connected*/}
                                className={"actionLink"}><BookmarkIcon
                                sx={{color: "#00cba9"}}
                                fontSize="medium"/></Card.Link> :
                            <Card.Link
                                onClick={this.props.userId != null ? this.bookmarkResource : ''/*TODO add message of error user not connected*/}
                                className={"actionLink"}><BookmarkBorderIcon
                                sx={{color: "#022922"}}
                                fontSize="medium"/></Card.Link>}

                        <Card.Link href="#"><ReplyIcon sx={{color: "#022922"}} fontSize="medium"/></Card.Link>
                        {/* Double check if user can edit
                                   if the resource is his own, and if the resource is editable */
                            this.props.isUserRess && this.props.canEdit ?
                                [<Card.Link><EditIcon
                                    sx={{color: "#022922"}}
                                    onClick={() => this.editRessource()}
                                    className={"actionLink"}
                                    fontSize="medium"/></Card.Link>
                                    ,
                                    <Card.Link
                                        onClick={() => this.deleteRessource()}
                                        className={"actionLink"}><DeleteIcon
                                        sx={{color: "#022922"}}
                                        fontSize="medium"/></Card.Link>] : ''}
                    </div>
                    <div>
                        <p>{moment(this.props.dateTime, 'YYYY-MM-DD[T]HH:mm:ss').format("DD/MM/YYYY HH:mm")}</p>
                    </div>
                </div>

            </Card.Body>
        </Card>)
    }
}

import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Layout} from '../Layout'
import Avatar from "../../assets/avatar.png";
import {Button, Card, Spinner} from "react-bootstrap";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ReplyIcon from "@mui/icons-material/Reply";
import DownloadIcon from '@mui/icons-material/Download';
import ReportIcon from '@mui/icons-material/Report';
import {Chip} from "@material-ui/core";
import {useParams} from "react-router-dom";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AsyncLocalStorage from "@createnextapp/async-local-storage";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        }
        this.likeResource = this.likeResource.bind(this);
        this.bookmarkResource = this.bookmarkResource.bind(this);
    }
    
    likeResource = async () => {
        let isLiked = await this.state.isLiked;

        /* Check if already liked to delete, or post on the call to the API */
        if (isLiked) {
            await axios.delete(`https://localhost:5001/api/UserInteraction/Like/${this.props.location.state.userId}/${this.props.location.state.id}`)
                .then(function (response) {
                    isLiked = false
                })
                .catch(function (error) {
                    /*TODO Needing add of error output or actions, to define */
                });
        } else {
            await axios.post('https://localhost:5001/api/UserInteraction/Like', {
                UserId: this.props.location.state.userId,
                RessourceId: this.props.location.state.id,
            })
                .then(function (response) {
                    isLiked = true
                })
                .catch(function (error) {
                    /*TODO Needing add of error output or actions, to define */
                });
        }

        await this.setState({isLiked: isLiked});
    }

    bookmarkResource = async () => {
        let isBookmark = await this.state.isBookmark;

        /* Check if already bookmarked to delete, or post on the call to the API */
        if (isBookmark) {
            await axios.delete(`https://localhost:5001/api/UserInteraction/Favorite/${this.props.location.state.userId}/${this.props.location.state.id}`)
                .then(function (response) {
                    isBookmark = false
                })
                .catch(function (error) {
                    /*TODO Needing add of error output or actions, to define */
                });
        } else {
            await axios.post('https://localhost:5001/api/UserInteraction/Favorite', {
                UserId: this.props.location.state.userId,
                RessourceId: this.props.location.state.id,
            })
                .then(function (response) {
                    isBookmark = true
                })
                .catch(function (error) {
                    /*TODO Needing add of error output or actions, to define */
                });
        }

        await this.setState({isBookmark: isBookmark});
    }

    deleteRessource() {
        if (window.confirm("Voulez vous vraiment suprimmer la ressource \"" + this.state.data.title + "\"")) {
            axios.delete(`https://localhost:5001/api/Ressource/${this.state.data.id}`)
                .then(res => {
                    /*TODO Error handling*/
                    /*Going back in history after delete*/
                    this.props.history.goBack()
                })
        } else {

        }

    }

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`https://localhost:5001/api/UserInteraction/Like/${this.props.location.state.userId}/${this.props.location.state.id}`)
            .then(res => {
                const data = res.data;
                this.setState({isLiked: data});
            })

        axios.get(`https://localhost:5001/api/UserInteraction/Favorite/${this.props.location.state.userId}/${this.props.location.state.id}`)
            .then(res => {
                const data = res.data;
                this.setState({isBookmark: data});
            })

        window.scrollTo(0, 0);

        axios.get(`https://localhost:5001/api/Ressource/${id}`)
            .then(res => {
                const data = res.data;
                this.setState({
                    data: data,
                    isLoading: false,
                })
            })
    }

    editRessource () {
        
        let redirect = "/edit-ressource/"+ this.state.data.id;
        this.props.history.push({
            pathname: redirect,
            data: this.state.data
        });
    }

    render() {
        return (
            <div>
                <Layout title={"Ressource"} subtitle={" "} goBack={() => this.props.history.goBack()}>
                    {
                        this.state.isLoading ?
                            <Spinner className="customLoading2" animation="grow" size="sm" variant="secondary"/>
                            :
                            <div className={"container"}>
                                <div className="row justify-content-md-center">
                                    <div className="col-md-auto ressourceHeader d-flex justify-content-center ">
                                        <img
                                            src={"https://source.unsplash.com/random/800x300"}
                                            className={"ressourceHeaderImg"}/>
                                    </div>
                                    <div className="row userRow">
                                        <div className="col-md-7">
                                            <div>
                                                <div className="userHeader">
                                                    <img alt="toto" src={Avatar} className="avatarHoverRessource"/>
                                                    <div className={"ressourcePropInfos"}>
                                                        <p className="ressourcePropTitle">{this.state.data.title}</p>
                                                        <p className="ressourcePropUser">{this.state.data.userName}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-md-center ressourcePropSection">
                                        <div className="col-md-auto">
                                            <div className="row justify-content-md-center">
                                                <div className="col-md-12">
                                                    <Chip className={"ressourcePropCat space-between"} size="small"
                                                          color="primary" label="Lorem ipsum"/>
                                                    <Chip className={"ressourcePropCat space-between"} size="small"
                                                          color="info"
                                                          label="Lorem ipsum"/>
                                                </div>
                                                <div className="col-md-7 ressourcePropContent">
                                                    <p>
                                                        <p className="">{this.state.data.description}</p>
                                                    </p>
                                                </div>


                                                <div className="row justify-content-md-center">
                                                    <div className="col-md-7 ressourcePropDate">
                                                        <p> 07/01/2022 10:44 &#8226; Modifié</p>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-md-center">
                                                    <div className="col-md-7 ressourcePropContent">
                                                        <div>
                                                            {this.state.isLiked === true ?
                                                                <Card.Link
                                                                    onClick={this.props.location.state.userId != null ? this.likeResource : ''/*TODO add message of error user not connected*/}
                                                                    className={"actionLink"}><FavoriteIcon
                                                                    sx={{color: "#E45E66"}}
                                                                    fontSize="medium"/></Card.Link>
                                                                :
                                                                <Card.Link
                                                                    onClick={this.props.location.state.userId != null ? this.likeResource : ''/*TODO add message of error user not connected*/}
                                                                    className={"actionLink"}><FavoriteBorderIcon
                                                                    sx={{color: "#022922"}}
                                                                    fontSize="medium"/></Card.Link>
                                                            }

                                                            {this.state.isBookmark === true ?
                                                                <Card.Link
                                                                    onClick={this.props.location.state.userId != null ? this.bookmarkResource : ''/*TODO add message of error user not connected*/}
                                                                    className={"actionLink"}><BookmarkIcon
                                                                    sx={{color: "#00cba9"}}
                                                                    fontSize="medium"/></Card.Link>
                                                                :
                                                                <Card.Link
                                                                    onClick={this.props.location.state.userId != null ? this.bookmarkResource : ''/*TODO add message of error user not connected*/}
                                                                    className={"actionLink"}><BookmarkBorderIcon
                                                                    sx={{color: "#022922"}}
                                                                    fontSize="medium"/></Card.Link>
                                                            }

                                                            <Card.Link href="#"><ReplyIcon sx={{color: "#022922"}}
                                                                                           fontSize="medium"/></Card.Link>
                                                            {
                                                                this.props.location.state.userId === this.state.data.userId ?
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
                                                                            fontSize="medium"/></Card.Link>]
                                                                    :
                                                                    ''
                                                            }

                                                            <Button className={"btn buttonDownloadRess"}>
                                                                <DownloadIcon sx={{color: "#022922"}}
                                                                              fontSize="medium"/>
                                                                <span>Telecharger la ressource</span>
                                                            </Button>
                                                            {/*Si sa ressource, alors la modifier a la place de signalement*/}
                                                            <Button className={"buttonDownloadRess btn btn-secondary"}>
                                                                <ReportIcon sx={{color: "#022922"}} fontSize="medium"/>
                                                                <span>Signaler</span>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </Layout>
            </div>
        );
    }
}


export default Index;

import React, {Component} from 'react';
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

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        }
    }


    componentDidMount() {
        const id = this.props.match.params.id;

        window.scrollTo(0, 0);

        axios.get(`https://localhost:5001/api/Ressource/${id}`)
            .then(res => {
                const debate = res.data;
                this.setState({
                    data: debate,
                    isLoading: false,
                })
            })
    }


    render() {
        return (
            <div>
                <Layout title={"Ressource"} subtitle={" "} goBack={() => this.props.history.goBack()} >
                    {
                        this.state.isLoading ?
                            <Spinner className="customLoading2" animation="grow" size="sm" variant="secondary"/>
                            :
                            <div className={"container"}>
                                <div className="row justify-content-md-center">
                                    <div className="col-md-auto ressourceHeader d-flex justify-content-center ">
                                        <img
                                            src={"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"}
                                            className={"ressourceHeaderImg"}/>
                                    </div>
                                    
                                    <div className="row justify-content-md-center">
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
                                            <p className="">{this.state.data.genre}</p>
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
                                                        <p className="">{this.state.data.text}</p>
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
                                                            {!this.props.isLiked ?
                                                                <Card.Link href="#"><FavoriteBorderIcon
                                                                    sx={{color: "#022922"}}
                                                                    fontSize="medium"/></Card.Link>
                                                                :
                                                                <Card.Link href="#"><FavoriteIcon
                                                                    sx={{color: "#E45E66"}}
                                                                    fontSize="medium"/></Card.Link>
                                                            }

                                                            {!this.props.isBookmark ?
                                                                <Card.Link href="#"><BookmarkBorderIcon
                                                                    sx={{color: "#022922"}}
                                                                    fontSize="medium"/></Card.Link>
                                                                :
                                                                <Card.Link href="#"><BookmarkIcon
                                                                    sx={{color: "#022922"}}
                                                                    fontSize="medium"/></Card.Link>
                                                            }

                                                            <Card.Link href="#"><ReplyIcon sx={{color: "#022922"}}
                                                                                           fontSize="medium"/></Card.Link>


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
import React, {Component} from 'react'
import Attractions from "../../assets/images/gallery/attractions.jpg";
import AttractionsH from "../../assets/images/gallery/attractions_h.jpg";
import Conference from "../../assets/images/gallery/conference.jpg";
import ConferenceH from "../../assets/images/gallery/conference_h.jpg";
import Rooms from "../../assets/images/gallery/rooms.jpg";
import RoomsH from "../../assets/images/gallery/rooms_h.jpg";
import Spa from "../../assets/images/gallery/spa.jpg";
import SpaH from "../../assets/images/gallery/spa_h.jpg";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";


class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            header: "",
            content: "",
            attractionsHighlight: false,
            conferenceHighlight: false,
            roomsHighlight: false,
            spaHighlight: false
        }
    }

    onClick(actionId) {
        if (actionId === 'attractions')
            this.setState({header: "atrakcje", content: "atrakcje"});

        if (actionId === 'conference')
            this.setState({header: "sala konferencyjna", content: "atrakcje"});

        if (actionId === 'rooms')
            this.setState({header: "pokoje", content: "atrakcje"});

        if (actionId === 'spa')
            this.setState({header: "spa", content: "atrakcje"});

        this.setState({visible: true});

    }

    onMouseOver = (actionId) => {
        if (actionId === 'attractions')
            this.setState({attractionsHighlight: true});

        if (actionId === 'conference')
            this.setState({conferenceHighlight: true});

        if (actionId === 'rooms')
            this.setState({roomsHighlight: true});

        if (actionId === 'spa')
            this.setState({spaHighlight: true});
    }

    onMouseLeave = (actionId) => {
        if (actionId === 'attractions')
            this.setState({attractionsHighlight: false});

        if (actionId === 'conference')
            this.setState({conferenceHighlight: false});

        if (actionId === 'rooms')
            this.setState({roomsHighlight: false});

        if (actionId === 'spa')
            this.setState({spaHighlight: false});
    }

    onHide = () =>{
        this.setState({visible: false});
    }

    render() {
        const footer = (
            <div>
                <Button label="zamknij" icon="pi pi-check" onClick={this.onHide}/>
            </div>
        );

        return (
            <div>
                <br/>
                {this.state.attractionsHighlight ? (
                        <img src={AttractionsH} className="img-space" alt="" onMouseLeave={() => this.onMouseLeave('attractions')}
                             onClick={() => this.onClick('attractions')}/>) :
                    (<img src={Attractions} className="img-space" alt="" onMouseOver={() => this.onMouseOver('attractions')}/>)}

                {this.state.conferenceHighlight ? (
                        <img src={ConferenceH} className="img-space" alt="" onMouseLeave={() => this.onMouseLeave('conference')}
                             onClick={() => this.onClick('conference')}/>) :
                    (<img src={Conference} className="img-space" alt="" onMouseOver={() => this.onMouseOver('conference')}/>)}

                {this.state.roomsHighlight ? (
                        <img src={RoomsH} className="img-space" alt="" onMouseLeave={() => this.onMouseLeave('rooms')}
                             onClick={() => this.onClick('rooms')}/>) :
                    (<img src={Rooms} className="img-space" alt="" onMouseOver={() => this.onMouseOver('rooms')}/>)}

                {this.state.spaHighlight ? (
                        <img src={SpaH} className="img-space" alt="" onMouseLeave={() => this.onMouseLeave('spa')}
                             onClick={() => this.onClick('spa')}/>) :
                    (<img src={Spa} className="img-space" alt="" onMouseOver={() => this.onMouseOver('spa')}/>)}
                <br/>
                <br/>
                <br/>
                <Dialog header={this.state.header} visible={this.state.visible} style={{width: '50vw'}}
                        footer={footer} onHide={this.onHide} modal={true} maximizable>
                    {this.state.content}
                </Dialog>
            </div>
        )
    }
}

export default Gallery
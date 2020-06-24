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
import {Galleria} from 'primereact/galleria';

import A1 from "../../assets/images/gallery/around/A1.jpg";
import A2 from "../../assets/images/gallery/around/A2.jpg";
import A3 from "../../assets/images/gallery/around/A3.jpg";
import A4 from "../../assets/images/gallery/around/A4.jpg";
import A5 from "../../assets/images/gallery/around/A5.jpg";
import A6 from "../../assets/images/gallery/around/A6.jpg";

import C1 from "../../assets/images/gallery/conference/C1.jpg";
import C2 from "../../assets/images/gallery/conference/C2.jpg";
import C3 from "../../assets/images/gallery/conference/C3.jpg";
import C4 from "../../assets/images/gallery/conference/C4.jpg";
import C5 from "../../assets/images/gallery/conference/C5.jpg";
import C6 from "../../assets/images/gallery/conference/C6.jpg";

import R1 from "../../assets/images/gallery/rooms/R1.jpg";
import R2 from "../../assets/images/gallery/rooms/R2.jpg";
import R3 from "../../assets/images/gallery/rooms/R3.jpg";
import R4 from "../../assets/images/gallery/rooms/R4.jpg";
import R5 from "../../assets/images/gallery/rooms/R5.jpg";
import R6 from "../../assets/images/gallery/rooms/R6.jpg";

import S1 from "../../assets/images/gallery/spa/S1.jpg";
import S2 from "../../assets/images/gallery/spa/S2.jpg";
import S3 from "../../assets/images/gallery/spa/S3.jpg";
import S4 from "../../assets/images/gallery/spa/S4.jpg";
import S5 from "../../assets/images/gallery/spa/S5.jpg";
import S6 from "../../assets/images/gallery/spa/S6.jpg";


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
            spaHighlight: false,
            source: null,
            activeIndex: 0
        }
    }

    onClick(actionId) {
        this.setState({activeIndex : 0});

        if (actionId === 'attractions') {
            this.setState({
                header: "wokół nas",
                content: [A1, A2, A3, A4, A5, A6],
                source : A1
                })
        };

        if (actionId === 'conference'){
            this.setState({
                header: "sala konferencyjna",
                content: [C1, C2, C3, C4, C5, C6],
                source : C1
            })
        };

        if (actionId === 'rooms'){
            this.setState({header: "pokoje",
                           content: [R1, R2, R3, R4, R5, R6],
                source : R1
            })
        };

        if (actionId === 'spa'){
            this.setState({header: "spa",
                content: [S1, S2, S3, S4, S5, S6],
                source : S1
            })
        };
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

    onHide = () => {
        this.setState({visible: false});
    }

    previewTemplate = () =>{
        return <img src={this.state.source} alt='' style={{ width: '100%' }} />
    }

    onItemChange = (event) => {
        this.setState({ activeIndex: event.index }, ()=>{this.setState({source: this.state.content[this.state.activeIndex]});});
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
                        <img src={AttractionsH} className="img-space" alt=""
                             onMouseLeave={() => this.onMouseLeave('attractions')}
                             onClick={() => this.onClick('attractions')}/>) :
                    (<img src={Attractions} className="img-space" alt=""
                          onMouseOver={() => this.onMouseOver('attractions')}/>)}

                {this.state.conferenceHighlight ? (
                        <img src={ConferenceH} className="img-space" alt=""
                             onMouseLeave={() => this.onMouseLeave('conference')}
                             onClick={() => this.onClick('conference')}/>) :
                    (<img src={Conference} className="img-space" alt=""
                          onMouseOver={() => this.onMouseOver('conference')}/>)}

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
                    <br/>
                    <br/>
                    <Galleria value={this.state.content} previewItemTemplate={this.previewTemplate}
                              activeIndex={this.state.activeIndex} onItemChange={this.onItemChange}
                              circular={true}/>
                </Dialog>
            </div>
        )
    }
}

export default Gallery
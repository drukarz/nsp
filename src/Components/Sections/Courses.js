import React, {Component} from 'react'
import ReactJS from "../../assets/images/courses/react.jpg";
import Docker from "../../assets/images/courses/docker.jpg";
import Ansible from "../../assets/images/courses/ansible.jpg";
import Scrum from "../../assets/images/courses/scrum.jpg";
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';

class Courses extends Component
{
    constructor() {
        super();

        this.state =
            {
                visible: false,
                header: "",
                content: ""
            }

        this.onHide = this.onHide.bind(this);
    }

    onClick(actionId)
    {
        if(actionId === "react")
        {
            this.setState({header: "React JS", content: "React JS"});
        }

        if(actionId === "docker")
        {
            this.setState({header: "Docker", content: "Docker"});
        }

        if(actionId === "ansible")
        {
            this.setState({header: "Ansible", content: "Ansible"});
        }

        if(actionId === "scrum")
        {

            let content = <div className="offer-text">
                <div>
                Szkolenie adresowane jest do osób chcących zdobyć wiedzę ze Scruma i wykorzystać ją w swojej pracy, jak i do uczestników, którzy już pracują w zespołach Scrumowych lecz chcą usprawnić działanie Scruma w swojej firmie. Wykłady będą przeplatane z warsztatami, gry symulacujne,  aby uczestnicy zdobyli również praktyczną wiedzę.
                </div>
                <br/>

                <b>Metodyki zwinne - ogólna wiedza</b>

                <ul>
                    <li>
                        Agile vs Scrum
                    </li>
                    <li>
                        inne metodyki zwinne
                    </li>
                    <li>
                        porównanie z modelem kaskadowym
                    </li>
                    <li>
                        zasady agile
                    </li>
                    <li>
                        Scrum - ogólna wiedza, zdarzenia, role, artefakty
                    </li>
                </ul>
                <br/>

                <b>Warsztat pracy SM</b>
                <ul>
                    <li>
                        monitorowanie przebiegu prac (metryki)
                    </li>
                    <li>
                        rozwiązywanie problemów
                    </li>
                    <li>
                        pomysły na retrospekcje
                    </li>
                    <li>
                        planowanie w Agile
                    </li>
                    <li>
                        praca z zespołem
                    </li>
                    <li>
                        cechy zespołu developerów, Jak je rozwijać ?
                    </li>
                    <li>
                        cechy Scrum Mastera
                    </li>
                </ul>
                </div>

            this.setState({header: "Scrum", content: content});



        }

        this.setState({visible: true});
    }

    onHide()
    {
        this.setState({visible: false});
    }

    render()
    {
        const footer = (
            <div>
                <Button label="zamknij" icon="pi pi-check" onClick={this.onHide} />
            </div>
        );

        return(
            <div>
                <img src={ReactJS} className="img-space" onClick={() => this.onClick("react")}/>
                <img src={Docker} className="img-space" onClick={() => this.onClick("docker")}/>
                <img src={Ansible} className="img-space" onClick={() => this.onClick("ansible")}/>
                <img src={Scrum} className="img-space" onClick={() => this.onClick("scrum")}/>
                <Dialog header={this.state.header} visible={this.state.visible} style={{width: '50vw'}}
                        footer={footer} onHide={this.onHide} modal={true} maximizable>
                    {this.state.content}
                </Dialog>
            </div>
        )
    }
}

export default Courses
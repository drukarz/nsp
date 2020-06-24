import React, {Component} from 'react'
import ReactJS from "../../assets/images/courses/react.jpg";
import ReactJSH from "../../assets/images/courses/react_h.jpg";
import Docker from "../../assets/images/courses/docker.jpg";
import DockerH from "../../assets/images/courses/docker_h.jpg";
import Ansible from "../../assets/images/courses/ansible.jpg";
import AnsibleH from "../../assets/images/courses/ansible_h.jpg";
import Scrum from "../../assets/images/courses/scrum.jpg";
import ScrumH from "../../assets/images/courses/scrum_h.jpg";
import Spring from "../../assets/images/courses/spring.jpg";
import SpringH from "../../assets/images/courses/spring_h.jpg";
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {Accordion, AccordionTab} from 'primereact/accordion';
import ScrumDescription from "./CoursesDescriptions/Scrum/ScrumDescription";
import ScrumModules from "./CoursesDescriptions/Scrum/ScrumModules";
import DockerDescription from "./CoursesDescriptions/Docker/DockerDescription";
import DockerModules from "./CoursesDescriptions/Docker/DockerModules";
import ReactDescription from "./CoursesDescriptions/ReactJS/ReactJSDescription";
import ReactModules from "./CoursesDescriptions/ReactJS/ReactJSModules";
import AnsibleDescription from "./CoursesDescriptions/Ansible/AnsibleDescription";
import AnisbleModules from "./CoursesDescriptions/Ansible/AnisbleModules";

import SpringMicroservicesDescription from "./CoursesDescriptions/SpringMicroservices/SpringMicroservicesDescription";
import SpringMicroservicesModules from "./CoursesDescriptions/SpringMicroservices/SpringMicroservicesModules";

class Courses extends Component
{
    constructor() {
        super();

        this.state =
        {
            visible: false,
            header: "",
            content: "",
            reactHighlight: false,
            springHighlight: false,
            dockerHighlight: false,
            ansibleHighlight: false,
            scrumHighlight: false
        }

        this.onHide = this.onHide.bind(this);
    }

    onClick(actionId)
    {
        if(actionId === "react")
        {

            const description = ReactDescription();

            this.setState({header: "React JS",
                aim: description.aim,
                result: description.result,
                information: description.informations,
                modules: ReactModules()});

            this.setState({header: "React JS", content: ReactDescription()});
        }

        if(actionId === "docker")
        {
            const dockerDescription = DockerDescription();

            this.setState({header: "Docker",
                aim: dockerDescription.aim,
                result: dockerDescription.result,
                information: dockerDescription.informations,
                modules: DockerModules()});

            this.setState({header: "Docker", content: DockerDescription()});
        }

        if(actionId === "spring")
        {
            const springDescription = SpringMicroservicesDescription();

            this.setState({header: "Microservices in Spring",
                aim: springDescription.aim,
                result: springDescription.result,
                information: springDescription.informations,
                modules: SpringMicroservicesModules()});
        }

        if(actionId === "ansible")
        {
            const anisbleDescription = AnsibleDescription();

            this.setState({header: "Ansible",
                           aim: anisbleDescription.aim,
                           result: anisbleDescription.result,
                           information: anisbleDescription.informations,
                           modules: AnisbleModules()});
        }

        if(actionId === "scrum")
        {
            const scrumDescription = ScrumDescription();

            this.setState({header: "Scrum",
                           aim: scrumDescription.aim,
                           result: scrumDescription.result,
                           information: scrumDescription.informations,
                           modules: ScrumModules()});
        }

        this.setState({visible: true});
    }

    onMouseOver = (actionId) =>
    {
        if(actionId === "react")
            this.setState({reactHighlight: true});

        if(actionId === "spring")
            this.setState({springHighlight: true});

        if (actionId === "docker")
            this.setState({dockerHighlight: true});

        if(actionId === "ansible")
            this.setState({ansibleHighlight: true});

        if(actionId === "scrum")
            this.setState({scrumHighlight: true});
    }

    onMouseLeave = (actionId) =>
    {
        if(actionId === "react")
            this.setState({reactHighlight: false});

        if(actionId === "spring")
            this.setState({springHighlight: false});

        if (actionId === "docker")
            this.setState({dockerHighlight: false});

        if(actionId === "ansible")
            this.setState({ansibleHighlight: false});

        if(actionId === "scrum")
            this.setState({scrumHighlight: false});
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
                <br/>

                {this.state.reactHighlight ? (<img src={ReactJSH} className="img-space" alt="" onMouseLeave={() => this.onMouseLeave("react")} onClick={() => this.onClick("react")}/>) :
                                             (<img src={ReactJS} className="img-space" alt="" onMouseOver={() => this.onMouseOver("react")}/>)}

                {this.state.springHighlight ? (<img src={SpringH} className="img-space" alt="" onMouseLeave={() => this.onMouseLeave("spring")} onClick={() => this.onClick("spring")}/>) :
                                              (<img src={Spring} className="img-space" alt="" onMouseOver={() => this.onMouseOver("spring")}/>)}

                {this.state.dockerHighlight ? (<img src={DockerH} className="img-space" alt="" onMouseLeave={() => this.onMouseLeave("docker")} onClick={() => this.onClick("docker")}/>) :
                                              (<img src={Docker} className="img-space" alt="" onMouseOver={() => this.onMouseOver("docker")}/>)}

                {this.state.ansibleHighlight ? (<img src={AnsibleH} className="img-space" alt="" onMouseLeave={() => this.onMouseLeave("ansible")} onClick={() => this.onClick("ansible")}/>) :
                    (<img src={Ansible} className="img-space" alt="" onMouseOver={() => this.onMouseOver("ansible")}/>)}

                {this.state.scrumHighlight ? (<img src={ScrumH} className="img-space" alt="" onMouseLeave={() => this.onMouseLeave("scrum")} onClick={() => this.onClick("scrum")}/>) :
                    (<img src={Scrum} className="img-space" alt="" onMouseOver={() => this.onMouseOver("scrum")}/>)}
                <br/>
                <br/>
                <br/>
                <Dialog header={this.state.header} visible={this.state.visible} style={{width: '50vw'}}
                        footer={footer} onHide={this.onHide} modal={true} maximizable>

                    <Accordion className="courses-description">
                        <AccordionTab header="cel szkolenia" style={{'fontSize': '2.5em'}}>
                            {this.state.aim}
                        </AccordionTab>
                        <AccordionTab header="spodziewany rezultat">
                            {this.state.result}
                        </AccordionTab>
                        <AccordionTab header="program">
                            {this.state.modules}
                        </AccordionTab>
                        <AccordionTab header="informacje organizacyjne">
                            {this.state.information}
                        </AccordionTab>
                    </Accordion>
                </Dialog>
            </div>
        )
    }
}

export default Courses
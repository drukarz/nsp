import React, {Component} from 'react'
import ReactJS from "../../assets/images/courses/react.jpg";
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
import ScrumDescription from "./CoursesDescriptions/ScrumDescription";
import SpringDescription from "./CoursesDescriptions/SpringDescription";
import DockerDescription from "./CoursesDescriptions/DockerDescription";
import ReactDescription from "./CoursesDescriptions/ReactDescription";
import AnsibleDescription from "./CoursesDescriptions/AnsibleDescription";

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
            this.setState({header: "React JS", content: ReactDescription()});
        }

        if(actionId === "docker")
        {
            this.setState({header: "Docker", content: DockerDescription()});
        }

        if(actionId === "spring")
        {
            this.setState({header: "Spring", content: SpringDescription()});
        }

        if(actionId === "ansible")
        {
            this.setState({header: "Ansible", content: AnsibleDescription()});
        }

        if(actionId === "scrum")
        {
            this.setState({header: "Scrum", content: ScrumDescription()});
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
                <img src={ReactJS} className="img-space" alt=""  onClick={() => this.onClick("react")}/>

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
                    {this.state.content}
                </Dialog>
            </div>
        )
    }
}

export default Courses
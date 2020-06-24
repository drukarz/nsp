import {Accordion, AccordionTab} from "primereact/accordion";
import React from "react";
import {toList} from "../../../CommonUtils/ToList";


const DockerModules = () => {
    return (
        <Accordion className="courses-description">
            <AccordionTab header="Wprowadzenie" style={{'fontSize': '2.5em'}}>
                {
                    toList(['wprowadzenie do konteneryzacji', 'Docker', 'instalacja', 'Docker CLI',])
                }
            </AccordionTab>
            <AccordionTab header="Praca z konenerami i obrazami" style={{'fontSize': '2.5em'}}>
                {
                    toList(['Docker CLI', 'operacje na kontenerach, obrazach',
                        'praca z rejestrami', 'Dockerfile'])
                }
            </AccordionTab>
            <AccordionTab header="Konteneryzacja własnej aplikacji" style={{'fontSize': '2.5em'}}/>
            <AccordionTab header="Komponowanie złożonych środowisk - Docker Compose" style={{'fontSize': '2.5em'}}/>

            <AccordionTab header="Klaster" style={{'fontSize': '2.5em'}}>
                {
                    toList(['Docker Swarm', 'zarządzanie', 'Portainer.io'])
                }
            </AccordionTab>
        </Accordion>
    );
}

export default DockerModules;


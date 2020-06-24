import {Accordion, AccordionTab} from "primereact/accordion";
import React from "react";
import {toList} from "../../../CommonUtils/ToList";


const AnisbleModules = () => {
    return (
        <Accordion className="courses-description">
            <AccordionTab header="DevOps – ogólny zarys" style={{'fontSize': '2.5em'}}/>
            <AccordionTab header="Anisble w teorii - podstawowe pojęcia" style={{'fontSize': '2.5em'}}/>
            <AccordionTab header="Ansible Control Machine" style={{'fontSize': '2.5em'}}>
                {
                    toList(['instalacja','uruchomienie połączeń SSH/WinRM do hostów'])
                }
            </AccordionTab>
            <AccordionTab header="Inwentarze" style={{'fontSize': '2.5em'}}>
                {
                    toList(['konstruowanie własnych inwentarzy', 'inwentarze dynamiczne'])
                }
            </AccordionTab>
            <AccordionTab header="Deployment" style={{'fontSize': '2.5em'}}>
                {
                    toList(['konfiguracja Ansible i połączenie z hostami', 'komendy ad hoc'])
                }
            </AccordionTab>
            <AccordionTab header="Elementy składowe" style={{'fontSize': '2.5em'}}>
                {
                    toList(['playbooks', 'variables', 'facts', 'loops', 'debug'])
                }
            </AccordionTab>
            <AccordionTab header="Własne moduły" style={{'fontSize': '2.5em'}}/>
            <AccordionTab header="Ansible Galaxy" style={{'fontSize': '2.5em'}}/>
        </Accordion>
    );
}

export default AnisbleModules;




import {Accordion, AccordionTab} from "primereact/accordion";
import React from "react";
import {toList} from "../../../CommonUtils/ToList";


const ScrumModules = () => {
    return (
        <Accordion className="courses-description">
            <AccordionTab header="Metodyki zwinne - ogólna wiedza" style={{'fontSize': '2.5em'}}>
                {
                    toList(['Agile vs Scrum','inne metodyki zwinne', 'porównanie z modelem kaskadowym',
                            'zasady agile', 'Scrum - ogólna wiedza, zdarzenia, role, artefakty'])
                }
            </AccordionTab>
            <AccordionTab header="Warsztat pracy SM">
                {
                    toList(['monitorowanie przebiegu prac (metryki)','rozwiązywanie problemów', ' pomysły na retrospekcje',
                        'planowanie w Agile', 'praca z zespołem', 'cechy zespołu developerów, Jak je rozwijać ?',
                        'cechy Scrum Mastera'])
                }
            </AccordionTab>
        </Accordion>
    );
}

export default ScrumModules;

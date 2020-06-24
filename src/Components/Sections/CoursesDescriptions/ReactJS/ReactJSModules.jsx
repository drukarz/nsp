import {Accordion, AccordionTab} from "primereact/accordion";
import React from "react";
import {toList} from "../../../CommonUtils/ToList";


const ReactJSModules = () => {
    return (
        <Accordion className="courses-description">
            <AccordionTab header="Architektura React JS" style={{'fontSize': '2.5em'}}>
                {
                    toList(['virtual DOM', 'JSX', 'one way binding'])
                }
            </AccordionTab>
            <AccordionTab header="Elementy React JS" style={{'fontSize': '2.5em'}}>
                {
                    toList(['komponent funkcyjny', 'komponent klasowy',
                        'properties', 'interakcje komponent - widok',
                        'przechowywanie stanu w komponencie klasowym'])
                }
            </AccordionTab>
            <AccordionTab header="Metody Cyklu życia" style={{'fontSize': '2.5em'}}/>
            <AccordionTab header="Wzorce Projektowe" style={{'fontSize': '2.5em'}}>
                {
                    toList(['High Order Component', 'render props'])
                }
            </AccordionTab>
            <AccordionTab header="React Hooks" style={{'fontSize': '2.5em'}}>
                {
                    toList(['useState, useEffect, useReducer', 'custom hook' , 'konwersja komponentów klasowych na hooki'])
                }
            </AccordionTab>

            <AccordionTab header="Zarządzanie Stanem Aplikacji" style={{'fontSize': '2.5em'}}>
                {
                    toList(['Redux', 'Context API'])
                }
            </AccordionTab>
            <AccordionTab header="Rozmaitości" style={{'fontSize': '2.5em'}}>
                {
                    toList(['error boundary', 'context', 'referencje'])
                }
            </AccordionTab>
            <AccordionTab header="Biblioteki" style={{'fontSize': '2.5em'}}>
                {
                    toList(['React Router', 'Primereact', 'Konva JS'])
                }
            </AccordionTab>
            <AccordionTab header="Profiler" style={{'fontSize': '2.5em'}}/>
            <AccordionTab header="React JS uruchamianie aplikacji na produkcji" style={{'fontSize': '2.5em'}}/>
        </Accordion>
    );
}

export default ReactJSModules;




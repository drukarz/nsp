import {Accordion, AccordionTab} from "primereact/accordion";
import React from "react";
import {ToAccordion} from "../../../CommonUtils/ToAccordion";

const items = [{header: 'Wprowadzenie do architektury',
                list: ['porównanie stylów programowania: monolith, modulith, microservices',
                       'wady i zalety mikroserwisów',
                       'język wzorców w architekturze mikroserwisów']},
                {header: 'Dekompozycja od monolitu do mikroserwisów',
                    list: []},
                {header: 'Architektura bazy danych',
                 list: ['wspólna baza danych',
                        'baza danych per mikroserwis']},
                {header: 'Spójność danych',
                    list: ['agregaty', 'zdarzenia domenowe',
                        'wzorzec Sagi', 'event sourcing']},
                {header: 'Komunikacja między mikroserwisami',
                    list: ['REST', 'circuit breaker',
                           'service discovery', 'messaging']},
                {header: 'Pobieranie danych w architekturze mikroserwisów',
                    list: ['API gateway i API composition', ' CQRS']},
                {header: 'Scentralizowana konfikuracja mikroserwisów',
                    list: []},
                {header: 'Monitoring mikroserwisów',
                    list: ['healthcheck i monitoring', ' zbieranie logów']},
                {header: 'Instalacja i uruchomienie systemu opartego o mikroserwisy',
                    list: []}
]

const SpringMicroservicesModules = () => {
    return (
        <Accordion className="courses-description">
            {ToAccordion(items)}
        </Accordion>
    );
}

export default SpringMicroservicesModules;


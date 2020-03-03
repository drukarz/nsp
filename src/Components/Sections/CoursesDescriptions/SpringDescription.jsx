import React from 'react'

const SpringDescription = () => {

    return <div className="offer-text">
        <div>
            Tematem szkolenia jest architektura mikroserwisów z wykorzystaniem Java Spring.
        </div>
        <br/>

        <b>Wprowadzenie do architektury</b>

        <ul>
            <li>
                porównanie stylów programowania: monolith, modulith, microservices
            </li>
            <li>
                wady i zalety mikroserwisów
            </li>
            <li>
                język wzorców w architekturze mikroserwisów
            </li>
        </ul>
        <br/>

        <b>Dekompozycja od monolitu do mikroserwisów</b>

        <b>Architektura bazy danych</b>

        <ul>
            <li>
                wspólna baza danych
            </li>
            <li>
                baza danych per mikroserwis
            </li>
        </ul>
        <br/>

        <b>Spójność danych</b>

        <ul>
            <li>
                agregaty
            </li>
            <li>
                zdarzenia domenowe
            </li>
            <li>
                wzorzec Sagi
            </li>
            <li>
                event sourcing
            </li>
        </ul>
        <br/>

        <b>Komunikacja między mikroserwisami</b>

        <ul>
            <li>
                REST
            </li>
            <li>
                circuit breaker
            </li>
            <li>
                service discovery
            </li>
            <li>
                messaging
            </li>
        </ul>
        <br/>

        <b>Pobieranie danych w architekturze mikroserwisów</b>

        <ul>
            <li>
                API gateway i API composition
            </li>
            <li>
                CQRS
            </li>
        </ul>
        <br/>

        <b>Scentralizowana konfikuracja mikroserwisów</b>

        <b>Monitoring mikroserwisów</b>

        <ul>
            <li>
               healthcheck i monitoring
            </li>
            <li>
                zbieranie logów
            </li>
        </ul>
        <br/>

        <b>Instalacja i uruchomienie systemu opartego o mikroserwisy</b>

    </div>
}

export default SpringDescription;
import React from 'react'

const DockerDescription = () => {

    return <div className="offer-text">
        <div>
            Celem szkolenia jest wprowadzenie do technologii konteneryzacji opartej na środowiskach Docker, ze
            szczególnym naciskiem położonym na praktyczne umiejętności.
            Nauczysz się samodzielnie budować obrazy oraz konteneryzować aplikacje, uruchamiać je, zarządzać nimi,
            oraz jak je rozbudowywać.
            Wymagana jest podstawowa znajmość lini komend oraz programowania w języku C++/C#/Java.
        </div>
        <br/>

        <b>Wprowadzenie</b>

        <ul>
            <li>
                wprowadzenie do konteneryzacji
            </li>
            <li>
                Docker
            </li>
            <li>
                instalacja
            </li>
            <li>
                Docker CLI
            </li>
        </ul>
        <br/>

        <b>Praca z konenerami i obrazam</b>

        <ul>
            <li>
                Docker CLI cd
            </li>
            <li>
                operacje na kontenerach, obrazach
            </li>
            <li>
                praca z rejestrami
            </li>
            <li>
                Dockerfile
            </li>
        </ul>
        <br/>

        <b>Konteneryzacja własnej aplikacji</b>

        <b>Komponowanie złożonych środowisk</b>

        <ul>
            <li>
                Docker Compose
            </li>
        </ul>
        <br/>

        <b>Klaster</b>

        <ul>
            <li>
                Docker Swarm
            </li>
            <li>
                zarządzanie
            </li>
            <li>
                Portainer.io
            </li>
        </ul>
        <br/>

    </div>
}

export default DockerDescription;
Diplomarbeit Immobilien Applikation
================================================================================

Diplomarbeit Frontend Developer 2021

# Inhaltsverzeichnis 

- [Abstract/Managment Summary](#abstract)
    1. [Persönliches](#persönliches)
    2. [Persönliches Umsetzung](#persönliches_umsetzung)
- [Setup Guide](#setup)
    1. [Git](#git)
    2. [Webpack](#webpack)
    3. [Spezielles](#spezielles)
    4. [Backend](#backend) 
- [URL der lauffähigen Version](#url)
- [Zeitplan](#zeitplan)
    1. [Projektevaluation](#evaluation)
    2. [Frontend Grundstruktur](#frontend_Statisch)
    3. [Frontend Interaktiv](#frontend_Dynamisch)
    4. [Reserve](#reserve)
    5. [Fazit](#fazit)
- [Technologiekonzepte](#Technologiekonzepte)
- [Technische Dokumentation](#tech_dokumentation)
    1. [Verwendung Clientseitig](#tech_dokumentation_client)
    2. [Anwendung Serverseitig/Backend](#tech_dokumentation_backend)
    3. [Backend Hosting](#tech_dokumentation_backendhosting)
    4. [Allgemeines](#tech_dokumentation_allgemeines)
- [Zusammenfassung / Fazit](#Zusammenfassung)
- [Quellenangabe / Rechtliches](#Verweise)

# Abstract/Management Summary <a id="abstract"></a>

Diplomarbeit zum Frontend Developer Lehrgang 2021. Die Aufgabenstellung wurde von den Lehrgangsleitung am 
17.09.2021 schriftlich und mündlich bekanntgegeben. Die Diplomarbeit wurde gemäss der 
Vorgaben umgesetzt.

## Persönliches <a id="persönliches"></a>

Mit einem kribbeligem und gespannten Gefühl nahm ich die Aufgabenstellung am Briefing entgegen.
Das ganze erlernte Wissen in der Praxis unter Beweis zu stellen gefiel mir sehr gut. Die Teilnahme an diesem Lehrgang entstand aus gänzlicher Eigenmmotivation und dementsprechend konnte ich die Diplomarbeit mit Freude und Begeisterung umsetzen. 
Besonders gefiel mir dass praktisch alle erlenten Techniken und Strategien in einem Projekt zum Einsatz kamen, die Funktionsweise und Zusammenhänge der einzelnen Bereiche wurden so klar ersichtlich.

## Persönliches: Umsetzung <a id="persönliches_umsetzung"></a>


Ich habe das Projekt mit einer Evaluation begonnen um eventuelle Schwierigkeiten von beginn an zu erkennen. Nach dem Einrichten der Arbeitsumgebung habe ich mit der Visuelle Umsetzung des Frontends begonnen also der Part 
HTML5/CSS3. 
Ich habe darauf geachtet möglichst alles mit dem BEM Prinzip umzusetzen, um die Einfachheit zu bewahren habe ich teilweise Ausnahmen gemacht. Der Mobile-first Ansatz wurde gewählt und dementsprechend wurde die Struktur des Codes. Die Vorgabe war die Umsetzung einer Mobilen und Desktop Version, da ich mich in einem Angenhemen Flow befand habe ich mich entschieden das ganze Full-Responsiv zu programmieren. Die Folge war dass mehr Code/Breakpoints vorhanden sind.
Eine weitere Eigenheit des Codes ist die Auslagerung der Schrift und Farben in eigene SCSS-Files, damit Typografische Änderungen einfacher gemacht werden können. 

> Die Bilder die im Frontend verwendet werden kommen von der Prüfungsvorgabe. Teilweise ist die Darstellung nicht 
> optimal (Aktuelles -> Detail). Damit der Kontext stimmt habe ich die Bilder so belassen.  

Nachdem der Visuelle optische Teil funktionnierte begann ich mit der Applikation der Website also der Interaktive teil, auf denn ich eigentlich Vorfreude hatte da ich gerne mit JavaScript programmiere. Der Code selbst wurde mit den erlernten Strategien umgesetzt - Stichwort Delegation und Rendering, welche auf  jeder Page zum Einsatz kommen. Der Render Ansatz wird beim Filtern/Sortieren der Elemente verwendet ("function load_estates()"), damit meine ich nicht dass rendering des Browsers sondern
> das Prinzip eine Liste bei Änderungen von Grund auf neu zuladen.<br>

Erste Schwierigkeiten tratten im Zusammenhang beim implementieren der Bilder auf, zuerst habe ich eine Libary mit den Pfaden erstellt welche alle Bilder importiert. Nach dem funktionnieren des Backends hat sich das aber erledigt. Alle Funktionen wurden ins Tools.js File ausgelagert, diese Datei wurde recht Umfangreich, um die Übersichtlichkeit zu bewahren sind die Funktionen der Reihe nach für jede einzelne Page aufgelistet und entsprechend Kommentiert.
Nach einigen Wochen fleissigem Coden, war die erste funktionnierende Version fertig. Das umsetzen einer voll funktionnierenden Usability habe ich ein bisschen unterschäzt, da immer wieder Details zum Vorschein kammen. Ich musste mich dann selbst stoppen, da mir immer wieder zusätzliche Funktionen auffielen die man noch umsetzen könnte z.B eine Validation/Pflichtfelder der Eingabe des Kontaktformulars. Die Zeit reichte allerdings aus um einige zusätzliche Features wie die Transition der Immobilienergebnisse, oder auch das generieren eines Email versandes umzusetzen. 

> Die Diplomarbeit war gleichzeitig auch eine gute Auffrischung des erlenten Wissens."

Die Diplomarbeit konnte ich ohne weiteres umsetzen im Zusammenhang der Lehrplans. Das einzige was ich vermisste war die Tatsache, dass wir nie die Möglichkeit hatten eine echtes Projekt zu "analysierten", also der Stand wenn es zum Kunden geht. Dies einfach um das KnowHow von echten Projekten zu übernehmen (Welche Details wirklich wichtig sind). 

# Setup Guide <a id="setup"></a>
Das Setup wurde gemäss den erlenten Technologien umgesetzt. Die jeweiligen Abhängigkeiten der einzelnen Anwendungen
sind im Code Selbst unter "Dependencies" ersichtlich.

## Git <a id="git"></a>

Um die Anwendung zu installieren, einfach das Repository mit Git klonen:

```bash
git clone https://github.com/WebProfessionals/dipl21_kay
```

## Webpack <a id="webpack"></a>

Webpack Abhängigkeiten installieren und mit folgenden Anweisungen starten.<br>

Um an der Anwendung zu arbeiten : 

```bash

npm run watch 

```

Änderung umsetzen im Development Modus : 

```bash

npm start 

```
Anwendung Deployen/ Fertigstellen : 

```bash

npm run build

```
### Spezielles <a id="spezielles"></a>

Wenn an der Anwendung gearbeitet wird und eine neue Version Veröffentlicht werden soll muss der Ordner:<br> 
>./src/Images/Immobilien<br>

manuell in das ./dist Verzeichnis kopiert werden. Dies musste ich so umsetzen wegen des Hostings der Website. Leider fehlt zum Zeitpunkt der Abgabe noch eine Konfigurationseinstellung.

## Backend <a id="backend"></a>

Das Backend wurde aus zeitlichen Gründen in einem eigenen Projektordner/Git Repository umgesetzt:<br>
<a target="_blank" href="https://github.com/kayssmile/Backend_Application">Git Repository: Backend-Application</a><br>
Um das Backend zu installieren und Lokal zu verwenden: 

```bash
git clone https://github.com/kayssmile/Backend_Application
```

Um an der Anwendung zu arbeiten die Node.js Abhängigkeiten installieren.<br>

Anwendung starten : 

```bash

node index.js 

```

Um die Datenbank zu verwenden kann mit phpmyAdmin folgendes File importiert werden:

> Backend_Application/Datenbank/estates.sql<br>


# URL der lauffähigen Version <a id="url"></a>

https://homehouseimmobilien.netlify.app


# Zeitplan <a id="zeitplan"></a>

Der Zeitplan gemäss Vorgabe des Briefings.

Projektstart : 17.09.2021 / KW37 <br>
Projektabgabe : 27.11.2021 / KW47

Um eine sauberes Vorgehen zu haben wurde ein konkreter Zeitplan entworfen. Die Arbeit wurde grob in 3 Teile aufgeteilt. Das Frontend selbst also die Visuelle Umsetzung, dann die Applikation also die Interaktion der Website und ein weiterer Teil ist gedacht für Reserve. 

### <strong>KW37 Briefing Diplomarbeit</strong><a id="evaluation"></a>

Projektevaluation generell. Festlegen der Prioritäten und Abklärung von eventuellen Schwierigkeiten:

<strong>Generell:</strong>
* Abklaerung einer URL
* Funktionsweise der Geolocation API
* Maps Embed API oder Maps JavaScript API<br> 
* Styling der Map<br> 
* Webpack Einbindung der API <br> 

<strong>Frontend:</strong>  
* Foto Slider
* Flex oder Grid
* Maps API annbindung <br>

<strong>Frontend Interaktion:</strong> 
* Umsetzung der Filter 
* Raster oder Listenansicht <br>

<strong>Einrichten der Arbeitsumgebung:</strong> 
* Git Repository
* Webpack
* Ordnerstruktur

### <strong>Frontend Grundstruktur</strong> <a id="frontend_Statisch"></a>
<strong>Planung:</strong><br>
HTML5 / CSS3: KW38 - KW40<br>
<strong>Tatsächlich:</strong><br>
HTML5 / CSS3: KW38 - KW41 -> Prototype Fertig

### <strong>Frontend Interaktiv</strong><a id="frontend_Dynamisch"></a>
<strong>Planung:</strong> <br>
VanillaJS / GraphQL - API: KW41 - KW43<br>
<strong>Tatsächlich:</strong><br> 
VanillaJS / GraphQL - API: KW41 - KW45 -> Prototype Fertig


### <strong>Extras / Reserve</strong> <a id="reserve"></a>

* Code Review
* Dokumentation
* Hosting generell 
* eigenes Backend
* verschiedene Farbpaletten
* Animation der Objekt Auflistung

<strong>Planung:</strong> <br>
KW44 - KW47<br>
<strong>Tatsächlich:</strong><br> 
KW45 - KW47 


### Fazit zum Zeitpunkt der Abgabe <a id="fazit"></a>

Ich wurde Anfangs ein bisschen Überrumpelt mit dem Umsetzen des Layouts, da ich es doch ein bisschen unterschäzt habe, ein Design Pixelgenau umzusetzen. Das Umsetzen der Figma Vorlage warf teilweise Fragen auf. Die Positionierungen fand ich teilweise ein bisschen "unzentriert", also nicht alles auf einer Linie etc. da aber der psychologische Effekt sicherlich auch beachtet wurde, hatte die Designvorlage Priorität. Was ich sicherlich daraus gelernt habe ist die Tatsache mit den einfacheren Teilen zu beginnen um das Handling der komplexeren Elemente zu vereinfachen. Mit ein bisschen Spurt konnte ich dass Zeitmanagment jedoch fast nach Plan einhalten. Auch konnte ich einige Extras wie das eigene Backend umsetzen und zusätzliche Transitions erstellen. Tatsächliche Schwierigkeiten hatte ich eigentlich nur mit Details wie der Webpack Konfiguration oder der dem Styling der Google Map da ich den Style Editor übersehen habe, aber auch diese Punkte funktionnierten nach ein bisschen einlesen.
Was ich gelernt habe in Zukunft generell mehr Zeit einplanen, da ich doch mehr Zeit investiert habe als ich geplant habe.  

# Technologiekonzept inkl. Evaluation der eingesetzten Technologien mit Begründung <a id="Technologiekonzepte"></a>

Es wurden die Technologien eingesetzt welche während des Unterrichts erlernt wurden.<br> Die Versionsangaben beziehen sich auf den Zeitpunkt der Abgabe (27.11.2021).

## Programmiersprachen:

### <strong>HTML5/CSS3</strong>
Das Layout/Design wurde gemäss Spezifikation von HTML5 und CSS3 realisiert.<br>
CSS3 wurde mit Verwendung des Preprozessors SASS codiert.  <br>
Die Namenskonvention wurde gemäss BEM-Prinzip und kleineren Ausnahmen umgesetzt. 

### <strong>JavaScript</strong> 
Pure Vanilla JS ohne Fremdcode.

## Entwicklungsumgebungen:

### <strong>Figma</strong>
Das Design wurde mithilfe von Figma umgesetzt. Bei Unklarheiten wurde mit einem zusätzlichen Tool (MB-Ruler) gearbeitet.

### <strong>Visual Studio Code</strong>
Der gesamte Code wurde in Visual Studio Code Version 1.62 entwickelt.  

### <strong>Webpack</strong>
Für das Bündeln der Files wurde Webpack verwendet. 
Es kam die aktuellste Version 5 zum Einsatz.

### <strong>Git</strong> 
Die Versionsverwaltung wurde mit Git umgesetzt.  
Es wurde mit Version 2.33.0 gearbeitet.

### <strong>NPM</strong> 
Für die Verwendung von Plugins und Features wurde der Paketmanager NPM verwendet. 

### <strong>Node</strong> 
Fuer die Backend Applikation wurde mit Node Version v14.17.5 gearbeitet. Das Programm wurde mit Vanilla JS geschrieben.

### <strong>Datenverwaltung</strong> 
Die Datenbank wurde mit MySQL erstellt. Für die Implementierung wurde mit der Anwendung phpMyAdmin gearbeitet.

## Allgemeines:

### <strong>Google - API</strong>
Es wurde die von Google bereitgestellte "Maps JavaScript API" verwendet.<br>

# Technische Dokumentation <a id="tech_dokumentation"></a>

## Verwendung Clientseitig <a id="tech_dokumentation_client"></a>

Die Handhabung der Website Clientseitig ist selbsterklärend. Es werden Buttons, Icons und Links dargestellt welche meistens mit einem Hover Effekt auf eine Interaktion hinweisen. Um die Ergebnisse zu Filtern/Sortieren kommen Dropdown Menüs zu Einsatz welche ebenso selbsterklärend sind. 

Die Website kann mit folgenden Browsern verwendet werden: <br>

> - Mozilla Firefox
> - Microsoft Edge
> - Google Chrome

Leider hatte ich keine Möglichkeit die Website in einem Safari Browser zu prüfen, es sollte aber bis auf ein paar kleinere Details dennoch funktionnieren. 

## Anwendung Serverseitig/Backend <a id="tech_dokumentation_backend"></a>

Die Home&House Immobilien Applikation wurde flexibel aufgebaut und erlaubt einen gewissen Raum für Einstellungen.
Die Backend Einstellungen können mit folgenden Eckdaten gemacht werden: <br>

> - Maximale Anzahl Inserate/Immobilien: 20Stk.<br>
> - Maximale Anzahl Bilder pro Inserat/Immobilie: 5Stk.<br>
>
> - Die Applikation verwendet einen Filter nach Kantonen der Region Schweiz. Das bedeutet die Anwendung funktionniert für Immobilien innerhalb der Schweiz.

> <em>"Die Applikation beinhaltet einen Schutz im Fall dass eine Datenbank nicht erreichbar ist und/oder eine API 
> Ausfälle hat."</em>

Standartmässig wird die eigene GraphQL API verwendet: <br>

https://backend-appli.herokuapp.com/graphql

Bei Ausfällen wird auf die GraphQL API der WebProfessionals zugegriffen: 

https://dev21-api.web-professionals.ch/graphql

### Backend Hosting <a id="tech_dokumentation_backendhosting"></a>

Die Backend Anwendung wird durch https://www.heroku.com gehostet.<br>
Die Datenbank wird durch https://www.freemysqlhosting.net gehostet.

## Allgemeines <a id="tech_dokumentation_allgemeines"></a>

Das Projekt wurde so aufgebaut das Änderung einfach umgesetzt werden können. Um Typografische Änderungen vorzunehmen kann mit der Datei Colors.scss und Fonts_typography.scss gearbeitet werden. 

>./src/Styles/Partials/Colors.scss<br>
>./src/Styles/Partials/Fonts_typography.scss<br>

Um Einstellungen an den Filtern/Sortierung zu machen wird mit der Datei Tools.js gearbeitet.<br>

>./src/JS/Tools.js  -> (function sort_estates(filters))<br>

Auf jeder Page besteht eine Funktion => Tools.resize_page(). Diese Funktion wird aktiv wenn die Bildschirmgrösse verändert wird und war notwendig während des Testen der Website. Da der Code noch das Prüfungsgremium durchläuft habe ich sie so belassen. Bei einer endgültigen Veröffentlichung würde diese funktion deaktiviert werden, da die Anwendung auf Endgeräten mit TouchScreen Probleme auslöst. 

> ./src/JS/Home.js  -> Tools.resize_page() <br>



# Zusammenfassung / Fazit <a id="Zusammenfassung"></a>

Die Diplomarbeit war ein tolles und lehrreiches Praxisprojekt. Gerne hätte ich noch einige Dinge mehr umgesetzt, aber irgendwann muss man einfach das Zeitmanagment einhalten und Kompromisse eingehen. Zusammenfassend gesagt bin ich zufrieden mit meiner Arbeit und bin gespannt auf die Bewertung, ich werde diese sicherlich umsetzen in meiner Karriere als Web Developer. Konstante Stütze und tolle Hilfe war jederzeit durch die Lehrpersonen da was ich sehr schätzte.
> <em>"Während der Umsetzung bekam ich ein erstes Gefühl dafür wie es ist ein echter Programmierer zu sein. Die Ruhe der
> Gedanken und das stille fokussieren auf die Logik liess mich in dieses Handwerk eintauchen." </em> 


# Author <a id="Verweise"></a>

<strong>Kay Hertenstein</strong><br>
Teilnehmer Web Frontend Developer Lehrgang 2021 / WebProfessionals – <a target="_blank" href="https://github.com/kayssmile">kayssmile @ Github</a><br>
<br>

# Eidesstattliche Erklärung

Eidesstattliche Erklärung<br>
Hiermit erkläre ich, dass ich die Diplomarbeit selbständig verfasst / programmiert und keine anderen als die angegebenen Quellen und Hilfsmittel benutzt und die aus fremden Quellen direkt oder indirekt übernommenen Gedanken als solche kenntlich gemacht habe. Die Arbeit habe ich bisher keinem anderen Prüfungsgremium in gleicher oder vergleichbarer Form vorgelegt. Sie wurde bisher auch nicht veröffentlicht.

# Literaturverzeichnis, Quellenangaben für Fremdcode

Für den Einsatz der Google Maps API wurde der Code der Google Dokumentation verwendet.
<a href="https://developers.google.com/maps/documentation/javascript/overview?hl=de">Google Documentation</a><br>
Die gesamte Anwendung wurde in Eigenregie geschrieben, ohne Fremdcode. © by <a target="_blank" href="https://github.com/kayssmile">kayssmile @ Github</a><br>


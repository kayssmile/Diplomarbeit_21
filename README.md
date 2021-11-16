Diplomarbeit Immobilien Applikation
================================================================================

Diplomarbeit Frontend Developer 2021

# Inhaltsverzeichnis 

- [Abstract/Managment Summary](#abstract)
    1. [Persönliches](#persönliches)
- [Setup Guide](#setup)
    1. [Git](#git)
    2. [Webpack](#webpack)
    3. [Backend](#backend)
- [URL der lauffähigen Version](#url)
- [Zeitplan](#zeitplan)
    1. [Projektevaluation](#evaluation)
    2. [Frontend Grundstruktur](#frontend)
    3. [Frontend Interaktiv](#frontendJS)
    4. [Reserve](#reserve)
    5. [Fazit](#fazit)
- [Technologiekonzepte](#Technologiekonzepte)
- [Technische Dokumentation](#tech_dokumentation)
- [Zusammenfassung / Fazit](#Zusammenfassung)
- [Quellenangabe / Rechtliches](#Verweise)


# Abstract/Management Summary <a id="abstract"></a>

Diplomarbeit zum Frontend Developer Lehrgang 2021. Die Aufgabenstellung wurde von den Lehrgangsleitung am 
17.09.2021 schriftlich und mündlich bekanntgegeben. Die Diplomarbeit wurde gemäss der schriftlichen 
Vorgabe umgesetzt.

## Persönliches/Managment Summary <a id="persönliches"></a>

Mit einem kribbeligem und gespannten Gefühl nahm ich die Aufgabenstellung am Briefing entgegen.
Das ganze erlernte Wissen in der Praxis unter Beweis zu stellen gefiel mir sehr gut. Die Teilnahme an diesem Lehrgang entstand aus gänzlicher Eigenmmotivation und dementsprechend konnte ich die Diplomarbeit mit Freude und Begeisterung umsetzen. 
Besonders gefiel mir dass praktisch alle erlenten Techniken und Strategien in einem Projekt zum Einsatz kammen. Die Funktionsweise und Zusammenhänge der einzelnen Bereiche wurden so klar ersichtlich.



ü   ö    ä 

Verschiedene Eigenheiten des Codes : 

z.B Versch. Filter 
GraphQL API 
Breakpoints
Versch. Style Guides

Code Eigenheiten : 
Font Spezifikationen wurden mit mixins umgesetzt - einfachste Moeglichkeit um Code zu sparen.
Teilweise wurde deas BEM Prinzip ein bisschen umgangen z.B verwende ich teilweise ein "-", dies
um die übersichtlichkeit und einfachheit beizubehalten. 
Vorgabe war 2 Layouts Desktop und Mobile, ich habe mich entschieden das Spektrum von Mobile bis Desktop / Full Responsive
umzusetzen.
Für die Übersichtlichkeit wurden alle Schriftgroessen und Arten ausgelagert.
Code geschrieben fuer max. 30 Immobilien.

JavaScript :
Eigenheiten:  
Code ist so geschrieben, dass das Backend beliebige Aenderungen/flexibel gemacht werden koennen (Umsetzung nach Schluessel ID.) nicht konkret auf das vorgegebene backend / im sinne eines echten Kunden.
Einige Features: "Mehr laden" ist auch Rückwärtskompatibel"
Herausforderungen: 
Webpack5 Configuration (Assets-Module URL via Import, mehrere Pages, CSS-URLs)
Google Maps API Styling (Habe den Style Editor übersehen).

Waehrend der Projektumsetzung : 
Gute Repetition des Lehrganges z.B Grid oder Flex BEM.
CSS : Repetition Pseudoelemente, Kindselektoren, Hover 
LayoutFrontend : Teilweise Unsicherheit weil Layout verwirend eigene Umsetzung ware einheitlicher 
entscheid war dann so dass Diplomarbeit Vorgabe Prioritet hat.
Umsetzung Frontend aehnlich dem MobileFirst Ansatz zuerst die einfachen Elemente umsetzen
um ein Gefuehl zu bekommen fuer das Projekt. (nicht von beginn an komplexe Elemente).
Ein Thema war auch zusaetyliche Feautures im zusammenhang mehr Code.
Was auch auftrat war ds thema geschwindigkeit im zusammenhang des code ablaufs z.b etwas pruefen oder immer neu schreiben. (pageback item).

Unterricht alles i.O. ist Theorie, was mir fehlte war eine echtes Prakis Projekt nicht zur Umsetzung sondern zum Besprechen. Vorallem fehlen in der Therorie einige Praxis-Hacks. Zum abgucken Feld abdecken
Unterricht Theorie Objekte.
Diplomarbeit erschien mir als sehr tolles Projekt um erste Eindrücke zu sammeln eines echten Projektes
Einiges an Wissen gewonnen was wichtig ist z.b Config, Struktur von Anfang an Korrekt zu machen.
Was mir auch aufefallen ist das einheitliche Syntax des Codes, am Ende faellt einm das auf, dass der Style uebarll gleich sein koennte.


Kopierter Code : 
Google Maps API - Map deklaration, Marker. Copy & Paste




# Setup Guide <a id="setup"></a>

## Git <a id="git"></a>

Um die Anwendung zu installieren, einfach das Repository mit Git klonen:

```bash
git clone https://github.com/WebProfessionals/dipl21_kay
```

## Webpack <a id="webpack"></a>

Um an der Anwendung zu arbeiten : 
Webpack Abhängigkeiten installieren gemäss Unterricht. 

```bash

npm run watch 

```

Aenderung umsetzen development mode : 

```bash

npm start 

```
Anwendung fertigstellen Production mode : 

```bash

npm run build

```
## Backend <a id="backend"></a>

Das Backend wurde aus zeitlichen Gründen in einem eigenen Projektordner/Git Repository umgesetzt:<br>
<a target="_blank" href="https://github.com/kayssmile/Backend_Application">Git Repository: Backend-Application</a><br>
Um das Backend zu installieren und Lokal zu verwenden: 

```bash
git clone https://github.com/kayssmile/Backend_Application
```

Node.js Abhängigkeiten installieren gemäss Unterricht. 

Anwendung starten : 

```bash

node index.js 

```

# URL der lauffähigen Version <a id="url"></a>

https://homehouseimmobillien.netlify.app


# Zeitplan <a id="zeitplan"></a>

Zeitmanagment nach Vorgabe:

Projektstart : 17.09.2021 / KW37 <br>
Projektabgabe : 27.11.2021 / KW47

ü   ö    ä 

### KW37 Briefing Diplomarbeit <a id="evaluation"></a>

Projektevaluation generell. Festlegen der Prioritäten und Abklärung von eventuellen Schwierigkeiten.

- Projekt Analyse : 

    Generell: 

    * Abklaerung einer URL

    * Funktionsweise der Geolocation API
        - Maps Embed API oder Maps JavaScript API<br> 
        - Styling der Map<br> 
        - Webpack Einbindung der API <br> 
    <br>

    Frontend: 
        - Foto Slider
        - Flex oder Grid
        - Maps API annbindung 
    <br>

    Frontend Interaktion: 

    Schwierigkeiten : 

     * Umsetzung der Filter 
     * Raster oder Listenansicht 

- Einrichten Arbeitsumgebung : Git Repository, Webpack, Ordnerstruktur

### KW38 - KW40 Frontend <a id="frontend Statisch"></a>
Planung:<br>
HTML5 / CSS3: 20.09 - 10.10<br>
<br>
Umsetzung tatsächlich: <br>
HTML5 / CSS3: 20.09 - 17.10 // Prototype Fertig

### KW41 - KW43 Frontend Interaktion <a id="frontend Dynamisch"></a>

VanillaJS / GraphQL - API<br>

Planung: <br>
11.10 - 31.10<br>
<br>
Umsetzung:<br> 
17.10 - 03.11.21 // Prototype/lauffähige Version Fertig<br>
<br>

### KW44 - KW47 Reserve / Extras <a id="reserve"></a>

Backend / Animationen / Farbpalette <br>

1.11 - 27.11 

### Extras / Bonus

* eigenes Backend
* verschiedene Farbpaletten
* Animation der Objekt Auflistung


### Fazit zum Zeitpunkt der Abgabe <a id="fazit"></a>

Ich wurde Anfangs ein bisschen Überrumpelt mit dem Frontend, da ich es doch ein bisschen unterschäzt habe, ein Design Pixelgenau umzusetzen. Das Umsetzen der Figma Vorlage warf teilweise auch Fragen auf, Priorität hatte schlussendlich die Vorgabe. Smile was mich teilweise schon ein bisschen verwundert hatte. Mit ein bisschen Spurt konnte ich dass Zeitmanagment jedoch fast nach Plan einhalten. Tatsächliche Schwierigkeiten hatte ich eigentlich nur mit Details wie der Webpack Konfiguration oder der dem Styling der Google Map da ich den Style Editor übersehen habe. 



# Technologiekonzept inkl. Evaluation der eingesetzten Technologien mit Begründung <a id="Technologiekonzepte"></a>

## HTML5/CSS3
HTML5/CSS3 als Grundgeruest. CSS mithilfe des Preprozessors SASS , umsetzung der Namenskonvention gemaess BEM. 

## JavaScript 
Pure Vanilla JS ohne Fremdcode

## Webpack 
Webpack 5 

## Git 


## Node 

## Datenbank 

## Google - API

## Figma / MB Ruler



# Technische Dokumentation <a id="tech_dokumentation"></a>

Bedienung, Interaktion mit der Website. 
Handhabung der Filter 
Einstellungsmoeglichkeiten 
WEB-API 

Backend 

https://backend-appli.herokuapp.com/graphql

https://www.freemysqlhosting.net



# Zusammenfassung / Fazit <a id="Zusammenfassung"></a>

Konstante Stütze und tolle Hilfe war jederzeit durch die Lehrpersonen da was ich sehr schätzte. 
Die Diplomarbeit war ein tolles und lehrreiches Praxisprojekt. Während der Umsetzung bekam ich ein erstes Gefühl dafür wie es ist ein echter Programmierer zu sein. Die Ruhe der Gedanken und das stille fokussieren auf die Logik liess mich gänzlich in dieses Handwerk eintauchen. 

# Author <a id="Verweise"></a>
<strong>Kay Hertenstein</strong><br>
Teilnehmer Web Frontend Developer Lehrgang 2021 – <a target="_blank" href="http://www.web-professionals.ch">Web Professionals</a><br>
<br>


# Eidesstattliche Erklärung
Eidesstattliche Erklärung
Hiermit erkläre ich, dass ich die Diplomarbeit selbständig verfasst / programmiert und keine anderen als die angegebenen Quellen und Hilfsmittel benutzt und die aus fremden Quellen direkt oder indirekt übernommenen Gedanken als solche kenntlich gemacht habe. Die Arbeit habe ich bisher keinem anderen Prüfungsgremium in gleicher oder vergleichbarer Form vorgelegt. Sie wurde bisher auch nicht veröffentlicht.



# Literaturverzeichnis, Quellenangaben fur Fremdcode
<a href="#">Home & House Immobilien Appilkation</a><br>


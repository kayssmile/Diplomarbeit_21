Diplomarbeit Immobilien Applikation
================================================================================

Diplomarbeit Frontend Developer 2021

# Inhaltsverzeichnis 

- [Abstract/Managment Summary](#abstract)
    1. [Persönliches](#persönliches)
- [Setup Guide](#setup)
    1. [Git](#git)
    2. [Webpack](#webpack)
    3. [Git](#sql)
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

Diplomarbeit nach Vorgabe 

## Persönliches/Managment Summary <a id="persönliches"></a>

Verschiedene Eigenheiten des Codes : 

z.B Versch. Filter 
GraphQL API 
Breakpoints
Versch. Style Guides

Code Eigenheiten : 
Font Spezifikationen wurden mit mixins umgesetzt - einfachste Moeglichkeit um Code zu sparen.
Teilweise wurde deas BEM Prinzip ein bisschen umgangen z.B verwende ich teilweise ein "-", dies
um die übersichtlichkeit und einfachheit beizubehalten. 
Vorgabe war 2 Layouts Desktop und Mobile, ich habe mich entschieden das Spektrum von Mobile bis Desktop
umzusetzen.
Für die Übersichtlichkeit wurden alle Schriftgroessen und Arten ausgelagert.

JavaScript :
Eigenheiten:  
Code ist so geschrieben, dass das Backend beliebige Aenderungen gemacht werden koennen (Umsetzung nach Schluessel ID.)
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

Unterricht alles i.O. ist Theorie, was mir fehlte war eine echtes Prakis Projekt nicht zur Umsetzung sondern zum Besprechen. Vorallem fehlen in der Therorie einige Praxis-Hacks. Zum abgucken Feld abdecken
Unterricht Theorie Objekte.





# Setup Guide <a id="setup"></a>

## Git <a id="git"></a>

Um die Anwendung zu installieren, einfach das Repository mit Git klonen:

```bash
git clone https://github.com/WebProfessionals/dipl21_kay
```

Ordner ablegen und benötigten Abhängigkeiten installieren:

```bash
npm install
```
## Webpack <a id="webpack"></a>

Um an der Anwendung zu arbeiten : 

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
## SQL Datenbank <a id="sql"></a>

# URL der lauffähigen Version <a id="url"></a>


# Zeitplan <a id="zeitplan"></a>

Zeitmanagment : 

Projektstart : 17.09.2021 / KW37 
Projektabgabe : 27.11.2021 / KW47



### KW37 Briefing Diplomarbeit <a id="evaluation"></a>


- Einrichten Arbeitsumgebung : Git Repository, Webpack, Ordnerstruktur

- Projekt Analyse : 

    Generell: 

    Abklaerung einer URL fuer Prototyp : 

    Funktionsweise der Geolocation API :
     * Maps Embed API oder Maps JavaScript API 
     * Styling der Map
     * Webpack Einbindung der API 
    

    Frontend: 

    Schwierigkeiten : 

     * Foto Slider
     * Flex oder Grid
     * Geolocation API 
     * Styling der MAP

    
    Frontend Interaktion: 

    Schwierigkeiten : 

     * Umsetzung der Filter 
     * Raster oder Listenansicht 


### KW38 - KW40 Frontend <a id="frontend Statisch"></a>
Planung:
HTML5 / CSS3: 20.09 - 10.10
Umsetzung: 
HTML5 / CSS3: 20.09 - 17.10

### KW41 - KW43 Frontend Interaktion <a id="frontend Dynamisch"></a>

VanillaJS
GraphQL - API 

11.10 - 31.10

### KW44 - KW47 Reserve / Extras <a id="reserve"></a>

Backend / Mixins

1.11 - 27.11 

### Extras / Bonus

* eigenes Backend
* Mixin umsetzen verschieden Farbmoden
* Animation der Objekt Auflistung


### Fazit zum Zeitpunkt der Abgabe <a id="fazit"></a>

# Technologiekonzept inkl. Evaluation der eingesetzten Technologien mit Begründung <a id="Technologiekonzepte"></a>

## HTML5/CSS3
HTML5/CSS3 als Grundgeruest. CSS mithilfe des Preprozessors SASS , umsetzung mit Namenskonvention gemaess BEM. 

## JavaScript 
Pure Vanilla JS ohne Fremdcode

## Webpack 

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


# Zusammenfassung / Fazit <a id="Zusammenfassung"></a>

# Author <a id="Verweise"></a>
<strong>Kay Hertenstein</strong><br>
Teilnehmer Web Frontend Developer Lehrgang 2021 – <a target="_blank" href="http://www.web-professionals.ch">Web Professionals</a><br>
<br>


# Eidesstattliche Erklärung
Eidesstattliche Erklärung
Hiermit erkläre ich, dass ich die Diplomarbeit selbständig verfasst / programmiert und keine anderen als die angegebenen Quellen und Hilfsmittel benutzt und die aus fremden Quellen direkt oder indirekt übernommenen Gedanken als solche kenntlich gemacht habe. Die Arbeit habe ich bisher keinem anderen Prüfungsgremium in gleicher oder vergleichbarer Form vorgelegt. Sie wurde bisher auch nicht veröffentlicht.



# Literaturverzeichnis, Quellenangaben fur Fremdcode
<a href="#">Home & House Immobilien Appilkation</a><br>


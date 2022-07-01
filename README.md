<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/CUBES1/E-Citoyen">
    <img src="/ASP.NETCoreWebApplication/ClientApp/src/assets/logo.png" alt="Logo" width="200" height="200">
  </a>

<h3 align="center">E-Citoyen</h3>

  <p align="center">
    Projet Cube1
    <br />
    <!-- <a href="https://github.com/CUBES1/E-Citoyen"><strong>Explore the docs »</strong></a> -->
    <br />
    <br />
    <!-- <a href="">Demo</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table des matières</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#executer">Executer le projet</a></li>
      </ul>
    </li>
   	<li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Le projet est scaffold avec pour front-end ReactJS.  
Le backend utilisé est AspNet avec dotnet5.  
Identity est utilisé pour générer les pages liées à identity.

<p align="right">(<a href="#top">Revenir en haut</a>)</p>



### Built With

* [Asp.Net](https://dotnet.microsoft.com/en-us/apps/aspnet)
* [React.js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)


<p align="right">(<a href="#top">Revenir en haut</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Avoir sur son poste de travail NodeJS et un [SDK .NET 6](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)

### Installation

1. Clone the github repo
   ```
   git clone https://github.com/CUBES1/E-Citoyen.git
   ```
2. Install NPM packages
   ```
   cd RessourcesRelationnelles.Front/ClientApp
   npm install
   ```
3. Change the database connection in [RessourcesRelationnelles.Front/Program.cs](RessourcesRelationnelles.Front/Program.cs), [here](https://github.com/CUBES1/E-Citoyen/blob/cdfcf8c9457948c8cc02115fed932503fdf7b2ea/RessourcesRelationnelles.Front/Program.cs#L16), and in [RessourcesRelationnelles.Api/Program.cs](RessourcesRelationnelles.Api/Program.cs), [here](https://github.com/CUBES1/E-Citoyen/blob/cdfcf8c9457948c8cc02115fed932503fdf7b2ea/RessourcesRelationnelles.Api/Program.cs#L15)
   ```csharp
   optionsBuilder.UseSqlServer(builder.Configuration.GetConnectionString("Your_config_name_from_appsettings.json"));
   ```
### Migrations
1. Start the dedicated database service, like Microsoft SQL Server (on Windows)
    ```
    net start mssqlserver
    ```
2. Se rendre dans le projet API
    ```
    cd RessourcesRelationnelles.Api
    ```
3. Mettre à jour la base de données
    ```
    dotnet ef database update
    ```
### Execution
1. Api
    ```
    cd RessourcesRelationnelles.Api
    dotnet run
    ```
2. Front
    ```
    cd ../RessourcesRelationnelles.Front
    dotnet run
    ```
<p align="right">(<a href="#top">Revenir en haut</a>)</p>


<!-- CONTACT -->
## Contact

Noé Dubois - [Github Account](https://github.com/dracochen1)

Maxime Leroy - [Github Account](https://github.com/Grlmm)

Killian Dantan - [Github Account](https://github.com/killian-dtn)

Axel Regimbal - [Github Account](https://github.com/ThDrAKeN)


Liens du projet: [https://github.com/CUBES1/E-Citoyen](https://github.com/CUBES1/E-Citoyen)

<p align="right">(<a href="#top">Revenir en haut</a>)</p>

# Project Name
> This is a CLI for an E-commerce site, with routes accessing the database of categories, products and the product tags.
> Live demo [_here_](https://www.example.com). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## Technologies Used
- Javascript
- Node.js
- NPM 


## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup

If using GitBash or Terminal
```
$ cd in directory there you want to store your project
$ git clone https://github.com/Abstrack5/Come-For-Commerce
$ code .
```

If using Visual Studio Code or similar
```
$ git clone https://github.com/Abstrack5/Come-For-Commerce
$ save file to preferred location
```

## Usage
1. Open the terminal in your code editor of choice main directory
2. Run the command <br />
```
npm install
```
3. now to access database
```
mysql -u root -p
Enter your password:
source db/schema.sql
```
4. Type exit or quit, and too seed your database type
```
npm run seed
```
5. After seedingy our database now enter the following to start the application
```
npm start
```
6. Navigavte to the appropriate routes to view datbase of application
```
http://localhost:3001/api/categories
http://localhost:3001/api/products
http://localhost:3001/api/tags
```

## Project Status
Project is: _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why.


## Room for Improvement
Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2

To do:
- Feature to be added 1
- Feature to be added 2


## Acknowledgements
Give credit here.
- This project was inspired by...
- This project was based on [this tutorial](https://www.example.com).
- Many thanks to...


## Contact
Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me!


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
Source:raw.githubusercontent.com

# Project Name
> This is a CLI for an E-commerce site, with routes accessing the database of categories, products and the product tags.
> View demo [_here_](https://www.example.com). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [Technologies Used](#technologies-used)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
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

## License 
Copyright (c) 2022 AAhmadi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

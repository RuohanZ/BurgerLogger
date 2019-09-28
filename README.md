
# Burger - Node Express Handlebars

### https://quiet-reef-80692.herokuapp.com/

### A burger logger

* This is a  burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. Follow the MVC design pattern; use Node and MySQL to query and route data, and Handlebars to generate HTML.



## Directory structure
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars

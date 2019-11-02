## How to start landing page

* clone or download repo
* open your favorite code editor (VSCode or VSCodium or WebStorm)
* open terminal and install Live Server
```
$ yarn global add live-server

or

$ npm i -g live-server
```

* start live server and watch all changes
```
$ live-server --watch=PATH
```

### Sass Watch
this project using SCSS and you need to start your SCSS server for watching and compiling to css

```
$ sass --watch --no-source-map --styled compressed style/scss/index.scss style/style.css
```

### Prettier
this project is also using Prettier, this is totally optional. But if you want to use this. 
Go to Prettier docs for installing and start in your terminal

```
$ prettier --tab-width=4 --write **/*
```

Prettier will throw exception error because not all format does support

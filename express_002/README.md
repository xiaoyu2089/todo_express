# Eexpress应用生成器

通过应用生成器工具express 可以快速的生成一个应用的框架。
通过如下命令安装

npm install express-generator -g 

express -h 选项可以列出所有可用的命令行选项

```js
$ express -h

  Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to jade)
        --hbs           add handlebars engine support
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory

```

接下来可以使用一个命令来创建一个项目

express --git -e myapp

下一节我们研究一下express的路由系统
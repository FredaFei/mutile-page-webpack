# mutile-page-webpack

> vue + webpack 多项目独立打包

## Build Setup

```
    git clone git@github.com:FredaFei/mutile-page-webpack.git
    npm install
    // 开发环境
    npm start
```

+ 运行如下命令时：

```
    // 全部打包在一起
    npm run build [project name] [project name]
```

目录结构如下

```
  |__ ...
  |__ dist
  |__ |__ static
  |__ |__ |__ js
  |__ |__ |__ css
  |__ |__ [project name].html
  |__ |__ [project name].html
  |
  ...
```

+ 运行如下命令时：

```
    // 每个项目单独打包
    npm run build [project name] [project name] separate
```

目录结构如下

```
  |__ ...
  |__ dist
  |__ |__[project name]
  |__ |__ |__ static
  |__ |__ |__ |__ js
  |__ |__ |__ |__ css
  |__ |__ |__ index.html
  |__ |__[project name]
  |__ |__ |__ static
  |__ |__ |__ |__ js
  |__ |__ |__ |__ css
  |__ |__ |__ index.html
  |__ ...
```

+ 运行如下命令时：

```
    // 打包所有项目，并每个项目单独打包
    npm run build-all
```

目录结构如下

```
  |__ ...
  |__ dist
  |__ |__[project name]
  |__ |__ |__ static
  |__ |__ |__ |__ js
  |__ |__ |__ |__ css
  |__ |__ |__ index.html
  |__ |__[project name]
  |__ |__ |__ static
  |__ |__ |__ |__ js
  |__ |__ |__ |__ css
  |__ |__ |__ index.html
  |__ ...
```


博客地址： http://blog.leanote.com/post/964959033@qq.com/vue-wepeack

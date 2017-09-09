Demo: [Void](http://hehehai.cn/)

## 安装
``` bash
hexo init Blog
cd Blog
npm install

npm install --save hexo-renderer-pug hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive
git clone https://github.com/hehehai/hexo-theme-void.git themes/void
```

这里的安装建议使用 `npm` 或 `cnpm`，不建议使用 `yarn`（ hexo 初始化使用的npm，使用 yarn cache 可能会冲突）

- `hexo-renderer-pug` pug文件渲染
- `hexo-generator-feed` 设置文章摘要，具体设置可参看插件
- `hexo-generator-sitemap` 网站地图 RSS
- `hexo-generator-archive` 归档页面文章显示
- `hexo-browsersync` 可选择安装，在 hexo server 下自动启用

## 启用

修改 `_config.yml` 的 `theme` 配置项为 `void`:

```yaml
theme: void

# 在归档页面显示所有文章
# 需要上面安装的 hexo-generator-archive 插件支持
archive_generator:
    per_page: 0
    yearly: false
    monthly: false
    daily: false
```

## 部署
可以参考我的项目 [Blog](https://github.com/hehehai/blog)
该项目使用 Netlify 部署，具体使用方法参考官方文档

你可以fork项目，之后使用 Netlify 关联项目，绑定自己的域名。
之后可以直接在 github fork 的当前项目 `source/_post` 下新增 md 文档，保存后 Netlify 或自动更新。也可以 clone 到本地，更新文档后 push 到仓库

这种方法的好处是，你可以保存你整个项目的文件包括配置。并且 Netlify 也有免费的 https 可以使用

## 修改
主题本身的配置可以直接在 `void` 文件夹下的 `_config.yml` 修改。若要修改 `Pug` 文件，不需要安装其他库，克直接修改 `layout`文件夹下的文件。

修改样式需要安装依赖, 在 `void` 文件夹下
``` bash
yarn
yarn style:watch
```
这里若出现错误，一般是因为 `node-sass` 的问题，可以删除 `node_modules` 文件夹后，使用 `cnpm install` 安装

## 文件
**PUG**
```
layout/
    archive.pug        # 文章归档  
    index.pug          # 首页
    post.pug           # 文章页

    mixins/
        paginator.pug  # 分页 prev，next
        post.pug       # 文章 postInfo（翻译标签） posts（首页文章列表）postList（归档页列表）post（文章）
              
    partial/             
        comment.pug    # 评论系统 （disqus）
        copyright.pug  # 版权
        head.pug       # 页面头部信息
        layout.pug     # 模板
        nav.pug        # 头部导航
        scripts.pug    # 脚本 （Mathjax CDN）（Google Analytics）
        social.pug     # 社交导航
```

**SCSS**
```
source/scss
    main.scss              # 主入口，文件导入，字体导入

    partial/
        archive-post-list  # 归档页样式
        base.scss          # 基本样式
        copyright.scs      # 版权
        footer.scss        # 分页
        header.scss        # 头部
        home-post-lis      # 首页
        mq.scss            # 移动设备
        normalize.scs      # 浏览器样式重置
        post.scss          # 文章
        utils.scss         # 变量，颜色，字体
```

## 参考
项目在 hexo 主题 apollo 基础上修改生成
- [hexo-theme-apollo](https://github.com/pinggod/hexo-theme-apollo)

## License
MIT

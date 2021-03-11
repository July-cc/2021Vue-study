## gitHub 的使用 
GitHub是一个面向开源及私有软件项目(代码)的托管平台。

### git 的操作
就是线下使用命令行工具，搭配 git 命令向 github 网站传递代码。
想要使用 git 需要安装。
- windows 直接安装 gitbash 即可，自带 git 命令
- mac 需要下载 homebrew ，使用 homebrew 安装

#### 向网上已有的仓库(仓库内有文件的)上传内容

- 将网上的仓库克隆到本地,注意仓库内不能存在仓库
  ```shell
    git clone https://github.com/Sunny-zz/Sunny-zz.github.io.git
  ```
- 将自己写好的页面放到仓库内，删除一些不必要内容。
- 使用命令行工具进入到仓库内，将自己修改的内容提交到 github 网站上。
  - 执行 `git add .` 命令,将你的所有修改记录到远端。 (. 代表所有修改的文件 可以直接写文件名)
  - 执行 `git commit -m'版本留言'` 命令,将你的修改做成版本(commit)。
  - 执行 `git push` 命令,将你的做好的版本上传到远端。
  ***注意：第一次上传的时候  `git commit` 就会失败,提示你 如下信息 `plase tell me who you are?***

      ```
      git config --global user.name "yourname"
      git config --global user.email "youremail"
      ```
    ***然后依次输入正确的信息，成功之后再次执行 `git commit` 命令,然后执行 `git push`,依然会失败提示你使用 `git push origin master` 提交，按照提示提交即可***
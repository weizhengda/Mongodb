
##mongodb的安装与配置

1. 安装
   - 到官网下载安装包
   - 安装客户端

2. 配置
   - 配置系统环境变量
     + 将安装软件bin目录配置到系统环境比那里中
   - 创建数据库文件夹

     + 在d盘创建个 data文件夹  再在 data文件夹下创建个 db文件夹

3. 启动 mongodb 服务
    - 在mongodb的安装目录下的 bin 目录下打开 cmd
    - 执行  mongod --dbpath d:\data\db
    只要出现了  什么 connection on port 27017  就说明服务启动成功

    （启动成功之后，这个 cmd 就不要去做任何操作，也不要关闭）
    
4. 将mongodb注册成为系统服务
    - 在data目录中新建log文件夹
    - 打开cmd  
    - 输入 -mongod.exe --dbpath=D:\data\db --logpath=D:\db\log\mongodb.log --install --serviceName "MongoDB"
    - 回车

##数据库的设计与管理

### 常用命令
1. help
   - help
   - db.help();
   - db.yourColl.help();
   - db.youColl.find().help();
   - rs.help();
   
2. 切换/创建数据库
   - use dbName
3. 查询所有数据库
   - show dbs
4. 删除当前使用数据库
   - db.dropDatabase
5. 从指定主机上克隆数据库
   - db.cloneDatabase("127.0.0.1") //将指定机器上的数据库的数据克隆到当前数据库
6. 从指定的机器上复制指定数据库数据到某个数据库
   - db.copyDatabase("db1", "temp", "127.0.0.1") //将本机的db1的数据复制到temp数据库中
7. 修复当前数据库
   - db.repairDatabase();
8. 查看当前使用的数据库
   - db.getName();
   - db
   
9. 显示当前db状态
   - db.stats();
   
10. 显示当前db版本
   - db.vision();

11. 查看当前db的链接机器地址
   - db.getMongo();
   
###索引

##语句块操作

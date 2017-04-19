##数据库的增删查改

1. 对集合的操作
   - 获取指定名称的集合
     + db.getCollection('集合名字');  || db.集合名字;
   - 获取所有的集合
     + db.getCollectionNames();

   - 删除集合
     + db.集合名字.drop()
     
2. 对文档的操作

   - 增加
     + db.集合名字.save({})          只能加一条
     + db.集合名字.insert([{}, {}])  加多条
     + db.集合名字.insertOne({})     添加一条
   - 删除
     + db.集合名字.remove({name: 'xxx'}) 删除指定 name 为xxx的那一条  document
     + db.集合名字.remove({});           删除全部
   - 修改
     + db.集合名字.update({}, {}); 修改 第一个参数里面是查询的条件，第二个参数就是你要修改的内容
   - 可以根据下面这个方法 演化出  增 删  改 查
      ```
          db.集合名字.findAndModify({})
      ```
     + 如果 new :true   返回的对象 就是 修改之后的对象
     + 如果 remove: true 就会将查询到的这条记录 给删除
     + 如果 upset: true 在查询不到的情况下， 会做新增
     + 注意：remove 不要跟 update使用,upset 要跟 update使用
  
   - 查询 (以user为例)
     + db.user.find();//查询所有记录
     + db.user.distinct("name");//查询去重后的记录
     + db.user.find({"age":22});//查询age=22的记录
     + db.user.find({age:{$gt:22}});//查询age>22的记录
     + db.user.find({age:{$lt:22}});//查询age<22的记录
     + db.user.find({age:{$gte:25}});//查询age>=25的记录
     + db.user.find({age:{$lte:25}});//查询age<=25的记录
     + db.user.find({age: {$gte: 23, $lte: 26}});//查询age >= 23 并且 age <= 26的记录
     + db.user.find(name:/mongo/); //查询name中包含 mongo的数据
     + db.user.find(name:/^mongo/);//查询name中以mongo开头的
     + db.user.find({}, {name: 1, age: 1});//查询指定列的数据
     + db.user.find({age: {$gt: 25}}, {name: 1, age: 1});//查询指定列name、age数据, age > 25
     + db.user.find().sort({age: 1});//按照年龄升序排列
     + db.user.find().sort({age:-1});//按照年龄降序排列
     + db.user.find({name: 'zhangsan', age: 22});指定查询
     + db.user.find().limit(5);//查询前5条记录
     + db.user.find().skip(10);//查询10条以后的数据
     + db.user.find().limit(10).skip(5);//查询5-10条之间的数据
     + db.user.find({$or:[{age:22},{age:26}]});//or与查询
     + db.user.findOne();//查询第一条数据;
     + db.userInfo.find({age: {$gte: 25}}).count();//查询某个结果集的条数
     + db.userInfo.find({age: {$gte: 25}}).count();//按照某列进行排列
     
     
3. 分页

> var pageNo = 1; 页数

> var pageSize = 10; 每页显示的条数

> var pageZong = 5;  总页数     计算   Math.ceil(总条数 / 每页显示的条数);

> 第一页   db.user.find().skip(0).limit(10);

> 第二页   db.user.find().skip(10).limit(10);

> 第三页   db.user.find().skip(20).limit(10);

> 第pageNo 页  db.user.find().skip( ( pageNo - 1)  * pageSize ).limt(pageSize);


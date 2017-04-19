##数据库的增删查改

1. 对集合的操作
   - 获取集合
     + db.getCollection('集合名字');  || db.集合名字;

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
  
   - 查看 db.集合名字.find();

3. 分页

> var pageNo = 1; 页数

> var pageSize = 10; 每页显示的条数

> var pageZong = 5;  总页数     计算   Math.ceil(总条数 / 每页显示的条数);

> 第一页   db.user.find().skip(0).limit(10);

> 第二页   db.user.find().skip(10).limit(10);

> 第三页   db.user.find().skip(20).limit(10);

> 第pageNo 页  db.user.find().skip( ( pageNo - 1)  * pageSize ).limt(pageSize);


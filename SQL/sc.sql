SET NAMES UTF8;
DROP DATABASE IF EXISTS sc;
CREATE DATABASE sc CHARSET=UTF8;
USE sc;

/**用户信息**/
CREATE TABLE sc_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,  #id号
  uname VARCHAR(32),          #姓名
  upwd VARCHAR(32),           #密码
  email VARCHAR(64),          #邮箱
  phone VARCHAR(16),          #电话
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);


INSERT INTO sc_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', '林当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560',  '秦小雅', '0');






/*
SQLyog Ultimate v11.24 (32 bit)
MySQL - 5.7.17-log : Database - hotel
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`hotel` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `hotel`;

/*Table structure for table `in_room_info` */

DROP TABLE IF EXISTS `in_room_info`;

CREATE TABLE `in_room_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `customer_name` varchar(40) DEFAULT NULL COMMENT '客人姓名',
  `gender` varchar(2) DEFAULT '1' COMMENT '性别(1男 0女)',
  `is_vip` varchar(2) DEFAULT '0' COMMENT '0普通，1vip',
  `idcard` varchar(20) DEFAULT NULL COMMENT '身份证号',
  `phone` varchar(20) DEFAULT NULL COMMENT '手机号',
  `money` float(10,2) DEFAULT NULL COMMENT '押金',
  `create_date` datetime DEFAULT NULL COMMENT '入住时间',
  `room_id` bigint(20) DEFAULT NULL COMMENT '房间表主键',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `in_room_info` */

/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `order_num` varchar(20) DEFAULT NULL COMMENT '订单编号',
  `order_money` float(10,2) DEFAULT NULL COMMENT '订单总价',
  `order_status` varchar(2) DEFAULT '0' COMMENT '0未结算，1已结算',
  `room_id` bigint(20) DEFAULT NULL COMMENT '房间主键',
  `create_date` datetime DEFAULT NULL COMMENT '下单时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `orders` */

/*Table structure for table `room_type` */

DROP TABLE IF EXISTS `room_type`;

CREATE TABLE `room_type` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `room_type_name` varchar(20) DEFAULT NULL COMMENT '房间类型名',
  `room_price` float(10,2) DEFAULT NULL COMMENT '房间的单价',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `room_type` */

insert  into `room_type`(`id`,`room_type_name`,`room_price`) values (1,'单人间',140.00),(2,'双人间',180.00),(3,'豪华间',280.00);

/*Table structure for table `rooms` */

DROP TABLE IF EXISTS `rooms`;

CREATE TABLE `rooms` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `room_num` varchar(10) DEFAULT NULL COMMENT '房间编号',
  `room_status` varchar(2) DEFAULT '0' COMMENT '房间的状态(0空闲，1已入住，2打扫)',
  `room_type_id` bigint(20) DEFAULT NULL COMMENT '房间类型主键',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `rooms` */

insert  into `rooms`(`id`,`room_num`,`room_status`,`room_type_id`) values (1,'8201','0',1),(2,'8202','0',1),(3,'8203','0',1),(4,'8204','0',2),(5,'8204','0',2),(6,'8205','0',3);

/*Table structure for table `system_authority` */

DROP TABLE IF EXISTS `system_authority`;

CREATE TABLE `system_authority` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `authority_name` varchar(20) DEFAULT NULL COMMENT '权限名',
  `authority_url` varchar(200) DEFAULT '#' COMMENT '权限跳转地址',
  `parent` bigint(20) DEFAULT '0' COMMENT '记住上级的主键，0为一级节点',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

/*Data for the table `system_authority` */

insert  into `system_authority`(`id`,`authority_name`,`authority_url`,`parent`) values (1,'入住管理','#',0),(2,'订单管理','#',0),(3,'会员管理','#',0),(4,'客房管理','#',0),(5,'用户管理','#',0),(6,'客人意见','#',0),(7,'入住信息查询','#',1),(8,'入住信息添加','#',1),(9,'消费记录','#',1),(10,'结账退房','#',1),(11,'订单信息','#',2),(12,'订单添加','#',2),(13,'会员信息查询','#',3),(14,'会员信息管理','#',3),(15,'添加会员','#',3),(16,'客房信息查询','#',4),(17,'客房信息管理','#',4),(18,'添加客房','#',4),(19,'用户信息查询','#',5),(20,'用户信息管理','#',5),(21,'添加用户','#',5),(22,'客人意见','#',6);

/*Table structure for table `system_user` */

DROP TABLE IF EXISTS `system_user`;

CREATE TABLE `system_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(40) DEFAULT NULL COMMENT '账号',
  `pwd` varchar(40) DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `system_user` */

insert  into `system_user`(`id`,`username`,`pwd`) values (1,'admin','d5d23b080c52f070e3dc61821f325c7d'),(2,'bigbird','d5d23b080c52f070e3dc61821f325c7d');

/*Table structure for table `user_authority` */

DROP TABLE IF EXISTS `user_authority`;

CREATE TABLE `user_authority` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '系统用户主键',
  `authority_id` bigint(20) DEFAULT NULL COMMENT '权限主键',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user_authority` */

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(40) DEFAULT NULL COMMENT '用户名',
  `pwd` varchar(40) DEFAULT NULL COMMENT '用户名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`pwd`) values (1,'admin','123456'),(2,'lisi','123456');

/*Table structure for table `vip` */

DROP TABLE IF EXISTS `vip`;

CREATE TABLE `vip` (
  `vip` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `vip_num` varchar(20) DEFAULT NULL COMMENT '会员卡编号',
  `vip_rate` float(2,1) DEFAULT '9.0' COMMENT '1~9折',
  `idcard` varchar(20) DEFAULT NULL COMMENT '会员身份证',
  `create_date` datetime DEFAULT NULL COMMENT '会员办理日期',
  PRIMARY KEY (`vip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `vip` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

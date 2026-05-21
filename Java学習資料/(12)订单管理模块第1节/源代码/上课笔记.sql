SELECT id FROM `rooms` WHERE room_num='8205';

INSERT INTO `in_room_info` VALUES(NULL,'xxx','1','0','411311199001115588','13812345668',200,'2018-09-05','6',1);

UPDATE `rooms` SET room_status='1' WHERE room_num='xxx'

SELECT room_num,id FROM `rooms` WHERE room_status='1';-->LIST<Map<STRING,Object>>

SELECT * FROM `in_room_info` WHERE room_id=1 LIMIT 1-->Map<STRING,Object>

SELECT customer_name,gender,idcard,phone,money,DATE_FORMAT(create_date,'%Y-%m-%d') AS create_date FROM `in_room_info` WHERE room_id=1 LIMIT 1

SELECT room_price FROM room_type WHERE id=(SELECT room_type_id FROM `rooms` WHERE id=7)

SELECT * FROM
(SELECT id,authority_name AS oneName FROM system_authority WHERE parent=0) t1
INNER JOIN
(SELECT authority_name AS twoName,authority_url AS twoUrl,parent
FROM system_authority WHERE parent!=0) t2
ON t2.parent=t1.id

#一级菜单
SELECT * FROM
(SELECT sa.id,sa.authority_name AS oneName FROM SYSTEM_USER su INNER JOIN user_authority ua
ON su.id=ua.`user_id` INNER JOIN system_authority sa
ON sa.id=ua.`authority_id` WHERE sa.parent=0 AND su.id=1) t1
INNER JOIN
#二级菜单
(SELECT sa.authority_name AS twoName,sa.authority_url AS twoUrl,sa.parent FROM SYSTEM_USER su INNER JOIN user_authority ua
ON su.id=ua.`user_id` INNER JOIN system_authority sa
ON sa.id=ua.`authority_id` WHERE sa.parent!=0 AND su.id=1) t2
ON t1.id=t2.parent

SELECT id FROM SYSTEM_USER WHERE username='admin' AND pwd='d5d23b080c52f070e3dc61821f325c7d'

UPDATE user_authority SET user_id=2 WHERE authority_id>=4


SELECT rm.`room_num`,rt.`room_type_name`,iri.`customer_name`,iri.`gender`,iri.`idcard`,
iri.`phone`,iri.`money`,iri.`create_date`
 FROM in_room_info iri INNER JOIN rooms rm
ON iri.`room_id`=rm.id INNER JOIN room_type rt ON rm.`room_type_id`=rt.id
#where iri.customer_name='赵子龙';
#where rm.room_num='8201';
#where iri.phone='13012345678';
WHERE iri.idcard='411311199001015599';

TYPE
keyWord

#update
DELETE FROM in_room_info WHERE id=0;
UPDATE in_room_info SET STATUS='0' WHERE id='0';


SELECT iri.id,rm.`room_num`,rt.`room_type_name`,iri.`customer_name`,iri.`gender`,iri.`idcard`,
iri.`phone`,iri.`money`,iri.`create_date`
 FROM in_room_info iri INNER JOIN rooms rm
ON iri.`room_id`=rm.id INNER JOIN room_type rt ON rm.`room_type_id`=rt.id
WHERE iri.status='1'


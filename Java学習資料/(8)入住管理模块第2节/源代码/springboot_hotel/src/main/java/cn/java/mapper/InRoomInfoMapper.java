/**
 * Project Name:springboot_hotel
 * File Name:InRoomInfoMapper.java
 * Package Name:cn.java.mapper
 * Date:下午8:26:41
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.mapper;
/**
 * Description:	   <br/>
 * Date:     下午8:26:41 <br/>
 * @author   丁鹏
 * @version  
 * @see 	 
 */

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Delete;

public interface InRoomInfoMapper {

    /**
     * 
     * Description: 分页查询入住信息：870599752<br/>
     *
     * @author 丁鹏
     * @return
     */
    List<Map<String, Object>> getAllInRoomInfos();

    /**
     * 
     * Description: 入住信息查询中的条件查询<br/>
     *
     * @author 丁鹏
     * @param type
     * @param keyWord
     * @return
     */
    List<Map<String, Object>> getInRoomInfoByCondition(String type, String keyWord);

    /**
     * 
     * Description: 删除入住信息<br/>
     *
     * @author 丁鹏
     * @param id
     * @return
     */
    @Delete("UPDATE in_room_info SET status='0' WHERE id=#{arg0}")
    int delInfoById(Long id);

}

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

public interface InRoomInfoMapper {

    /**
     * 
     * Description: 分页查询入住信息：870599752<br/>
     *
     * @author 丁鹏
     * @return
     */
    List<Map<String, Object>> getAllInRoomInfos();

}

/**
 * Project Name:springboot_hotel
 * File Name:FrontMapper.java
 * Package Name:cn.java.mapper
 * Date:下午2:33:02
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.mapper;
/**
 * Description: QQ：1841670794，870599752(加好友时记得备注哦)
 * Date:     下午2:33:02 <br/>
 * @author   丁鹏(大胆开车，幽默讲课)
 * @version  
 * @see 	 
 */

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Select;

public interface FrontMapper {

    @Select("SELECT * FROM test")
    List<Map<String, Object>> getAll();

}

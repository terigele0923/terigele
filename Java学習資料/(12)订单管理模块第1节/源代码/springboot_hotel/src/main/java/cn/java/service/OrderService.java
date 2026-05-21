/**
 * Project Name:springboot_hotel
 * File Name:OrderService.java
 * Package Name:cn.java.service.impl
 * Date:下午2:44:27
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.service;

import java.util.List;
import java.util.Map;

/**
 * Description: QQ：1841670794，870599752(加好友时记得备注哦)
 * Date:     下午2:44:27 <br/>
 * @author   丁鹏(大胆开车，幽默讲课)
 * @version  
 * @see 	 
 */
public interface OrderService {

    /**
     * 
     * Description: 获取数据库表中所有已经入住的房间号<br/>
     *
     * @author 丁鹏(大胆开车，幽默讲课)
     * @return
     */
    List<Map<String, Object>> getRoomsByStatus();

}

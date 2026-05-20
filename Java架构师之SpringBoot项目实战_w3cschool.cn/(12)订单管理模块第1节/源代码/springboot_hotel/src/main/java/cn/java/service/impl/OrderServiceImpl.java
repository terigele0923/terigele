/**
 * Project Name:springboot_hotel
 * File Name:OrderServiceImpl.java
 * Package Name:cn.java.service.impl
 * Date:下午2:42:44
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.java.mapper.OrderMapper;
import cn.java.service.OrderService;

/**
 * Description: 订单管理模块。QQ：870599752(加好友时记得备注哦) <br>
 * Date: 下午2:42:44 <br/>
 * 
 * @author 丁鹏(大胆开车，幽默讲课)
 * @version
 * @see
 */
@Service
@Transactional(readOnly = false)
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderMapper orderMapper;

    /**
     *  简单描述该方法的实现功能（可选）.
     * @see cn.java.service.OrderService#getRoomsByStatus()
     */
    @Override
    public List<Map<String, Object>> getRoomsByStatus() {
        return orderMapper.getRoomsByStatus();
    }
}

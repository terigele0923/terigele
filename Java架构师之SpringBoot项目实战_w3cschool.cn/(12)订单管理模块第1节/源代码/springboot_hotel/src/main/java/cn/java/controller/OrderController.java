/**
 * Project Name:springboot_hotel
 * File Name:OrderController.java
 * Package Name:cn.java.controller
 * Date:下午2:33:51
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.java.service.OrderService;

/**
 * Description: 订单管理模块。QQ：870599752(加好友时记得备注哦)<br>
 * Date: 下午2:33:51 <br/>
 * 
 * @author 丁鹏(大胆开车，幽默讲课)
 * @version
 * @see
 */
@Controller
public class OrderController {
    @Autowired
    private OrderService orderService;

    /**
     * 
     * Description: 当点击菜单栏的添加订单时，帮助跳转到添加订单页面<br/>
     *
     * @author 丁鹏(大胆开车，幽默讲课)
     * @return
     */
    @RequestMapping("/toAddOrder.do")
    public String toAddOrder(Model model) {
        List<Map<String, Object>> roomList = orderService.getRoomsByStatus();
        model.addAttribute("roomList", roomList);
        return "admin/order/addOrder.jsp";
    }

}

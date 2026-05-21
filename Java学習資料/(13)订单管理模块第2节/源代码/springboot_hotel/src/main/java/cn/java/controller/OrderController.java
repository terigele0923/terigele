/**
 * Project Name:springboot_hotel
 * File Name:OrderController.java
 * Package Name:cn.java.controller
 * Date:下午2:33:51
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.java.entity.Order;
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

    /**
     * 
     * Description: 添加订单-将数据保存到数据库的表中去<br/>
     *
     * @author 丁鹏(大胆开车，幽默讲课)
     * @return
     */
    @RequestMapping("/addOrder.do")
    public String addOrder(@Valid Order order, BindingResult br, HttpSession session) {
        System.out.println(order);
        boolean flag = br.hasErrors();
        if (flag) {// 数据格式有错误
            // 构建一个Map集合用来封装的错误信息
            Map<String, Object> errorMap = new HashMap<String, Object>();
            List<FieldError> fieldErrorList = br.getFieldErrors();
            for (FieldError fieldError : fieldErrorList) {
                String fieldName = fieldError.getField();
                String errorMessage = fieldError.getDefaultMessage();
                errorMap.put(fieldName, errorMessage);
            }
            session.setAttribute("errorMap", errorMap);
            session.setAttribute("order", order);
            return "redirect:/toAddOrder.do";
        } else {// 数据格式全部正确
            // 调用业务层，将数据保存到数据库的表中去
            boolean result = orderService.saveOrder(order);
            if (result) {
                return "redirect:/pages/admin/order/orderInfo.jsp";
            }
            return "redirect:/toAddOrder.do";
        }
    }

}

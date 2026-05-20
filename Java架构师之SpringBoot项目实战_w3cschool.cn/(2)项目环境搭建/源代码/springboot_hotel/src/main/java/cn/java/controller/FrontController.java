/**
 * Project Name:springboot_hotel
 * File Name:FrontController.java
 * Package Name:cn.java.controller
 * Date:下午2:21:18
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.java.service.FrontService;

/**
 * Description: QQ：1841670794，870599752(加好友时记得备注哦) Date: 下午2:21:18 <br/>
 * 
 * @author 丁鹏(大胆开车，幽默讲课)
 * @version
 * @see
 */
@Controller
public class FrontController {
    @Autowired
    private FrontService frontService;

    @RequestMapping("/test.do")
    public @ResponseBody String test() {
        return "hello java vip";
    }

    @RequestMapping("/getAll.do")
    public @ResponseBody List<Map<String, Object>> getAll() {
        return frontService.selectAll();
    }

}

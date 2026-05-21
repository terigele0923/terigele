/**
 * Project Name:dingpeng_springboot5
 * File Name:MongoController.java
 * Package Name:cn.java.controller
 * Date:下午4:33:42
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.java.entity.User;
import cn.java.service.UserService;

/**
 * Description: <br/>
 * Date: 下午4:33:42 <br/>
 * 
 * @author 丁鹏
 * @version
 * @see
 */
@Controller
public class MongoController {
    @Autowired
    private UserService userService;

    @RequestMapping("/addEntityToMongoDB.do")
    public void addEntityToMongoDB() {
        User user1 = new User(2, "李四", "12");
        userService.add(user1);

    }

}

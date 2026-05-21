/**
 * Project Name:springboot_hotel
 * File Name:UserController.java
 * Package Name:cn.java.controller
 * Date:下午2:27:59
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.java.service.UserService;

/**
 * Description: <br/>
 * Date: 下午2:27:59 <br/>
 * 
 * @author 丁鹏
 * @version
 * @see
 */
@Controller
@RequestMapping("/users/")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * 
     * Description 登录<br/>
     *
     * @author 丁鹏
     * @param username用户名
     * @param pwd密码
     * @return
     */
    @RequestMapping("/isLoginSuccess.do")
    @ResponseBody
    public boolean isLoginSuccess(String username, String pwd) {
        System.out.println(username + "," + pwd);
        return userService.isLogin(username, pwd);
    }

}

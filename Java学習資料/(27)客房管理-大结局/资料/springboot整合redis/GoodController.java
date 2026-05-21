/**
 * Project Name:dingpeng_springboot5
 * File Name:GoodController.java
 * Package Name:cn.java.controller
 * Date:下午1:24:55
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

import cn.java.service.GoodService;

/**
 * Description: <br/>
 * Date: 下午1:24:55 <br/>
 * 
 * @author 丁鹏
 * @version
 * @see
 */
@Controller
public class GoodController {

    @Autowired
    private GoodService goodService;

    @RequestMapping("/getGoods.do")
    public @ResponseBody List<Map<String, Object>> getGoods() {
        return goodService.selectAllGoods();
    }

    @RequestMapping("/clearRedisCache.do")
    public void clearRedisCache() {
        goodService.clearRedisCache();
    }

}

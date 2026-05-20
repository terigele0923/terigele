/**
 * Project Name:springboot_hotel
 * File Name:HouseController.java
 * Package Name:cn.java.controller
 * Date:下午2:32:48
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
import org.springframework.web.bind.annotation.RequestParam;

import com.github.pagehelper.PageInfo;

import cn.java.service.HouseService;

/**
 * Description: 客房管理。QQ：1841670794，870599752(加好友时记得备注哦) Date: 下午2:32:48 <br/>
 * 
 * @author 丁鹏(大胆开车，幽默讲课)
 * @version
 * @see
 */
@Controller
public class HouseController {
    @Autowired
    private HouseService houseService;

    /**
     * 
     * Description: 跳转到客房查询页面<br/>
     *
     * @author 丁鹏(大胆开车，幽默讲课)
     * @param pageNum
     * @param pageSize
     * @return
     */
    @RequestMapping("/getHouseInfo.do")
    public String getHouseInfo(@RequestParam(name = "pageNum", defaultValue = "1") Integer pageNum,
            @RequestParam(name = "pageSize", defaultValue = "10") Integer pageSize, Model model) {
        List<Map<String, Object>> houseList = houseService.findAllHouseInfo(pageNum, pageSize);
        PageInfo<Map<String, Object>> pageInfo = new PageInfo<Map<String, Object>>(houseList);
        model.addAttribute("pageInfo", pageInfo);
        return "admin/room/houseInfo.jsp";
    }
}

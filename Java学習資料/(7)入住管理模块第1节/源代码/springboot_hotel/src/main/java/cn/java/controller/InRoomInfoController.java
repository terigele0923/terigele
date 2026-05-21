/**
 * Project Name:springboot_hotel
 * File Name:InRoomInfoController.java
 * Package Name:cn.java.controller
 * Date:下午8:14:41
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

import cn.java.service.InRoomInfoService;

/**
 * Description: <br/>
 * Date: 下午8:14:41 <br/>
 * 
 * @author 丁鹏
 * @version
 * @see
 */
@Controller
public class InRoomInfoController {
    @Autowired
    private InRoomInfoService inRoomInfoService;

    @RequestMapping("/getInRoomInfo.do")
    public String getInRoomInfo(@RequestParam(name = "pageNum", defaultValue = "1") Integer pageNum,
            @RequestParam(name = "pageSize", defaultValue = "2") Integer pageSize, Model model) {
        // 分页之后返回的数据
        List<Map<String, Object>> infoList = inRoomInfoService.selectAllInRoomInfos(pageNum, pageSize);
        // 将infoList封装到PageInfo工具类中
        PageInfo<Map<String, Object>> pageInfo = new PageInfo<Map<String, Object>>(infoList);
        model.addAttribute("pageInfo", pageInfo);
        return "admin/bill/inroominfo.jsp";
    }

}

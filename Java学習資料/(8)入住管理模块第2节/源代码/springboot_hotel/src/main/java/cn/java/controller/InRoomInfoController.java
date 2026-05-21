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

    /**
     * 
     * Description: 入住信息查询<br/>
     *
     * @author 丁鹏
     * @param pageNum
     * @param pageSize
     * @param model
     * @return
     */
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

    /**
     * 
     * Description: 入住信息查询-按照条件具体查询<br/>
     *
     * @author 丁鹏
     * @param type
     * @param keyWord
     * @return
     */
    @RequestMapping("/getInRoomInfoByCondition.do")
    public String getInRoomInfoByCondition(String type, String keyWord, Model model) {
        List<Map<String, Object>> infoList = inRoomInfoService.selectInRoomInfoByCondition(type, keyWord);
        model.addAttribute("infoList", infoList);
        return "admin/bill/inroominfo_condition.jsp";
    }

    @RequestMapping("/delInRoomInfo.do")
    public String delInRoomInfo(Long id) {
        boolean flag = inRoomInfoService.delById(id);
        return "redirect:/getInRoomInfo.do";
    }

}

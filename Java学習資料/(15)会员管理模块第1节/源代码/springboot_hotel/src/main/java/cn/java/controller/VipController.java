/**
 * Project Name:springboot_hotel
 * File Name:VipController.java
 * Package Name:cn.java.controller
 * Date:上午10:12:54
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.github.pagehelper.PageInfo;

import cn.java.service.VipService;

/**
 * Description: 会员管理模块。QQ：1841670794，870599752(加好友时记得备注哦) Date: 上午10:12:54 <br/>
 * 
 * @author 丁鹏(大胆开车，幽默讲课)
 * @version
 * @see
 */
@Controller
public class VipController {
    @Autowired
    private VipService vipService;

    /**
     * 
     * Description: 当点击会员信息查询时，跳转套jsp页面<br/>
     *
     * @author 丁鹏(大胆开车，幽默讲课)
     * @param pageNum：页码
     * @param pageSize：每页显示的数据条数
     * @param request
     * @return
     */
    @RequestMapping("/getAllVip.do")
    public String getAllVip(@RequestParam(name = "pageNum", defaultValue = "1") Integer pageNum,
            @RequestParam(name = "pageSize", defaultValue = "1") Integer pageSize, HttpServletRequest request) {
        // 调用业务层获取vip的所有信息
        List<Map<String, Object>> vipInfoList = vipService.findAllVipInfo(pageNum, pageSize);
        // 将数据封装套PageInfo工具类中去
        PageInfo<Map<String, Object>> pageInfo = new PageInfo<Map<String, Object>>(vipInfoList);
        request.setAttribute("pageInfo", pageInfo);
        return "admin/vip/vip.jsp";
    }

}

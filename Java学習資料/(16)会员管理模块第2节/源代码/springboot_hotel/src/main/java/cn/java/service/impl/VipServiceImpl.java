/**
 * Project Name:springboot_hotel
 * File Name:VipServiceImpl.java
 * Package Name:cn.java.service.impl
 * Date:上午10:28:03
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;

import cn.java.mapper.VipMapper;
import cn.java.service.VipService;

/**
 * Description:会员管理模块。 QQ：1841670794，870599752(加好友时记得备注哦) Date: 上午10:28:03 <br/>
 * 
 * @author 丁鹏(大胆开车，幽默讲课)
 * @version
 * @see
 */
@Service
@Transactional(readOnly = false)
public class VipServiceImpl implements VipService {
    @Autowired
    private VipMapper vipMapper;

    @Transactional(readOnly = true)
    @Override
    public List<Map<String, Object>> findAllVipInfo(Integer pageNum, Integer pageSize) {
        // 开始分页
        PageHelper.startPage(pageNum, pageSize);
        return vipMapper.getAllVipInfo();
    }
}

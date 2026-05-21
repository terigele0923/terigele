/**
 * Project Name:springboot_hotel
 * File Name:HouseServiceImpl.java
 * Package Name:cn.java.service.impl
 * Date:下午2:44:09
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;

import cn.java.mapper.HouseMapper;
import cn.java.service.HouseService;

/**
 * Description: QQ：1841670794，870599752(加好友时记得备注哦) Date: 下午2:44:09 <br/>
 * 
 * @author 丁鹏(大胆开车，幽默讲课)
 * @version
 * @see
 */
@Service
@Transactional(readOnly = false)
public class HouseServiceImpl implements HouseService {

    @Autowired
    private HouseMapper houseMapper;

    @Transactional(readOnly = true)
    @Override
    public List<Map<String, Object>> findAllHouseInfo(Integer pageNum, Integer pageSize) {
        // PageHelper后台分页
        PageHelper.startPage(pageNum, pageSize);
        return houseMapper.getAllHouseInfo();
    }

    @Override
    public List<Map<String, Object>> findAllRoomType() {
        return houseMapper.getAllRoomType();
    }

    @Override
    public List<Map<String, Object>> findHouseInfoByCondition(Integer pageNum, Integer pageSize, String type,
            String keyword) {
        // 将单个参数封装套Map集合中去
        Map<String, Object> paramMap = new HashMap<String, Object>();
        paramMap.put("type", type);
        paramMap.put("keyword", keyword);
        // 后台分页
        PageHelper.startPage(pageNum, pageSize);
        return houseMapper.getHouseInfoByCondition(paramMap);
    }

    @Override
    public List<Map<String, Object>> findAllRoomTypeByCondition(Integer pageNum, Integer pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        return houseMapper.getAllRoomType();
    }

}

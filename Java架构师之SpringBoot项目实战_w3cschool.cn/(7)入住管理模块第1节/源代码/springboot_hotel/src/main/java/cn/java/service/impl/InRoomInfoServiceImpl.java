/**
 * Project Name:springboot_hotel
 * File Name:InRoomInfoServiceImpl.java
 * Package Name:cn.java.service.impl
 * Date:下午8:30:22
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;

import cn.java.mapper.InRoomInfoMapper;
import cn.java.service.InRoomInfoService;

/**
 * Description: <br/>
 * Date: 下午8:30:22 <br/>
 * 
 * @author 丁鹏
 * @version
 * @see
 */
@Service
public class InRoomInfoServiceImpl implements InRoomInfoService {

    @Autowired
    private InRoomInfoMapper inRoomInfoMapper;

    @Override
    public List<Map<String, Object>> selectAllInRoomInfos(Integer pageNum, Integer pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        return inRoomInfoMapper.getAllInRoomInfos();
    }

}

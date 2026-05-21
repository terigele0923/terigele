/**
 * Project Name:springboot_hotel
 * File Name:InRoomInfoServiceImpl.java
 * Package Name:cn.java.service.impl
 * Date:下午8:30:22
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.service.impl;

import java.util.HashMap;
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

    @Override
    public List<Map<String, Object>> selectInRoomInfoByCondition(String type, String keyWord) {
        return inRoomInfoMapper.getInRoomInfoByCondition(type, keyWord);
    }

    @Override
    public boolean delById(Long id) {
        return inRoomInfoMapper.delInfoById(id) >= 1 ? true : false;
    }

    @Override
    public boolean batchDel(String idAttr) {// "1,2,"
        idAttr = idAttr.substring(0, idAttr.length() - 1);
        Map<String, Object> paramMap = new HashMap<String, Object>();
        paramMap.put("idAttr", idAttr);
        int flag = inRoomInfoMapper.batchDel(paramMap);
        return flag >= 1 ? true : false;
    }

    @Override
    public List<Map<String, Object>> getAllKXRoom() {
        return inRoomInfoMapper.getAllKXRoom();
    }

}

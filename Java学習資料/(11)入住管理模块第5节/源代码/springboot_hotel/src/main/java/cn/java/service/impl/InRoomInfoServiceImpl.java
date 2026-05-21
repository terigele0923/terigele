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
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;

import cn.java.entity.InRoomInfo;
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
@Transactional(readOnly = false)
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

    @Override
    public boolean saveInRoomInfo(InRoomInfo info) {
        // 根据roomNum查出房间对应的房间id
        Long roomId = inRoomInfoMapper.getRoomIdByRoomNum(info.getRoomNum());
        // 将数据保存到in_room_info表中去
        info.setRoomId(roomId);
        int flag = inRoomInfoMapper.addInRoomInfo(info);
        // 修改房间的状态
        if (flag >= 1) {
            return inRoomInfoMapper.updateRoomStatus(info.getRoomNum()) >= 1 ? true : false;
        }
        return false;
    }

    @Transactional(readOnly = true)
    @Override
    public List<Map<String, Object>> selectRoomsByStatus() {
        return inRoomInfoMapper.getRoomsByStatus();
    }

    @Transactional(readOnly = true)
    @Override
    public Map<String, Object> findInRoomInfoByRoomId(Long roomId) {
        return inRoomInfoMapper.getInRoomInfoByRoomId(roomId);
    }

}

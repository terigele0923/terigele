/**
 * Project Name:springboot_hotel
 * File Name:SystemUserServiceImpl.java
 * Package Name:cn.java.service.impl
 * Date:下午2:23:15
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

import cn.java.mapper.SystemUserMapper;
import cn.java.service.SystemUserService;

/**
 * Description: QQ：1841670794，870599752(加好友时记得备注哦) Date: 下午2:23:15 <br/>
 * 
 * @author 丁鹏(大胆开车，幽默讲课)
 * @version
 * @see
 */
@Service
@Transactional(readOnly = false)
public class SystemUserServiceImpl implements SystemUserService {
    @Autowired
    private SystemUserMapper systemUserMapper;

    @Transactional(readOnly = true)
    @Override
    public List<Map<String, Object>> findAllUserInfo(Integer pageNum, Integer pageSize, String keyWord) {
        PageHelper.startPage(pageNum, pageSize);
        return systemUserMapper.getAllUserInfo(keyWord);
    }

    @Override
    public boolean updateUseStatus(Long id, String useStatus) {
        if (useStatus == null) {
            return false;
        }
        if (!(useStatus.matches("[01]"))) {
            return false;
        }
        return systemUserMapper.updateUseStatus(id, useStatus) >= 1 ? true : false;
    }

}

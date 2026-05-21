/**
 * Project Name:springboot_hotel
 * File Name:FrontServiceImpl.java
 * Package Name:cn.java.service.impl
 * Date:下午2:34:49
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.java.mapper.FrontMapper;
import cn.java.service.FrontService;

/**
 * Description: QQ：1841670794，870599752(加好友时记得备注哦) Date: 下午2:34:49 <br/>
 * 
 * @author 丁鹏(大胆开车，幽默讲课)
 * @version
 * @see
 */
@Service
public class FrontServiceImpl implements FrontService {
    @Autowired
    private FrontMapper frontMapper;

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.FrontService#selectAll()
     */
    @Override
    public List<Map<String, Object>> selectAll() {
        return frontMapper.getAll();
    }
}

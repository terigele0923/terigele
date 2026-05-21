/**
 * Project Name:dingpeng_springboot5
 * File Name:GoodServiceImpl.java
 * Package Name:cn.java.service.impl
 * Date:下午1:22:47
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.stereotype.Service;

import cn.java.mapper.GoodMapper;
import cn.java.service.GoodService;

/**
 * Description: <br/>
 * Date: 下午1:22:47 <br/>
 * 
 * @author 丁鹏
 * @version
 * @see
 */
@Service
//为当前类取一个Redis的缓存名称
@CacheConfig(cacheNames = { "redisCache1" })
public class GoodServiceImpl implements GoodService {
    @Autowired
    private GoodMapper goodMapper;

    /**
     * 简单描述该方法的实现功能（可选）.
     * 
     * @see cn.java.service.impl.GoodService#selectAllGoods()
     */

    // @Cacheable(key = "aaaaaaaaaaaaaa")
	//将本方法返回的结果保存到Redis数据库中去，key为aaaaaaaaaaaaaa
    //@CachePut(key = "'aaaaaaaaaaaaaa'")
	@Cacheable(key = "'aaaaaaaaaaaaaa'")
    @Override
    public List<Map<String, Object>> selectAllGoods() {
        return goodMapper.getAllGoods();
    }

	//从Redis数据库中删除key=aaaaaaaaaaaaaaaa对应的全部记录
    @CacheEvict(key = "'aaaaaaaaaaaaaa'")
    @Override
    public void clearRedisCache() {
        System.out.println("缓存被清空了");
    }

}

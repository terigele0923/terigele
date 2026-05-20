/**
 * Project Name:dingpeng_springboot5
 * File Name:GoodService.java
 * Package Name:cn.java.service.impl
 * Date:下午1:24:02
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.service;

import java.util.List;
import java.util.Map;

/**
 * Description: <br/>
 * Date: 下午1:24:02 <br/>
 * 
 * @author 丁鹏
 * @version
 * @see
 */
public interface GoodService {

    /**
     * 
     * Description: 查询goods表中的所有数据<br/>
     *
     * @author 丁鹏
     * @return
     */
    List<Map<String, Object>> selectAllGoods();

    /**
     * 
     * Description: 清空Redis缓存<br/>
     *
     * @author 丁鹏
     */
    void clearRedisCache();

}

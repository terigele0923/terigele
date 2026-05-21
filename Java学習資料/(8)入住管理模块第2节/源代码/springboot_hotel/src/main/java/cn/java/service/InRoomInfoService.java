/**
 * Project Name:springboot_hotel
 * File Name:InRoomInfoService.java
 * Package Name:cn.java.service
 * Date:下午8:29:51
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.service;

import java.util.List;
import java.util.Map;

/**
 * Description: <br/>
 * Date: 下午8:29:51 <br/>
 * 
 * @author 丁鹏
 * @version
 * @see
 */
public interface InRoomInfoService {
    /**
     * 
     * Description: 分页查询入住信息：QQ870599752<br/>
     *
     * @author 丁鹏
     * @param pageNum：当前页码
     * @param pageSize：每页显示的数据量
     * @return
     */
    List<Map<String, Object>> selectAllInRoomInfos(Integer pageNum, Integer pageSize);

    /**
     * 
     * Description: 入住信息查询中的条件查询<br/>
     *
     * @author 丁鹏
     * @param type
     * @param keyWord
     * @return
     */
    List<Map<String, Object>> selectInRoomInfoByCondition(String type, String keyWord);

    /**
     * 
     * Description: 删除入住信息<br/>
     *
     * @author 丁鹏
     * @param id
     * @return
     */
    boolean delById(Long id);
}

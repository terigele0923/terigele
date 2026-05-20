/**
 * Project Name:springboot_hotel
 * File Name:VipMapper.java
 * Package Name:cn.java.mapper
 * Date:上午10:26:41
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Select;

/**
 * Description: 会员管理模块QQ：1841670794，870599752(加好友时记得备注哦) Date: 上午10:26:41 <br/>
 * 
 * @author 丁鹏(大胆开车，幽默讲课)
 * @version
 * @see
 */
public interface VipMapper {

    /**
     * 
     * Description: 查询数据库vip表中的所有信息<br/>
     *
     * @author 丁鹏(大胆开车，幽默讲课)
     * @return
     */
    @Select("SELECT * FROM vip")
    List<Map<String, Object>> getAllVipInfo();

}

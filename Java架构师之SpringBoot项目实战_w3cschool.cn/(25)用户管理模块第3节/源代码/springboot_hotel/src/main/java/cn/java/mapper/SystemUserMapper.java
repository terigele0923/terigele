/**
 * Project Name:springboot_hotel
 * File Name:SystemUserMapper.java
 * Package Name:cn.java.mapper
 * Date:下午2:21:28
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.mapper;
/**
 * Description: QQ：1841670794，870599752(加好友时记得备注哦)
 * Date:     下午2:21:28 <br/>
 * @author   丁鹏(大胆开车，幽默讲课)
 * @version  
 * @see 	 
 */

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Update;

public interface SystemUserMapper {

    /**
     * 
     * Description: 查询所有系统用户信息与分页查询<br/>
     *
     * @author 丁鹏(大胆开车，幽默讲课)
     * @return
     */
    List<Map<String, Object>> getAllUserInfo(String keyWord);

    /**
     * 
     * Description: 修改启用，禁用状态<br/>
     *
     * @author 丁鹏(大胆开车，幽默讲课)
     * @param id
     * @param useStaus
     * @return
     */
    @Update("UPDATE SYSTEM_USER SET use_status=#{arg1} WHERE id=#{arg0}")
    int updateUseStatus(Long id, String useStatus);

    /**
     * 
     * Description: 重置或者修改密码<br/>
     *
     * @author 丁鹏(大胆开车，幽默讲课)
     * @param id
     * @param pwd
     * @return
     */
    @Update("UPDATE SYSTEM_USER SET pwd=#{arg1} WHERE id=#{arg0}")
    int updatePwd(Long id, String pwd);

}

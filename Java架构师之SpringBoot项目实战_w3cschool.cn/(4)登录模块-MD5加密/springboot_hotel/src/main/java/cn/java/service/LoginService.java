/**
 * Project Name:springboot_hotel
 * File Name:LoginService.java
 * Package Name:cn.java.service.impl
 * Date:下午4:58:31
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.service;

/**
 * Description:	   <br/>
 * Date:     下午4:58:31 <br/>
 * @author   丁鹏
 * @version  
 * @see 	 
 */
public interface LoginService {

    /**
     * 
     * Description: 登录业务方法<br/>
     *
     * @author 丁鹏
     * @param username
     * @param pwd 明文
     * @return
     * @throws Exception
     */
    boolean isLoginSuccess(String username, String pwd) throws Exception;

}

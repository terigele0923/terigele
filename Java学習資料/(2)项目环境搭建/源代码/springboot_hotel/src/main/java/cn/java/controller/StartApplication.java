/**
 * Project Name:springboot_hotel
 * File Name:StartApplication.java
 * Package Name:cn.java.controller
 * Date:下午2:13:01
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Description: QQ：1841670794，870599752(加好友时记得备注哦)<br>
 * Date: 下午2:13:01 <br/>
 * 
 * @author 丁鹏(大胆开车，幽默讲课)
 * @version
 * @see
 */
@SpringBootApplication(scanBasePackages = { "cn.java.controller", "cn.java.service.impl" })
@EnableAutoConfiguration
@MapperScan(basePackages = { "cn.java.mapper" })
public class StartApplication {

    public static void main(String[] args) {
        SpringApplication.run(StartApplication.class, args);
    }

}

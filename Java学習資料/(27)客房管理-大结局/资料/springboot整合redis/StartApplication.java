/**
 * Project Name:dt65_springboot
 * File Name:StartApplication.java
 * Package Name:cn.java.controller.application
 * Date:下午3:45:10
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.controller.application;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * Description: <br/>
 * Date: 下午3:45:10 <br/>
 * 
 * @author 丁鹏
 * @version
 * @see
 */
@SpringBootApplication(scanBasePackages = { "cn.java.controller.*", "cn.java.service.impl", "cn.java.tasks" })
@EnableAutoConfiguration // 开启ssm的自动配置
@MapperScan(basePackages = { "cn.java.mapper" }) // 扫描Mybatis
@EnableScheduling // 开启定时任务
@ServletComponentScan(basePackages = { "cn.java.filters" }) // 开启过滤器
@EnableCaching // 启用redis缓存
public class StartApplication {

    public static void main(String[] args) {
        SpringApplication.run(StartApplication.class, args);
    }

}

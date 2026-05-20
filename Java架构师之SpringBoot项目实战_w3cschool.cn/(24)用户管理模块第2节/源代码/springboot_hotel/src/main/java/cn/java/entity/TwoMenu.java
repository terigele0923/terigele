/**
 * Project Name:springboot_hotel
 * File Name:TwoMenu.java
 * Package Name:cn.java.entity
 * Date:下午6:53:27
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.entity;

/**
 * Description: 二级菜单<br/>
 * Date: 下午6:53:27 <br/>
 * 
 * @author 丁鹏
 * @version
 * @see
 */
public class TwoMenu {
    private String twoName;// 二级菜单名

    private String twoUrl;// 二级菜单跳转的链接

    private Long parent;

    public String getTwoName() {
        return twoName;
    }

    public void setTwoName(String twoName) {
        this.twoName = twoName;
    }

    public String getTwoUrl() {
        return twoUrl;
    }

    public void setTwoUrl(String twoUrl) {
        this.twoUrl = twoUrl;
    }

    public Long getParent() {
        return parent;
    }

    public void setParent(Long parent) {
        this.parent = parent;
    }

}

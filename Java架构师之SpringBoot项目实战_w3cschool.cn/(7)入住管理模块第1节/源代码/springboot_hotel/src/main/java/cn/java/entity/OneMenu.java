/**
 * Project Name:springboot_hotel
 * File Name:OneMenu.java
 * Package Name:cn.java.entity
 * Date:下午6:52:25
 * Copyright (c) 2018, bluemobi All Rights Reserved.
 *
*/

package cn.java.entity;

import java.util.List;

/**
 * Description: 一级菜单<br/>
 * Date: 下午6:52:25 <br/>
 * 
 * @author 丁鹏
 * @version
 * @see
 */
public class OneMenu {
    private Long id;// 一级菜单的主键

    private String oneName;// 一级菜单名

    private List<TwoMenu> twoMenuList;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOneName() {
        return oneName;
    }

    public void setOneName(String oneName) {
        this.oneName = oneName;
    }

    public List<TwoMenu> getTwoMenuList() {
        return twoMenuList;
    }

    public void setTwoMenuList(List<TwoMenu> twoMenuList) {
        this.twoMenuList = twoMenuList;
    }

}

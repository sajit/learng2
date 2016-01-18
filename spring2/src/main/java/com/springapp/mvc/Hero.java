package com.springapp.mvc;

/**
 * Created by sajit.kunnumkal on 1/18/2016.
 */
public class Hero {

    private Integer id;
    private String name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Hero(){ //jackson
    //
    }
    public  Hero(Integer id,String name){
        this.id = id;
        this.name = name;
    }
}

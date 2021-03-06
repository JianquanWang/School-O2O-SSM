package com.o2o.service;

import com.o2o.BaseTest;
import com.o2o.entity.Area;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.junit.Assert.assertEquals;

public class AreaServiceTest extends BaseTest {
    @Autowired
    private AreaService areaService;
    @Test
    public void getAreaListTest(){
        List<Area> areaList = areaService.getAreaList();
        assertEquals("东苑", areaList.get(0).getAreaName());
    }
}

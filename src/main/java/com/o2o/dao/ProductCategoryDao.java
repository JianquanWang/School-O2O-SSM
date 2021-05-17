package com.o2o.dao;

import com.o2o.entity.ProductCategory;

import java.util.List;

public interface ProductCategoryDao {
    /**
     * 通过shop id 查询店铺商品类别
     * @param shopId
     * @return
     */
    List<ProductCategory> queryProductCategoryList(long shopId);
}
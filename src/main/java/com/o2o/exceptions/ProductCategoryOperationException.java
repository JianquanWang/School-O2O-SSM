package com.o2o.exceptions;

public class ProductCategoryOperationException extends RuntimeException{
    private static final long serialVersionUID = -7603162650238384508L;
    public ProductCategoryOperationException(String msg){
        super(msg);
    }
}

package com.o2o.exceptions;

public class ShopOperationException extends RuntimeException{

    private static final long serialVersionUID = -7300075315556800290L;

    public ShopOperationException(String msg){
        super(msg);
    }
}

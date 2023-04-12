package com.example.WsHelloWord.WsHelloWord.Model;


import lombok.Data;

@Data
public class HelloMessage {

    private String name;
    private int qtd;

    public HelloMessage(){};

    public HelloMessage(String name){
        this.name = name;
    }

}

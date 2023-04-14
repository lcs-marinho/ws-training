package com.example.WsHelloWord.WsHelloWord.Model;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.beans.ConstructorProperties;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Greeting {

    private long id;
    private String name;
    private String attribute;
    private int attribute_value;

}

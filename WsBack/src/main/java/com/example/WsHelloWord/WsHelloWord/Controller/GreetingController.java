package com.example.WsHelloWord.WsHelloWord.Controller;

import com.example.WsHelloWord.WsHelloWord.Model.Greeting;
import com.example.WsHelloWord.WsHelloWord.Model.HelloMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GreetingController {

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greeting greeting(String helloMessage) throws Exception {
        Thread.sleep(1000);
        System.out.println(helloMessage);
        return new Greeting("Hello, "  + helloMessage + "!");
    }
}

package com.example.manage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

	@GetMapping("/main")
	public String index() {
		return "forward:/index.html";
	}
}

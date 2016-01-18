package com.springapp.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/")
public class HelloController {
	@RequestMapping(method = RequestMethod.GET)
	public String printWelcome(ModelMap model) {
		model.addAttribute("message", "Angular 2 & Spring!");
		return "hello";
	}

	static List<Hero> heros = new ArrayList<Hero>();
	static {
		heros.add(new Hero(1,"Captain America"));
		heros.add(new Hero(2,"Ironman"));
	}

	@RequestMapping(value = "/heroes", method = RequestMethod.GET,headers="Accept=application/json")
	@ResponseBody
	public List<Hero> getHeroes(){
		return heros;
	}
}
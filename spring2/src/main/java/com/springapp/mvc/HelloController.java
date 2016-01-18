package com.springapp.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

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

	@RequestMapping(value="/hero", method=RequestMethod.GET)
	public String greetingForm(Model model) {
		model.addAttribute("hero", new Hero());
		return "hero";
	}

	@RequestMapping(value="/hero", method=RequestMethod.POST)
	public String greetingSubmit(@ModelAttribute Hero hero, Model model) {
		model.addAttribute("hero", hero);

		heros.add(hero);
		return "hero";
	}

	@RequestMapping(value="/hero/{id}", method=RequestMethod.GET)
	public String editHero(@PathVariable("id") Integer id, Model model){
		Hero hero = new Hero();
		for(Hero oldHero : heros){
			if(id == oldHero.getId()){
				hero = oldHero;
			}
		}
		model.addAttribute("hero",hero);
		return "hero";
	}
}
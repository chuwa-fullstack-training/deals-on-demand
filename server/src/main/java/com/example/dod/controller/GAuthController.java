package com.example.dod.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class GAuthController {

	@PostMapping("/auth")
	public ResponseEntity<String> addCard(@RequestBody Object response){
		System.out.println(response);
		return new ResponseEntity<>("auth Successfull", HttpStatus.OK);
		
	}
}

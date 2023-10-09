package com.example.dod.controller;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dod.service.CombinedRecordsService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

@CrossOrigin("*")
@RestController
@RequestMapping("/all")
public class CombinedRecordsController {
	
	@Autowired
	CombinedRecordsService combinedRecordsService;

	@GetMapping("/save")
	public String saveRecords() throws JsonMappingException, JsonProcessingException {
		this.combinedRecordsService.combineRecords();
		return "saved";
	}
	
	@GetMapping("/search")
	public Object getSearch() {
		//get walmart
		return null;
	}
}

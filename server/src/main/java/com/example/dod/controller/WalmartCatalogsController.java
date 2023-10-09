package com.example.dod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dod.model.WalmartCatalogs;
import com.example.dod.service.WalmartCatalogsService;
import com.example.dod.util.Walmart;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

@CrossOrigin("*")
@RestController
@RequestMapping("/walmart")
public class WalmartCatalogsController {

	@Autowired
	WalmartCatalogsService walmartCatalogsService;

	@GetMapping("/save")
	public String saveAllCatalogs() throws JsonMappingException, JsonProcessingException {
		this.walmartCatalogsService.fetchDataAndSave();
		return "saved";
	}
	
	@DeleteMapping("/deleteAllCatalogs")
	public ResponseEntity<String> deleteAllCatalogs(){
		return ResponseEntity.ok(this.walmartCatalogsService.deleteCatalogs());
	}
}

package com.example.dod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dod.model.WalmartProducts;
import com.example.dod.model.WayfairProduct;
import com.example.dod.service.WayfairService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

@CrossOrigin("*")
@RestController
@RequestMapping("/wayfair")
public class WayfairController {
	@Autowired
	WayfairService wayfairService;
	
    @GetMapping("/save")
	public String saveData()  {
    	
		try {
			this.wayfairService.fetchAndSave();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return "saved";
	}
    
	@GetMapping("/search/{search}")
	public ResponseEntity<List<WayfairProduct>> search(@PathVariable String search){
		return ResponseEntity.ok(this.wayfairService.search(search));		
	}
	
//	@GetMapping("/createIndex")
//	public ResponseEntity<Integer> search(){
//		return ResponseEntity.ok(this.walmartProductsService.createIndex());		
//	}
}

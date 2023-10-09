package com.example.dod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dod.model.WalmartProducts;
import com.example.dod.service.WalmartProductsService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

@CrossOrigin("*")
@RestController
@RequestMapping("/walmart")
public class WalmartProductsController {

	@Autowired
	WalmartProductsService walmartProductsService;

	@GetMapping("/saveProducts")
	public String saveAllProducts() throws JsonMappingException, JsonProcessingException {
		this.walmartProductsService.fetchDataAndSave();
		 return "saved";
	}
	@GetMapping("/search/{search}")
	public ResponseEntity<List<WalmartProducts>> search(@PathVariable String search){
		return ResponseEntity.ok(this.walmartProductsService.search(search));		
	}
	
	@GetMapping("/createIndex")
	public ResponseEntity<Integer> search(){
		return ResponseEntity.ok(this.walmartProductsService.createIndex());		
	}
	
	@GetMapping("/catalogItemId/{cId}")
	public ResponseEntity<WalmartProducts> getByCatalogItemId(@PathVariable String cId){
		return ResponseEntity.ok(this.walmartProductsService.getByCatalogItemId(cId));		
	}
	
	@GetMapping("/getDiscounts")
	public ResponseEntity<List<WalmartProducts>> getDiscountProducts(){
		return ResponseEntity.ok(this.walmartProductsService.getDiscountProducts());
	}

	@DeleteMapping("/delteAllProducts")
	public ResponseEntity<String> deleteAllProducts(){
		return ResponseEntity.ok(this.walmartProductsService.deleteProducts());
	}
	
	@GetMapping("/getDiscountsByCatalog/{cIId}")
	public ResponseEntity<List<WalmartProducts>> getProductDiscountsByCatalog(@PathVariable String cIId){
		return ResponseEntity.ok(this.walmartProductsService.getDiscountProductsByCatalog(cIId));
	}
}

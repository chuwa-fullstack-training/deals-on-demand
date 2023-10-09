package com.example.dod.service;

import java.sql.ResultSet;
import java.util.List;

import com.example.dod.dto.Index;
import com.example.dod.model.WalmartProducts;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

public interface WalmartProductsService {
	public void fetchDataAndSave() throws JsonMappingException, JsonProcessingException;
	
	public List<WalmartProducts> search(String s);
	
	public Integer createIndex();
	
	public String deleteProducts();
	
	public List<WalmartProducts> getDiscountProducts();
	
	public WalmartProducts getByCatalogItemId(String cId);
	
	public List<WalmartProducts> getDiscountProductsByCatalog(String cIId);
	

	

}

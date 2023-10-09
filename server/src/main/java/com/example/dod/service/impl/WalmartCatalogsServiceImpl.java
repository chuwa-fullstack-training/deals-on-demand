package com.example.dod.service.impl;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import com.example.dod.model.WalmartCatalogs;
import com.example.dod.repo.WalmartCatalogsRepo;
import com.example.dod.service.WalmartCatalogsService;
import com.example.dod.util.Walmart;
import com.example.dod.util.WalmartHelper;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class WalmartCatalogsServiceImpl implements WalmartCatalogsService {
	
	@Autowired
	WalmartCatalogsRepo walmartCatalogsRepo;
    private static final Logger logger = LogManager.getLogger(WalmartCatalogsServiceImpl.class);

	
	

	@Override
	public void fetchDataAndSave() throws JsonMappingException, JsonProcessingException {		
//		RestTemplate restTemplate = new RestTemplate();
		WalmartHelper wh=new WalmartHelper();
		
		ResponseEntity<String> response =wh.walmartCatalogsApiResponse(1);
//				restTemplate.exchange(
//				"https://api.impact.com/Mediapartners/IRA4K3ySvbUh3917115tdrHHtKz6Y6tff1/Catalogs?page=1", HttpMethod.GET,
//				wh.getHttpEntity(),String.class );

		String responseBody = response.getBody();
//		String nextPageUrl =  responseBody.get@nextpageuri();
//		logger.info(responseBody);
//		System.out.println(responseBody);
//		return responseBody;
		ObjectMapper objectMapper = new ObjectMapper();
		Walmart walmart = objectMapper.readValue(responseBody, Walmart.class);
		int pages = Integer.parseInt(walmart.getNumberOfPages());
		List<WalmartCatalogs> catalogs = walmart.getCatalogs();

		
		this.walmartCatalogsRepo.saveAll(catalogs);
		if(pages>1) {
		for(int i=2;i<=pages;i++) {
			response=wh.walmartCatalogsApiResponse(pages);
			responseBody = response.getBody();
			objectMapper = new ObjectMapper();
			walmart = objectMapper.readValue(responseBody, Walmart.class);
			catalogs = walmart.getCatalogs();
			this.walmartCatalogsRepo.saveAll(catalogs);
		}
		}
//		logger.info(walmart.getNumberOfPages()+" "+catalogs.size()+" "+walmart.getTotalRecords());
//		List<WalmartCatalogs> catalogs = walmart.getCatalogs();


	}

	@Override
	public List<WalmartCatalogs> fetchAll() {
		
		return this.walmartCatalogsRepo.findAll();
		
	}

	
	@Override
	public int getTotalPages() {
		return 0;
	}

	@Override
	 @Transactional 
	public String deleteCatalogs() {
		this.walmartCatalogsRepo.deleteAll();
		return "Catalogs deleted successfully";
	}
	
	
	
	
	
	

}

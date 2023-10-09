package com.example.dod.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.dod.graphql.GraphqlWayfairProduct;
import com.example.dod.graphql.WayfairResponse;
import com.example.dod.model.WalmartProducts;
import com.example.dod.model.WayfairProduct;
import com.example.dod.repo.WayfairCustomRepo;
import com.example.dod.repo.WayfairRepo;
import com.example.dod.service.WayfairService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class WayfairServiceImpl implements WayfairService {

	@Autowired
	WayfairRepo wayfairRepo;
	@Autowired
	WayfairCustomRepo wayfairCustomRepo;
	
	private final String externalGraphQLApiUrl = "https://ads.api.cj.com/query"; 
    private static final Logger logger = LogManager.getLogger(WalmartCatalogsServiceImpl.class);


	@Override
	public void fetchAndSave() throws JsonMappingException, JsonProcessingException {
		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		headers.set("Authorization", "Bearer " + "19sz49rfjbrr41y5yg1q1n48cq");

		String graphqlQuery = """
			    query {
			        products(companyId: 6351331) {
			            resultList {
			                advertiserId,
			                catalogId,
			                id,
			                title,
			                description,
			                price {
			                    amount,
			                    currency
			                }
			                linkCode(pid: "1908") {
			                    clickUrl
			                }
			            }
			        }
			    }
			    """;



		HttpEntity<String> requestEntity = new HttpEntity<>(graphqlQuery, headers);

		String response = restTemplate
				.exchange(externalGraphQLApiUrl, HttpMethod.POST, requestEntity, String.class).getBody();

//		System.out.println(response);
		
		
//		logger.info(response);
	    ObjectMapper objectMapper = new ObjectMapper();
	    WayfairResponse wayfairResponse=objectMapper.readValue(response, WayfairResponse.class);
//	    logger.info(wayfairResponse.getData());
      List<WayfairProduct> productList =wayfairResponse.getData().getProducts().getResultList().stream()
      .map(this::mapToProduct)
      .collect(Collectors.toList());
      wayfairRepo.saveAll(productList);
	    
	    
//        try {

//            ObjectMapper objectMapper = new ObjectMapper();
//            WayfairResponse response = objectMapper.readValue(wayfairResponseGraphql, WayfairResponse.class);
//            List<WayfairProduct> productList = response.getProducts().getResultList().stream()
//                    .map(this::mapToProduct)
//                    .collect(Collectors.toList());
//            wayfairRepo.saveAll(productList);
//       
//        } catch (Exception e) {
//            // Handle exceptions
//        }
	}

	private WayfairProduct mapToProduct(GraphqlWayfairProduct productResponse) {
		WayfairProduct product = new WayfairProduct();
		product.setId(productResponse.getId());
		product.setAdvertiserId(productResponse.getAdvertiserId());
		product.setCatalogId(productResponse.getCatalogId());
		product.setTitle(productResponse.getTitle());
		product.setDescription(productResponse.getDescription());
		product.setPriceAmount(productResponse.getPrice().getAmount());
		product.setPriceCurrency(productResponse.getPrice().getCurrency());
//		product.setClickUrl(productResponse.getLinkCode().getClickUrl());
		return product;
	}

	@Override
	public List<WayfairProduct> search(String s) {
		
		List<WayfairProduct> list;
		if(s.contains(" ")) {
			list=this.wayfairRepo.indexSearch(s);
		}
		else {
			list=this.wayfairRepo.searchByTitle(s);
		}
		return list;
		
	}

	@Override
	public Integer createIndex() {
		if (this.wayfairRepo.showFullTextindex() == 0) {
//			this.walmartProductsRepo.createFullTextIndex();
			this.wayfairCustomRepo.createIFullTextndex();
		}
		return this.wayfairRepo.showFullTextindex();
	}

}

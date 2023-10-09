package com.example.dod.util;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class WalmartHelper {
	public static final String USERNAME = "IRA4K3ySvbUh3917115tdrHHtKz6Y6tff1";
	public static final String PASSWORD = "mXZ.6AWn6YpUFaEMkCAwBwe.BeRdvPaE";
	
	public HttpEntity<?> getHttpEntity() {
		String credentials = USERNAME + ":" + PASSWORD;
		String base64Credentials = Base64.getEncoder().encodeToString(credentials.getBytes(StandardCharsets.UTF_8));
		HttpHeaders headers = new HttpHeaders();
		headers.add("Authorization", "Basic " + base64Credentials);
		headers.add("Accept", "application/json");
		 return new HttpEntity<>(headers);
//		return httpEntity;
		
	}
	
	public ResponseEntity<String> walmartCatalogsApiResponse(int pageNo) {
		RestTemplate restTemplate = new RestTemplate();
		WalmartHelper wh=new WalmartHelper();
		return restTemplate.exchange(
				"https://api.impact.com/Mediapartners/IRA4K3ySvbUh3917115tdrHHtKz6Y6tff1/Catalogs?page="+pageNo, HttpMethod.GET,
				wh.getHttpEntity(),String.class );
	
	}
}

package com.example.dod.util;

import java.util.List;

import com.example.dod.model.WalmartCatalogs;
import com.example.dod.model.WalmartProducts;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)

public class Walmart {

	@JsonProperty("Catalogs")
	private List<WalmartCatalogs> catalogs;
	@JsonProperty("Items")
	private List<WalmartProducts> products;
	@JsonProperty("@numpages")
	private String numberOfPages;
	@JsonProperty("@total")
	private String totalRecords;

	public List<WalmartCatalogs> getCatalogs() {
		return catalogs;
	}

	public void setCatalogs(List<WalmartCatalogs> catalogs) {
		this.catalogs = catalogs;
	}

	public List<WalmartProducts> getProducts() {
		return products;
	}

	public void setProducts(List<WalmartProducts> products) {
		this.products = products;
	}

	public String getNumberOfPages() {
		return numberOfPages;
	}

	public void setNumberOfPages(String numberOfPages) {
		this.numberOfPages = numberOfPages;
	}

	public String getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(String totalRecords) {
		this.totalRecords = totalRecords;
	}
	
	
	
	

}

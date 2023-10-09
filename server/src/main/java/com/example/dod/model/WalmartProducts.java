package com.example.dod.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class WalmartProducts {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int wpId;
	
	@JsonProperty("Id")
    String id;
	@JsonProperty("CatalogId")
	String catalogId;
	@JsonProperty("CampaignId")
    String campaignId;
	@JsonProperty("CampaignName")
    String campaignName;
	@JsonProperty("CatalogItemId")
    String catalogItemId;
	@JsonProperty("Name")
	@Column(columnDefinition="TEXT")
    String name;
	@JsonProperty("Description")
	@Column(columnDefinition="TEXT")
    String description;
	@JsonProperty("Manufacturer")
    String manufacturer;
	@JsonProperty("Url")
	@Column(columnDefinition="TEXT")
    String url;
	@JsonProperty("ImageUrl")
    String imageUrl;
	@JsonProperty("Currency")
    String currency;
	@JsonProperty("StockAvailability")
    String stockAvailability;
	@JsonProperty("Gtin")
    String gtin;
	@JsonProperty("Category")
    String category;
	@JsonProperty("SubCategory")
    String subCategory;
	@JsonProperty("IsParent")
    String isParent;
	@JsonProperty("Text2")
    String text2;
	@JsonProperty("Uri")
    String uri;
	@JsonProperty("CurrentPrice")
	String currentPrice;
	@JsonProperty("OriginalPrice")
	String originalPrice;
	@JsonProperty("DiscountPercentage")
	String discountPercentage;
	
	
	
}

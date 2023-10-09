package com.example.dod.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class WayfairProduct {
 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long wId;
    private String id;
    private Long advertiserId;
    private Long catalogId;
    private String title;
    @Column(columnDefinition="TEXT")
    private String description;
    private Double priceAmount;
    private String priceCurrency;
    private String clickUrl;
    
    // Getters and setters
}

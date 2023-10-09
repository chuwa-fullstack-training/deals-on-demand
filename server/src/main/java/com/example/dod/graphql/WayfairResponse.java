package com.example.dod.graphql;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class WayfairResponse {
	
	private GraphqlWayfairData data;

}

package com.example.dod.graphql;

import lombok.Data;

@Data
public class GraphqlWayfairProduct {

    private String id;
    private Long advertiserId;
    private Long catalogId;
    private String title;
    private String description;
    private Price price;
    private LinkCode linkCode;
    
}


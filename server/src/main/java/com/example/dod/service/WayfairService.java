package com.example.dod.service;

import java.io.IOException;
import java.util.List;

import javax.xml.bind.JAXBException;
import javax.xml.parsers.ParserConfigurationException;

import org.xml.sax.SAXException;

import com.example.dod.model.WalmartProducts;
import com.example.dod.model.WayfairProduct;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

public interface WayfairService {

	public void fetchAndSave() throws JsonMappingException, JsonProcessingException ;
	
	public List<WayfairProduct> search(String s);
	public Integer createIndex();
}

package com.example.dod.scheduler;

import javax.mail.MessagingException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.example.dod.service.EmailService;
import com.example.dod.service.WalmartCatalogsService;
import com.example.dod.service.WalmartProductsService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
@Component
public class DodScheduler {
	
    private static final Logger logger = LogManager.getLogger(DodScheduler.class);

	@Autowired
	EmailService emailService;
	@Autowired
	WalmartCatalogsService walmartCatalogsService;
	
	@Autowired
	WalmartProductsService walmartProductsService;
	
//	  @Scheduled(fixedRate = 5000) // Executes every 5 seconds
//	    public void task1() {
//	        // Your task logic here
//	        System.out.println("Task 1 executed at: " );
//	    }

	    @Scheduled(cron = "0 48 20 * * ?") // Executes daily at 1:00 AM
	    public void task1() throws JsonMappingException, JsonProcessingException {
	        // Your task logic here
	        logger.info("Updating catalogs");
	    	this.walmartCatalogsService.deleteCatalogs();
	    	this.walmartCatalogsService.fetchDataAndSave();
	        logger.info("Catalogs updated");
	        logger.info("Updating products");
	        this.walmartProductsService.deleteProducts();
	        this.walmartProductsService.fetchDataAndSave();
	        logger.info("products updated");
	        this.walmartProductsService.createIndex();
	        logger.info("full tect index created");
	        logger.info("updation complete");
	    }
	    
	    @Scheduled(cron = "0 40 17 * * ?") // Executes daily at 1:00 AM
	    public void taskEmail() throws MessagingException {
	    	logger.info("Task Email executing ");
	    	logger.info(emailService.sendEmail("shivalalitha17@gmail.com", "Just a trail", "<p>yoo</p>"));
	        logger.info("Task Email executed  ");

	    }
}

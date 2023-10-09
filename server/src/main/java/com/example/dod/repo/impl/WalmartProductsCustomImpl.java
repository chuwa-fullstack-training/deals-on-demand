package com.example.dod.repo.impl;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.dod.repo.WalmartProductCustom;
//
@Repository
public class WalmartProductsCustomImpl implements WalmartProductCustom{

	@Autowired
    private EntityManager entityManager;
	
//	@Override
//	public void createFullTextIndex() {
//		 String sql = "CREATE FULLTEXT INDEX wProductsIndex ON   dddb.walmart_products(name);";
//	        entityManager.createNativeQuery(sql).executeUpdate();
//		
//	}
	
    @Transactional
	@Override
	public void createIFullTextndex() {
		 String sql = "CREATE FULLTEXT INDEX wProductsIndex ON   dddb.walmart_products(name);";
	        entityManager.createNativeQuery(sql).executeUpdate();
		
	}

}

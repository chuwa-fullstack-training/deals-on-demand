package com.example.dod.repo.impl;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.dod.repo.WayfairCustomRepo;

@Repository
public class WayfairCustomRepoImpl implements WayfairCustomRepo {

	
	@Autowired
    private EntityManager entityManager;
	
	@Transactional
	@Override
	public void createIFullTextndex() {
		 String sql = "CREATE FULLTEXT INDEX wayfairIndex ON   dddb.wayfair_product(title);";
	        entityManager.createNativeQuery(sql).executeUpdate();
	}

}

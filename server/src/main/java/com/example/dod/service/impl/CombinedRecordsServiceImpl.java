package com.example.dod.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dod.model.CombinedRecords;
import com.example.dod.model.WalmartProducts;
import com.example.dod.model.WayfairProduct;
import com.example.dod.repo.CombinedRecordsRepo;
import com.example.dod.repo.WalmartProductsRepo;
import com.example.dod.repo.WayfairRepo;
import com.example.dod.service.CombinedRecordsService;

@Service
public class CombinedRecordsServiceImpl implements CombinedRecordsService {
	@Autowired
	WalmartProductsRepo walmartProductRepo;
	
	@Autowired
	WayfairRepo wayfairRepo;
	
	@Autowired
	CombinedRecordsRepo combinedRecordsRepo;
	
	@Override
	public void combineRecords() {
		List<WalmartProducts> walmartProducts=walmartProductRepo.findAll();
		List<WayfairProduct>  wayfairProducts=wayfairRepo.findAll();
		
		for(WalmartProducts wp:walmartProducts) {
			CombinedRecords combinedRecord =new CombinedRecords();
			combinedRecord.setName(wp.getName());
			combinedRecord.setKid(wp.getCatalogItemId());
			combinedRecordsRepo.save(combinedRecord);
	         
		}
		
		for(WayfairProduct wf:wayfairProducts) {
			CombinedRecords combinedRecord=new CombinedRecords();
			combinedRecord.setName(wf.getTitle());
			combinedRecord.setKid(wf.getId());
			this.combinedRecordsRepo.save(combinedRecord);
		}
	}

}

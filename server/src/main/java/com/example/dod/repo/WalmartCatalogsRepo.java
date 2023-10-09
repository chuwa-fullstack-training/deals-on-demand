package com.example.dod.repo;import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dod.model.WalmartCatalogs;

@Repository
public interface WalmartCatalogsRepo extends JpaRepository<WalmartCatalogs, Long> {

	public WalmartCatalogs findById(String id);
}

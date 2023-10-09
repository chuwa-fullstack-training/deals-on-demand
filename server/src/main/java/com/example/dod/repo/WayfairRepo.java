package com.example.dod.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.dod.model.WalmartProducts;
import com.example.dod.model.WayfairProduct;

@Repository
public interface WayfairRepo extends JpaRepository<WayfairProduct, Long> {	
	
	
	@Query(value="SELECT * FROM dddb.wayfair_product where title LIKE %:search% LIMIT 25",nativeQuery=true)
	List<WayfairProduct> searchByTitle(@Param("search") String search);
	
	
	@Query(value="SELECT COUNT(*) > 0 FROM information_schema.STATISTICS WHERE table_schema = 'dddb' AND table_name = 'wayfair_product' AND index_name = 'wayfairIndex';",nativeQuery = true)
	public Integer showFullTextindex();
	
	@Query(value="SELECT * FROM dddb.wayfair_product WHERE MATCH(title) AGAINST (:search) LIMIT 25;", nativeQuery = true)
	List<WayfairProduct>indexSearch(@Param("search") String search);
}

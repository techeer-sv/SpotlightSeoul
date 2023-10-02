package com.example.backend.domain.festival.repository;

import java.util.List;

import com.example.backend.domain.festival.entity.Festival;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FestivalRepository extends JpaRepository<Festival,Long> {
	List<Festival> findByTitleContaining(String keyword);
	
}

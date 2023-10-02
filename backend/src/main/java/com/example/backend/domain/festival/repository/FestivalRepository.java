package com.example.backend.domain.festival.repository;

import com.example.backend.domain.festival.entity.Festival;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FestivalRepository extends JpaRepository<Festival,Long> {

    Page<Festival> findAll(Pageable pageable);

}

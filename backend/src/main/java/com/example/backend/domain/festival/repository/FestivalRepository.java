package com.example.backend.domain.festival.repository;


import java.util.List;

import com.example.backend.domain.festival.entity.Festival;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FestivalRepository extends JpaRepository<Festival, Long>, FestivalRepositoryCustom {

    Page<Festival> findAll(Pageable pageable);

    @Modifying
    @Query("update Festival p set p.festivalLike = p.festivalLike + 1 where p.id = :id")
    Integer updateLike(Long id);

}
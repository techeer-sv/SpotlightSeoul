package com.example.backend.domain.festival.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.backend.domain.festival.dto.response.FestivalFilterSearchResponse;
import com.example.backend.domain.festival.entity.Festival;

public interface FestivalRepositoryCustom {
	Page<Festival> filter(FestivalFilterSearchResponse response, Pageable pageable);

	Page<Festival> findByTitleKeyword(String keyword, Pageable pageable);
}

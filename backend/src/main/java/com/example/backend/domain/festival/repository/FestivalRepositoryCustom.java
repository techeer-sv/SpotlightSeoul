package com.example.backend.domain.festival.repository;

import java.util.List;

import com.example.backend.domain.festival.dto.response.FestivalFilterResponse;
import com.example.backend.domain.festival.dto.response.FestivalFilterSearchResponse;
import com.example.backend.domain.festival.entity.Festival;

public interface FestivalRepositoryCustom {
	List<Festival> filter(FestivalFilterSearchResponse response);
}

package com.example.backend.domain.festival.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class FestivalMostPageResponse {
	private Integer totalPageNum;
	List<FestivalMostResponse> postResponses;
}


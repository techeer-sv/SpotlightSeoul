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
public class FestivalSearchPageResponse {
	private Integer totalPageNum;
	private List<FestivalSearchResponse> postResponses;
}

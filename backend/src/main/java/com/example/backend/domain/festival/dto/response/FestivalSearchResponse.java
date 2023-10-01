package com.example.backend.domain.festival.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class FestivalSearchResponse {
	private Long id;
	private String title;
	private String mainImg;
	private String orgLink;

}

package com.example.backend.domain.festival.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class FestivalDetailResponse {
	private Double lat; //경도
	private Double lot; //위도
	private String place;
	private String title;
	private String codename;
	private String date;
	private String mainImg;
	private String useTrgt;
	private String orgLink;
}

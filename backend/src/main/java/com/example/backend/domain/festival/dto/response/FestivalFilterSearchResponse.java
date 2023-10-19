package com.example.backend.domain.festival.dto.response;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class FestivalFilterSearchResponse {
	private String majorCodeName;
	private String subCodeName;
	private String endDate;
	private String strtDate;
	private String place;
	private String isFree;
	private String date;
	private String mainImg;

}

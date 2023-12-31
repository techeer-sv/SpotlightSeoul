package com.example.backend.domain.festival.dto.response;

import com.querydsl.core.annotations.QueryProjection;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Builder
public class FestivalFilterResponse {
	private Long id;
	private String title;
	private String mainImg;
	private String guName;
	private String majorCodeName;
	private String subCodeName;
	private String endDate;
	private String strtDate;
	private String place;
	private String isFree;
	private String date;

	@QueryProjection
	public FestivalFilterResponse(Long id, String title, String mainImg, String guName, String majorCodeName, String subCodeName, String endDate, String strtDate,
		String place, String isFree, String date) {
		this.id = id;
		this.title = title;
		this.mainImg = mainImg;
		this.guName = guName;
		this.majorCodeName = majorCodeName;
		this.subCodeName = subCodeName;
		this.endDate = endDate;
		this.strtDate = strtDate;
		this.place = place;
		this.isFree = isFree;
		this.date = date;
	}
}


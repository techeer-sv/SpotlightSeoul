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
	private String majorCodeName;
	private String subCodeName;
	private String endDate;
	private String strtDate;
	private String place;
	private String isFree;

	@QueryProjection
	public FestivalFilterResponse(Long id, String majorCodeName, String subCodeName, String endDate, String strtDate,
		String place, String isFree) {
		this.id = id;
		this.majorCodeName = majorCodeName;
		this.subCodeName = subCodeName;
		this.endDate = endDate;
		this.strtDate = strtDate;
		this.place = place;
		this.isFree = isFree;
	}
}


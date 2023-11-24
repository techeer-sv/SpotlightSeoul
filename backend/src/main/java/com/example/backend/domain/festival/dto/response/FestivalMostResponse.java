package com.example.backend.domain.festival.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FestivalMostResponse {
	private Long id;
	private String orgName;
	private String mainImg;
	private String title;
	private String majorCodeName;
	private String subCodeName;
	private String date;
	private Integer festivalView;
	private Integer festivalLike;
}

package com.example.backend.domain.festival.dto.response;



import java.time.LocalDate;
import java.time.LocalDateTime;

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
	private LocalDate endDate;
	private LocalDate strtDate;
	private String place;
	private String isFree;

}

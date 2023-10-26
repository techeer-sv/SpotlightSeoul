package com.example.backend.domain.festival.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class FestivalResponse {

    private Long id;
    private String orgName;
    private String mainImg;
    private String strtDate;
    private String endDate;
    private String title;
    private String majorCodeName;
    private String subCodeName;
    private String date;
}

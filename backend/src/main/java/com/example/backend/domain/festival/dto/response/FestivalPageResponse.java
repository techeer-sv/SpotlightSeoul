package com.example.backend.domain.festival.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FestivalPageResponse {
    private Integer totalPageNum;
    private List<FestivalResponse> postResponses;
}

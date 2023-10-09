package com.example.backend.api.data.dto.response;

import com.example.backend.api.data.vo.FestivalData;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class FestivalAPIResponse {

    private final FestivalData culturalEventInfo;

    @JsonCreator
    public FestivalAPIResponse(@JsonProperty("culturalEventInfo") FestivalData culturalEventInfo) {
        this.culturalEventInfo = culturalEventInfo;
    }
}

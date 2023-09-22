package com.example.backend.api.data.dto.response;

import com.example.backend.api.data.vo.FeativalData;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class FestivalAPIResponse {

    private final FeativalData culturalEventInfo;

    @JsonCreator
    public FestivalAPIResponse(@JsonProperty("culturalEventInfo") FeativalData culturalEventInfo) {
        this.culturalEventInfo = culturalEventInfo;
    }
}

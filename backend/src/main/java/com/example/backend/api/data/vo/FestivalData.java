package com.example.backend.api.data.vo;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class FestivalData {
    private final int listTotalCount;
    private final List<FestivalRow> row;

    @JsonCreator
    public FestivalData(
            @JsonProperty("list_total_count") int listTotalCount,
            @JsonProperty("FestivalRow") List<FestivalRow> row){
        this.listTotalCount = listTotalCount;
        this.row = row;
    }
}

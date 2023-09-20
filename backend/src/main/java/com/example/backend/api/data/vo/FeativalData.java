package com.example.backend.api.data.vo;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class FeativalData {
    private final int listTotalCount;
    private final List<FestivalRow> row;

    @JsonCreator
    public FeativalData(
            @JsonProperty("list_total_count") int listTotalCount,
            @JsonProperty("row") List<FestivalRow> row){
        this.listTotalCount = listTotalCount;
        this.row = row;
    }
}

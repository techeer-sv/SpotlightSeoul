package com.example.backend.api.data.vo;

import com.example.backend.global.utils.TimeFormatter;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class FestivalRow {

    private String codeName;
    private String guName;
    private String orgName;
    private String useTrgt;
    private String date;
    private LocalDateTime endDate;
    private LocalDateTime strtDate;
    private String orgLink;
    private String mainImg;
    private Double lat; //경도
    private Double lot; //위도
    private String place;
    private String title;
    private String isFree;

    public FestivalRow(
            @JsonProperty("CODENAME") String codeName,
            @JsonProperty("GUNAME") String guName,
            @JsonProperty("ORG_NAME") String orgName,
            @JsonProperty("USE_TRGT") String useTrgt,
            @JsonProperty("DATE") String date,
            @JsonProperty("END_DATE") String endDate,
            @JsonProperty("STRTDATE") String strtDate,
            @JsonProperty("ORG_LINK") String orgLink,
            @JsonProperty("MAIN_IMG") String mainImg,
            @JsonProperty("LAT") Double lat,
            @JsonProperty("LOT") Double lot,
            @JsonProperty("PLACE") String place,
            @JsonProperty("TITLE") String title,
            @JsonProperty("IS_FREE") String isFree){
        this.codeName = codeName;
        this.guName = guName;
        this.orgName = orgName;
        this.useTrgt = useTrgt;
        this.date = date;
        this.endDate = TimeFormatter.timeFormat(endDate);
        this.strtDate = TimeFormatter.timeFormat(strtDate);
        this.orgLink = orgLink;
        this.mainImg = mainImg;
        this.lat = lat;
        this.lot = lot;
        this.place = place;
        this.title = title;
        this.isFree = isFree;
    }
}

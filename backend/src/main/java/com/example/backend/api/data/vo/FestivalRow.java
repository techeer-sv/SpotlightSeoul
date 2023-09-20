package com.example.backend.api.data.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class FestivalRow {

    private String codeName;
    private String orgName;
    private String themeCode;
    private String endDate;
    private String strtDate;
    private String orgLink;
    private String mainImg;
    private Double lat; //경도
    private Double lot; //위도
    private String place;
    private String title;

    public FestivalRow(
            @JsonProperty("CODENAME") String codeName,
            @JsonProperty("ORG_NAME") String orgName,
            @JsonProperty("THEMECODE") String themeCode,
            @JsonProperty("END_DATE") String endDate,
            @JsonProperty("STRTDATE") String strtDate,
            @JsonProperty("ORG_LINK") String orgLink,
            @JsonProperty("MAIN_IMG") String mainImg,
            @JsonProperty("LAT") Double lat,
            @JsonProperty("LOT") Double lot,
            @JsonProperty("PLACE") String place,
            @JsonProperty("TITLE") String title) {
        this.codeName = codeName;
        this.orgName = orgName;
        this.themeCode = themeCode;
        this.endDate = endDate;
        this.strtDate = strtDate;
        this.orgLink = orgLink;
        this.mainImg = mainImg;
        this.lat = lat;
        this.lot = lot;
        this.place = place;
        this.title = title;
    }
}

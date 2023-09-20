package com.example.backend.domain.festival.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Festival {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String codeName;
    private String orgName;
    private String themeCode;
    private String endDate;
    private String strtDate;
    @Column(columnDefinition = "LONGTEXT")
    private String orgLink;
    private String mainImg;
    private Double lat; //경도
    private Double lot; //위도
    private String place;
    private String title;

    @Builder
    public Festival(String codeName, String orgName, String themeCode, String endDate,
        String strtDate, String orgLink, String mainImg, Double lat, Double lot, String place, String title) {
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

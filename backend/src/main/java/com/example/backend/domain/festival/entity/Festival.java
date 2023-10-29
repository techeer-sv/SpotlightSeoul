package com.example.backend.domain.festival.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDateTime;
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
    private String majorCodeName;
    private String subCodeName;
    private String guName;
    private String orgName;
    private String useTrgt;  // 이용대상
    private String date; // 날짜/시간
    private LocalDateTime endDate;
    private LocalDateTime strtDate;
    @Column(columnDefinition = "LONGTEXT")
    private String orgLink;
    private String mainImg;
    private Double lat; //경도
    private Double lot; //위도
    private String place;
    private String title;
    private String isFree;

    @Builder
    public Festival(String majorCodenName, String subCodeName, String guName, String orgName, String useTrgt, String date, LocalDateTime endDate,
        LocalDateTime strtDate, String orgLink, String mainImg, Double lat, Double lot, String place, String title, String isFree) {
        this.majorCodeName = majorCodenName;
        this.subCodeName = subCodeName;
        this.guName = guName;
        this.orgName = orgName;
        this.useTrgt = useTrgt;
        this.date = date;
        this.endDate = endDate;
        this.strtDate = strtDate;
        this.orgLink = orgLink;
        this.mainImg = mainImg;
        this.lat = lat;
        this.lot = lot;
        this.place = place;
        this.title = title;
        this.isFree = isFree;
    }
}

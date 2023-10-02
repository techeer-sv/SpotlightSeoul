package com.example.backend.domain.festival.mapper;

import com.example.backend.api.data.vo.FestivalRow;
import com.example.backend.domain.festival.dto.response.FestivalDetailResponse;
import com.example.backend.domain.festival.dto.response.FestivalSearchResponse;
import com.example.backend.domain.festival.entity.Festival;
import org.springframework.stereotype.Component;

@Component
public class FestivalMapper {

    public Festival toEntity(FestivalRow row) {
        return Festival.builder()
            .codeName(row.getCodeName())
            .orgName(row.getOrgName())
            .themeCode(row.getThemeCode())
            .endDate(row.getEndDate())
            .strtDate(row.getStrtDate())
            .orgLink(row.getOrgLink())
            .mainImg(row.getMainImg())
            .lat(row.getLat())
            .lot(row.getLot())
            .place(row.getPlace())
            .title(row.getTitle())
            .build();
    }
    public FestivalDetailResponse toFindResponse(Festival festival) {
        return FestivalDetailResponse.builder()
            .lat(festival.getLat())
            .lot(festival.getLot())
            .place(festival.getPlace())
            .title(festival.getTitle())
            .endDate(festival.getEndDate())
            .strtDate(festival.getStrtDate())
            .build();
    }

    public FestivalSearchResponse toSearchResponse(Festival festival){
        return  FestivalSearchResponse.builder()
            .id(festival.getId())
            .title(festival.getTitle())
            .mainImg(festival.getMainImg())
            .build();
    }


}

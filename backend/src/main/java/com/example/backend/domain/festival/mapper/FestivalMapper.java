package com.example.backend.domain.festival.mapper;

import com.example.backend.api.data.vo.FestivalRow;
import com.example.backend.domain.festival.dto.response.FestivalDetailResponse;
import com.example.backend.domain.festival.dto.response.FestivalSearchResponse;
import com.example.backend.domain.festival.dto.response.FestivalPageResponse;
import com.example.backend.domain.festival.dto.response.FestivalResponse;
import com.example.backend.domain.festival.entity.Festival;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

@Component
public class FestivalMapper {

    public Festival toEntity(FestivalRow row) {
        return Festival.builder()
            .codeName(row.getCodeName())
            .orgName(row.getOrgName())
            .useTrgt(row.getUseTrgt())
            .date(row.getDate())
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
            .codename(festival.getCodeName())
            .date(festival.getdate())
            .mainImg(festival.getMainImg())
            .useTrgt(festival.getuseTrgt())
            .orgLink(festival.getOrgLink())
            .build();
    }

    public FestivalSearchResponse toSearchResponse(Festival festival){
        return  FestivalSearchResponse.builder()
            .id(festival.getId())
            .title(festival.getTitle())
            .mainImg(festival.getMainImg())
            .build();
    }

    public FestivalResponse toResponse(Festival festival) {
        return FestivalResponse.builder()
            .id(festival.getId())
            .orgName(festival.getOrgName())
            .mainImg(festival.getMainImg())
            .strtDate(festival.getStrtDate())
            .title(festival.getTitle())
            .build();
    }
    public FestivalPageResponse toPageResponse(Page<Festival> festivalList) {
        List<FestivalResponse> festivalResponseList =
            festivalList.stream().map(this::toResponse).toList();
        return FestivalPageResponse.builder()
            .postResponses(festivalResponseList)
            .build();
    }

}

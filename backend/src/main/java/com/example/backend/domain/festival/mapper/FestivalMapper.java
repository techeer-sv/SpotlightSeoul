package com.example.backend.domain.festival.mapper;

import com.example.backend.api.data.vo.FestivalRow;
import com.example.backend.domain.festival.dto.response.FestivalDetailResponse;
import com.example.backend.domain.festival.dto.response.FestivalFilterResponse;
import com.example.backend.domain.festival.dto.response.FestivalSearchResponse;
import com.example.backend.domain.festival.dto.response.FestivalPageResponse;
import com.example.backend.domain.festival.dto.response.FestivalResponse;
import com.example.backend.domain.festival.entity.Festival;
import com.example.backend.domain.festival.utils.EventCategoryUtil;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

@Component
public class FestivalMapper {

    public Festival toEntity(FestivalRow row) {
        return Festival.builder()
            .majorCodenName(EventCategoryUtil.getCategory(row.getCodeName()))
            .subCodeName(row.getCodeName())
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
            .isFree(row.getIsFree())
            .build();
    }

    public FestivalDetailResponse toFindResponse(Festival festival) {
        return FestivalDetailResponse.builder()
            .lat(festival.getLat())
            .lot(festival.getLot())
            .place(festival.getPlace())
            .title(festival.getTitle())
            .majorCodeName(festival.getMajorCodeName())
            .subCodeName(festival.getSubCodeName())
            .date(festival.getDate())
            .mainImg(festival.getMainImg())
            .useTrgt(festival.getUseTrgt())
            .orgLink(festival.getOrgLink())
            .isFree(festival.getIsFree())
            .build();
    }

    public FestivalSearchResponse toSearchResponse(Festival festival){
        return  FestivalSearchResponse.builder()
            .id(festival.getId())
            .title(festival.getTitle())
            .mainImg(festival.getMainImg())
            .build();
    }

    public List<FestivalSearchResponse> toSearchResponseList(List<Festival> festivals){
        return festivals.stream()
            .map(this::toSearchResponse)
            .collect(Collectors.toList());
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

    public FestivalFilterResponse toFilterResponse(Festival festival) {
        return FestivalFilterResponse.builder()
            .id(festival.getId())
            .majorCodeName(festival.getMajorCodeName())
            .subCodeName(festival.getSubCodeName())
            .endDate(festival.getEndDate())
            .strtDate(festival.getStrtDate())
            .place(festival.getPlace())
            .isFree(festival.getIsFree())
            .build();
    }

    public List<FestivalFilterResponse> toFilterResponseList(List<Festival> festivals){
        return festivals.stream()
            .map(this::toFilterResponse)
            .collect(Collectors.toList());
    }

}

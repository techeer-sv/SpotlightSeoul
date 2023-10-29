package com.example.backend.domain.festival.mapper;

import com.example.backend.api.data.vo.FestivalRow;
import com.example.backend.domain.festival.dto.response.FestivalDetailResponse;
import com.example.backend.domain.festival.dto.response.FestivalFilterPageResponse;
import com.example.backend.domain.festival.dto.response.FestivalFilterResponse;
import com.example.backend.domain.festival.dto.response.FestivalPageResponse;
import com.example.backend.domain.festival.dto.response.FestivalResponse;
import com.example.backend.domain.festival.dto.response.FestivalSearchPageResponse;
import com.example.backend.domain.festival.dto.response.FestivalSearchResponse;
import com.example.backend.domain.festival.entity.Festival;
import com.example.backend.domain.festival.utils.EventCategoryUtil;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

@Component
public class FestivalMapper {

    public Festival toEntity(FestivalRow row) {
        return Festival.builder()
            .majorCodenName(EventCategoryUtil.getCategory(row.getCodeName()))
            .subCodeName(row.getCodeName())
            .guName(row.getGuName())
            .orgName(row.getOrgName())
            .useTrgt(row.getUseTrgt())
            .date(row.getDate())
            .endDate(row.getEndDate())
            .strtDate(row.getStrtDate())
            .orgLink(row.getOrgLink())
            .mainImg(row.getMainImg())
            //FIXME: Open api에서 잘 못 들어오는 데이터에 따라 임의로 값을 변경함
            .lat(row.getLot())
            .lot(row.getLat())
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
            .majorCodeName(festival.getMajorCodeName())
            .subCodeName(festival.getSubCodeName())
            .date(festival.getDate())
            .strtDate(festival.getStrtDate().toString())
            .endDate(festival.getEndDate().toString())
            .orgName(festival.getOrgName())
            .build();
    }

    public FestivalSearchPageResponse toSearchResponseList(Page<Festival> festivals, int numPostByPagenation){
        List<FestivalSearchResponse> festivalSearchResponseList =
            festivals.stream().map(this::toSearchResponse).toList();
        return FestivalSearchPageResponse.builder()
            .totalPageNum(numPostByPagenation)
            .postResponses(festivalSearchResponseList)
            .build();
    }

    public FestivalResponse toResponse(Festival festival) {
        return FestivalResponse.builder()
            .id(festival.getId())
            .orgName(festival.getOrgName())
            .mainImg(festival.getMainImg())
            .strtDate(festival.getStrtDate().toString())
            .endDate(festival.getEndDate().toString())
            .title(festival.getTitle())
            .majorCodeName(festival.getMajorCodeName())
            .subCodeName(festival.getSubCodeName())
            .date(festival.getDate())
            .build();
    }
    public FestivalPageResponse toPageResponse(Page<Festival> festivalList, int numPostByPagenation) {
        List<FestivalResponse> festivalResponseList =
            festivalList.stream().map(this::toResponse).toList();
        return FestivalPageResponse.builder()
            .totalPageNum(numPostByPagenation)
            .postResponses(festivalResponseList)
            .build();
    }

    public FestivalFilterResponse toFilterResponse(Festival festival) {
        return FestivalFilterResponse.builder()
            .id(festival.getId())
            .title(festival.getTitle())
            .guName(festival.getGuName())
            .majorCodeName(festival.getMajorCodeName())
            .subCodeName(festival.getSubCodeName())
            .endDate(festival.getEndDate().toString())
            .strtDate(festival.getStrtDate().toString())
            .place(festival.getPlace())
            .isFree(festival.getIsFree())
            .date(festival.getDate())
            .mainImg(festival.getMainImg())
            .build();
    }

    public FestivalFilterPageResponse toFilterResponseList(Page<Festival> festivals, int numPostByPagenation ){
        List<FestivalFilterResponse> festivalFilterResponseList =
            festivals.stream().map(this::toFilterResponse).toList();
        return FestivalFilterPageResponse.builder()
            .totalPageNum(numPostByPagenation)
            .postResponses(festivalFilterResponseList)
            .build();
    }

}

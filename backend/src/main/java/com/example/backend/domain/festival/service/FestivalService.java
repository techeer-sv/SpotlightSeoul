package com.example.backend.domain.festival.service;

import java.util.List;

import com.example.backend.api.data.vo.FestivalRow;
import com.example.backend.domain.festival.dto.response.FestivalDetailResponse;
import com.example.backend.domain.festival.dto.response.FestivalFilterPageResponse;
import com.example.backend.domain.festival.dto.response.FestivalFilterResponse;
import com.example.backend.domain.festival.dto.response.FestivalFilterSearchResponse;
import com.example.backend.domain.festival.dto.response.FestivalSearchPageResponse;
import com.example.backend.domain.festival.dto.response.FestivalSearchResponse;
import com.example.backend.domain.festival.dto.response.FestivalPageResponse;
import com.example.backend.domain.festival.entity.Festival;
import com.example.backend.domain.festival.mapper.FestivalMapper;
import com.example.backend.domain.festival.repository.FestivalRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class FestivalService {
    FestivalRepository festivalRepository;
    FestivalMapper festivalMapper;

    public void saveFestival(FestivalRow row) {
        festivalRepository.save(festivalMapper.toEntity(row));
    }

    public FestivalDetailResponse findDetailFestival(Long id){
        Festival festival = festivalRepository.findById(id).orElseThrow();
        return festivalMapper.toFindResponse(festival);
    }

    public FestivalSearchPageResponse searchFestival(String keyword, Pageable page) {
        Page<Festival> festivals = festivalRepository.findByTitleKeyword(keyword, page);
        int numPostByPagenation = festivals.getTotalPages();
        return festivalMapper.toSearchResponseList(festivals, numPostByPagenation);
    }

    public FestivalPageResponse getFestivalByPagination(final int offset, final int size) {
        PageRequest request = PageRequest.of(offset, size);
        Page<Festival> postByPagenation = festivalRepository.findAll(request);
        int numPostByPagenation = postByPagenation.getTotalPages();
        return festivalMapper.toPageResponse(postByPagenation, numPostByPagenation);
    }

    public FestivalFilterPageResponse filterFestivals(FestivalFilterSearchResponse response, Pageable page){
        Page<Festival> festivals = festivalRepository.filter(response, page);
        int numPostByPagenation = festivals.getTotalPages();
        return festivalMapper.toFilterResponseList(festivals, numPostByPagenation );
    }

}

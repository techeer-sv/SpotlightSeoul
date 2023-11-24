package com.example.backend.domain.festival.service;

import com.example.backend.api.data.vo.FestivalRow;
import com.example.backend.domain.festival.dto.response.FestivalDetailResponse;
import com.example.backend.domain.festival.dto.response.FestivalFilterPageResponse;
import com.example.backend.domain.festival.dto.response.FestivalFilterSearchResponse;
import com.example.backend.domain.festival.dto.response.FestivalLikeResponse;
import com.example.backend.domain.festival.dto.response.FestivalMostPageResponse;
import com.example.backend.domain.festival.dto.response.FestivalMostResponse;
import com.example.backend.domain.festival.dto.response.FestivalPageResponse;
import com.example.backend.domain.festival.dto.response.FestivalSearchPageResponse;
import com.example.backend.domain.festival.entity.Festival;
import com.example.backend.domain.festival.mapper.FestivalMapper;
import com.example.backend.domain.festival.repository.FestivalRepository;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class FestivalService {
    FestivalRepository festivalRepository;
    FestivalMapper festivalMapper;


    public void saveFestivalAllRows(List<FestivalRow> festivalRows) {
        List<Festival> festivals = festivalMapper.toEntityList(festivalRows);
        festivalRepository.saveAll(festivals);
    }


    public void updateFestival(FestivalRow row) {
        int matchRow = festivalRepository.findByTitle(row.getTitle()).size();

        if (matchRow == 0) {
            festivalRepository.save(festivalMapper.toEntity(row));
        }
    }


    @Transactional
    public FestivalDetailResponse findDetailFestival(Long id) {
        Festival festival = festivalRepository.findById(id).orElseThrow();
        festival.updateFestivalView();
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

    public FestivalFilterPageResponse filterFestivals(FestivalFilterSearchResponse response, Pageable page) {
        Page<Festival> festivals = festivalRepository.filter(response, page);
        int numPostByPagenation = festivals.getTotalPages();
        return festivalMapper.toFilterResponseList(festivals, numPostByPagenation);
    }

    @Transactional
    public FestivalLikeResponse addFestivalLike(Long id) {
        Festival festival = festivalRepository.findById(id).orElseThrow();
        festival.updateFestivalLike();
        return festivalMapper.toLike(festival);
    }

    @Transactional
    public void endFestivalByOverDate() {
        LocalDateTime now = LocalDateTime.now();
        List<Festival> festivalsToUpdate = festivalRepository.findByEndDateBeforeAndIsEndNull(now);
        for (Festival festival : festivalsToUpdate) {
            festival.end();
        }
    }

    public FestivalMostPageResponse mostLike(Integer festivalLike, Pageable page){
        Page<Festival> festivals = festivalRepository.mostLike(festivalLike,page);
        int numPostByPagenation = festivals.getTotalPages();
        return  festivalMapper.toMostList(festivals, numPostByPagenation);
    }

    public FestivalMostPageResponse mostView(Integer festivalView, Pageable page){
        Page<Festival> festivals = festivalRepository.mostView(festivalView,page);
        int numPostByPagenation = festivals.getTotalPages();
        return  festivalMapper.toMostList(festivals, numPostByPagenation);
    }
}

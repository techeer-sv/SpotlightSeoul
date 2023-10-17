package com.example.backend.domain.festival.service;

import java.util.List;

import com.example.backend.api.data.vo.FestivalRow;
import com.example.backend.domain.festival.dto.response.FestivalDetailResponse;
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

    public List<FestivalSearchResponse> searchFestival(String keyword) {
        List<Festival> festivals = festivalRepository.findByTitleContaining(keyword);
        return festivalMapper.toSearchResponseList(festivals);
    }

    public FestivalPageResponse getFestivalByPagination(final int offset, final int size) {
        PageRequest request = PageRequest.of(offset, size);
        Page<Festival> postByPagenation = festivalRepository.findAll(request);
        int numPostByPagenation = postByPagenation.getTotalPages();
        return festivalMapper.toPageResponse(postByPagenation, numPostByPagenation);
    }

}

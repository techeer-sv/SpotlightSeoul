package com.example.backend.domain.festival.service;

import java.util.List;
import java.util.stream.Collectors;

import com.example.backend.api.data.vo.FestivalRow;
import com.example.backend.domain.festival.dto.response.FestivalDetailResponse;
import com.example.backend.domain.festival.dto.response.FestivalSearchResponse;
import com.example.backend.domain.festival.entity.Festival;
import com.example.backend.domain.festival.mapper.FestivalMapper;
import com.example.backend.domain.festival.repository.FestivalRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
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
        return festivals.stream()
            .map(festivalMapper::toSearchResponse)
            .collect(Collectors.toList());
    }


}

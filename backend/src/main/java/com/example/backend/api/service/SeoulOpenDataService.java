package com.example.backend.api.service;

import com.example.backend.api.data.dto.request.FestivalAPIRequest;
import com.example.backend.api.data.dto.response.FestivalAPIResponse;
import com.example.backend.api.data.vo.FestivalRow;
import com.example.backend.domain.festival.service.FestivalService;
import java.util.List;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class SeoulOpenDataService {

    SeoulOpenDataFestivalFetchAPI seoulOpenDataFestivalFetchAPI;
    FestivalService festivalService;

    @Transactional
    public void fetchFestivalData() {
        FestivalAPIResponse healthChechResponse =
            seoulOpenDataFestivalFetchAPI.fetchAPI(FestivalAPIRequest.healthCheckRequest());
        int totalCount = healthChechResponse.getCulturalEventInfo().getListTotalCount();

        for (int i = 1; i < totalCount; i++) {
            FestivalAPIResponse festivalAPIResponse =
                seoulOpenDataFestivalFetchAPI.fetchAPI(
                    FestivalAPIRequest.toRequest(i, 999));
            saveFestivalData(
                seoulOpenDataFestivalFetchAPI.filteringFestival(festivalAPIResponse));
        }
    }

    private void saveFestivalData(List<FestivalRow> festivalRows) {
        for (FestivalRow row : festivalRows) {
            festivalService.saveFestival(row);
        }
    }

}

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
        FestivalAPIResponse healthCheckResponse =
            seoulOpenDataFestivalFetchAPI.fetchApi(FestivalAPIRequest.healthCheckRequest());
        int totalCount = healthCheckResponse.getCulturalEventInfo().getListTotalCount();
        for (int i = 1; i < totalCount; i += 999) {
            FestivalAPIResponse festivalAPIResponse =
                seoulOpenDataFestivalFetchAPI.fetchApi(
                    FestivalAPIRequest.toRequest(i, 999));
            saveFestivalData(festivalAPIResponse.getCulturalEventInfo().getRow());
        }
    }

    private void saveFestivalData(List<FestivalRow> festivalRows) {

        festivalService.saveFestivalAllRows(festivalRows);
    }

    @Transactional
    public void updateFestivalData() {
        FestivalAPIResponse healthCheckResponse =
                seoulOpenDataFestivalFetchAPI.fetchApi(FestivalAPIRequest.healthCheckRequest());
        int totalCount = healthCheckResponse.getCulturalEventInfo().getListTotalCount();
        for (int i = 1; i < totalCount; i += 999) {
            FestivalAPIResponse festivalAPIResponse =
                    seoulOpenDataFestivalFetchAPI.fetchApi(
                            FestivalAPIRequest.toRequest(i, 999));
            updateFestivalData(festivalAPIResponse.getCulturalEventInfo().getRow());
        }
    }

    private void updateFestivalData(List<FestivalRow> festivalRows) {
        for (FestivalRow row : festivalRows) {
            festivalService.updateFestival(row);
        }
    }

    @Transactional
    public void endFestival() {
        festivalService.endFestivalByOverDate();
    }
}

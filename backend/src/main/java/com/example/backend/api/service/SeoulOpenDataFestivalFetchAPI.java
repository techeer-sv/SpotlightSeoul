package com.example.backend.api.service;

import com.example.backend.api.data.dto.request.FestivalAPIRequest;
import com.example.backend.api.data.dto.response.FestivalAPIResponse;
import com.example.backend.api.data.vo.FestivalRow;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@RequiredArgsConstructor
@Component
public class SeoulOpenDataFestivalFetchAPI  {
    //TODO: Open API key 값 env로 빼기
    private String key = "4542414e4863686f3530624b704177";

    public FestivalAPIResponse fetchAPI(FestivalAPIRequest request) {
        String urlBuilder = "http://openapi.seoul.go.kr:8088"
            + '/' + URLEncoder.encode(key, StandardCharsets.UTF_8)
            + '/' + URLEncoder.encode("json", StandardCharsets.UTF_8)
            + '/' + URLEncoder.encode("culturalEventInfo", StandardCharsets.UTF_8)
            + '/' + URLEncoder.encode(String.valueOf(((FestivalAPIRequest) request).getStart()), StandardCharsets.UTF_8)
            + '/' + URLEncoder.encode(String.valueOf(((FestivalAPIRequest) request).getEnd()), StandardCharsets.UTF_8);

        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(urlBuilder, FestivalAPIResponse.class);
    }

    public List<FestivalRow> filteringFestival(FestivalAPIResponse festivalAPIResponse) {
        return festivalAPIResponse.getCulturalEventInfo().getRow().stream()
            .collect(Collectors.toList());
    }
}

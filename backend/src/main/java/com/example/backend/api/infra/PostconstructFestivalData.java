package com.example.backend.api.infra;


import com.example.backend.api.service.SeoulOpenDataService;
import jakarta.annotation.PostConstruct;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class PostconstructFestivalData {

    SeoulOpenDataService seoulOpenDataService;

    @PostConstruct
    void runFestivalDataJob() {
        seoulOpenDataService.fetchFestivalData();
    }

}

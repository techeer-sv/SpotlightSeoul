package com.example.backend.api.infra;

import com.example.backend.api.service.SeoulOpenDataService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Configuration
@EnableScheduling
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class SchedulerConfig {
    SeoulOpenDataService seoulOpenDataService;

    @Scheduled(fixedDelay = 1000 * 60 * 60 * 24)
    void runFestivalDateEndJob() {
        seoulOpenDataService.endFestival();
    }

//    @Scheduled(fixedDelay = 1000 * 60 * 60 * 24)   /* 24 시간 후 업데이트 */
//    void runFestivalDataUpdateJob() {
//        seoulOpenDataService.updateFestivalData();
//    }
}

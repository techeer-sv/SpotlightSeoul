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

    @Scheduled(fixedDelay = 1000 * 60 * 60 * 24, initialDelay = 3000)   /* 3초후 시작, 24시간 후 업데이트 */
    void runFestivalDataJob() {
        seoulOpenDataService.fetchFestivalData();
    }

}

package com.example.backend.domain.festival.controller;

import com.example.backend.domain.festival.dto.response.FestivalPageResponse;
import com.example.backend.domain.festival.service.FestivalService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/festivals")
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class FestivalController {

    FestivalService festivalService;

    @GetMapping("/page")
    public ResponseEntity<FestivalPageResponse> getPostByPagination(
        @RequestParam(defaultValue = "0") int offset,
        @RequestParam(defaultValue = "10") int size) {
        FestivalPageResponse response = festivalService.getFestivalByPagination(offset, size);
        return ResponseEntity.ok(response);
    }
}

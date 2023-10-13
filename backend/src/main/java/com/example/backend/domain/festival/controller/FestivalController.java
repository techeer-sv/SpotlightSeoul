package com.example.backend.domain.festival.controller;


import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.backend.domain.festival.dto.response.FestivalDetailResponse;
import com.example.backend.domain.festival.dto.response.FestivalFilterResponse;
import com.example.backend.domain.festival.dto.response.FestivalFilterSearchResponse;
import com.example.backend.domain.festival.dto.response.FestivalSearchResponse;
import com.example.backend.domain.festival.repository.FestivalRepository;
import com.example.backend.domain.festival.service.FestivalService;
import com.example.backend.domain.festival.dto.response.FestivalPageResponse;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;


@RestController
@RequiredArgsConstructor
@RequestMapping("/festivals")
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class FestivalController {

    FestivalService festivalService;
	FestivalRepository festivalRepository;

    @GetMapping("/page")
    public ResponseEntity<FestivalPageResponse> getPostByPagination(
        @RequestParam(defaultValue = "0") int offset,
        @RequestParam(defaultValue = "10") int size) {
        FestivalPageResponse response = festivalService.getFestivalByPagination(offset, size);
        return ResponseEntity.ok(response);
    }
  
  	@GetMapping("/{id}")
	public ResponseEntity<FestivalDetailResponse> getFestivalDetail(@PathVariable Long id) {
		FestivalDetailResponse response = festivalService.findDetailFestival(id);
		return ResponseEntity.ok(response);
	}

	@GetMapping
	public ResponseEntity<List<FestivalSearchResponse>> searchFestivals(@RequestParam("keyword") String keyword){
		List<FestivalSearchResponse> searchResults = festivalService.searchFestival(keyword);
		return ResponseEntity.ok(searchResults);
	}

	@GetMapping("/category")
	public ResponseEntity<List<FestivalFilterResponse>> filterFestivals(FestivalFilterSearchResponse response){
		List<FestivalFilterResponse> filterResults = festivalService.filterFestivals(response);
		return ResponseEntity.ok(filterResults);
	}

}

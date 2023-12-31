package com.example.backend.domain.festival.controller;


import com.example.backend.domain.festival.dto.request.FestivalSearchRequest;
import com.example.backend.domain.festival.dto.response.FestivalDetailResponse;
import com.example.backend.domain.festival.dto.response.FestivalFilterPageResponse;
import com.example.backend.domain.festival.dto.response.FestivalFilterSearchResponse;
import com.example.backend.domain.festival.dto.response.FestivalLikeResponse;
import com.example.backend.domain.festival.dto.response.FestivalMostPageResponse;
import com.example.backend.domain.festival.dto.response.FestivalMostResponse;
import com.example.backend.domain.festival.dto.response.FestivalPageResponse;
import com.example.backend.domain.festival.dto.response.FestivalSearchPageResponse;
import com.example.backend.domain.festival.service.FestivalService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @GetMapping("/{id}")
    public ResponseEntity<FestivalDetailResponse> getFestivalDetail(@PathVariable Long id) {
        FestivalDetailResponse response = festivalService.findDetailFestival(id);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<FestivalSearchPageResponse> searchFestivals(@RequestBody FestivalSearchRequest keyword,
                                                                      @PageableDefault(size = 20)
                                                                      Pageable page) {
        FestivalSearchPageResponse searchResults = festivalService.searchFestival(keyword.getTitle(), page);
        return ResponseEntity.ok(searchResults);
    }

    @GetMapping("/category")
    public ResponseEntity<FestivalFilterPageResponse> filterFestivals(FestivalFilterSearchResponse response,
                                                                      @PageableDefault(size = 20) Pageable page) {
        FestivalFilterPageResponse filterResults = festivalService.filterFestivals(response, page);
        return ResponseEntity.ok(filterResults);
    }

    @PutMapping("/likes/{id}")
    public ResponseEntity<FestivalLikeResponse> addFestivalLike(@PathVariable Long id) {
		FestivalLikeResponse festivalLikeResponse = festivalService.addFestivalLike(id);
        return ResponseEntity.ok(festivalLikeResponse);
    }

    @GetMapping("/likes")
    public ResponseEntity<FestivalMostPageResponse> mostLikesFestivals(Integer likes, @PageableDefault(size = 20) Pageable page){
        FestivalMostPageResponse likesResults = festivalService.mostLike(likes, page);
        return  ResponseEntity.ok(likesResults);
    }

    @GetMapping("/views")
    public ResponseEntity<FestivalMostPageResponse> mostViewsFestivals(Integer views, @PageableDefault(size = 20) Pageable page){
        FestivalMostPageResponse viewsResults = festivalService.mostView(views, page);
        return  ResponseEntity.ok(viewsResults);
    }
}

package com.example.backend.domain.festival.utils;

import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Component;

@Component
public class EventCategoryUtil {
    private static final Map<String, String> categoryMap = new HashMap<>();

    static {
        categoryMap.put("콘서트", "공연");
        categoryMap.put("클래식", "공연");
        categoryMap.put("뮤지컬/오페라", "공연");
        categoryMap.put("연극", "공연");
        categoryMap.put("무용", "공연");
        categoryMap.put("국악", "공연");
        categoryMap.put("독주/독창회", "공연");
        categoryMap.put("전시/미술", "전시");
        categoryMap.put("축제-기타", "축제");
        categoryMap.put("축제-자연/경관", "축제");
        categoryMap.put("축제-전통/역사", "축제");
        categoryMap.put("축제-시민화합", "축제");
        categoryMap.put("교육/체험", "교육/체험");
        categoryMap.put("기타", "기타");
        categoryMap.put("영화", "기타");
    }

    public static String getCategory(String event) {
        return categoryMap.getOrDefault(event, "");
    }
}


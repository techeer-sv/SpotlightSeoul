package com.example.backend.domain.festival.repository;

import static com.example.backend.domain.festival.entity.QFestival.*;
import static org.springframework.util.StringUtils.*;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import com.example.backend.domain.festival.dto.response.FestivalFilterSearchResponse;
import com.example.backend.domain.festival.entity.Festival;
import com.querydsl.core.QueryResults;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;

public class FestivalRepositoryImpl implements FestivalRepositoryCustom{
	private final JPAQueryFactory queryFactory;
	public FestivalRepositoryImpl(EntityManager em) {
		this.queryFactory = new JPAQueryFactory(em);
	}

	@Override
		public Page<Festival> findByTitleKeyword(String keyword, Pageable pageable){
		   QueryResults<Festival> results = queryFactory
			    .selectFrom(festival)
				.where(
					festival.title.contains(keyword)
						.or(Expressions.stringTemplate("function('replace',{0},{1},{2})",festival.title," ","").contains(keyword)
						)
				)
						.offset(pageable.getOffset())
						.limit(pageable.getPageSize())
						.fetchResults();

		   if(results.getResults().isEmpty()){
			   throw new NoResultException("검색결과가 없습니다.");
		   }
		return new PageImpl<>(results.getResults(), pageable, results.getTotal());
		}


	@Override
	public Page<Festival> filter(FestivalFilterSearchResponse response, Pageable pageable){
		QueryResults<Festival> results = queryFactory
			.selectFrom(festival)
			.where(majorCodeNameEq(response.getMajorCodeName()),
				guNameEq(response.getGuName()),
				subCodeNameEq(response.getSubCodeName()),
				endDateEq(response.getEndDate()),
				strtDateEq(response.getStrtDate()),
				placeEq(response.getPlace()),
				isFreeEq(response.getIsFree()),
				titleContains(response.getTitle()))
			.offset(pageable.getOffset())
			.limit(pageable.getPageSize())
			.fetchResults();

		return new PageImpl<>(results.getResults(), pageable, results.getTotal());
	}

	private BooleanExpression guNameEq(String guName) {
		return hasText(guName) ? festival.guName.eq(guName) : null;
	}
	private BooleanExpression titleContains(String title) {
		return hasText(title) ? festival.title.contains(title) : null;
	}

	private BooleanExpression majorCodeNameEq(String majorCodeName) {
		return hasText(majorCodeName) ? festival.majorCodeName.eq(majorCodeName) : null;
	}

	private BooleanExpression subCodeNameEq(String subCodeName) {
		return hasText(subCodeName) ? festival.subCodeName.eq(subCodeName) : null;
	}

	private BooleanExpression endDateEq(LocalDate endDate) {
		return endDate != null ? festival.endDate.loe(endDate.atTime(LocalTime.MAX)) : null;
	}

	private BooleanExpression strtDateEq(LocalDate strtDate) {
		return strtDate != null ? festival.strtDate.goe(strtDate.atStartOfDay()) : null;
	}

	private BooleanExpression placeEq(String place) {
		return hasText(place) ? festival.place.eq(place) : null;
	}

	private BooleanExpression isFreeEq(String isFree) {
		return hasText(isFree) ? festival.isFree.eq(isFree) : null;
	}

	@Override
	public Page<Festival> mostView(Integer festivalView, Pageable pageable){
		BooleanExpression predicate = festivalView != null ? festival.festivalLike.gt(festivalView) : null;
		QueryResults<Festival> results = queryFactory
			.selectFrom(festival)
			.where(predicate)
			.orderBy(festival.festivalView.desc())
			.offset(pageable.getOffset())
			.limit(pageable.getPageSize())
			.fetchResults();

		return new PageImpl<>(results.getResults(), pageable, results.getTotal());
	}

	@Override
	public Page<Festival> mostLike(Integer festivalLike, Pageable pageable){
		BooleanExpression predicate = festivalLike != null ? festival.festivalLike.gt(festivalLike) : null;
		QueryResults<Festival> results = queryFactory
			.selectFrom(festival)
			.where(predicate)
			.orderBy(festival.festivalLike.desc())
			.offset(pageable.getOffset())
			.limit(pageable.getPageSize())
			.fetchResults();

		return new PageImpl<>(results.getResults(), pageable, results.getTotal());
	}

}

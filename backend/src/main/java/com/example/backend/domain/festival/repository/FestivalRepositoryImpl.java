package com.example.backend.domain.festival.repository;

import static com.example.backend.domain.festival.entity.QFestival.*;
import static org.springframework.util.StringUtils.*;

import java.util.List;

import com.example.backend.domain.festival.dto.response.FestivalFilterSearchResponse;
import com.example.backend.domain.festival.entity.Festival;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import jakarta.persistence.EntityManager;

public class FestivalRepositoryImpl implements FestivalRepositoryCustom{
	private final JPAQueryFactory queryFactory;
	public FestivalRepositoryImpl(EntityManager em) {
		this.queryFactory = new JPAQueryFactory(em);
	}

	@Override
		public List<Festival> findByTitleKeyword(String keyword){
			return queryFactory.selectFrom(festival)
				.where(
					festival.title.contains(keyword)
						.or(Expressions.stringTemplate("function('replace',{0},{1},{2})",festival.title," ","").contains(keyword)
						)
				)
				.fetch();
		}

	@Override
	public List<Festival> filter(FestivalFilterSearchResponse response){
		return queryFactory
			.selectFrom(festival)
			.where(majorCodeNameEq(response.getMajorCodeName()),
				subCodeNameEq(response.getSubCodeName()),
				endDateEq(response.getEndDate()),
				strtDateEq(response.getStrtDate()),
				placeEq(response.getPlace()),
				isFreeEq(response.getIsFree()))
			.fetch();
	}

	private BooleanExpression majorCodeNameEq(String majorCodeName) {
		return hasText(majorCodeName) ? festival.majorCodeName.eq(majorCodeName) : null;
	}

	private BooleanExpression subCodeNameEq(String subCodeName) {
		return hasText(subCodeName) ? festival.subCodeName.eq(subCodeName) : null;
	}

	private BooleanExpression endDateEq(String endDate) {
		return hasText(endDate) ? festival.endDate.eq(endDate) : null;
	}

	private BooleanExpression strtDateEq(String strtDate) {
		return hasText(strtDate) ? festival.strtDate.eq(strtDate) : null;
	}

	private BooleanExpression placeEq(String place) {
		return hasText(place) ? festival.place.eq(place) : null;
	}

	private BooleanExpression isFreeEq(String isFree) {
		return hasText(isFree) ? festival.isFree.eq(isFree) : null;
	}

}

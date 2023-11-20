package com.example.backend.domain.user.jwt;

import lombok.Builder;
import lombok.Getter;

@Getter
public class JwtAccessTokenResponse {
	private String accessToken;

	@Builder
	public JwtAccessTokenResponse(String accessToken){
		this.accessToken = accessToken;
	}
}

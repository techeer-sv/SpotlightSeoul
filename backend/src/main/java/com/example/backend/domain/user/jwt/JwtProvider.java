package com.example.backend.domain.user.jwt;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.example.backend.domain.user.dto.request.UserLoginRequest;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.persistence.NoResultException;
import lombok.Getter;

@Getter
@Component
public class JwtProvider {
	public static final byte[] secret = "SeoulSpotlightSeoulApiAccessTokenRefreshToken".getBytes();
	private final Key key = Keys.hmacShaKeyFor(secret);

	public JwtResponse createJwt(Map<String, Object> claims) {
		String accessToken = createToken(claims, getExpireDateAccessToken());
		String refreshToken = createToken(new HashMap<>(), getExpireDateRefreshToken());
		return JwtResponse.builder()
			.accessToken(accessToken)
			.refreshToken(refreshToken)
			.build();
	}

	private Claims extractClaims(String token) {
		return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
	}

	public String createToken(Map<String, Object> claims, Date expireDate) { //토큰 생성
		return Jwts.builder()
			.setClaims(claims)
			.setExpiration(expireDate)
			.signWith(key)
			.compact();
	}


	public boolean validateToken(String Token){
		try {
			Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(Token);
			return true;
		} catch (Exception e){
			return false;
		}
	}

	public String refreshTokenTOAccess(String refreshToken){
		boolean isValid = validateToken(refreshToken);
		if(!isValid){
			throw new NoResultException("토큰이 유효하지 않습니다.");
		}
		Claims claims = extractClaims(refreshToken);

		return createToken(claims, getExpireDateAccessToken());
	}

	public UserTokenInfo parsingToken(String token){
		Claims body = Jwts.parserBuilder()
			.setSigningKey(key).build()
			.parseClaimsJws(parseBearer(token))
			.getBody();
		Number idNum = body.get("id", Number.class);
		Long id = idNum.longValue();
		String email = body.get("email", String.class);
		return new UserTokenInfo(id, email);
	}



	public Date getExpireDateAccessToken() {
		long expireTimeMils = 1000L * 60 * 30;
		return new Date(System.currentTimeMillis() + expireTimeMils);
	}

	public Date getExpireDateRefreshToken() {
		long expireTimeMils = 1000L * 60 * 60 * 24 * 30;
		return new Date(System.currentTimeMillis() + expireTimeMils);
	}

	private String parseBearer(String token) {
		return token.replace("Bearer", "").trim();
	}
}

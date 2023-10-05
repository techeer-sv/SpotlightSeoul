# 가져올 이미지를 정의
FROM node:18-alpine

# 경로 설정하기
WORKDIR /frontend

# package.json과 yarn.lock 워킹 디렉토리에 복사
COPY package.json yarn.lock ./

# 명령어 실행 (의존성 설치)
RUN yarn

# 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사
COPY . .

# 5173번 포트 노출
EXPOSE 5173

# yarn dev 스크립트 실행
CMD ["yarn", "dev"]
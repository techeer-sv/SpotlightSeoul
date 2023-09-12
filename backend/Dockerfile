FROM amazoncorretto:17 AS builder

COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src

RUN chmod +x ./gradlew
RUN ./gradlew bootJAR

FROM amazoncorretto:17
COPY --from=builder build/libs/*.jar app.jar
#builder이미지에서 build/libs/*.jar 파일을 app.jar로 복사

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app.jar"]

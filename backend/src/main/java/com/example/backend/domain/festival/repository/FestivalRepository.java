package com.example.backend.domain.festival.repository;


import com.example.backend.domain.festival.entity.Festival;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FestivalRepository extends JpaRepository<Festival, Long>, FestivalRepositoryCustom {

    Page<Festival> findAll(Pageable pageable);

    Festival save(Festival festival);

    List<Festival> findByTitle(String title);

    <S extends Festival> List<S> saveAll(Iterable<S> entities);

    Optional<Festival> findById(Long id);

    List<Festival> findByEndDateBeforeAndIsEndNull(LocalDateTime now);
}

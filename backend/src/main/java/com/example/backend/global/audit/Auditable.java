package com.example.backend.global.audit;

import java.time.LocalDateTime;

public interface Auditable {
    BaseTime getBaseTime();

    void setBaseTime(final BaseTime baseTime);

    default void delete() {
        getBaseTime().setDeletedAt(LocalDateTime.now());
    }
}

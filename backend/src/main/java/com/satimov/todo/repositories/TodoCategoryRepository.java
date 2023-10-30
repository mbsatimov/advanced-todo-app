package com.satimov.todo.repositories;

import com.satimov.todo.models.TodoCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoCategoryRepository extends JpaRepository<TodoCategory, Long> {
}

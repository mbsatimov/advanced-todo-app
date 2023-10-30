package com.satimov.todo.services;

import com.satimov.todo.models.TodoCategory;
import com.satimov.todo.repositories.TodoCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoCategoryService implements ITodoCategoryService {
	private final TodoCategoryRepository categoryRepository;

	@Override
	public List<TodoCategory> getAllTodoCategories() {
		return categoryRepository.findAll();
	}
}

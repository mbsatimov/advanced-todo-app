package com.satimov.todo.services;

import com.satimov.todo.models.TodoCategory;

import java.util.List;

public interface ITodoCategoryService {
	List<TodoCategory> getAllTodoCategories();
}

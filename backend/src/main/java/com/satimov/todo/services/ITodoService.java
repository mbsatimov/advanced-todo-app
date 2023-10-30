package com.satimov.todo.services;

import com.satimov.todo.models.Todo;

import java.util.List;

public interface ITodoService {
	List<Todo> createTodo(Todo todo);

	void updateTodo(Todo todo);

	void markTodo(Long id);

	void deleteTodo(Long id);

	List<Todo> getAllTodos();
}

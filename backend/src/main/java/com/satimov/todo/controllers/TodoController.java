package com.satimov.todo.controllers;

import com.satimov.todo.models.Todo;
import com.satimov.todo.services.ITodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/todo")
@CrossOrigin
public class TodoController {
	@Autowired
	private ITodoService todoService;

	@MessageMapping("/get-todos")
	@SendTo("/topic/todos")
	public List<Todo> getTodos() {
		return todoService.getAllTodos();
	}

	@MessageMapping("/create")
	@SendTo("/topic/todos")
	public List<Todo> createTodo(Todo todo) {
		return todoService.createTodo(todo);
	}

	@MessageMapping("/update")
	public void updateTodo(Todo todo) {
		todoService.updateTodo(todo);
	}

	@MessageMapping("/mark-todo")
	public void markTodo(Long id) {
		todoService.markTodo(id);
	}

	@MessageMapping("/delete")
	public void deleteTodo(Long id) {
		todoService.deleteTodo(id);
	}
}

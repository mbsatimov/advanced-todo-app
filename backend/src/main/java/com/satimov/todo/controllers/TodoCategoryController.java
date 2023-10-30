package com.satimov.todo.controllers;

import com.satimov.todo.models.TodoCategory;
import com.satimov.todo.services.ITodoCategoryService;
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
public class TodoCategoryController {
	@Autowired
	private ITodoCategoryService categoryService;

	@MessageMapping("/get-todo-categories")
	@SendTo("/topic/todo-categories")
	public List<TodoCategory> getTodoCategories() {
		return categoryService.getAllTodoCategories();
	}
}

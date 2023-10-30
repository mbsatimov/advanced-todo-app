package com.satimov.todo.services;

import com.satimov.todo.models.Todo;
import com.satimov.todo.repositories.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class TodoService implements ITodoService {
	private final TodoRepository todoRepository;
	private final SimpMessagingTemplate messagingTemplate;

	@Override
	public List<Todo> getAllTodos() {
		return todoRepository.findAll();
	}

	@Override
	public List<Todo> createTodo(Todo todo) {
		Date date = new Date();
		SimpleDateFormat formatterDate = new SimpleDateFormat("dd MMM yyyy", Locale.ENGLISH);
		SimpleDateFormat formatterTime = new SimpleDateFormat("HH:mm", Locale.ENGLISH);
		String formattedDate = formatterDate.format(date);
		String formattedTime = formatterTime.format(date);
		todo.setCreatedDate(formattedDate);
		todo.setCreatedTime(formattedTime);
		todoRepository.save(todo);
		return todoRepository.findAll();
	}

	@Override
	public void updateTodo(Todo todo) {
		Todo updatedTodo = todoRepository.findById(todo.getId()).orElseThrow();
		if (todo.isDone() || todo.getText().isEmpty()) return;
		Date date = new Date();
		SimpleDateFormat formatterDate = new SimpleDateFormat("dd MMM yyyy", Locale.ENGLISH);
		SimpleDateFormat formatterTime = new SimpleDateFormat("HH:mm", Locale.ENGLISH);
		updatedTodo.setText(todo.getText());
		updatedTodo.setNotes(todo.getNotes());
		updatedTodo.setCategoryId(todo.getCategoryId());
		updatedTodo.setUpdatedDate(todo.getUpdatedDate());
		String formattedDate = formatterDate.format(date);
		String formattedTime = formatterTime.format(date);
		updatedTodo.setUpdatedDate(formattedDate);
		updatedTodo.setUpdatedTime(formattedTime);
		todoRepository.save(updatedTodo);
		messagingTemplate.convertAndSend("/topic/todos", todoRepository.findAll());
	}

	@Override
	public void markTodo(Long id) {
		Todo todo = todoRepository.findById(id).orElseThrow();
		todo.setDone(!todo.isDone());
		todoRepository.save(todo);
		messagingTemplate.convertAndSend("/topic/todos", todoRepository.findAll());
	}

	@Override
	public void deleteTodo(Long id) {
		Todo todo = todoRepository.findById(id).orElseThrow();
		todoRepository.delete(todo);
		messagingTemplate.convertAndSend("/topic/todos", todoRepository.findAll());
	}
}

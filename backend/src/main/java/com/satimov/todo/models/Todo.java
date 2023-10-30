package com.satimov.todo.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "todos")
@Data
public class Todo {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonProperty("id")
	private Long id;

	@JsonProperty("text")
	private String text;

	@JsonProperty("isDone")
	private boolean isDone = false;

	@JsonProperty("notes")
	private String notes = "";

	@JsonProperty("createdDate")
	private String createdDate;

	@JsonProperty("createdTime")
	private String createdTime;

	@JsonProperty("updatedDate")
	private String updatedDate = "";

	@JsonProperty("updatedTime")
	private String updatedTime = "";

	@JsonProperty("categoryId")
	private Long categoryId;
}

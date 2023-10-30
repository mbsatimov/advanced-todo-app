package com.satimov.todo.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "categories")
@Data
public class TodoCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonProperty("id")
	private Long id;

	@Column(length = 64)
	@JsonProperty("name")
	private String name = "";
}

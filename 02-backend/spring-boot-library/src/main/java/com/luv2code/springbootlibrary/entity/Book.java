package com.luv2code.springbootlibrary.entity;

import jakarta.persistence.*;
import lombok.Data;

/**
 * @author ofaruk.emeksiz
 * @project spring-boot-library
 * @createAt 8.07.2024
 */
@Entity
@Table(name = "book")
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "description")
    private String description;

    @Column(name = "copies")
    private int copies;

    @Column(name = "copies_available")
    private int copiesAvailable;

    @Column(name = "category")
    private String category;

    @Column(name = "img")
    private String img;

}

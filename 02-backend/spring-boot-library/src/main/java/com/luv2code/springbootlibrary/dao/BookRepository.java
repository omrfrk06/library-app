package com.luv2code.springbootlibrary.dao;

import com.luv2code.springbootlibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author ofaruk.emeksiz
 * @project spring-boot-library
 * @createAt 8.07.2024
 */
public interface BookRepository extends JpaRepository<Book, Long> {
}

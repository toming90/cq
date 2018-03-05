package com.ariba.cq.services;


import com.ariba.cq.models.Question;
import com.ariba.cq.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;

    @Autowired
    public QuestionService(QuestionRepository questionRepository) { this.questionRepository = questionRepository;}

    public List<Question> getAllQuestions() { return this.questionRepository.findAll(); }
}

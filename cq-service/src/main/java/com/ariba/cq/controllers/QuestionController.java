package com.ariba.cq.controllers;


import com.ariba.cq.models.Question;
import com.ariba.cq.services.QuestionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/question")
public class QuestionController {
    private static final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);
    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }



    @RequestMapping(value = "/all", method = {RequestMethod.GET})
    public @ResponseBody Iterable<Question> getAllEmployees() {
        return questionService.getAllQuestions();
    }


}

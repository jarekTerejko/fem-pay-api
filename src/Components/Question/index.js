import React from "react";
import { Container } from "../Container";
import FormSmall from "../FormSmall";
import {
  ArticleQuestion,
  ArticleQuestionWrapper,
  ArticleQuestionH2,
} from "./QuestionElements";

const Question = () => {
  return (
    <ArticleQuestion>
      <Container>
        <ArticleQuestionWrapper>
          <ArticleQuestionH2>Ready to start</ArticleQuestionH2>
          <FormSmall />
        </ArticleQuestionWrapper>
      </Container>
    </ArticleQuestion>
  );
};

export default Question;

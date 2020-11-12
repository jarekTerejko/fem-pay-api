import React from "react";
import { Container } from "../Container";
import {
  InBriefWrapper,
  InBriefCols,
  InBriefCol,
  InBriefTitle,
  InBriefNumber,
} from "./InBriefElements";
import { data } from "./InBriefData";
const InBrief = () => {
  return (
    <InBriefWrapper>
      <Container>
        <InBriefCols>
          {data.map((col, i) => {
            return (
              <InBriefCol>
                <InBriefTitle>{col.title}</InBriefTitle>
                <InBriefNumber>{col.number}</InBriefNumber>
              </InBriefCol>
            );
          })}
        </InBriefCols>
      </Container>
    </InBriefWrapper>
  );
};

export default InBrief;

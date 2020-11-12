import styled from "styled-components";
import Circle from "../../images/shared/desktop/bg-pattern-circle.svg";
import BackgroundPhoto from "../../images/about/desktop/image-team-members.jpg";

export const CenteredPhotoWrapper = styled.div`
  position: relative;
  background: url(${BackgroundPhoto});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 50rem;
  margin: 7rem 0;

  &::before {
    content: "";
    position: absolute;
    width: 780px;
    height: 780px;
    background: url(${Circle});
    top: 0;
    left: 0;
    z-index: -1;
    transform: translateY(-120px) translateX(-500px);
  }
`;

import styled from "styled-components";

export const HeaderWrapper = styled.div`
  .header {
    text-align: center;
    text-transform: capitalize;

    h5 {
      font-weight: 500;
      color: #5c5e62;
    }
  }

  @media (min-width: 576px) and (max-width: 1199.98px) {
    padding-left: 3rem;
    padding-right: 3rem;
    max-width: 768px;
    margin: auto;
  }
`;

export const CapsuleBtnContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  background-color: #dbdbdb66;
  border-radius: 35px;
  padding: 4px 2px;
`;

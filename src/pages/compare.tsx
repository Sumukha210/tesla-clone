import React, { useState } from "react";
import Layout from "@/shared/Layout";
import {
  CarModel,
  compareModelsInfo,
  compareModelTypes,
} from "@/utils/compareModelDetails";
import styled from "styled-components";
import GridCol from "@/layout/compare_page/gridCol";
import { gridColProps } from "@/layout/compare_page/gridCol";

const ComparePage = () => {
  const [menu1Val, setMenu1Val] = useState<compareModelTypes | undefined>(() =>
    compareModelsInfo.find(item => item.category === CarModel.MODELX)
  );
  const [menu2Val, setMenu2Val] = useState<compareModelTypes | undefined>(() =>
    compareModelsInfo.find(item => item.category === CarModel.MODELY)
  );
  const [menu3Val, setMenu3Val] = useState<compareModelTypes | undefined>(() =>
    compareModelsInfo.find(item => item.category === CarModel.MODELS)
  );

  const handleMenuOptions = (menuNum: number): gridColProps => {
    return {
      handleUpdate(val: compareModelTypes) {
        menuNum === 1
          ? setMenu1Val(val)
          : menuNum === 2
          ? setMenu2Val(val)
          : setMenu3Val(val);
      },
      menuValues:
        menuNum === 1 ? menu1Val : menuNum === 2 ? menu2Val : menu3Val,
      showSpecLabel: menuNum === 1,
    };
  };

  return (
    <Layout>
      <Wrapper className="margin-top">
        <div className="container">
          <Header>
            <h1 className="title-1">Compare Models</h1>
          </Header>

          <Grid>
            <GridCol {...handleMenuOptions(1)} />
            <GridCol {...handleMenuOptions(2)} />
            <GridCol {...handleMenuOptions(3)} />
          </Grid>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default ComparePage;

export const Wrapper = styled.div``;

export const Header = styled.div`
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768.98px) {
    grid-template-columns: repeat(2, 1fr);
    & > div:last-child {
      display: none;
    }
  }
`;

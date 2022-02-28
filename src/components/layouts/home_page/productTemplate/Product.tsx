import React, { useRef } from "react";
import { generalInfoType } from "@/utils/productDetails/types";
import ProductSubtitle from "./ProductSubtitle";
import Button from "@/element/button";
import { useRouter } from "next/router";
import HeroTemplate from "@/module/heroTemplate";
import styled from "styled-components";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "@/customHook/useIsomorphicLayoutEffect";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Product: React.FC<generalInfoType> = ({ name, id, productType, img }) => {
  const router = useRouter();
  const wrapperRef = useRef(null);
  // const childEle = gsap.utils.selector(wrapperRef);
  // const tl = useRef<gsap.core.Timeline>();
  // gsap.registerPlugin(ScrollTrigger);

  // useIsomorphicLayoutEffect(() => {
  //   tl.current = gsap.timeline({
  //     defaults: {
  //       ease: "power4.in",
  //       duration: 1,
  //     },
  //     scrollTrigger: {
  //       trigger: wrapperRef.current,
  //       start: "top center",
  //       pin: true,
  //       pinSpacing: false,
  //     },
  //   });

  //   tl.current.from([childEle(".heading-1"), childEle(".bottomSection")], {
  //     autoAlpha: 0,
  //     y: 70,
  //     stagger: 0.2,
  //   });
  // }, []);

  const primaryBtnName =
    productType === "car"
      ? "custom order"
      : productType === "accessories"
      ? "shop now"
      : "order now";

  const secondaryBtnName =
    productType === "car" ? "Existing Inventory" : "Learn more";

  return (
    <Wrapper ref={wrapperRef}>
      <HeroTemplate
        name={name}
        subtitle={<ProductSubtitle productType={productType} />}
        img={img}>
        <BtnContainer>
          <Button
            name={primaryBtnName}
            color="dark"
            size="large"
            onClick={() => router.push(`/${id}/design`)}
          />
          {productType != "accessories" && (
            <Button name={secondaryBtnName} color="dimColor" size="sm" />
          )}
        </BtnContainer>
      </HeroTemplate>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div`
  /* position: absolute;
  width: 100%;
  top: 0%;
  left: 0%; */
`;

const BtnContainer = styled.div`
  button {
    @media (min-width: 768px) {
      &:last-child {
        margin-left: 24px;
      }
    }

    @media (max-width: 575.98px) {
      &:last-child {
        margin-top: 1.5rem;
      }
    }
  }
`;

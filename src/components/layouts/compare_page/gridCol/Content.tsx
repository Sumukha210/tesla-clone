import React from "react";
import { compareModelTypes } from "@/utils/compareModelDetails";
import DOMPurify from "isomorphic-dompurify";
import { Content, Spec } from "./styles";

interface contentSectionProps {
  menuValues: compareModelTypes | undefined;
  showSpecLabel?: boolean;
}

const ContentSection: React.FC<contentSectionProps> = ({
  menuValues,
  showSpecLabel,
}) => {
  return (
    <>
      <Content>
        {Object.keys(menuValues!.specs).map((key, index) => {
          return (
            <Spec key={index}>
              {showSpecLabel && <h6 className="subtitle-2">{key}</h6>}
              <h2
                className="heading-2"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    menuValues!.specs[key as keyof typeof menuValues]
                  ),
                }}></h2>
            </Spec>
          );
        })}
      </Content>
    </>
  );
};

export default ContentSection;

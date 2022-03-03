import {
  CarModel,
  compareModelsInfo,
  compareModelTypes,
} from "@/utils/compareModelDetails";
import React from "react";
import styled from "styled-components";

export interface selectMenuProps {
  menuValues: compareModelTypes | undefined;
  handleUpdate: (val: compareModelTypes) => void;
}

const SelectMenu: React.FC<selectMenuProps> = ({
  menuValues,
  handleUpdate,
}) => {
  const modelGroups = Object.values(CarModel);

  return (
    <Wrapper>
      <span className="categoryName">{menuValues?.category}</span>

      <select
        id="select"
        onChange={e => handleUpdate(JSON.parse(e.target.value))}>
        {modelGroups.map((groupName, index) => {
          return (
            <optgroup label={groupName} key={index}>
              {compareModelsInfo
                .filter(item => item.category === groupName)
                .map(item => (
                  <option key={item.modelName} value={JSON.stringify(item)}>
                    {item.modelName}
                  </option>
                ))}
            </optgroup>
          );
        })}
      </select>
    </Wrapper>
  );
};

export default SelectMenu;

const Wrapper = styled.div`
  .categoryName {
    display: block;
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 8px;
  }
`;

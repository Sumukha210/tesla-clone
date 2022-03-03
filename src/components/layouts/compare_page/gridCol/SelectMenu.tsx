import {
  CarModel,
  compareModelsInfo,
  compareModelTypes,
} from "@/utils/compareModelDetails";
import React from "react";
import { SelectMenu } from "./styles";

interface selectMenuProps {
  menuValues: compareModelTypes | undefined;
  handleUpdate: (val: compareModelTypes) => void;
}

const SelectMenuSection: React.FC<selectMenuProps> = ({
  menuValues,
  handleUpdate,
}) => {
  const modelGroups = Object.values(CarModel);

  return (
    <>
      <SelectMenu>
        <span className="categoryName">{menuValues!.category}</span>
        <select
          id="select"
          onChange={e => handleUpdate(JSON.parse(e.target.value))}>
          {modelGroups.map((groupName, index) => {
            return (
              <optgroup label={groupName} key={index}>
                {compareModelsInfo
                  .filter(item => item.category === groupName)
                  .map(item => (
                    <option
                      key={item.modelName}
                      selected={menuValues?.category === item.category}
                      value={JSON.stringify(item)}>
                      {item.modelName}
                    </option>
                  ))}
              </optgroup>
            );
          })}
        </select>
      </SelectMenu>
    </>
  );
};

export default SelectMenuSection;

import BabyNamesData from "../data/babyNamesData.json";
import "./BabyNames.scss";
import { useState } from "react";

const BabyNames = () => {
  const babiesAlphabetical = BabyNamesData.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [filterBabies, setFilterBabies] = useState(babiesAlphabetical);

  const listSearch = (e) => {
    const filteredBabies = babiesAlphabetical.filter((baby) =>
      baby.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterBabies(filteredBabies);
  };
  console.log(filterBabies);
  return (
    <div className="list">
      <input
        type="search"
        className="list__search"
        onChange={listSearch}
      ></input>
      {filterBabies.map((babyNames, index) => {
        const styleGender =
          babyNames.sex === "m" ? "list__boys" : "list__girls";
        return (
          <p key={index} className={styleGender}>
            {babyNames.name}
          </p>
        );
      })}
    </div>
  );
};

export default BabyNames;

import BabyNamesData from "../data/babyNamesData.json";
import "./BabyNames.scss";

const BabyNames = () => {
  const babiesAlphabetical = BabyNamesData.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return (
    <div className="list">
      {babiesAlphabetical.map((babyNames, index) => {
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

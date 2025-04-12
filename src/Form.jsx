import { useState } from "react";
import ConverterHexToRGB from "./Converter";
export default function Form() {
  const [hexCode, setForm] = useState("#");
  const codeChange = ({ target }) => {
    setForm(target.value);
  };
  return (
    <div
      className="collorwall"
      style={{ backgroundColor: ConverterHexToRGB({ hex: hexCode }) }}
    >
      <div>
        <form className="form">
          <label htmlFor="hex"></label>
          <input
            className="hex "
            id="hex"
            name="hex"
            value={hexCode}
            onChange={codeChange}
          />
        </form>
        <div className="rgba">
          <ConverterHexToRGB hex={hexCode} />
        </div>
      </div>
    </div>
  );
}

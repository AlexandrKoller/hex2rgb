import hexToRgba from "hex-to-rgba";

export default function ConverterHexToRGB(hex) {
  if (hex.hex.length < 7 || hex.hex.length == 8) return;
  const regexp = /^#(([0-9A-Fa-f]{2}){3,4}|[0-9A-Fa-f]{3})$/;
  if (!regexp.test(hex.hex)) return <div>#ОШИБКА!</div>;
  return hexToRgba(hex.hex);
}

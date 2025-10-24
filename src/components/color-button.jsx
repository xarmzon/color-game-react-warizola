const ColorButton = ({ disabled, color, onButtonClicked }) => {
  return (
    <button
      style={{
        background: color,
      }}
      disabled={disabled}
      onClick={() => onButtonClicked(color)}
    ></button>
  );
};

export default ColorButton;

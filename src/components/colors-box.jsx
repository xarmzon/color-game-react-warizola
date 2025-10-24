import ColorButton from "./color-button";

const ColorsBox = ({ disabled, colors, gameLevel, onButtonClicked }) => {
  return (
    <section className={gameLevel >= 12 ? "grid-4" : ""}>
      {colors.map((color, i) => {
        return (
          <ColorButton
            onButtonClicked={onButtonClicked}
            color={color}
            key={color + i}
            disabled={disabled}
          />
        );
      })}
    </section>
  );
};

export default ColorsBox;

//props drilling

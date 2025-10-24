const Header = ({ gameLevel, changeGameLevel, computerColor }) => {
  const onLevelChange = (event) => {
    const value = event.target.value;
    changeGameLevel(+value);
  };
  return (
    <header>
      <h1>RGB Guessing Game</h1>
      <h2>{computerColor}</h2>
      <select onChange={onLevelChange} value={gameLevel}>
        <option value="6">Level 1</option>
        <option value="9">Level 2</option>
        <option value="12">Level 3</option>
        <option value="16">Level 4</option>
      </select>
    </header>
  );
};

export default Header;

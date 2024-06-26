import reactCoreImage from "../assets/react-core-concepts.png";

function Header() {
  const descriptions = ["Fundamanetals", "Crucial", "Core"];

  function getRandomItem(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  return (
    <header>
      <img src={reactCoreImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions[getRandomItem(2)]} React concepts you will need for almost
        any app you are going to build!
      </p>
    </header>
  );
}
export default Header;

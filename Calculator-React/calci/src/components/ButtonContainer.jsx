import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  const buttonNames = [
    "CE",
    "C",
    "%",
    "*",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map(buttonNames => <button className={styles.button}>{buttonNames}</button>)}
    </div>
  );
};
export default ButtonContainer;

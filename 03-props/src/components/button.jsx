// export function Button() {
//   return <button>Click Me!</button>;
// }

// export function Button2() {
//   return <button>Don't click me!</button>;
// }

// export function Button(props) {
//   const buttonStyle = {
//     color: props.color,
//     fontSize: props.fontSize + "px",
//   };

//   return <button style={buttonStyle}>{props.text}</button>;
// }

export function Button({
  text = "Click Me!",
  backgroundColor = "blue",
  fontSize = 12,
}) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    fontSize: fontSize + "px",
  };

  return <button style={buttonStyle}>{text}</button>;
}

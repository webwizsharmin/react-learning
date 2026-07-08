export function Card() {
  return (
    <>
      <div
        style={{
          margin: "0 auto",
          padding: "5px",
          width: "200px",
          border: "2px solid white",
          borderRadius: "20px",
        }}
      >
        <img
          src="lasagna.jpg"
          alt="card-img"
          style={{
            width: "200px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        />

        <div>
          <p>Hello kitty</p>
          <h3>Lorem ipsum dolor sit amet.</h3>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <p>text</p>

            <div>| </div>

            <p>text</p>
          </div>
        </div>
      </div>
    </>
  );
}

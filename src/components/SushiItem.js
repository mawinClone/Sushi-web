import "./SushiItem.css";

const SushiItem = (props) => {
  const { title, thumbnailURL } = props.sushi;
  return (
    <div className="card">
      <div className="cardImage">
        <img src={thumbnailURL} alt="Avatar" />
      </div>

      <div className="card-container">
        <h4>
          <p>{title}</p>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};
export default SushiItem;

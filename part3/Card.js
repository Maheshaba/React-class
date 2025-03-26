const Card = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <a href={"/viewmeal" + props.meal_id}>
        <img className="res-logo" alt="res-logo" src={props.meal_thumb} />
      </a>
      <h3>{props.meal_name}</h3>
      <h4>{props.meal_cat}</h4>
      <h4>⭐Rating: {props.ratting}</h4>
      <h4>⏱️Time: 38 minute</h4>
      <h4>Price:₹ {props.price}</h4>
      <a
        href={props.youtubeLink} // youtube video
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "blue",
          textDecoration: "underline",
          display: "block",
          marginTop: "10px",
        }}
      >
        📹 Watch on YouTube
      </a>
    </div>
  );
};

export default Card;

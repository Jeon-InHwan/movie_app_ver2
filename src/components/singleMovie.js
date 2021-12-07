import PropTypes from "prop-types";



function SingleMovie({backgroundImg, title, description, genres}) {
    return (
      <div>
          <img src={backgroundImg} alt={title} />
          <h2>
            {title}
          </h2>
          <p>{description}</p>
          <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
          </ul>
      </div>  
    );
}

SingleMovie.propTypes = {
    id: PropTypes.number.isRequired
    , backgroundImg: PropTypes.string.isRequired
    , title: PropTypes.string.isRequired
    , description: PropTypes.string.isRequired
    , genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SingleMovie;
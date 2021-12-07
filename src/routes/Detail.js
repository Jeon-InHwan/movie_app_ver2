import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import SingleMovie from "../components/singleMovie";

function Detail() {

    const [loading, setLoading] = useState(true);
    const [Details, setDetails] = useState();

    const {id} = useParams();

    const getDetail = async() => {
    
        const response = await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        
        const json = await response.json();
        
        console.log(json);

        setDetails(json.data.movie);
        setLoading(false);
        
      }

      useEffect(getDetail, []);

    return (
        <div>
      {loading ? (<h1>Loading...</h1>
      ) : (
        <div>
            <SingleMovie
              key={Details.id}
              id={Details.id}
              backgroundImg={Details.medium_cover_image} 
              title={Details.title}
              description={Details.description_intro} 
              genres={Details.genres}
            />
        </div>
      )}
    </div>
    );

}

export default Detail;

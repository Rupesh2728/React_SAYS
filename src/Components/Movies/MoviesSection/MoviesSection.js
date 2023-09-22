
import MultiItemCarousel from "../../Common/MultiItemCarousel/MultiItemCarousal";
import SectionTitle from "../SectionTitle/SectionTitle";
import MovieCard from "./MovieCard/MovieCard";
import classes from './MoviesSection.module.css';


const MoviesSection=(props)=>{
 
 const movieitemarr=[<MovieCard/>,<MovieCard/>,<MovieCard/>,
                     <MovieCard/>,<MovieCard/>,<MovieCard/>,
                     <MovieCard/>,<MovieCard/>
                    ]
     return (
    <section className={classes.moviessection} style={props.style}>

         <SectionTitle title={props.title}/>
          
      <MultiItemCarousel  itemarr={movieitemarr}/>  
    </section>
)
}

export default MoviesSection;

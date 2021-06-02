import React from 'react'

const IMG_API = "http://image.tmdb.org/t/p/w1280";

const setVote = (vote)=>{
    if(vote>=8){
        return 'green'
    }else if(vote<5){
        return 'red'
    }else return 'orange'
}

export default function Movie({overview,poster_path,title,vote_average}) {
    return (
           
            <div className='movie'>
                <img src={poster_path ?
                          (IMG_API + poster_path):
                          "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        } alt={title}></img>
                <div className='movie-info'>
                <h3>{title}</h3>
                <span className={`tag ${setVote(vote_average)}`}>{vote_average}</span>
                </div>
                <div className='movie-overview'>
                    <h4>Overview</h4>
                    <p>{overview}</p>
                </div>
            </div>
    )
}

function Card({name, children}){
    return(
            <article className="card">
                <h2>{name}</h2>
                {children}
            </article>    
        );
}

export default Card;
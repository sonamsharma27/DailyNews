import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import 'tachyons'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent =(props)=> {

const [articles, setArticles] = useState([]);   
const [loading, setLoading] = useState(true);  
const [page, setPage] = useState(1);  
const [totalResults, setTotalResults] = useState(0);   

  

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const fetchMoreData = async () => {
        props.setProgress(85);
        
        
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.api}&page=${page + 1}&pagepageSize=20`;
        setPage(page+1);
        let parsedData = await fetch(url).then(response => response.json());
        props.setProgress(95);
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        props.setProgress(100);
    }

  const updateNews = async()=> {
        props.setProgress(85);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.api}&page=${page + 1}&pagepageSize=20`;
       
        setLoading(true)
        let parsedData = await fetch(url).then(response => response.json());
        props.setProgress(90);

        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        setTotalResults(parsedData.totalResults)
       
        props.setProgress(100);
    }

    useEffect(() => {  //perfroms same function as componentDidMount or componentDidUpdate
        document.title = `DailyNews- ${capitalize(props.category)}`;
        updateNews();
    }, []);
    
    
        return (
            < div >

                <h2 className="my-3" style={{ textAlign: "center", marginTop: "90px"}}>DailyNews- Top {capitalize(props.category)} Headlines</h2>
                {loading && <Spinner />}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}

                // endMessage={
                //     <p style={{ textAlign: "center" }}>
                //         <b>Yay! You have seen it all</b>
                //     </p>
                // }
                >
                    <div className='container' >
                        <div className='row my-3' >
                            {articles.map((element) => {
                                return <div key={element.url} className="col-md-4 ">
                                    <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage}
                                        url={element.url}
                                        author={element.author} date={element.publishedAt} source={element.source} />
                                </div>
                            })}

                        </div>

                    </div>

                </InfiniteScroll>

            </div>
        )
    
}


NewsComponent.defaultProps = {
    country: "in",
    category: "general"
}

NewsComponent.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string  //only these props written here because these are defined in app.js...other
    //such as api key, setProgress are defined in app.js therefore not written here
}
//necessary to define prop types
//import PropTypes whenever you pass props to a class based component

export default NewsComponent 

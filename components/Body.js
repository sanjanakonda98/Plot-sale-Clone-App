import PlotCard from "./PlotCard";
import {useEffect, useState, useRef} from "react";
import Shimmer from './Shimmer';
import API_URL from '../utils/constants.js';
import InfiniteScroll from 'react-infinite-scroll-component';


const Body = () => {
    const [listOfPlots,setListOfPlots] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    
    useEffect(() =>{
       fetchData();

    },[]);

    const fetchData = async() =>{
        setIsLoading(true);
        setError(null);
        try{
            const data = await fetch(API_URL);
            const json = await data.json();
        
            //optional chaining

            setListOfPlots(prevItems => [...prevItems, ...json?.results]);
            setPage(prevPage => prevPage + 1);

        }catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
        
    };

    return (listOfPlots.length === 0) ? (
        <Shimmer />
    ) : (

        <div className="body">
            <InfiniteScroll
                dataLength={listOfPlots.length}
                next={fetchData}
                hasMore={true} 
                loader={<p>Loading...</p>}
                endMessage={<p>No more data to load.</p>}
            >
                <div className="plot-container">
                    {listOfPlots.map((plot) => (
                        <div>
                            <PlotCard key={plot.id} plotData ={plot} />
                        </div>
                            
                    ))}
                </div>
            </InfiniteScroll>
       </div>

    );
};

export default Body;
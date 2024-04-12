import Carousel from "./carousel";

const PlotCard = (props) => {
    //{console.log(props);}  is object
    const {plotData} = props;
    const {
      land_media,
      village_name,
      mandal_name,
      district_name,
      total_land_size,
      price_per_acre,
      } = plotData;
    
    let images = [];
    for(var i = 0; i < land_media.length; i++){
      images.push(land_media[i].image);    
    }
    
    return (
    <div className="plot-card " style={{ backgroundColor: "#f0f0f0" }}>
      
        <div className="img-carousel">
          <Carousel key={land_media.id} images= {images} />
        </div>
            
        <div className="plot-content">
          <h3 >{village_name},{mandal_name}</h3>
          <h3>{district_name} (dt)</h3>
          <h4 className="acres">{total_land_size/40} acres • ₹{price_per_acre/100} lakhs per acre </h4>
        </div>
        
    </div>
    );
    
    };
 export default PlotCard;
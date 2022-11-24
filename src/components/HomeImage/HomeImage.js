import "./HomeImage.css";
import Map from "../../assets/images/Map/Map.svg"
import Aeroplane from "../../assets/images/Aeroplane/Aeroplane.svg"
import Aviation from "../../assets/images/Aviation/Aviation.png"

function HomeImage() {
  return <section className="home-image">
		<img src={Map} className="home-image-map-image" alt="Map"/>
		<img src={Aviation} className="home-image-aviation-image" alt="Map"/>
		<img src={Aeroplane} className="home-image-aeroplane-image" alt="Aeroplane"/>
		<div className="home-image-text">
			<div className="home-image-text-bigger">
				Travel around the world
			</div>
			<div className="home-image-text-smaller">
				One of the advantages of being disorganized is that one is always having surprising discoveries
			</div>
		</div>
	</section>;
}

export default HomeImage;

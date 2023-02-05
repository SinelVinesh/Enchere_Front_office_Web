import { getAuctionMised } from '../../../../database/Api';
import '../../../../css/gallery.css';
import * as React from 'react';
const AuctionMised = () => {
  const [auctions, setAuctions] = React.useState([]);
  const host =
'http://localhost:8080'

const link =
'http://localhost:3000/auctions/'
  React.useEffect(() => {
    getAuctionMised(localStorage.getItem('id'))
        .then((data) => {
          setAuctions(data)
        })
        .catch((error) => {
        })    
    }, []);


    return(
      <>
      <h3>Liste des enchères misé</h3>
                        
    {
      auctions.map((search,index) => (
        <>

        <div class="gallery">
           <a target="_blank" href={link+search.id}>
            {search.images[0].photoPath && <img src={host + search.images[0].photoPath} alt="Forest" width="100" height="100" />}
            {!search.images[0].photoPath && <img src={require("contact.png")} alt="Forest" width="100" height="100" />}
          </a><div class="desc">{search.description}</div>
        
        </div>
        </>
      ))
    }</>
    );
}
export default AuctionMised
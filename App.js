import ReactDOM from "react-dom/client";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://logolook.net/wp-content/uploads/2023/04/Swiggy-Emblem.png"
        className="logo"
      />
      <div>
        <ul>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const food = [
  {
    id: "750644",
    imageId: "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
    action: {
      link: "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
      text: "Idli",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for idly",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
    frequencyCapping: {},
  },
  {
    id: "750237",
    imageId: "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
    action: {
      link: "https://www.swiggy.com/collections/80378?collection_id=80378&tags=layout_BAU_Contextual%2Cpoori&type=rcv2",
      text: "Poori",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for poori",
      altTextCta: "open",
    },
    entityId: "80378",
    frequencyCapping: {},
  },
  {
    id: "750132",
    imageId: "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
    action: {
      link: "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
      text: "Dosa",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for dosa",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
    frequencyCapping: {},
  },
  {
    id: "750555",
    imageId: "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Uttapam.png",
    action: {
      link: "https://www.swiggy.com/collections/80416?collection_id=80416&tags=layout_CCS_Uthappam&type=rcv2",
      text: "Uthappam",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for uttappam",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80416&tags=layout_CCS_Uthappam",
    frequencyCapping: {},
  },
  {
    id: "750233",
    imageId: "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pongal.png",
    action: {
      link: "https://www.swiggy.com/collections/80376?collection_id=80376&tags=layout_BAU_Contextual%2Cpongal&type=rcv2",
      text: "Pongal",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for pongal",
      altTextCta: "open",
    },
    entityId: "80376",
    frequencyCapping: {},
  },
  {
    id: "749874",
    imageId: "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
    action: {
      link: "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
      text: "Cakes",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for cakes",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
    frequencyCapping: {},
  },
  {
    id: "750244",
    imageId: "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Puttu.png",
    action: {
      link: "https://www.swiggy.com/collections/80386?collection_id=80386&tags=layout_BAU_Contextual%2Cputtu&type=rcv2",
      text: "Puttu",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for puttu",
      altTextCta: "open",
    },
    entityId: "80386",
    frequencyCapping: {},
  },
  {
    id: "749806",
    imageId: "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Appam.png",
    action: {
      link: "https://www.swiggy.com/collections/80353?collection_id=80353&tags=layout_BAU_Contextual%2Cappam%2Clayout_ux4&type=rcv2",
      text: "Appam",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for appam",
      altTextCta: "open",
    },
    entityId: "80353",
    frequencyCapping: {},
  },
  {
    id: "750235",
    imageId:
      "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
    action: {
      link: "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
      text: "Sandwich",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for sandwich",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
    frequencyCapping: {},
  },
];

const FoodCard = (props) => {
  const { imageId } = props.foodDetails;
  return (
    <div className="foodCard">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360" +
          imageId
        }
      />
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <h1>What's on your mind?</h1>
      <div className="foodList">
        {food.map((item) => {
          return <FoodCard foodDetails={item} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

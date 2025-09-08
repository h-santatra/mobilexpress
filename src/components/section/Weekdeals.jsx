import Dealsitem from "../parts/Dealsitem";
import RatingStar from "../parts/Rating";

export default function Weekdeals() {
  const dealsItem = [
    {
      name: "Samsung Galaxy S24 Ultra",
      image: "/deal/s24.jpg",
      deal: "Now 45% Off + Free Wireless Charge",
      rating: "(4.5 rating out of 5) ",
      star: 4.5,
      comments: "26 869 reviews",
    },

    {
      name: "Apple AirPods Pro (2nd Gen)",
      image: "/deal/airpods.jpg",
      deal: "Bundle Offer with iPhone 15",
      rating: "(4.85 rating out of 5) ",
      star: 4.85,
      comments: "35 568 reviews",
    },

    {
      name: "Xiaomi Smart Band 8",
      image: "/deal/mibands.jpg",
      deal: "Buy 1 Get 1 50% OfF",
      rating: "(4.25 rating out of 5) ",
      star: 4.25,
      comments: "15 634 reviews",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      {dealsItem.map((item) => {
        return (
          <Dealsitem
            productImage={item.image}
            productTitle={item.name}
            dealInfo={item.deal}
            itemRating={item.rating}
            ratingComment={item.comments}
            itemStar={<RatingStar rating={item.star} />}
          />
        );
      })}
    </div>
  );
}

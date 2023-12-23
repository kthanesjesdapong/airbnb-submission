import zero from '@assets/png/yelp-star/small/zero.png';
import one from '@assets/png/yelp-star/small/one.png';
import onefive from '@assets/png/yelp-star/small/onefive.png';
import two from '@assets/png/yelp-star/small/two.png';
import twofive from '@assets/png/yelp-star/small/twofive.png';
import three from '@assets/png/yelp-star/small/three.png';
import threefive from '@assets/png/yelp-star/small/threefive.png';
import four from '@assets/png/yelp-star/small/four.png';
import fourfive from '@assets/png/yelp-star/small/fourfive.png';
import five from '@assets/png/yelp-star/small/five.png';

const ratingKeys = [0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

const ratingImgSrcs = [zero, one, onefive, two, twofive, three, threefive, four, fourfive, five];

export const ratingMap = () => {
  type RatingMap = {
    [index: string]: string;
  };

  const map: RatingMap = {};
  ratingImgSrcs.forEach((ratingImgSrc, i) => map[ratingKeys[i]] = ratingImgSrc);
  return map;
};

export const ratingsMap = ratingMap();







import babinaLogo from "@images/sponsors/BABINA.jpg";
import shijaLogo from "@images/sponsors/shija.png";
import jcreLogo from "@images/sponsors/bg-removed/jcre.png";
import herLogo from "@images/sponsors/her.png";
import airportLogo from "@images/sponsors/bg-removed/airport-authority.png";
import khumanDairyLogo from "@images/sponsors/bg-removed/KHUMAN-DAIRY.png";
import marjingCommerceLogo from "@images/sponsors/bg-removed/marjing-commerce.png";
import sairemLogo from "@images/sponsors/bg-removed/sairem.png";
import sydmouthLogo from "@images/sponsors/bg-removed/sydmouthdesign.png";
import thangjingLaundryLogo from "@images/sponsors/bg-removed/thangjing-laundry.png";
import beautyRoomLogo from "@images/sponsors/bg-removed/the-beauty-room.png";
import hotelYaiphabaLogo from "@images/sponsors/hotelyaiphaba.png";
import unaccoLogo from "@images/sponsors/UNACCO.jpg";

const sponsorCategory = {
  platinum: { name: "platinum", max: 50000, min: 25000 },
  diamond: { name: "diamond", min: 15000, max: 25000 },
  gold: { name: "gold", min: 10000, max: 15000 },
  silver: { name: "silver", min: 5000, max: 8000 },
  bronze: { name: "bronze", min: 2000, max: 5000 },
};

export const sponsors = [
  {
    id: 1,
    name: "Babina",
    logo: babinaLogo,
    category: sponsorCategory.platinum,
  },
  {
    id: 2,
    name: "Shija",
    logo: shijaLogo,
    category: sponsorCategory.platinum,
  },
  {
    id: 3,
    name: "JCRE",
    logo: jcreLogo,
    category: sponsorCategory.platinum,
  },
  {
    id: 4,
    name: "Unacco",
    logo: unaccoLogo,
    category: sponsorCategory.platinum,
  },
  {
    id: 5,
    name: "Aiport Authority",
    logo: airportLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 6,
    name: "Khuman Dairy",
    logo: khumanDairyLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 7,
    name: "Marjing Commerce",
    logo: marjingCommerceLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 8,
    name: "Sairem",
    logo: sairemLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 9,
    name: "Sydmouth Designs",
    logo: sydmouthLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 10,
    name: "Thangjing Laundry",
    logo: thangjingLaundryLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 11,
    name: "The Beauty Room",
    logo: beautyRoomLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 12,
    name: "HER",
    logo: herLogo,
    category: sponsorCategory.gold,
  },
  {
    id: 13,
    name: "Hotel Yaiphaba",
    logo: hotelYaiphabaLogo,
    category: sponsorCategory.gold,
  },
];

export const SponsorLogo = { babinaLogo, shijaLogo, jcreLogo, herLogo };
import { BannerCard } from "../../UI/cards/BannerCard/BannerCard";
import { Flex } from "../Flex";

export const SpecialOffers = () => {
  return (
    <Flex>
      <BannerCard type='card'/>
      <BannerCard type='promotion'/>
    </Flex>
  )
};
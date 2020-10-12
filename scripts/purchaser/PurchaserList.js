import { usePurchaser } from "./PurchaserProvider.js";
import { Purchaser } from "./Purchaser.js";

export const PurchaserList = () => {
  const purchasers = usePurchaser();

  const purchaserSearchResultArticle = document.querySelector(".foundPurchasers");

  const searchInputPurchasers = document.querySelector("#purchaserSearch");

  searchInputPurchasers.addEventListener("keypress", (keyPressEvent) => {
    if (keyPressEvent.charCode === 13) {
      const foundPurchaser = purchasers.find((purchaser) =>
        purchaser.fullName.includes(keyPressEvent.target.value)
      );
      return (purchaserSearchResultArticle.innerHTML += `
        ${Purchaser(foundPurchaser)}
      `);
    }
  });
};

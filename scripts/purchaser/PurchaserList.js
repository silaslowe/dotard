import { usePurchaser } from "./PurchaserProvider.js";
import { Purchaser } from "./Purchaser.js";

export const PurchaserList = () => {
  const content = document.querySelector(".main-container");

  const purchasers = usePurchaser();
  console.log(purchasers);
  let activePurchasers = "";

  purchasers.forEach((purchaser) => (activePurchasers += Purchaser(purchaser)));

  return (content.innerHTML += `
  <section class="purchasers">
  <h1>Active Purchasers</h1>
  <input type="text" placeholder="Enter purchaser name" id="purchaserSearch" />
  <div class="purchasers__list">
    ${activePurchasers}
  </div>
</section>
  `);
};

// const companySearchResultArticle = document.querySelector(".main-container");

// document.querySelector("#companySearch").addEventListener("keypress", (keyPressEvent) => {
//   if (keyPressEvent.charCode === 13) {
//     const foundBusiness = businesses.find(
//       (business) =>
//         business.purchasingAgent.nameLast.includes(keyPressEvent.target.value) ||
//         business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)
//     );
//     if (!foundBusiness) {
//       alert("No results found");
//     }
//     return (companySearchResultArticle.innerHTML = `
//     <section class="purchaser">
//     <div class="business-card">
//   <h3>${foundBusiness.companyName}</h3>
//   <br>
//   <div class="business__street">${foundBusiness.addressFullStreet}</div>
//   <div class="business__location">${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}</div>
//   <div class="seperator">
//   <div class="deco"></div>
//   </div>

//   `);
//   }
// });
// };

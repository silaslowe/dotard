import { useBusinesses, useNY, useManufacturing } from "./BusinessProvider.js";
import { business } from "./Business.js";

export const BusinessList = () => {
  const content = document.querySelector(".main-container");
  // Company Array
  const businesses = useBusinesses();

  const companySearchResultArticle = document.querySelector(".main-container");

  document.querySelector("#companySearch").addEventListener("keypress", (keyPressEvent) => {
    if (keyPressEvent.charCode === 13) {
      const foundBusiness = businesses.find((business) =>
        business.companyName.includes(keyPressEvent.target.value)
      );
      if (!foundBusiness) {
        alert("No results found");
      }
      return (companySearchResultArticle.innerHTML = `
      <div class="business-card">
    <h3>${foundBusiness.companyName}</h3>
    <br>
    <div class="business__street">${foundBusiness.addressFullStreet}</div>
    <div class="business__location">${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}</div>
    <div class="seperator">
    <div class="deco"></div>
    </div> 
    `);
    }
  });
};
// const nYBusinesses = useNY();
// const manufactionBusinesses = useManufacturing();

// let activeBusinesses = "";
// let nYActiveBusinesses = "";
// let manufactionActiveBusinesses = "";

//   businesses.forEach((company) => (activeBusinesses += business(company)));
//   nYBusinesses.forEach((company) => (nYActiveBusinesses += business(company)));
//   manufactionBusinesses.forEach((company) => (manufactionActiveBusinesses += business(company)));

//   return (content.innerHTML += `
//         <section class="businesses">
//                 <h1>Active Businesses</h1>
//                 <div class="businesses__list">
//                   ${activeBusinesses}
//                 </div>
//             </section>

//             <article class="businessList--newYork">
//             <h2>New York Businesses</h2>
//             ${nYActiveBusinesses}
//             </article>

//             <article class="businessList--manufacturing">
//             <h2>Manufacturing Businesses</h2>
//             ${manufactionActiveBusinesses}
//             </article>
//         `);
// };

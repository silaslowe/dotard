import { useBusinesses, useNY, useManufacturing } from "./BusinessProvider.js";
import { business } from "./Business.js";

export const BusinessList = () => {
  const content = document.querySelector(".main-container");
  // Company Array
  const businesses = useBusinesses();
  const nYBusinesses = useNY();
  const manufactionBusinesses = useManufacturing();

  console.log(businesses);

  let activeBusinesses = "";
  let nYActiveBusinesses = "";
  let manufactionActiveBusinesses = "";

  businesses.forEach((company) => (activeBusinesses += business(company)));
  nYBusinesses.forEach((company) => (nYActiveBusinesses += business(company)));
  manufactionBusinesses.forEach((company) => (manufactionActiveBusinesses += business(company)));

  return (content.innerHTML += `
        <section class="businesses">
                <h1>Active Businesses</h1>
                <input type="text" placeholder="Enter business name" id="companySearch" />
                <div class="businesses__list">
                  ${activeBusinesses}
                </div>

                <article class="businessList--newYork">
            <h2>New York Businesses</h2>
            ${nYActiveBusinesses}
            </article>

            <article class="businessList--manufacturing">
            <h2>Manufacturing Businesses</h2>
            ${manufactionActiveBusinesses}
            </article>
            </section>

            
        `);
};

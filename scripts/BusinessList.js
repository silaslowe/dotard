import { useBusinesses, useNY } from "./BusinessProvider.js";
import { business } from "./Business.js";

export const BusinessList = () => {
  const content = document.querySelector(".main-container");
  // Company Array
  const businesses = useBusinesses();
  const nYBusinesses = useNY();

  let activeBusinesses = "";
  let nYActiveBusinesses = "";

  businesses.forEach((company) => (activeBusinesses += business(company)));
  nYBusinesses.forEach((company) => (nYActiveBusinesses += business(company)));

  return (content.innerHTML += `
      <section class="businesses">
              <h1>Active Businesses</h1>
              <div class="businesses__list">
                ${activeBusinesses}
              </div>
          </section>

          <article class="businessList--newYork">
          <h2>New York Businesses</h2>
          ${nYActiveBusinesses}
          </article>
      `);
};

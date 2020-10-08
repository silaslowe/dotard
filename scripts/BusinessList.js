import { useBusinesses } from "./BusinessProvider.js";
import { business } from "./Business.js";

export const BusinessList = () => {
  const content = document.querySelector(".main-container");
  // Company Array
  const businesses = useBusinesses();
  //   const company = business();
  let activeBusinesses = "";

  businesses.forEach((company) => (activeBusinesses += business(company)));

  return (content.innerHTML += `
      <section class="businesses">
              <h1>Active Businesses</h1>
              <div class="businesses__list">
                ${activeBusinesses}
              </div>
          </section>
      `);
};

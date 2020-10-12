export const Purchaser = (purchaserObj) => {
  return `
  <h3>${purchaserObj.fullName}</h3>
  <br>
  <div>${purchaserObj.companyName}</div>
  <div>${purchaserObj.phoneNumber}</div>
  <div class="seperator">
  <br>
  <div class="deco"></div></div> 
  `;
};

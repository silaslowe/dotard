export const business = (businessObj) => {
  return `
    <h3>${businessObj.companyName}</h3>
    <br>
    <div class="business__street">${businessObj.addressFullStreet}</div>
    <div class="business__location">${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</div>
    <div class="seperator">
    <br>
    <div class="deco"></div></div> 
    `;
};

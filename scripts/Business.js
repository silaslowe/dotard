export const business = (businessObj) => {
  return `
    <h2>${businessObj.companyName}</h2>
    <br>
    <div class="business__street">${businessObj.addressFullStreet}</div>
    <div class="business__location">${businessObj.ddressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</div>
    <div class="seperator">
    <br>
    <div class="deco"></div></div> 
    `;
};

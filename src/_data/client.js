module.exports = {
    name: "Pacific Prosperity Financial",
    email: "tim@pacificprosperityfinancial.com",
    phoneForTel: "503-703-5045",
    phoneFormatted: "(503) 703-5045",
    address: {
        lineOne: "Portland",
        lineTwo: "",
        city: "Portland",
        state: "OR",
        zip: "97201",
        country: "US",
        mapLink: "https://maps.app.goo.gl/Portland",
    },
    socials: {
        facebook: "https://www.facebook.com/PacificProsperityFinancial",
        linkedin: "https://www.linkedin.com/company/pacific-prosperity-financial",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.pacificprosperityfinancial.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};

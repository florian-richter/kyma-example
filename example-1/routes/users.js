var express = require('express');
var router = express.Router();
var { BusinessPartner } = require('@sap/cloud-sdk-vdm-business-partner-service');

const myDestination = { destinationName: 'CC8-HTTP-BASIC' };

router.get('/', async function(req, res, next) {
  const partners = await BusinessPartner.requestBuilder()
    .getAll()
    .select(BusinessPartner.FIRST_NAME, BusinessPartner.LAST_NAME)
    .filter(BusinessPartner.FIRST_NAME.equals('Florian'))
    .execute(myDestination);
  res.send(partners);
});

// router.post('/', async function(req, res, next) {
//   const businessPartner = BusinessPartner.builder()
//     .firstName('Peter')
//     .lastName('Pan')
//     .toBusinessPartnerAddress([
//       BusinessPartnerAddress.builder()
//         .country('Neverland')
//         .build()
//     ])
//     .build();

//   res.send(await BusinessPartner.requestBuilder().create(businessPartner).execute(myDestination));
// });

module.exports = router;

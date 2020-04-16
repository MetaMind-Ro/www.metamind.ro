var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyei5uR1ET9VdTje'}).base('appyzB9tLUJZjePbB');

base('Products').select({
    // Selecting the first 3 records in Main view:
    maxRecords: 3,
    view: "Main view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
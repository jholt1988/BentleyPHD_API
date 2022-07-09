const {Address} = require('../db');


const AddressData = [
    {
        "addrOne": "Dach Springs",
        "city": "Tiverton",
        "zipcode": "66111",
        "state": "ks",
        "addrTwo": 5805,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Billing"
    },
    {
        "addrOne": "Torp Inlet",
        "city": "Hana",
        "zipcode": "81141",
        "state": "ks",
        "addrTwo": 8415,
        "UserUserId": "351789f6-91b9-4886-8927-15eaad808e55",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Chaim Pine",
        "city": "Donna",
        "zipcode": "54123",
        "state": "ks",
        "addrTwo": 8952,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Billing"
    },
    {
        "addrOne": "Robel River",
        "city": "Valley Cottage",
        "zipcode": "27370",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Billing"
    },
    {
        "addrOne": "Schultz Course",
        "city": "Adrian",
        "zipcode": "56296",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "bd4dc0cb-8826-4322-ae59-98bb506761b1",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Ratke Wells",
        "city": "Del Rio",
        "zipcode": "13832",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Johns Lodge",
        "city": "Gumlog",
        "zipcode": "52338",
        "state": "ks",
        "addrTwo": 6999,
        "UserUserId": "351789f6-91b9-4886-8927-15eaad808e55",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Paula Groves",
        "city": "Peapack",
        "zipcode": "59274",
        "state": "ks",
        "addrTwo": 5562,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Billing"
    },
    {
        "addrOne": "Gleason Field",
        "city": "Maynard",
        "zipcode": "10956",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "bd4dc0cb-8826-4322-ae59-98bb506761b1",
        "addressType": "Billing"
    },
    {
        "addrOne": "Leora Walk",
        "city": "Hood River",
        "zipcode": "14756",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Billing"
    },
    {
        "addrOne": "Jerod Haven",
        "city": "Rendon",
        "zipcode": "99669",
        "state": "ks",
        "addrTwo": 1434,
        "UserUserId": "b176a083-4b27-4a65-8d53-385b4ee42cf1",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Fritsch Orchard",
        "city": "Avon",
        "zipcode": "11751",
        "state": "ks",
        "addrTwo": 8509,
        "UserUserId": "351789f6-91b9-4886-8927-15eaad808e55",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Howard Stream",
        "city": "Connersville",
        "zipcode": "50575",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "b176a083-4b27-4a65-8d53-385b4ee42cf1",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Batz Trace",
        "city": "Bay Hill",
        "zipcode": "78364",
        "state": "ks",
        "addrTwo": 5280,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Mailing"
    },
    {
        "addrOne": "McClure Port",
        "city": "Weddington",
        "zipcode": "77442",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "bd4dc0cb-8826-4322-ae59-98bb506761b1",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Schmitt Island",
        "city": "Mount Holly",
        "zipcode": "99171",
        "state": "ks",
        "addrTwo": 2368,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Billing"
    },
    {
        "addrOne": "Thea Track",
        "city": "West Falls Church",
        "zipcode": "06143",
        "state": "ks",
        "addrTwo": 4944,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Camron Drive",
        "city": "Grand Mound",
        "zipcode": "39507",
        "state": "ks",
        "addrTwo": 3930,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Russel Mountain",
        "city": "Plandome Heights",
        "zipcode": "95296",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Trey Stravenue",
        "city": "Laramie",
        "zipcode": "04779",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "351789f6-91b9-4886-8927-15eaad808e55",
        "addressType": "Vendor"
    },
    {
        "addrOne": "White Canyon",
        "city": "Denmark",
        "zipcode": "51545",
        "state": "ks",
        "addrTwo": 8151,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Kunze Rapids",
        "city": "North East",
        "zipcode": "14653",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Parisian Mountains",
        "city": "Pioche",
        "zipcode": "67566",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Wunsch Isle",
        "city": "West Modesto",
        "zipcode": "59702",
        "state": "ks",
        "addrTwo": 2432,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Amy Crest",
        "city": "National Harbor",
        "zipcode": "58778",
        "state": "ks",
        "addrTwo": 138,
        "UserUserId": "351789f6-91b9-4886-8927-15eaad808e55",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Norris Meadow",
        "city": "Preston",
        "zipcode": "44613",
        "state": "ks",
        "addrTwo": 9768,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Billing"
    },
    {
        "addrOne": "Reichert Course",
        "city": "Hays",
        "zipcode": "16640",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Johnson Locks",
        "city": "Manchester",
        "zipcode": "12993",
        "state": "ks",
        "addrTwo": 7127,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Billing"
    },
    {
        "addrOne": "Ledner Islands",
        "city": "Morningside",
        "zipcode": "92384",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Ole Manor",
        "city": "Breckinridge Center",
        "zipcode": "85382",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Billing"
    },
    {
        "addrOne": "Luettgen Roads",
        "city": "Tobaccoville",
        "zipcode": "62367",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Billing"
    },
    {
        "addrOne": "Ara Valleys",
        "city": "San Mateo",
        "zipcode": "63347",
        "state": "ks",
        "addrTwo": 437,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Billing"
    },
    {
        "addrOne": "Cordie Meadows",
        "city": "Rockport",
        "zipcode": "34679",
        "state": "ks",
        "addrTwo": 6770,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Zula Underpass",
        "city": "Lexington",
        "zipcode": "12832",
        "state": "ks",
        "addrTwo": 998,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Wiley Loaf",
        "city": "Hansville",
        "zipcode": "26137",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Billing"
    },
    {
        "addrOne": "Ezra Island",
        "city": "North Vernon",
        "zipcode": "68862",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Whitney Lakes",
        "city": "Red Lion",
        "zipcode": "35541",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Skiles Drives",
        "city": "Andover",
        "zipcode": "22565",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "351789f6-91b9-4886-8927-15eaad808e55",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Keebler Way",
        "city": "Green Level",
        "zipcode": "79039",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Malvina Throughway",
        "city": "Albemarle",
        "zipcode": "25840",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Billing"
    },
    {
        "addrOne": "Mallie Corner",
        "city": "The Woodlands",
        "zipcode": "63118",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Lebsack Shoals",
        "city": "Westfield",
        "zipcode": "33022",
        "state": "ks",
        "addrTwo": 8792,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Neha Trace",
        "city": "Hartford",
        "zipcode": "56331",
        "state": "ks",
        "addrTwo": 2047,
        "UserUserId": "351789f6-91b9-4886-8927-15eaad808e55",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Senger Course",
        "city": "Lansing",
        "zipcode": "43279",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "351789f6-91b9-4886-8927-15eaad808e55",
        "addressType": "Billing"
    },
    {
        "addrOne": "Mohammed Hollow",
        "city": "Paradise",
        "zipcode": "95420",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Billing"
    },
    {
        "addrOne": "Krajcik Mountains",
        "city": "Sandy Springs",
        "zipcode": "22488",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Casper Via",
        "city": "Redlands",
        "zipcode": "97543",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "351789f6-91b9-4886-8927-15eaad808e55",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Hagenes Ranch",
        "city": "Lake of the Woods",
        "zipcode": "45693",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Arianna Junction",
        "city": "Redfield",
        "zipcode": "98812",
        "state": "ks",
        "addrTwo": 8143,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Billing"
    },
    {
        "addrOne": "Gerlach Ramp",
        "city": "Jemez Pueblo",
        "zipcode": "17099",
        "state": "ks",
        "addrTwo": 7720,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Billing"
    },
    {
        "addrOne": "Schroeder Greens",
        "city": "Stevensville",
        "zipcode": "27533",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Baumbach Via",
        "city": "Alderson",
        "zipcode": "15037",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "b176a083-4b27-4a65-8d53-385b4ee42cf1",
        "addressType": "Billing"
    },
    {
        "addrOne": "Gideon Flats",
        "city": "Glendora",
        "zipcode": "32190",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "bd4dc0cb-8826-4322-ae59-98bb506761b1",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Altenwerth Crossing",
        "city": "Refugio",
        "zipcode": "28347",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "351789f6-91b9-4886-8927-15eaad808e55",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Elliot Roads",
        "city": "Barton Creek",
        "zipcode": "72742",
        "state": "ks",
        "addrTwo": 5414,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Glover Haven",
        "city": "Charleston",
        "zipcode": "74965",
        "state": "ks",
        "addrTwo": 2388,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Baylee Crescent",
        "city": "Lee Acres",
        "zipcode": "60956",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "b176a083-4b27-4a65-8d53-385b4ee42cf1",
        "addressType": "Billing"
    },
    {
        "addrOne": "Jasper Ridge",
        "city": "Mount Holly",
        "zipcode": "91987",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Connelly Drives",
        "city": "Pasco",
        "zipcode": "10933",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Kuvalis Rue",
        "city": "Mount Zion",
        "zipcode": "06403",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Billing"
    },
    {
        "addrOne": "Mueller Wall",
        "city": "Clanton",
        "zipcode": "43151",
        "state": "ks",
        "addrTwo": 9682,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Mateo Dale",
        "city": "Ashland",
        "zipcode": "48313",
        "state": "ks",
        "addrTwo": 7726,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Darlene Corners",
        "city": "Downingtown",
        "zipcode": "27412",
        "state": "ks",
        "addrTwo": 2267,
        "UserUserId": "351789f6-91b9-4886-8927-15eaad808e55",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Anita Village",
        "city": "Brookland",
        "zipcode": "36784",
        "state": "ks",
        "addrTwo": 5055,
        "UserUserId": "b176a083-4b27-4a65-8d53-385b4ee42cf1",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Hirthe Meadows",
        "city": "Oak Lawn",
        "zipcode": "72714",
        "state": "ks",
        "addrTwo": 3960,
        "UserUserId": "9bbb21b2-7147-423c-bb7d-0c9f454ca51c",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Barton Harbor",
        "city": "East Jordan",
        "zipcode": "43530",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "bd4dc0cb-8826-4322-ae59-98bb506761b1",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Upton Mountain",
        "city": "Creston",
        "zipcode": "14560",
        "state": "ks",
        "addrTwo": 7000,
        "UserUserId": "bd4dc0cb-8826-4322-ae59-98bb506761b1",
        "addressType": "Billing"
    },
    {
        "addrOne": "Crooks Villages",
        "city": "Midtown",
        "zipcode": "93619",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Vendor"
    },
    {
        "addrOne": "D'angelo Station",
        "city": "Mocksville",
        "zipcode": "81081",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "b176a083-4b27-4a65-8d53-385b4ee42cf1",
        "addressType": "Vendor"
    },
    {
        "addrOne": "Jerod Corners",
        "city": "Hesston",
        "zipcode": "61633",
        "state": "ks",
        "addrTwo": 3663,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Mailing"
    },
    {
        "addrOne": "Kory Mountains",
        "city": "Ames",
        "zipcode": "68337",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "dc21ca53-00db-4b15-b82a-5b19504850a5",
        "addressType": "Billing"
    },
    {
        "addrOne": "Janie Port",
        "city": "Queensbury",
        "zipcode": "18976",
        "state": "ks",
        "addrTwo": 2966,
        "UserUserId":"351789f6-91b9-4886-8927-15eaad808e55",
        "addressType": "Billing"
    },
    {
        "addrOne": "Conor Lane",
        "city": "Sussex",
        "zipcode": "96382",
        "state": "ks",
        "addrTwo": null,
        "UserUserId": "b176a083-4b27-4a65-8d53-385b4ee42cf1",
        "addressType": "Vendor"
    }
]

async function addAddressData (){
    try{
    const bulkAddMockAddresses = await Address.bulkCreate(AddressData)
    return bulkAddMockAddresses
    }catch (err){
        throw new Error(err)
    }
}
module.exports = addAddressData

 let   partsDetails = [
      {
        "id": 1,
        "part_name": "Wings",
        "part_description": "Airplane Wings",
        "part_number": "9876543",
        "status": "Requires Maintenance",
        "category": "Avionics",
        "Current_Location": "New York",
        "flown": 1,
        "maintenance": 1
      },
      {
        "id": 2,
        "part_name": "Engine",
        "part_description": "Front Engine",
        "part_number": "23453",
        "status": "In Maintenance",
        "category": "Engine",
        "Current_Location": "Singapore",
        "flown": 20,
        "maintenance": 2
      },
      {
        "id": 3,
        "part_name": "gear",
        "part_description": "Landing gear",
        "part_number": "87654",
        "status": "Requires Maintenance",
        "category": "Landing Gear",
        "Current_Location": "Tokyo",
        "flown": 2,
        "maintenance": 4
      },
      {
        "id": 4,
        "part_name": "Landing Wheel",
        "part_description": "Landing Wheel",
        "part_number": "87654",
        "status": "Discard",
        "category": "Landing Gear",
        "Current_Location": "London",
        "flown": 3,
        "maintenance": 1
      }
    ]

   let rulesDetails = [
      {
        "id": 1,
        "part_id": 1,
        "flown": 1,
        "maintenance": 2
      },
      {
        "id": 2,
        "part_id": 2,
        "flown": 2,
        "maintenance": 3
      }
    ]


    let flownArray = []

let rule

partsDetails.forEach((part) => 
{
    rule = rulesDetails.find((rule) => rule.id === part.id)

    if(rule && part){

    if(Math.abs((rule.flown || 0) - (part.flown || 0)) >= 10){

        flownArray.push(part)

    }

  }
    
    })

    console.log(flownArray)


const response = {
  "flownArray": [
    {
      "id": 1,
      "part_name": "Wings",
      "part_description": "Airplane Wings",
      "part_number": "9876543",
      "status": "Requires Maintenance",
      "category": "Avionics",
      "Current_Location": "New York",
      "flown": 1,
      "maintenance": 1
    },
    {
      "id": 2,
      "part_name": "Engine",
      "part_description": "Front Engine",
      "part_number": "23453",
      "status": "In Maintenance",
      "category": "Engine",
      "Current_Location": "Singapore",
      "flown": 20,
      "maintenance": 2
    }
  ],
  "maintenanceArray": [
    {
      "id": 1,
      "part_name": "Wings",
      "part_description": "Airplane Wings",
      "part_number": "9876543",
      "status": "Requires Maintenance",
      "category": "Avionics",
      "Current_Location": "New York",
      "flown": 1,
      "maintenance": 1
    }
  ]
}   
const inquirer = require('inquirer');

inquirer
    .prompt ([
        {
            type: 'input',
            message:'What is the name of the item you are selling?',
            name: 'itemName'
        },
        {
            type: 'input',
            message:'What kind of catagory is this item?',
            name: 'itemCatagory'
        },
        {
            type: 'input',
            message:'What is the starting bid for this item?',
            name: 'itemStartBid'
        }
    ]).then ((data) => {
        const postItem = (data) => {
            console.log('Adding a new item to post...\n');
            const query = connection.query(
                'INSERT INTO itmes SET ?',
                {
                    // Check data points below
                    item: itemName,
                    catagory: itemCatagory,
                    bid: itemStartBid
                }
            )
        }
    });

    



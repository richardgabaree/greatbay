const inquirer = require("inquirer");

const items = [];

// function bidItem() {
//     inquirer
//     .prompt([

//     ])
// }

const readItems = () => {
    console.log('Selecting all items...\n');
    connection.query('SELECT * FROM items', (err, res) => {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
};

readItems();
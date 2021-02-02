const inquirer = require("inquirer");

function initApp() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "post-bid",
                message: "Would you like to post an item or make a bid?",
                choices: ["Post an item", "Bid on item", "Close application"]
            }
        ])
        .then(choice => {
            if (choice === "Post an item") {
                postItem();
            }
            else if (choice === "Bid on item") {
                bidItem();
            }
            else {
                closeApp();
            }
        })
}
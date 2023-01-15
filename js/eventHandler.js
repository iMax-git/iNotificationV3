/*
 * Copyright (c) 2023 ADN's. All right reserved.
 */


window.addEventListener("message", function(event) {
    var action = event.data.action;
    var data = event.data.data;
    switch (action) {
        case "Notification":
            Notification(data.title, data.subtitle, data.icon, data.body, data.duration, data.location);
            break;
        case "HelpNotification":
            HelpNotification(data.title, data.icon, data.body, data.duration, data.location);
            break;
        default:
            console.log("Unknown action: " + action);
            break;
    }


});

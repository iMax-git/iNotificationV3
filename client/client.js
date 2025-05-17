function Notification(title, subtitle, icon, message, duration, location) {
    SendNUIMessage({
        action: 'Notification',
        data: {
            title: title,
            subtitle: subtitle,
            icon: icon,
            body: message,
            duration: duration,
            location: location,
            isMiniMapHidden: !IsMinimapRendering(),
        }
    });
}

function HelpNotification(title, icon, message, duration, location) {
    SendNUIMessage({
        action: 'HelpNotification',
        data: {
            title: title,
            icon: icon,
            body: message,
            duration: duration,
            location: location,
            isMiniMapHidden: !IsMinimapRendering(),
        }
    });
}

Tools.registerClientEvent('iNotificationV3:showNotification', (message, duration = 10, location = "left") => {
    Notification(undefined, undefined, undefined, message, duration, location);
});

Tools.registerClientEvent('iNotificationV3:showAdvancedNotification', (title, subtitle, message, icon, duration = 10, location = "left") => {
    Notification(title, subtitle, icon, message, duration, location)
});

Tools.registerClientEvent('iNotificationV3:showHelpNotification', (message, duration = 10, location = "left") => {
    HelpNotification(undefined, undefined, message, duration, location)
});

Tools.registerClientEvent('iNotificationV3:showAdvancedHelpNotification', (title, message, icon, duration = 10, location = "left") => {
    HelpNotification(title, icon, message, duration, location)
});

// Functions exports
exports("showNotification", (message, duration = 10, location = "left") => {
    Notification(undefined, undefined, undefined, message, duration, location);
});

exports("showAdvancedNotification", (title, subtitle, message, icon, duration = 10, location = "left") => {
    Notification(title, subtitle, icon, message, duration, location)
});

exports("showHelpNotification", (message, duration = 10, location = "left") => {
    Notification(undefined, undefined, undefined, message, duration, location);
});

exports("showAdvancedHelpNotification", (title, message, icon, duration = 10, location = "left") => {
    HelpNotification(title, icon, message, duration, location)
});




// Test command, if deploy script in production mode, then delete this lines
RegisterCommand('test', () => {
    TriggerEvent('iNotificationV3:showNotification', "Posse quem fuisset gubergren ~y~nibh auctor porro prompta~w~. ~b~Platonem convallis mea taciti tempus ~w~altera ridens viverra fabellas indoctum. Fuisset has euismod reque convenire doming vocent. Magna fabulas non dignissim ad deterruisset conclusionemque augue debet usu", 15, 'left');

    TriggerEvent('iNotificationV3:showAdvancedNotification', 'ADN\'s Notification', 'Nouveau produit', 'Posse quem fuisset gubergren ~y~nibh auctor porro prompta~w~. ~b~Platonem convallis mea ~h~taciti tempus ~w~altera ridens viverra fabellas indoctum. Fuisset has euismod reque convenire doming vocent. Magna fabulas non dignissim ad deterruisset conclusionemque augue debet usu', 'CHAR_MULTIPLAYER', 50, 'left');

    TriggerEvent('iNotificationV3:showHelpNotification', 'Appuyer sur ~INPUT_PICKUP~ pour ouvrir le menu.', 50, 'left');

    TriggerEvent('iNotificationV3:showAdvancedHelpNotification', 'ADN\'s', 'Appuyer sur ~INPUT_JUMP~ pour sauter.', 'DIA_AVI', 15, 'right');

    TriggerEvent('iNotificationV3:showAdvancedHelpNotification', 'ADN\'s', 'Appuyer sur ~INPUT_MELEE_ATTACK1~ pour recharger.', 'CHAR_ORTEGA', 15, 'right');
});
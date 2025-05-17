# Script vendu seulement par https://adns-tech.fr
# Script développer par iMax

# Installation des Notifications

1. Glisser le dossier iNotificationV3 dans vos resources
2. Rajouter la ligne `ensure iNotificationV3` dans votre server.cfg

<!-- Installation terminée -->

# Options des Textes
1. si vous incluez `~h~` dans un texte cela va le rendre gras (example: `~h~On essaye Text bold~h~`)
2. si vous incluez `~i~` dans un texte cela va le rendre italique (example: `~i~On essaye Text italique~h~`)
3. si vous incluez `<br/>` dans un texte cela va vous remettre a la ligne (example: `ligne 1<br/>ligne 2`)

# Example de Notifications (Client/Server)

# Coter Client
```lua
    -- showNotification
    TriggerEvent("iNotificationV3:showNotification", "Ceci est un message", 5, "left");

    -- showAdvancedNotification
    TriggerEvent("iNotificationV3:showAdvancedNotification", "Titre", "SousTitre", "ceci est un message", "CHAR_MP_BIKER_BOSS", 7, "left");

    -- showHelpNotification
    TriggerEvent("iNotificationV3:showHelpNotification", "Appuyez sur la touche ~INPUT_PICKUP~ pour ...", 10, "right");

    -- showAdvancedHelpNotification
    TriggerEvent("iNotificationV3:showAdvancedHelpNotification", "Intéractions", "Appuyez sur ~INPUT_PICKUP~ pour déclenchez ...", "CHAR_MP_BRUCIE", 8, "left");
```

# Coter Server
```lua
    -- showNotification
    TriggerClientEvent("iNotificationV3:showNotification", source, "Ceci est un message", 5, "left");

    -- showAdvancedNotification
    TriggerClientEvent("iNotificationV3:showAdvancedNotification", source, "Titre", "SousTitre", "ceci est un message", "CHAR_MP_BIKER_BOSS", 7, "left");

    -- showHelpNotification
    TriggerClientEvent("iNotificationV3:showHelpNotification", source, "Appuyez sur la touche ~INPUT_PICKUP~ pour ...", 10, "right");

    -- showAdvancedHelpNotification
    TriggerClientEvent("iNotificationV3:showAdvancedHelpNotification", source, "Intéractions", "Appuyez sur ~INPUT_PICKUP~ pour déclenchez ...", "CHAR_MP_BRUCIE", 8, "left");
```

⚠️ Nous vous conseillons de ne pas modifier toutes vos notifications via ESX mais plutot de
faire en sorte de les modifier une par une depuis tout les scripts ou elle sont la pour de meilleur possibilité (position, temps...)

# Modifier toutes les notifications de votre framework ESX facilement

1. Aller dans le dossier `ex_extended/client`
2. Ouvrez le fichier `functions.lua`
3. Suivez l'étapes # Modification ci-dessous

# Modification

Remplacez ce code:

```lua
    ESX.ShowNotification = function(msg)
        SetNotificationTextEntry('STRING');
        AddTextComponentString(msg);
        DrawNotification(0, 1);
    end

    ESX.ShowAdvancedNotification = function(sender, subject, msg, textureDict, iconType, flash, saveToBrief, hudColorIndex)
        if saveToBrief == nil then saveToBrief = true end
        AddTextEntry('esxAdvancedNotification', msg)
        BeginTextCommandThefeedPost('esxAdvancedNotification')
        if hudColorIndex then ThefeedNextPostBackgroundColor(hudColorIndex) end
        EndTextCommandThefeedPostMessagetext(textureDict, textureDict, false, iconType, sender, subject)
        EndTextCommandThefeedPostTicker(flash or false, saveToBrief)
    end

    ESX.ShowHelpNotification = function(msg, thisFrame, beep, duration)
        AddTextEntry('esxHelpNotification', msg)

        if thisFrame then
            DisplayHelpTextThisFrame('esxHelpNotification', false)
        else
            if beep == nil then beep = true end
            BeginTextCommandDisplayHelp('esxHelpNotification')
            EndTextCommandDisplayHelp(0, false, beep, duration or -1)
        end
    end
```

Par celui-ci:

```lua
    ESX.ShowNotification = function(msg, time, position)
        TriggerEvent("iNotificationV3:showNotification", msg, time or 12, position or "left");
    end

    ESX.ShowAdvancedNotification = function(sender, subject, msg, textureDict, iconType, flash, saveToBrief, hudColorIndex)
        TriggerEvent("iNotificationV3:showAdvancedNotification", sender, subject, msg, textureDict, 12, "left")
    end

    ESX.ShowHelpNotification = function(msg, thisFrame, beep, duration)
        TriggerEvent("iNotificationV3:showHelpNotification", msg, 12, "left");
    end
```


# Ajoutez des notifications simplement

# showNotification (https://prnt.sc/3CCL3xXdM6ee)

# Client
```lua
    -- message: string (sujet du message) (⚠️ Obligatoire)
    -- duration: number (nombre de secondes durant lesquels la notification sera afficher) (❌ Non Obligatoire)
    -- location: string["left", "middle", "right"] (Position de la notification sur l'écran) (❌ Non Obligatoire)
    exports["iNotificationV3"]:showNotification(message, duration, location);
    -- ou:
    TriggerEvent("iNotificationV3:showNotification", message, duration, location);
```

# Server
```lua
    -- message: string (sujet du message) (⚠️ Obligatoire)
    -- duration: number (nombre de secondes durant lesquels la notification sera afficher) (❌ Non Obligatoire)
    -- location: string["left", "middle", "right"] (Position de la notification sur l'écran) (❌ Non Obligatoire)
    TriggerClientEvent("iNotificationV3:showNotification", playerId or source, message, duration, location)
```


# showAdvancedNotification (https://prnt.sc/IT3RI6eY2qnK)

# Client
```lua
    -- title: string (titre de la notification) (❌ Non Obligatoire)
    -- subtitle: string (sous-titre de la notification) (❌ Non Obligatoire)
    -- message: string (sujet du message) (⚠️ Obligatoire)
    -- duration: number (nombre de secondes durant lesquels la notification sera afficher) (❌ Non Obligatoire)
    -- location: string["left", "middle", "right"] (Position de la notification sur l'écran) (❌ Non Obligatoire)
    
    -- icon: string (Image des notification de GTA 5 ou déposer votre image dans "assets/images/" puis donner le nom de l'image seulement dans cette argument) (❌ Non Obligatoire)

    exports["iNotificationV3"]:showAdvancedNotification(title, subtitle, message, icon, duration, location);
    -- ou:
    TriggerEvent("iNotificationV3:showAdvancedNotification", title, subtitle, message, icon, duration, location);
```

# Server
```lua
    -- title: string (titre de la notification) (❌ Non Obligatoire)
    -- subtitle: string (sous-titre de la notification) (❌ Non Obligatoire)
    -- message: string (sujet du message) (⚠️ Obligatoire)
    -- duration: number (nombre de secondes durant lesquels la notification sera afficher) (❌ Non Obligatoire)
    -- location: string["left", "middle", "right"] (Position de la notification sur l'écran) (❌ Non Obligatoire)

    -- icon: string (Image des notification de GTA 5 ou déposer votre image dans "assets/images/" puis donner le nom de l'image seulement dans cette argument) (❌ Non Obligatoire)

    local inotif = "iNotificationV3:showAdvancedNotification";
    TriggerClientEvent(inotif, playerId or source, title, subtitle, message, icon, duration, location)
```

# showHelpNotification (https://prnt.sc/2Dd3-Bbvg0CK)

# Client
```lua
    -- message: string (sujet du message) (⚠️ Obligatoire)
    -- duration: number (nombre de secondes durant lesquels la notification sera afficher) (❌ Non Obligatoire)
    -- location: string["left", "middle", "right"] (Position de la notification sur l'écran) (❌ Non Obligatoire)

    exports["iNotificationV3"]:showHelpNotification(message, duration, location);
    -- ou:
    TriggerEvent("iNotificationV3:showHelpNotification", message, duration, location);
```

# Server
```lua
    -- message: string (sujet du message) (⚠️ Obligatoire)
    -- duration: number (nombre de secondes durant lesquels la notification sera afficher) (❌ Non Obligatoire)
    -- location: string["left", "middle", "right"] (Position de la notification sur l'écran) (❌ Non Obligatoire)

    local inotif = "iNotificationV3:showHelpNotification";
    TriggerClientEvent(inotif, playerId or source, message, duration, location)
```


# showAdvancedHelpNotification (https://prnt.sc/70ktraKMhpzc)

# Client
```lua
    -- title: string (titre de la notification) (❌ Non Obligatoire)
    -- message: string (sujet du message) (⚠️ Obligatoire)
    -- icon: string (Image des notification de GTA 5 ou déposer votre image dans "assets/images/" puis donner le nom de l'image seulement dans cette argument) (❌ Non Obligatoire)
    -- duration: number (nombre de secondes durant lesquels la notification sera afficher) (❌ Non Obligatoire)
    -- location: string["left", "middle", "right"] (Position de la notification sur l'écran) (❌ Non Obligatoire)

    exports["iNotificationV3"]:showAdvancedHelpNotification(title, message, icon, duration, location);
    -- ou:
    TriggerEvent("iNotificationV3:showAdvancedHelpNotification", title, message, icon, duration, location);
```

# Server
```lua
    -- title: string (titre de la notification) (❌ Non Obligatoire)
    -- message: string (sujet du message) (⚠️ Obligatoire)
    -- icon: string (Image des notification de GTA 5 ou déposer votre image dans "assets/images/" puis donner le nom de l'image seulement dans cette argument) (❌ Non Obligatoire)
    -- duration: number (nombre de secondes durant lesquels la notification sera afficher) (❌ Non Obligatoire)
    -- location: string["left", "middle", "right"] (Position de la notification sur l'écran) (❌ Non Obligatoire)

    local inotif = "iNotificationV3:showAdvancedHelpNotification";
    TriggerClientEvent(inotif, playerId or source, title, message, icon, duration, location)
```

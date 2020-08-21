var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "34"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "showBackground": "false",
                            "source": "noaa|weather|Ashland, Hanover County Municipal Airport, VA"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "com.github.zren.condensedweather",
                    "title": "Condensed Weather"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "Applet-455:1408,800,400,208,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "766",
                    "ToolBoxButtonY": "24"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/thea/Pictures/Wallpapers/background-grunge-wallpaper-pink.jpg",
                    "SlidePaths": "/usr/share/plasma/wallpapers\\,/usr/share/wallpapers\\,/home/thea/Pictures/Wallpapers"
                },
                "/Wallpaper/org.kde.latte.slideshow/General": {
                    "Image": "file:///home/thea/Pictures/Wallpapers/SCBlueDarkWallpaper.png",
                    "SlidePaths": "/usr/share/plasma/wallpapers,/usr/share/wallpapers,/home/thea/Pictures/Wallpapers"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "noWindowType": "desktopName",
                            "showApplicationIcon": "true",
                            "textType": "1"
                        },
                        "/Configuration/General": {
                            "showApplicationIcon": "true",
                            "textType": "1"
                        }
                    },
                    "plugin": "org.communia.apptitle"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42"
                        },
                        "/Configuration/Configuration/General": {
                            "length": "1025"
                        },
                        "/Configuration/General": {
                            "length": "1025"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "55",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "92"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "55",
                            "immutability": "1"
                        },
                        "/Configuration/Appearance": {
                            "showDate": "true"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "52"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "showFace": "true",
                            "showName": "false"
                        },
                        "/Configuration/General": {
                            "showName": "false",
                            "showSett": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.uswitcher"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "72",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "42"
                }
            },
            "height": 1.3333333333333333,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        },
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "favoritesPortedToKAstats": "true",
                            "switchTabsOnHover": "false"
                        },
                        "/Configuration/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true",
                            "switchTabsOnHover": "false"
                        },
                        "/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "launchers": "applications:vivaldi-stable.desktop,applications:org.kde.kontact.desktop,applications:org.telegram.desktop.desktop,applications:caprine.desktop,applications:discord.desktop,applications:slack.desktop,applications:spotify.desktop,applications:steam.desktop,applications:code.desktop,applications:org.kde.dolphin.desktop,applications:org.kde.discover.desktop,applications:org.kde.konsole.desktop"
                        },
                        "/Configuration/General": {
                            "launchers": "applications:vivaldi-stable.desktop,applications:org.kde.kontact.desktop,applications:thunderbird.desktop,applications:org.telegram.desktop.desktop,applications:caprine.desktop,applications:slack.desktop,applications:discord.desktop,applications:spotify.desktop,applications:steam.desktop,applications:code.desktop,applications:org.kde.dolphin.desktop,applications:org.kde.konsole.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42"
                        }
                    },
                    "plugin": "org.kde.plasma.trash"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "3",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "1080",
                    "DialogWidth": "151"
                },
                "/Configuration": {
                    "PreloadWeight": "42"
                }
            },
            "height": 3.3333333333333335,
            "hiding": "normal",
            "location": "left",
            "maximumLength": 58.611111111111114,
            "minimumLength": 58.611111111111114,
            "offset": 1.3888888888888888
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);

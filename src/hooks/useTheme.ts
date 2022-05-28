import { useState } from "react";

type ThemeName = "dark" | "light" | "system";

function getStorageTheme(): ThemeName {
    return window.localStorage.getItem("rawonTheme") as ThemeName|null ?? "system";
}

export function isSystemDark(): boolean {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function useTheme(): [ThemeName, (theme: ThemeName) => void] {
    const [theme, setTheme] = useState<ThemeName>(getStorageTheme());

    window.addEventListener("storage", ev => {
        if (ev.key === "rawonTheme" && (ev.oldValue !== ev.newValue)) {
            switch ((ev.newValue ?? "system") as ThemeName) {
                case "dark": setTheme("dark"); break;
                case "light": setTheme("light"); break;
                default: setTheme("system"); break;
            }
        }
    });

    return [theme, (newTheme: ThemeName) => {
        window.localStorage.setItem("rawonTheme", newTheme);
        window.dispatchEvent(new StorageEvent("storage", {
            key: "rawonTheme",
            newValue: newTheme,
            oldValue: theme,
            storageArea: window.localStorage
        }));
    }];
}

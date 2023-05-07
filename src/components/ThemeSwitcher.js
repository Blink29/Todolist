import React, { useEffect, useState } from "react";

//styles
import styles from "./ThemeSwitcher.module.css";

//hooks
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeSwitcher = () => {
  const [isColorPicking, setIsColorPicking] = useState(false);
  const [hue, setHue] = useLocalStorage("todolist.color", "180");

  const defaultTheme = window.matchMedia(
    "(prefers-color-schemes: dark)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "todolist.theme",
    defaultTheme ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--_hue", hue);
  }, [hue]);

  return (
    <aside
      className={styles.wrapper}
      styles={{
        backgroundColor: isColorPicking
          ? "hsl(var(--muted) / .6)"
          : "transparent",
      }}
    >
      {isColorPicking ? (
        <>
          <button
            className={`btn ${styles.close}`}
            aria-label="Close color picking mode"
            onClick={() => setIsColorPicking(false)}
          >
            Exit
          </button>
          <input
            type="range"
            className={styles.picker}
            min="0"
            max="360"
            aria-label="Chnage color theme slider"
            value={hue}
            onInput={(e) => setHue(e.target.value)}
          />
        </>
      ) : (
        <div className={styles.btns}>
          <button
            className="btn"
            aria-label={`Change theme to ${
              theme === "light" ? "dark" : "light"
            } mode`}
            // eslint-disable-next-line
            role="switch"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "dark" ? "light" : "dark"}
          </button>
          <button
            className="btn"
            aria-label="Enable color picking mode"
            onClick={() => setIsColorPicking(true)}
          >
            CPM
          </button>
        </div>
      )}
    </aside>
  );
};

export default ThemeSwitcher;

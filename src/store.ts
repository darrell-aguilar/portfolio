import { defineStore } from "pinia"
import { getTheme, Themes } from "./styles/themeHelper"

export const useThemeStore = defineStore("theme", {
  state: () => ({ theme: getTheme() }),
  getters: {
    currentTheme: (state) => state.theme,
  },
  actions: {
    setTheme(themeValue: Themes) {
      localStorage.setItem("theme", themeValue)
      this.theme = themeValue
    },
  },
})

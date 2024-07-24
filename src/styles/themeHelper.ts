export const getTheme = (): Themes => {
  return localStorage.getItem("theme") === "dark" ? Themes.Dark : Themes.Light
}

export enum Themes {
  Light = "light",
  Dark = "dark",
}

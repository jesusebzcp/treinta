export default {
  capitalize: (s) => {
    if (typeof s !== "string") {
      return "";
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
  },
  create_UUID: () => {
    let date = new Date().getTime();
    const uuid = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (date + Math.random() * 16) % 16 | 0;
        date = Math.floor(date / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  },
};

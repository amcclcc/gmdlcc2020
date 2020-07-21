//colors object
export default {
  buttons: {
    primary: {
      borderRadius: 0,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "text",
      cursor: "pointer",
      color: "text",
      outline: "none",
      bg: "background",
      "&:hover, &.active": {
        color: "background",
        bg: "text",
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
    },
  },
}

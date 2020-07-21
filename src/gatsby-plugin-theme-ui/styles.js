export default {
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: [1, 2],
      a: {
        color: "text",
        textDecoration: "none",
        ":hover": {
          color: "text",
          textDecoration: "underline",
        },
      },
      p: {
        mt: 0,
      },
      h1: {
        variant: "text.heading",
        fontSize: [6, 8, 8],
        // textTransform: "uppercase",
        my: [1, 2],
      },
      h2: {
        variant: "text.heading",
        fontSize: [6, 8, 8],
        // textTransform: "uppercase",
        my: [1, 2],
      },
      h3: {
        variant: "text.heading",
        // dangerously set html can be an H3 tag
        // so reset styles to be similar to normal text size below
        fontSize: [1, 2, 2],
        m: 0,
        // textTransform: "uppercase",
        // my: [1, 2],
      },
      h4: {
        variant: "type.heading",
        fontSize: [1, 2, 2],
        // textTransform: "uppercase",
        my: [1, 2],
      },
      h5: {
        fontSize: [1, 2, 2],
        // textTransform: "uppercase",
        my: [0],
      },
      strong: {
        // dangerously set html can be an <strong> tag
        // so reset styles to be similar to normal text size below
        fontWeight: "bold",
      },
    },
    header: {},
    footer: {
      a: {
        color: "text",
      },
    },
    h4: {
      variant: "text.heading",
      fontSize: [1, 2],
    },
    h5: {
      variant: "text.heading",
      fontSize: [0, 1],
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    list: {
      listStyle: "none",
      p: 0,
      m: 0,
    },
  },
}

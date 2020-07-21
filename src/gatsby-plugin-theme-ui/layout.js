//colors object
export default {
  layout: {
    mainSection: {
      mt: "3rem",
      pb: "3rem",
      borderBottomColor: "muted",
      borderBottomStyle: "dotted",
      borderBottomWidth: [1, 2],
    },
    subSection: {
      my: "3rem",
    },
    grid: {
      columns: [1, null, 4],
      gridGap: 2,
    },
    header: {
      // added to margin in layout/main
      height: [33, 38],
    },
    footer: {
      // added to margin in layout/main
      height: [32, 43],
    },
    toggleButtons: {
      width: [18, 25],
      height: [18, 25],
    },
    rightBorder: {
      borderRightStyle: "solid",
      borderRightWidth: [0, 2],
      borderRightColor: "text",
    },
    rightBottomBorder: {
      borderRightStyle: "solid",
      borderRightWidth: [0, 2],
      borderRightColor: "text",
      borderBottomColor: "text",
      borderBottomStyle: "solid",
      borderBottomWidth: [1, 0],
    },
    topBorder: {
      borderTopColor: "text",
      borderTopStyle: "solid",
      borderTopWidth: [1, 2],
    },
    bottomBorder: {
      borderBottomColor: "text",
      borderBottomStyle: "solid",
      borderBottomWidth: [1, 2],
    },
    border: {
      borderColor: "text",
      borderStyle: "solid",
      borderWidth: [1, 2],
    },
    breadCrumb: {
      borderBottomColor: "text",
      borderBottomStyle: "solid",
      borderBottomWidth: [1, 2],
      fontSize: 2,
      px: [2, 3],
      py: 1,
      a: {
        textDecoration: "none",
      },
      "a:hover": {
        textDecoration: "underline",
      },
    },
    pageTitle: {
      borderBottomColor: "text",
      borderBottomStyle: "solid",
      borderBottomWidth: [1, 2],
      p: [2, 3],
    },
    paddedX: {
      px: [3, 4, 4],
    },
    paddedItem: {
      p: [3, 4, 4],
    },
    paddedItemLR: {
      px: [3, 4, 4],
    },
    paddedItemTLR: {
      pt: [3, 4, 4],
      px: [3, 4, 4],
      pb: 0,
    },
    paddedItemYMedium: {
      px: [3, 5],
      py: [2, 6],
    },
    paddedYRightMedium: {
      pt: [4, 5],
      pr: [3, 4],
    },
    paddedItemRightBorder: {
      p: [3, 4, 4],
      borderRightStyle: "solid",
      borderRightWidth: 0,
      borderRightColor: "text",
      "@media (min-width: 40em)": {
        borderRightWidth: 2,
      },
    },
    borderTopBottomSpaced: {
      borderTopColor: "text",
      borderTopStyle: "solid",
      borderTopWidth: [1, 2],
      borderBottomColor: "text",
      borderBottomStyle: "solid",
      borderBottomWidth: [1, 2],
      py: 4,
      my: 2,
    },
    borderTopBottom: {
      borderTopColor: "text",
      borderTopStyle: "solid",
      borderTopWidth: [1, 2],
      borderBottomColor: "text",
      borderBottomStyle: "solid",
      borderBottomWidth: [1, 2],
    },
    blockTextArea: {
      h2: {
        fontSize: [4, 5],
        mt: [0, 0],
        mb: [3, 4],
      },
      h3: {
        mt: ["24px", "36px"],
        "&:first-of-type": { mt: 0 },
      },
      "div>h3": {
        mt: 0,
      },
      h4: {
        fontsize: [1, 2],
        mb: [4, 5],
        fontWeight: "normal",
      },
      "p:last-of-type": { mb: 0 },
    },
    blockTextAreaContainer: {
      pr: 6,
      "@media (min-width: 40em)": { pr: "80px" },
      "@media (min-width: 120em)": { pr: "200px" },
      pb: [0, 0],
    },
    paddedTextBox: {
      pr: 3,
      "@media (min-width: 40em)": { pr: "80px" },
      "@media (min-width: 120em)": { pr: "200px" },
    },
  },
}

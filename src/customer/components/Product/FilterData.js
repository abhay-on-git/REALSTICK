export const color = [
  "white",
  "black",
  "red",
  "maroon",
  "being",
  "pink",
  "green",
  "yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      { value: "yellow", label: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
      { value: "XXL", label: "XXL" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "159 To 399" },
      { value: "399-999", label: "399-999" },
      { value: "999-1999", label: "999-1999" },
      { value: "1999-2999", label: "1999-2999" },
      { value: "2999-3999", label: "2999-3999" },
    ],
  },
  {
    id: "disccount",
    name: "Disccount Range",
    options: [
      { value: "10", label: "20% and Above" },
      { value: "30", label: "30% and Above" },
      { value: "40%", label: "40% and Above" },
      { value: "50%", label: "50% and Above" },
      { value: "60%", label: "60% and above" },
      { value: "70%", label: "70% and above" },
      { value: "80%", label: "80% and above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in-stock", label: "In Stock" },
      { value: "out-of-stock", label: "Out Of Stock" },
    ],
  },
];

export const sortOptions = [
  {
    name: "Price :High to Low",
    query: "price_low",
    current: false,
  },
  {
    name: "Price :Low to High",
    query: "price_high",
    current: false,
  },
];

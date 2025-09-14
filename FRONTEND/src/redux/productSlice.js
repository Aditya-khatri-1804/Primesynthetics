// redux/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Printed Non Woven Fabric",
      category: "Spun Bond Non Woven Fabrics",
      subcategory: "Printed Non Woven Fabrics",
      description: "Colorful printed non-woven fabric.",
      price: 120,
      image: "/assets/1.webp",
    },
    {
      id: 2,
      name: "Laminated Fabric",
      category: "Laminated Non Woven Fabrics",
      subcategory: "",
      description: "Laminated waterproof fabric.",
      price: 150,
      image: "/assets/2.webp",
    },
    {
      id: 3,
      name: "Medical Disposable Sheet",
      category: "Non Woven Medical Disposables",
      subcategory: "",
      description: "Medical-grade disposable sheet.",
      price: 200,
      image: "/assets/3.webp",
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;

"use client";
import { Builder } from "@builder.io/react";
import Card from "./components/Card";
import Footer from "./components/footer/Footer";
import PrimaryHeader from "./components/primary-header/PrimaryHeader";
import SecondaryHeader from "./components/secondary-header/SecondaryHeader";

Builder.registerComponent(Card, {
  name: "Card",
});



Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(PrimaryHeader, {
  name: "PrimaryHeader",
});

Builder.registerComponent(SecondaryHeader, {
  name: "SecondaryHeader",
});

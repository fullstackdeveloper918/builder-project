"use client";
import { Builder } from "@builder.io/react";
import Card from "./components/Card";
import Counter from "./components/Counter/Counter";

Builder.registerComponent(Card, {
  name: "Card",
});

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

import { create } from "zustand";

export const useActive = create((set) => ({
  isHover: false,
  setActive: (state:any) => set({isHover:state}),
}));

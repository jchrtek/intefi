import { FixedObject, FluidObject } from 'gatsby-image';

export type DataType<T extends string> = { [K in T]: ChildImageSharpType };

export interface ChildImageSharpType {
  childImageSharp: FluidParentType;
}

export interface FluidParentType {
  fluid: FluidObject;
  fixed: FixedObject;
}

export interface ShopType {
  id: number;
  title: string;
  image: string;
}

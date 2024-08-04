export type Bom = {
  createdAt: Date;
  id: string;
  partId: string | null;
  productId: string | null;
  quantity: number | null;
  updatedAt: Date;
};

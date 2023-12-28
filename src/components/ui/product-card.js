"use client";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency from "/src/components/ui/currency";
import IconButton from "/src/components/ui/icon-button";
import usePreviewModal from "/hooks/use-preview-modal";
import useCart from "/hooks/use-cart";

const ProductCard = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/businesses/product/${data?.id}`);
  };

  const onPreview = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white dark:bg-[#1a1a1a] group cursor-pointer rounded-lg md:rounded-xl border border-neutral-600 dark:border-neutral-400 p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-lg md:rounded-xl bg-neutral-200 dark:bg-[#737373] relative">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-neutral-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-neutral-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg text-black dark:text-white">
          {data.name}
        </p>
        <p className="text-sm text-neutral-700 dark:text-neutral-400">
          {data.category?.name}
        </p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between text-green-500 dark:text-green-300">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;

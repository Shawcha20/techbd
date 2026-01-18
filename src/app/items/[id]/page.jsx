"use client";
import { Button } from "@/Components/ui/button";
import { products } from "@/data/product";
import { showConfirm, showSuccess, showWarning } from "@/Utils/Notificationi";
import { motion } from "framer-motion";

import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

export default function ItemDetailPage() {
  const params = useParams();
  const id = parseInt(params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
const handleCart = async () => {
  const result = await showConfirm(
    "Do you want to add this item to cart?",
    "Add to Cart"
  );

  if (result.isConfirmed) {
    // add to cart logic here
    showSuccess("Item added successfully");
  } else {
    showWarning("Action cancelled");
  }
};

const handleWishlist=async()=>{
    const result= await showConfirm("Want to add in your wishlist?","add to wishlist");
    if(result.isConfirmed)
    {
        showSuccess("Item added to wishlist");
    }
    else{
        showWarning("Action cancelled");
    }
}
  return (
    <div className="min-h-screen bg-white dark:bg-black py-12" >
      <motion.div
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Breadcrumb */}
        <motion.div variants={itemVariants} className="mb-8">
          <Link
            href="/items"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            ← Back to Products
          </Link>
        </motion.div>

        {/* Product Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden aspect-square"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Details */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col justify-center">
            <motion.div variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </motion.svg>
                  ))}
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    ({product.rating})
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {product.name}
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-bold text-green-600 dark:text-green-400">
                ${product.price}
              </span>
              <span className="text-lg text-gray-600 dark:text-gray-400 line-through">
                ${(product.price * 1.2).toFixed(2)}
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed"
            >
              {product.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 btn-primary py-3 font-semibold text-lg"
              >
                <Button onClick={()=>handleCart()}>
                Add to Cart
                </Button>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 btn-outline py-3 font-semibold text-lg"
              >
                <Button onClick={()=>handleWishlist()}>
                Add to Wishlist
              </Button>
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Delivery
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Free 2-3 Days
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Returns
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  30-Day Policy
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Warranty
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  1 Year
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Support
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  24/7 Available
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Related Products
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  variants={itemVariants}
                  className="card overflow-hidden hover:shadow-lg transition-shadow"
                  whileHover={{ y: -8 }}
                >
                  <Link href={`/items/${relatedProduct.id}`}>
                    <div className="relative w-full h-40 overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ${relatedProduct.price}
                      </div>
                    </div>
                  </Link>

                  <div className="p-4">
                    <Link href={`/items/${relatedProduct.id}`}>
                      <h3 className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <Link href={`/items/${relatedProduct.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-4 w-full btn-primary text-sm"
                      >
                        View Details
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}
      </motion.div>
    </div>
  );
}

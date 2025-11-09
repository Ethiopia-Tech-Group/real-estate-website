"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // All hooks must be called unconditionally, so we'll create them but conditionally use them
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  // Mobile layout - simple grid
  if (isMobile) {
    return (
      <div className="min-h-screen py-20 bg-black text-gray-100">
        <Header />
        <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.slice(0, 6).map((product) => (
              <MobileProductCard
                key={product.title}
                product={product}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/listings"
              className="inline-flex items-center gap-2 bg-primary text-secondary-background px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-medium"
            >
              View All Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout - parallax effect
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  return (
    <div
      ref={ref}
      className="h-[400vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto 
                 [perspective:1000px] [transform-style:preserve-3d] bg-black text-gray-100"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full bg-black text-white left-0 top-0">
      <h1 className="text-4xl md:text-7xl font-bold">
        Find Your Dream <br /> Property Today
      </h1>
      <p className="max-w-2xl text-lg md:text-xl mt-8 text-gray-300">
        Smart Realty Assistant helps you discover the perfect home with
        AI-powered recommendations, virtual tours, and expert agent support.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-start mt-8">
        <Link
          href="/listings"
          className="cursor-pointer bg-primary text-secondary-background px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors font-medium inline-flex items-center justify-center gap-2 text-base"
        >
          Browse Listings
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/tour"
          className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-secondary/5 transition-colors font-medium text-base"
        >
          View 3D Tours
        </Link>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0 rounded-xl overflow-hidden"
    >
      <a href={product.link} className="block">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0 brightness-75 group-hover/product:brightness-100 transition-all duration-300"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full bg-black/60 opacity-0 group-hover/product:opacity-90 transition-all duration-300"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-xl font-semibold transition-all duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};

// Simple mobile product card without parallax effects
export const MobileProductCard = ({
  product,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
}) => {
  return (
    <div className="group h-64 relative rounded-xl overflow-hidden shadow-lg">
      <a href={product.link} className="block h-full">
        <img
          src={product.thumbnail}
          className="object-cover object-center h-full w-full brightness-75 group-hover:brightness-100 transition-all duration-300"
          alt={product.title}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
        <h2 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
          {product.title}
        </h2>
      </a>
    </div>
  );
};
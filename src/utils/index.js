export const hero = [
    {
        icon: './icon/flower.webp',
        title: 'Premium Quality',
        description: 'Finest artificial flowers crafted with care.'
    },
    {
        icon: './icon/leafs.webp',
        title: 'Long Lasting',
        description: 'Beautiful blooms that last forever.'
    },
    {
        icon: './icon/home.webp',
        title: 'Perfect for Any Space',
        description: 'Ideal for home, office, or special occasions.'
    },
    {
        icon: './icon/gift.webp',
        title: 'Thoughtful Gift',
        description: 'Spread beauty and joy with every bouquet.'
    },
]

export const products = [
  {
    id: 1,
    name: 'Blush Peony Bouquet',
    price: 1899,
    originalPrice: 2399,
    discount: 21,
    rating: 4.5,
    reviews: 256,
    image: '/images/rose_collection.webp',
    category: 'Bouquets',
    isBestSeller: true,
  },
  {
    id: 2,
    name: 'Lily Grace Arrangement',
    price: 1699,
    originalPrice: 2149,
    discount: 21,
    rating: 4.5,
    reviews: 189,
    image: '/images/lily_collection.webp',
    category: 'Arrangements',
    isBestSeller: true,
  },
  {
    id: 3,
    name: 'Summer Bliss Bouquet',
    price: 1799,
    originalPrice: 2299,
    discount: 22,
    rating: 4.5,
    reviews: 214,
    image: '/images/mixed_bouquet.webp',
    category: 'Bouquets',
    isBestSeller: true,
  },
  {
    id: 4,
    name: 'White Elegance Bouquet',
    price: 1999,
    originalPrice: 2499,
    discount: 20,
    rating: 4.5,
    reviews: 178,
    image: '/images/hero_flowers.webp',
    category: 'Bouquets',
    isBestSeller: true,
  },
  {
    id: 5,
    name: 'Orchid Luxe Display',
    price: 2299,
    originalPrice: 2899,
    discount: 21,
    rating: 4.5,
    reviews: 143,
    image: '/images/orchid_collection.webp',
    category: 'Arrangements',
    isBestSeller: true,
  },
];

import { Rose, HandHeart, Truck, ShieldCheck } from 'lucide-react';
export const trustBadges = [
  {
    icon: Rose,
    title: 'Premium Quality',
    desc: 'Finest materials for a realistic & lasting beauty.',
  },
  {
    icon: HandHeart,
    title: 'Handcrafted',
    desc: 'Each arrangement is crafted with care and perfection.',
  },
  {
    icon: Truck,
    title: 'Fast & Safe Delivery',
    desc: 'Secure packaging and on-time delivery at your doorstep.',
  },
  {
    icon: ShieldCheck ,
    title: 'Hassle-Free Returns',
    desc: 'Easy returns and 100% customer satisfaction guarantee.',
  },
];


export const features = [
  {
    title: 'Premium Quality',
    description: 'Finest materials and craftsmanship for a real-touch, natural look that lasts forever.',
    icon: "./icon/why-flower.webp",
  },
  {
    title: 'Everlasting Beauty',
    description: 'Designed to stay fresh and vibrant year after year – no watering, no wilting.',
    icon: "./icon/why-leaf.webp",
  },
  {
    title: 'Perfect for Every Space',
    description: 'From homes and offices to events and celebrations – we have the perfect bloom for every corner.',
    icon: "./icon/why-home.webp",
  },
  {
    title: 'Thoughtful Gifting',
    description: 'Beautifully arranged bouquets that make every moment truly special.',
    icon: "./icon/why-gift.webp",
  },
  {
    title: 'Trusted by Thousands',
    description: 'Loved by 5,000+ happy customers for our quality, service and reliability.',
    icon: "./icon/trust.webp",
  },
  {
    title: 'Sustainable Choice',
    description: 'Eco-friendly practices and reusable beauty that\'s better for you and the planet.',
    icon: "./icon/hand.webp",
  },
];

export const reviews = [
  {
    id: 1,
    stars: 5,
    text: 'The arrangement looks so real and adds the perfect touch of elegance to my living room. Great quality and beautifully packaged!',
    name: 'Priya Sharma',
    avatar: '/images/priya_avatar.webp',
    productImg: '/images/rose_collection.webp',
  },
  {
    id: 2,
    stars: 5,
    text: 'Anom Flora never disappoints! The flowers are stunning, long-lasting, and make my dining space feel so warm and inviting.',
    name: 'Rohit Mehta',
    avatar: '/images/rohit_avatar.webp',
    productImg: '/images/mixed_bouquet.webp',
  },
  {
    id: 3,
    stars: 5,
    text: 'Beautiful craftsmanship and premium quality. It completely transformed the look of my office reception area.',
    name: 'Neha Verma',
    avatar: '/images/neha_avatar.webp',
    productImg: '/images/lily_collection.webp',
  },
];


import { Heart, Leaf } from 'lucide-react';
export const stats = [
  {
    icon: Heart,
    label: 'Beautiful Designs',
    sub: 'That suit every space',
  },
  {
    icon: Leaf,
    label: 'Premium Quality',
    sub: 'Made to last, made to love',
  },
  {
    icon: ShieldCheck,
    label: 'Loved & Trusted',
    sub: 'By thousands of customers',
  },
];
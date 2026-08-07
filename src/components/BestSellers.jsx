import React, { useState, useRef } from 'react';
import { Heart, ShoppingBag, ArrowRight, Star, Rose, HandHeart, Truck, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products, trustBadges } from '../utils';


gsap.registerPlugin(ScrollTrigger);

const categories = ['All Collection', 'Bouquets', 'Arrangements', 'Potted Plants', 'Centerpieces', 'New Arrivals'];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={star <= Math.floor(rating) ? 'text-amber-400 fill-amber-400' : star - 0.5 <= rating ? 'text-amber-400 fill-amber-200' : 'text-gray-300 fill-gray-200'}
        />
      ))}
    </div>
  );
}

const BestSellers = () => {
  const [activeCategory, setActiveCategory] = useState('All Collection');
  const [wishlist, setWishlist] = useState([]);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
  };

  const filtered = activeCategory === 'All Collection'
    ? products
    : products.filter((p) => p.category === activeCategory);

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
      }
    );

    gsap.fromTo(
      cardsRef.current.filter(Boolean),
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(160deg, #fdf6ee 0%, #f5ede0 50%, #fdf6ee 100%)' }}>

      {/* Decorative botanical silhouettes */}
      <div className="absolute bottom-0 left-0 w-48 lg:w-64 h-full pointer-events-none select-none opacity-10 scale-x-[-1] -translate-x-3/10 -translate-y-1/4 " aria-hidden="true">
        <img src="../../images/flower-one.png" className='size-full object-contain'/>
      </div>
      <div className="absolute top-0 right-0 translate-x-3/10 -translate-y-1/4 w-48 lg:w-94 h-full pointer-events-none select-none opacity-20" aria-hidden="true">
        <img src="../../images/flower-one.png" className='size-full object-contain'/>
      </div>
      

      <div className="container mx-auto px-4 lg:px-8 relative">

        {/* ── Header ── */}
        <div ref={headerRef} className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src="../../icon/leaf-icon.png" className='w-8 -scale-x-90' alt="" />
            <p className="text-xs tracking-[0.25em] uppercase font-semibold" style={{ color: '#C08D34' }}>
              Our Best Sellers
            </p>
            <img src="../../icon/leaf-icon.png" className='w-8' alt="" />
          </div>

          <h2 className="font-elegant text-center lg:pl-10 text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-tight">
            Handpicked Blooms,
          </h2>
          <h2 className="font-script text-4xl md:text-5xl lg:text-6xl leading-tight mt-1 text-prime-yellow" >
            Loved the Most
          </h2>

          <p className="text-warm-gray text-sm md:text-base mt-4 max-w-md mx-auto leading-relaxed">
            Our most loved artificial flower arrangements — timeless beauty that customers can't get enough of.
          </p>

          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-primary"></div>
            <img src="../../icon/patel-leafs.png" className='w-6' alt="" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-primary" ></div>
          </div>

          {/* View All — top right */}
          <div className="flex justify-end mt-[-2.5rem] max-md:hidden">
            <button className="flex items-center gap-2 text-sm font-medium text-charcoal border border-charcoal/30 px-5 py-2.5 rounded-full hover:bg-charcoal hover:text-white transition-all duration-300 group">
              View All Collection
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* ── Category Tabs ── */}
        <div className="flex items-center gap-1 md:gap-2 justify-center flex-wrap mb-10">
          {categories.map((cat, i) => (
            <React.Fragment key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'text-white shadow-md'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
                style={activeCategory === cat ? { background: '#47482D' } : {}}
              >
                {cat}
              </button>
              {i < categories.length - 1 && (
                <span className="text-charcoal/20 text-xs hidden md:block">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ── Product Cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {filtered.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image area */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Best Seller badge */}
                {product.isBestSeller && (
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1.5 rounded-md text-white text-[9px] font-bold tracking-wider leading-tight text-center"
                    style={{ background: '#C08D34' }}
                  >
                    BEST<br/>SELLER
                  </div>
                )}

                {/* Wishlist */}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-200"
                >
                  <Heart
                    size={15}
                    className={`transition-colors duration-200 ${wishlist.includes(product.id) ? 'fill-rose-500 text-rose-500' : 'text-charcoal/60'}`}
                  />
                </button>

                {/* Quick add overlay */}
                <div className="absolute inset-x-0 bottom-0 h-14 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" style={{ background: 'linear-gradient(to top, rgba(71,72,45,0.9), transparent)' }}>
                  <button className="flex items-center gap-2 text-white text-xs font-medium px-4 py-2 rounded-full border border-white/40 hover:bg-white/20 transition-colors">
                    <ShoppingBag size={13} />
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-3.5">
                <h3 className="font-semibold text-sm text-charcoal leading-snug mb-2 group-hover:text-sage transition-colors duration-200">
                  {product.name}
                </h3>

                {/* Price row */}
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className="text-sm font-bold text-charcoal">₹{product.price.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-warm-gray line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded text-white"
                    style={{ background: '#C08D34' }}
                  >
                    {product.discount}% OFF
                  </span>
                </div>

                {/* Rating + Cart */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <StarRating rating={product.rating} />
                    <span className="text-[10px] text-warm-gray">({product.reviews})</span>
                  </div>
                  <button
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform duration-200"
                    style={{ background: '#47482D' }}
                  >
                    <ShoppingBag size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all — mobile */}
        <div className="flex justify-center mt-8 md:hidden">
          <button className="flex items-center gap-2 text-sm font-medium text-charcoal border border-charcoal/30 px-6 py-3 rounded-full hover:bg-charcoal hover:text-white transition-all duration-300 group">
            View All Collection
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* ── Trust Badges ── */}
        <div
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 rounded-2xl px-10 py-8"
          style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(196,162,101,0.15)' }}
        >
          {trustBadges.map((badge, i) => (
            <div key={i} className={`flex flex-col items-center text-center gap-3 ${i !== 0 && 'lg:border-l border-charcoal/20 pt-4 lg:pt-0 lg:pl-6'} ${i > 1 && 'border-t lg:border-t-0 border-charcoal/20 pt-4 lg:pt-0'}`}>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #fdf6ee, #f5ede0)', color: '#47482D', border: '1px solid rgba(196,162,101,0.25)' }}
              >
                <badge.icon size={20} strokeWidth={1} />
              </div>
              <div>
                <p className="font-semibold text-sm text-charcoal">{badge.title}</p>
                <p className="text-xs text-warm-gray mt-1 leading-relaxed">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSellers;

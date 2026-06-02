'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, ChevronLeft, ChevronRight, Star, Printer, Clock, Award, DollarSign, 
  Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Menu, X, ArrowUpRight, ArrowUp, Twitter, Youtube, Upload, QrCode, Download, FlipHorizontal, ShoppingCart, Save
} from 'lucide-react';

import stripImg0 from '../src/assets/images/regenerated_image_1780228801973.jpg';
import stripImg1 from '../src/assets/images/regenerated_image_1780228795841.jpg';
import stripImg2 from '../src/assets/images/regenerated_image_1780228795053.jpg';
import stripImg3 from '../src/assets/images/regenerated_image_1780228783796.jpg';
import stripImg4 from '../src/assets/images/regenerated_image_1780228785299.jpg';
import stripImg5 from '../src/assets/images/regenerated_image_1780228786986.jpg';
import stripImg6 from '../src/assets/images/regenerated_image_1780228788408.jpg';
import stripImg7 from '../src/assets/images/regenerated_image_1780228790279.jpg';
import stripImg8 from '../src/assets/images/regenerated_image_1780228792779.jpg';
import stripImg9 from '../src/assets/images/regenerated_image_1780228794252.jpg';
import stripImg10 from '../src/assets/images/regenerated_image_1780228797210.jpg';
import stripImg11 from '../src/assets/images/regenerated_image_1780228799436.jpg';

const stripImages = [
  stripImg0, stripImg1, stripImg2, stripImg3,
  stripImg4, stripImg5, stripImg6, stripImg7,
  stripImg8, stripImg9, stripImg10, stripImg11
];

import catImgBusinessCards from '../src/assets/images/regenerated_image_1780231053085.jpg';
import catImgVisitingCards from '../src/assets/images/regenerated_image_1780310914327.webp';
import catImgBanners from '../src/assets/images/regenerated_image_1780231054649.jpg';
import catImgIDCards from '../src/assets/images/regenerated_image_1780231056081.png';
import catImgStickers from '../src/assets/images/regenerated_image_1780389072515.jpg';
import catImgBrochures from '../src/assets/images/regenerated_image_1780320168522.jpg';
import catImgStandees from '../src/assets/images/regenerated_image_1780389073465.jpg';
import catImgFlyers from '../src/assets/images/regenerated_image_1780231067552.jpg';
import catImgLamination from '../src/assets/images/regenerated_image_1780231069410.jpg';

import bcMainImg from '../src/assets/images/regenerated_image_1780386492993.jpg';
import bcThumb1 from '../src/assets/images/regenerated_image_1780386496219.jpg';
import bcThumb2 from '../src/assets/images/regenerated_image_1780386496979.jpg';
import bcThumb3 from '../src/assets/images/regenerated_image_1780386498035.jpg';
import bcThumb4 from '../src/assets/images/regenerated_image_1780386500599.jpg';

import prodImg0 from '../src/assets/images/regenerated_image_1780231799172.jpg';
import prodImg1 from '../src/assets/images/regenerated_image_1780231801243.jpg';
import prodImg2 from '../src/assets/images/regenerated_image_1780231803416.jpg';
import prodImg3 from '../src/assets/images/regenerated_image_1780231804825.png';
import prodImg4 from '../src/assets/images/regenerated_image_1780231807552.jpg';
import prodImg5 from '../src/assets/images/regenerated_image_1780231808926.jpg';

import subImg0 from '../src/assets/images/regenerated_image_1780312022905.jpg';
import subImg1 from '../src/assets/images/regenerated_image_1780312024636.jpg';
import subImg2 from '../src/assets/images/regenerated_image_1780233008234.jpg';
import subImg3 from '../src/assets/images/regenerated_image_1780232996147.jpg';
import subImg4 from '../src/assets/images/regenerated_image_1780233009209.jpg';
import subImg5 from '../src/assets/images/regenerated_image_1780233010720.png';
import subImg6 from '../src/assets/images/regenerated_image_1780233014316.jpg';
import subImg7 from '../src/assets/images/regenerated_image_1780233015316.jpg';

const SUB_IMAGES = [
  subImg0, subImg1, subImg2, subImg3, subImg4, subImg5, subImg6, subImg7
];

import bannerSubImg0 from '../src/assets/images/regenerated_image_1780233818032.jpg';
import bannerSubImg1 from '../src/assets/images/regenerated_image_1780233820266.jpg';
import bannerSubImg2 from '../src/assets/images/regenerated_image_1780233822864.jpg';
import bannerSubImg3 from '../src/assets/images/regenerated_image_1780233825008.jpg';
import bannerSubImg4 from '../src/assets/images/regenerated_image_1780233827565.jpg';
import bannerSubImg5 from '../src/assets/images/regenerated_image_1780233829952.jpg';

const BANNER_SUB_IMAGES = [
  bannerSubImg0, bannerSubImg1, bannerSubImg2, bannerSubImg3, bannerSubImg4, bannerSubImg5
];

import idcardSubImg0 from '../src/assets/images/regenerated_image_1780234752885.jpg';
import idcardSubImg1 from '../src/assets/images/regenerated_image_1780234754614.png';
import idcardSubImg2 from '../src/assets/images/regenerated_image_1780234757685.png';
import idcardSubImg3 from '../src/assets/images/regenerated_image_1780234760536.jpg';
import idcardSubImg4 from '../src/assets/images/regenerated_image_1780234762016.jpg';

import posterSubImg0 from '../src/assets/images/regenerated_image_1780316872825.jpg';
import posterSubImg1 from '../src/assets/images/regenerated_image_1780316874390.jpg';
import posterSubImg2 from '../src/assets/images/regenerated_image_1780316876010.webp';

import letterheadSubImg0 from '../src/assets/images/regenerated_image_1780317149338.jpg';
import letterheadSubImg1 from '../src/assets/images/regenerated_image_1780317151912.jpg';

import stampSubImg0 from '../src/assets/images/regenerated_image_1780385452642.jpg';
import stampSubImg1 from '../src/assets/images/regenerated_image_1780384794550.jpg';
import stampSubImg2 from '../src/assets/images/regenerated_image_1780384800731.jpg';

import bookSubImg0 from '../src/assets/images/regenerated_image_1780317713120.jpg';
import bookSubImg1 from '../src/assets/images/regenerated_image_1780317715106.jpg';
import bookSubImg2 from '../src/assets/images/regenerated_image_1780317717360.jpg';

import tshirtSubImg0 from '../src/assets/images/regenerated_image_1780389713646.webp';
import tshirtSubImg1 from '../src/assets/images/regenerated_image_1780389714597.webp';
import tshirtSubImg2 from '../src/assets/images/regenerated_image_1780387702986.jpg';

import altImg1 from '../src/assets/images/regenerated_image_1780310300847.webp';
import altImg2 from '../src/assets/images/regenerated_image_1780310302524.jpg';
import altImg3 from '../src/assets/images/regenerated_image_1780310304298.jpg';

import matteAltImg1 from '../src/assets/images/regenerated_image_1780298297817.jpg';
import matteAltImg2 from '../src/assets/images/regenerated_image_1780298298742.webp';
import matteAltImg3 from '../src/assets/images/regenerated_image_1780298300128.jpg';

import catImgPosters from '../src/assets/images/regenerated_image_1780309896809.jpg';
import catImgLetterheads from '../src/assets/images/regenerated_image_1780309898836.jpg';
import catImgStamps from '../src/assets/images/regenerated_image_1780309899525.jpg';
import catImgBooks from '../src/assets/images/regenerated_image_1780309901215.jpg';
import catImgMugs from '../src/assets/images/regenerated_image_1780309902889.jpg';
import catImgTShirts from '../src/assets/images/regenerated_image_1780309905416.jpg';
import catImgBannersFlex from '../src/assets/images/regenerated_image_1780309906672.webp';
import catImgCorporateGifts from '../src/assets/images/regenerated_image_1780309908077.jpg';
import catImgIDCards2 from '../src/assets/images/regenerated_image_1780309909024.png';
import catImgWeddingCards from '../src/assets/images/regenerated_image_1780309911836.jpg';
import catImgPhotoFrames from '../src/assets/images/regenerated_image_1780309912537.webp';

import collageImg1 from '../src/assets/images/regenerated_image_1780297616979.jpg';
import collageImg3 from '../src/assets/images/regenerated_image_1780297614637.png';

const IDCARD_SUB_IMAGES = [
  idcardSubImg0, idcardSubImg1, idcardSubImg2, idcardSubImg3, idcardSubImg4
];

const POSTER_SUB_IMAGES = [
  posterSubImg0, posterSubImg1, posterSubImg2
];

const LETTERHEAD_SUB_IMAGES = [
  letterheadSubImg0, letterheadSubImg1
];

const STAMP_SUB_IMAGES = [
  stampSubImg0, stampSubImg1, stampSubImg2
];

const BOOK_SUB_IMAGES = [
  bookSubImg0, bookSubImg1, bookSubImg2
];

const TSHIRT_SUB_IMAGES = [
  tshirtSubImg0, tshirtSubImg1, tshirtSubImg2
];

const PRODUCT_IMAGES = [
  prodImg0, prodImg1, prodImg2, prodImg3, prodImg4, prodImg5
];

const CATEGORY_IMAGES: Record<string, any> = {
  'Business Cards': catImgBusinessCards,
  'Visiting Cards': catImgVisitingCards,
  'Flyers': catImgFlyers,
  'Brochures': catImgBrochures,
  'Posters': catImgPosters,
  'Letterheads': catImgLetterheads,
  'Stamps': catImgStamps,
  'Books & Hardbinding': catImgBooks,
  'T-Shirts Printing': catImgTShirts,
  'Mugs Printing': catImgMugs,
  'Corporate Gifts': catImgCorporateGifts,
  'Banners & Flex': catImgBannersFlex,
  'ID Cards': catImgIDCards2,
  'Wedding Cards': catImgWeddingCards,
  'Photo Frames': catImgPhotoFrames
};

// --- DATA ---
const MEGA_SERVICES = [
  'Business Cards', 'Visiting Cards', 'Flyers', 'Brochures', 'Posters', 
  'Letterheads', 'Stamps', 'Books & Hardbinding', 'T-Shirts Printing', 
  'Mugs Printing', 'Corporate Gifts', 'Banners & Flex', 'ID Cards', 
  'Wedding Cards', 'Photo Frames'
];

const CATEGORY_DATA: Record<string, any> = {
  'Business Cards': {
    title: 'Business Cards',
    desc: 'Premium quality cards for professional branding.',
    subs: ['Premium Business Cards', 'Matte Finish Cards', 'Glossy Business Cards', 'Spot UV Cards', 'Texture Cards', 'Gold Foil Cards']
  },
  'Visiting Cards': {
    title: 'Visiting Cards',
    desc: 'Luxury visiting card stack with modern branding.',
    subs: ['Luxury Visiting Cards', 'Standard Cards']
  },
  'Flyers': {
    title: 'Flyers',
    desc: 'Eye-catching promotional flyers for marketing campaigns.',
    subs: ['A4 Flyers', 'A5 Flyers', 'Glossy Flyers']
  },
  'Brochures': {
    title: 'Brochures',
    desc: 'Elegant brochures for company presentations.',
    subs: ['Bi-fold Brochures', 'Tri-fold Brochures', 'Corporate Brochures']
  },
  'Posters': {
    title: 'Posters',
    desc: 'High-resolution posters for advertising and events.',
    subs: ['A3 Posters', 'A2 Posters', 'Event Posters']
  },
  'Letterheads': {
    title: 'Letterheads',
    desc: 'Professional company letterhead stationery set.',
    subs: ['Corporate Letterheads', 'Textured Letterheads']
  },
  'Stamps': {
    title: 'Stamps',
    desc: 'Custom rubber stamp with ink impression.',
    subs: ['Self-Inking Stamps', 'Round Stamps', 'Date Stamps']
  },
  'Books & Hardbinding': {
    title: 'Books & Hardbinding',
    desc: 'Durable and premium book printing solutions.',
    subs: ['Hardbound Books', 'Spiral Binding', 'Soft Cover Books']
  },
  'T-Shirts Printing': {
    title: 'T-Shirts Printing',
    desc: 'Custom printed t-shirts displayed on models.',
    subs: ['Polo T-Shirts', 'Round Neck', 'Sublimation T-Shirts']
  },
  'Mugs Printing': {
    title: 'Mugs Printing',
    desc: 'Personalized photo mugs with custom designs.',
    subs: ['White Mugs', 'Magic Mugs', 'Colored Mugs']
  },
  'Corporate Gifts': {
    title: 'Corporate Gifts',
    desc: 'Customized gifts for businesses and events.',
    subs: ['Custom Pens', 'Diaries', 'Gift Boxes']
  },
  'Banners & Flex': {
    title: 'Banners & Flex',
    desc: 'Large outdoor advertising banners.',
    subs: ['Flex Banners', 'Vinyl Banners', 'Standees']
  },
  'ID Cards': {
    title: 'ID Cards',
    desc: 'Professional employee ID cards with lanyards.',
    subs: ['PVC ID Cards', 'RFID Cards', 'Lanyards']
  },
  'Wedding Cards': {
    title: 'Wedding Cards',
    desc: 'Elegant wedding invitation card collection.',
    subs: ['Premium Wedding Cards', 'Designer Cards']
  },
  'Photo Frames': {
    title: 'Photo Frames',
    desc: 'Customized photo frames with family pictures.',
    subs: ['Wooden Frames', 'Glass Frames', 'Collage Frames']
  }
};

const REVIEWS = [
  { text: "DIGIMAX PRINTING always delivers perfectly vibrant business cards for our entire agency.", author: "Rajesh S.", company: "TechCorp", img: "face1" },
  { text: "Fastest turnaround for flex banners! I needed promotional materials urgently, premium quality.", author: "Meera K.", company: "EventPro", img: "face2" },
  { text: "The die-cut stickers for our product packaging were flawless. Incredible matte finish.", author: "Anil V.", company: "OrganicBites", img: "face3" }
];

export default function ClientApp() {
  const [view, setView] = useState<'home' | 'category' | 'product'>('home');
  const [activeItem, setActiveItem] = useState<{cat?: string, sub?: string} | null>(null);

  const navigateHome = () => { setView('home'); window.scrollTo(0, 0); };
  const navigateCategory = (cat: string) => { setActiveItem({cat}); setView('category'); window.scrollTo(0, 0); };
  const navigateProduct = (cat: string, sub: string) => { setActiveItem({cat, sub}); setView('product'); window.scrollTo(0, 0); };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white">
      <Navbar onNavCategory={navigateCategory} onNavHome={navigateHome} />
      
      <main className="flex-grow">
        {view === 'home' && <HomeView onNavCategory={navigateCategory} />}
        {view === 'category' && activeItem?.cat && CATEGORY_DATA[activeItem.cat] && (
          <CategoryView category={activeItem.cat} data={CATEGORY_DATA[activeItem.cat]} onNavProduct={navigateProduct} onNavHome={navigateHome} />
        )}
        {view === 'category' && activeItem?.cat && !CATEGORY_DATA[activeItem.cat] && (
          <div className="py-32 text-center text-gray-500"><h3>Coming Soon: {activeItem.cat}</h3><button onClick={navigateHome} className="mt-4 text-brand-700">Go Back</button></div>
        )}
        {view === 'product' && activeItem?.cat && activeItem?.sub && (
          <ProductView category={activeItem.cat} product={activeItem.sub} onNavCategory={navigateCategory} onNavHome={navigateHome} />
        )}
      </main>

      <InteractiveDesigner />
      <FloatingButtons />
      <GoogleMapSection />
      <Footer />
    </div>
  );
}

function GoogleMapSection() {
  return (
    <section id="google-map" className="w-full h-80 relative border-t border-gray-200 bg-gray-50">
      <iframe 
        title="Google Map"
        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Print%20shop%20F-2%20Near%20Malviya%20Nagar%20Metro%20south%20delhi%20110017+(DIGIMAX%20PRINTING)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%" 
        height="100%" 
        frameBorder="0" 
        style={{ border: 0 }} 
        allowFullScreen 
        aria-hidden="false" 
        tabIndex={0}
      />
    </section>
  );
}

function FitText({ text, className = "", align = "left", style = {} }: { text: string, className?: string, align?: "left" | "right" | "center", style?: React.CSSProperties }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const currContainer = containerRef.current;
    const currText = textRef.current;
    
    if (currContainer && currText) {
      currText.style.transform = 'none'; // reset before measure
      const cw = currContainer.clientWidth;
      const tw = currText.offsetWidth;
      
      if (tw > cw && tw > 0) {
        setScale(cw / tw);
      } else {
        setScale(1);
      }
    }
  }, [text]);

  const origin = align === 'center' ? 'center center' : align === 'right' ? 'right center' : 'left center';
  const flexAlign = align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start';

  return (
    <div ref={containerRef} className={`w-full flex overflow-hidden items-center ${flexAlign} ${className}`} style={style}>
      <span ref={textRef} style={{ transform: `scale(${scale})`, transformOrigin: origin, whiteSpace: 'nowrap' }} className="inline-block">
        {text}
      </span>
    </div>
  );
}

function InteractiveDesigner() {
  const [type, setType] = useState('Business Card');
  const [fontFamily, setFontFamily] = useState('font-sans');
  const [colorTheme, setColorTheme] = useState({ bg: 'bg-[#1a1a1a]', text: 'text-[#d4af37]', label: 'Luxury Black' });
  const [paperFinish, setPaperFinish] = useState('Matte');
  const [details, setDetails] = useState({
    name: 'Suresh Kumar',
    designation: 'CEO & Founder',
    phone: '+91 82878 75040',
    email: 'print.digimax@gmail.com',
    company: 'DIGIMAX PRINTING',
    website: 'www.digimaxprinting.com',
    frontExtra: 'Industrial Area, Phase 1, New Delhi',
    backExtra: 'Premium Printing Services\nSatisfaction Guaranteed.',
    logoSize: 60,
    logoShape: 'square',
    showQr: true
  });
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showGuides, setShowGuides] = useState(true);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const THEMES = [
    { label: 'Luxury Black', bg: 'bg-[#1a1a1a]', text: 'text-[#d4af37]' },
    { label: 'Premium Gold', bg: 'bg-[#d4af37]', text: 'text-[#1a1a1a]' },
    { label: 'Corporate Blue', bg: 'bg-[#0f2439]', text: 'text-[#f3e5ab]' },
    { label: 'Minimalist Beige', bg: 'bg-[#F5F5DC]', text: 'text-[#333333]' },
    { label: 'Modern Khaki', bg: 'bg-[#C3B091]', text: 'text-[#222222]' },
  ];

  const getContainerStyle = () => {
    let base = `shadow-2xl border border-white/10 flex relative overflow-hidden ${fontFamily} transition-colors duration-500 `;
    if (type === 'Business Card') return base + 'w-[420px] min-w-[420px] h-[240px] min-h-[240px] shrink-0 rounded-[4px] flex-col justify-center p-[24px] mx-auto';
    if (type === 'ID Card') return base + 'w-[250px] aspect-[1/1.58] rounded-xl flex-col p-6 mx-auto';
    if (type === 'Sticker') return base + 'w-[300px] aspect-square rounded-full flex-col justify-center items-center text-center p-8 mx-auto';
    return base;
  };

  const renderPaperFinish = () => {
    if (type !== 'Business Card') return null;
    return (
      <div className="absolute inset-0 z-40 pointer-events-none rounded-inherit">
        {paperFinish === 'Matte' && (
           <div className="absolute inset-0 bg-white/5 opacity-40 mix-blend-overlay" style={{ filter: 'contrast(0.9) brightness(0.95)', backdropFilter: 'blur(0.2px)' }}></div>
        )}
        {paperFinish === 'Glossy' && (
           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-60 mix-blend-overlay"></div>
        )}
        {paperFinish === 'Velvet' && (
           <div className="absolute inset-0 bg-black/10 opacity-60 mix-blend-multiply" style={{ backdropFilter: 'blur(0.5px)', filter: 'contrast(1.1) brightness(0.9)' }}></div>
        )}
        {paperFinish === 'Textured' && (
           <div className="absolute inset-0 opacity-20 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
        )}
      </div>
    );
  };

  const renderFrontside = () => {
    const isSticker = type === 'Sticker';
    const isId = type === 'ID Card';
    
    return (
      <div className={`${getContainerStyle()} ${colorTheme.bg} ${colorTheme.text} w-full h-full absolute inset-0`} style={{ backfaceVisibility: 'hidden' }}>
        {renderPaperFinish()}
        {type === 'Business Card' && showGuides && (
          <div className="absolute inset-0 pointer-events-none z-50">
            <div className="absolute inset-[15px] border-[1.5px] border-green-500 border-dashed opacity-80" title="Safe Area"></div>
            <div className="absolute inset-0 border-[1.5px] border-red-500 opacity-80" title="Bleed/Cut Area"></div>
          </div>
        )}
        <div className={`relative z-10 h-full flex w-full ${isSticker || isId ? 'flex-col items-center justify-center' : 'flex-col'}`}>
          
          <div className={`flex w-full ${isSticker || isId ? 'flex-col items-center text-center mb-6' : 'justify-between items-start mb-6'}`}>
             {!isSticker && !isId && (
               <div className="w-[60%] flex flex-col items-start">
                 <FitText align="left" text={details.company || 'Company Name'} className="font-black text-xl tracking-wider uppercase leading-tight" />
                 <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 mt-1">Design Studio</p>
               </div>
             )}
             {(isSticker || isId) && (
                <FitText align="center" text={details.company || 'Company Name'} className={`font-black uppercase tracking-wider mt-2 w-full ${isSticker ? 'text-2xl' : 'text-xl'}`} />
             )}
          </div>

          <div className={`${isSticker ? 'mt-2 text-center' : 'mt-auto w-full flex justify-between items-end'}`}>
            
            <div className={`${isId ? 'text-center w-full' : 'w-[65%]'}`}>
              {!isSticker && (
                <div className="w-full flex flex-col">
                  <FitText align={isId ? 'center' : 'left'} text={details.name || 'Your Name'} className={`font-bold ${isId ? 'text-2xl mb-1' : 'text-xl uppercase tracking-wide'}`} />
                  <FitText align={isId ? 'center' : 'left'} text={details.designation || 'Designation'} className={`font-medium mb-4 opacity-80 ${isId ? 'text-lg' : 'text-sm'}`} />
                </div>
              )}
              
              <div className={`mt-4 space-y-1.5 ${isSticker ? 'text-xs' : 'text-[11px] font-medium opacity-90'} w-full overflow-hidden`}>
                {details.phone && <div className={`flex items-center gap-2 w-full min-w-0 ${isSticker || isId ? 'justify-center' : ''}`}><Phone className="w-3.5 h-3.5 shrink-0 opacity-80"/> <FitText align={isSticker || isId ? 'center' : 'left'} text={details.phone} className="flex-1" /></div>}
                {details.email && <div className={`flex items-center gap-2 w-full min-w-0 ${isSticker || isId ? 'justify-center' : ''}`}><Mail className="w-3.5 h-3.5 shrink-0 opacity-80"/> <FitText align={isSticker || isId ? 'center' : 'left'} text={details.email} className="flex-1" /></div>}
                {details.website && <div className={`flex items-center gap-2 w-full min-w-0 ${isSticker || isId ? 'justify-center' : ''}`}><MapPin className="w-3.5 h-3.5 shrink-0 opacity-80"/> <FitText align={isSticker || isId ? 'center' : 'left'} text={details.website} className="flex-1" /></div>}
                {details.frontExtra && !isSticker && <div className="mt-3 opacity-70 whitespace-pre-wrap leading-tight w-full max-h-[32px] overflow-hidden truncate whitespace-nowrap">{details.frontExtra}</div>}
                {details.frontExtra && isSticker && <div className="mt-2 text-gray-800 font-medium whitespace-pre-wrap leading-tight w-full truncate whitespace-nowrap">{details.frontExtra}</div>}
              </div>
            </div>

            {!isSticker && !isId && details.showQr && (
              <div className="bg-white p-1.5 rounded-md shadow-sm">
                 <QrCode className="w-14 h-14 text-black"/>
              </div>
            )}
            
            {isId && details.showQr && (
              <div className="bg-white p-1.5 rounded-md shadow-sm mx-auto mt-6">
                 <QrCode className="w-16 h-16 text-black"/>
              </div>
            )}

          </div>
          
        </div>
      </div>
    );
  };

  const renderBackside = () => {
    return (
      <div className={`${getContainerStyle()} ${colorTheme.text === 'text-[#d4af37]' || colorTheme.text === 'text-[#f3e5ab]' ? 'bg-black text-white' : 'bg-white text-black'} items-center justify-center text-center p-8 w-full h-full absolute inset-0`} style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
        {renderPaperFinish()}
        {type === 'Business Card' && showGuides && (
          <div className="absolute inset-0 pointer-events-none z-50">
            <div className="absolute inset-[15px] border-[1.5px] border-green-500 border-dashed opacity-80" title="Safe Area"></div>
            <div className="absolute inset-0 border-[1.5px] border-red-500 opacity-80" title="Bleed/Cut Area"></div>
          </div>
        )}
         <div className="w-full text-center">
           <FitText align="center" text={details.company || 'Company Name'} className={`font-black ${type==='ID Card' ? 'text-2xl' : 'text-xl'} tracking-widest uppercase mb-4 opacity-100 text-center w-full`} />
         </div>
         <div className="w-full max-h-[60px] overflow-hidden">
           <p className="whitespace-pre-wrap text-sm opacity-70 leading-relaxed mx-auto max-w-xs truncate whitespace-nowrap">{details.backExtra}</p>
         </div>
         
         {type === 'ID Card' && (
           <div className="mt-8 border-t border-gray-400/30 pt-4 w-full text-xs font-bold uppercase tracking-wider opacity-60">
             If found, please return to office
           </div>
         )}
      </div>
    );
  };

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden" id="designer">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4af37]/5 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="text-center mb-16">
          <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-sm mb-4 inline-block">Design Online</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
            Design Your <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#f3e5ab]">Professional Card</span> in Minutes
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            1000+ templates. Front & back editing. AI design suggestions. Premium luxury themes. Customize everything.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Controls / Form */}
          <div className="w-full lg:w-[45%] bg-[#141414] border border-[#2a2a2a] rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col gap-6 sticky top-24">
            
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-3 hover:text-white transition-colors">Select Product Format</label>
              <select 
                value={type} onChange={(e) => setType(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-[#333333] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] font-medium transition-colors"
              >
                <option value="Business Card">Business Card (Standard 3.5&quot; x 2&quot;)</option>
                <option value="ID Card">Corporate ID Card (Vertical)</option>
                <option value="Sticker">Custom Sticker (Circle)</option>
              </select>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-3">Premium Corporate Themes</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {THEMES.map(theme => (
                    <button 
                      key={theme.label}
                      onClick={() => { setColorTheme(theme); }}
                      className={`px-3 py-2 rounded-lg text-xs font-bold transition-all border ${colorTheme.label === theme.label ? 'border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-105' : 'border-[#333] hover:border-gray-500 text-gray-400'}`}
                      style={{ backgroundColor: theme.bg.replace('bg-[', '').replace(']', ''), color: theme.text.replace('text-[', '').replace(']', '') }}
                    >
                      {theme.label}
                    </button>
                  ))}
                </div>
                
                <label className="block text-sm font-bold text-gray-300 mb-2 mt-4">Typography Variant</label>
                <select 
                  value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#333333] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] font-medium text-sm transition-colors mb-4"
                >
                  <option value="font-sans">Modern Sans Serif</option>
                  <option value="font-serif">Luxury Serif</option>
                  <option value="font-mono">Technical Monospace</option>
                </select>

                {type === 'Business Card' && (
                  <>
                    <label className="block text-sm font-bold text-gray-300 mb-2 mt-2">Paper Finish (Texture)</label>
                    <select 
                      value={paperFinish} onChange={(e) => setPaperFinish(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-[#333333] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] font-medium text-sm transition-colors"
                    >
                      <option value="Matte">Standard Matte</option>
                      <option value="Glossy">High Gloss (Spot UV Effect)</option>
                      <option value="Velvet">Velvet Touch (Soft Feel)</option>
                      <option value="Textured">Textured Canvas</option>
                    </select>
                  </>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="col-span-full">
                  <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Company / Brand</label>
                  <input type="text" value={details.company} onChange={(e) => setDetails({ ...details, company: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333333] text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="e.g. DIGIMAX PRINTING" />
                </div>
                
                {type !== 'Sticker' && (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Your Name</label>
                      <input type="text" value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333333] text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Designation</label>
                      <input type="text" value={details.designation} onChange={(e) => setDetails({ ...details, designation: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333333] text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="CEO & Founder" />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Mobile Number</label>
                  <input type="text" value={details.phone} onChange={(e) => setDetails({ ...details, phone: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333333] text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="+91..." />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Email</label>
                  <input type="email" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333333] text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="hello@" />
                </div>
                <div className="col-span-full">
                  <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Website URL</label>
                  <input type="text" value={details.website} onChange={(e) => setDetails({ ...details, website: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333333] text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="www..." />
                </div>
              </div>

               <div>
                <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">{type === 'Sticker' ? 'Tagline / Extra Text' : 'Address / Front Details'}</label>
                <textarea rows={2} value={details.frontExtra} onChange={(e) => setDetails({ ...details, frontExtra: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333333] text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#d4af37] text-sm transition-colors" placeholder="Industrial Area, Phase 1..." />
              </div>
              
              {type !== 'Sticker' && (
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Back Side Details</label>
                    <label className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white text-xs">
                      <input type="checkbox" checked={details.showQr} onChange={(e) => setDetails({...details, showQr: e.target.checked})} className="accent-[#d4af37]" />
                      Add QR Code
                    </label>
                  </div>
                  <textarea rows={2} value={details.backExtra} onChange={(e) => setDetails({ ...details, backExtra: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333333] text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#d4af37] text-sm transition-colors" placeholder="Text for the reverse side..." />
                </div>
              )}
            </div>

          </div>

          {/* Previews & Actions */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6 pt-0">
            
             <div className="w-full flex flex-col items-center p-8 md:p-12 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] rounded-3xl shadow-2xl relative overflow-x-auto" style={{ perspective: '1200px' }}>
               <div className="absolute top-4 left-4 flex gap-2">
                 <span className="px-3 py-1 bg-[#d4af37] text-black text-[10px] font-black uppercase tracking-widest rounded-sm">HQ Preview</span>
                 <span className="px-3 py-1 bg-[#333] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm border border-white/10">3.5&quot;×2&quot; Print Safe</span>
               </div>
               
               {type === 'Business Card' && (
                 <div className="absolute top-4 right-4 flex gap-4 items-center">
                   {showGuides && (
                     <div className="flex gap-3 text-[10px] uppercase font-bold tracking-wider hidden sm:flex">
                       <span className="flex items-center gap-1.5"><div className="w-3 h-0 border-t-2 border-red-500"></div> Cut Line</span>
                       <span className="flex items-center gap-1.5"><div className="w-3 h-0 border-t-2 border-green-500 border-dashed"></div> Safe Area</span>
                     </div>
                   )}
                   <label className="flex items-center gap-2 cursor-pointer text-xs text-brand-300 bg-black/40 px-3 py-1 rounded-sm border border-brand-500/30 hover:bg-black/60 transition-colors select-none">
                     <input type="checkbox" checked={showGuides} onChange={e => setShowGuides(e.target.checked)} className="accent-[#d4af37] w-3.5 h-3.5 cursor-pointer"/>
                     <span className="font-semibold uppercase tracking-wider">Show Guides</span>
                   </label>
                 </div>
               )}
               
               <AnimatePresence mode="wait">
                 <motion.div 
                   key={type}
                   initial={{ opacity: 0, scale: 0.9 }} 
                   animate={{ opacity: 1, scale: 1 }} 
                   exit={{ opacity: 0, scale: 0.9 }} 
                   className="w-full flex justify-center py-12 relative min-w-[440px]"
                 >
                    <motion.div 
                       className="relative shadow-2xl"
                       style={{ 
                         width: type==='Business Card' ? '420px' : type==='ID Card' ? '250px' : '300px',
                         height: type==='Business Card' ? '240px' : type==='ID Card' ? '395px' : '300px',
                         minWidth: type==='Business Card' ? '420px' : 'auto',
                         minHeight: type==='Business Card' ? '240px' : 'auto',
                         transformStyle: 'preserve-3d',
                       }}
                       animate={{ rotateY: isFlipped ? 180 : 0 }}
                       transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                    >
                      {renderFrontside()}
                      {type !== 'Sticker' && renderBackside()}
                    </motion.div>
                 </motion.div>
               </AnimatePresence>

               {type !== 'Sticker' && (
                 <button 
                   onClick={() => setIsFlipped(!isFlipped)} 
                   className="mt-8 flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-[#d4af37] transition-all group"
                 >
                   <FlipHorizontal className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                   View {isFlipped ? 'Front' : 'Back'} Side
                 </button>
               )}
            </div>

            {/* Action Bar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-2xl flex flex-col justify-center">
                 <div className="flex justify-between items-center mb-2">
                   <h4 className="text-white font-bold tracking-wide">Instant Price</h4>
                   <span className="text-[#d4af37] font-black text-2xl">₹499</span>
                 </div>
                 <p className="text-gray-500 text-sm">For 100 Premium Copies. Includes free shipping.</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                 <button className="col-span-2 flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#f3e5ab] text-black font-black uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-[#d4af37]/20 transition-all">
                   <ShoppingCart className="w-5 h-5" /> Order Now Online
                 </button>
                 <button className="flex items-center justify-center gap-2 bg-[#1a1a1a] border border-[#333] hover:border-gray-500 text-white font-bold py-3 rounded-xl transition-all text-sm">
                   <Download className="w-4 h-4 text-[#d4af37]" /> Save PDF
                 </button>
                 <button className="flex items-center justify-center gap-2 bg-[#1a1a1a] border border-[#333] hover:border-gray-500 text-white font-bold py-3 rounded-xl transition-all text-sm">
                   <Save className="w-4 h-4 text-[#d4af37]" /> Edit Later
                 </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

function Navbar({ onNavCategory, onNavHome }: { onNavCategory: (c:string)=>void, onNavHome: ()=>void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={onNavHome}>
            <div className="flex flex-col">
              <span className="font-display font-black text-3xl md:text-5xl tracking-tighter text-brand-900 leading-none">DIGIMAX</span>
              <span className="font-sans font-bold text-xs md:text-sm tracking-[0.34em] text-brand-500 leading-none mt-1">PRINTING</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <button onClick={onNavHome} className="text-gray-600 hover:text-brand-900 font-bold text-lg transition-colors">Home</button>
            <div 
              className="relative py-8"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <button className="text-gray-600 hover:text-brand-900 font-bold text-lg transition-colors">Services</button>
              <AnimatePresence>
                {isServicesHovered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] bg-white border border-gray-100 shadow-2xl rounded-2xl p-6 grid grid-cols-3 gap-4 z-50"
                  >
                    {MEGA_SERVICES.map(s => (
                      <button 
                        key={s} onClick={() => { onNavCategory(s); setIsServicesHovered(false); }}
                        className="text-left text-gray-600 hover:text-brand-900 hover:bg-brand-50 rounded-lg p-2 text-sm font-medium transition-colors flex justify-between items-center group"
                      >
                         {s} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button onClick={() => { document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-600 hover:text-brand-900 font-bold text-lg transition-colors">Gallery</button>
            
            <div className="flex items-center gap-2 text-brand-900 font-bold text-lg">
              <Phone className="w-5 h-5 text-brand-600" /> +91 82878 75040
            </div>

            <a href="https://wa.me/918287875040?text=Hi%20DIGIMAX%20PRINTING,%20I%20would%20like%20to%20request%20a%20quote!" target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-full bg-brand-900 text-white font-bold text-lg hover:bg-brand-800 transition-all shadow-lg hover:shadow-brand-900/30 inline-block text-center cursor-pointer">
              Get Quote
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-brand-900">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-b border-gray-100 overflow-hidden">
             <div className="px-4 py-4 grid grid-cols-2 gap-2 bg-gray-50">
                {MEGA_SERVICES.map(s => (
                  <button 
                    key={s} onClick={() => { setMenuOpen(false); onNavCategory(s); }}
                    className="text-left text-sm font-medium text-gray-700 bg-white p-2 rounded border border-gray-100 hover:border-brand-300"
                  >
                    {s}
                  </button>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function FloatingButtons() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
      <button onClick={scrollToTop} className="w-12 h-12 bg-white text-gray-600 border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:text-brand-900 hover:border-brand-900 hover:scale-110 transition-all">
        <ArrowUp className="w-5 h-5" />
      </button>
      <a href="mailto:print.digimax@gmail.com" className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
        <Mail className="w-5 h-5" />
      </a>
      <a href="https://wa.me/918287875040" target="_blank" rel="noreferrer" className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all">
        <MessageCircle className="w-7 h-7" />
      </a>
      <a href="tel:+918287875040" className="w-12 h-12 bg-brand-900 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}

const PORTFOLIO_IMAGES = [
  { cat: 'Business Cards', img: 'bcardg1' }, { cat: 'Banners', img: 'bang1' },
  { cat: 'ID Cards', img: 'idg1' }, { cat: 'Stickers', img: 'stg1' },
  { cat: 'Brochures', img: 'brog1' }, { cat: 'Flyers', img: 'flyg1' },
  { cat: 'Standees', img: 'stang1' }, { cat: 'Business Cards', img: 'bcardg2' }
];

function HomeView({ onNavCategory }: { onNavCategory: (c:string)=>void }) {
  const [filter, setFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filters = ['All', 'Business Cards', 'Banners', 'ID Cards', 'Stickers', 'Brochures', 'Standees'];
  const filteredPortfolio = filter === 'All' ? PORTFOLIO_IMAGES : PORTFOLIO_IMAGES.filter(p => p.cat === filter);

  return (
    <>
      {/* HERO SECTION WITH REVISED COLORING */}
      <section className="bg-gradient-to-br from-green-50 to-gray-100 pt-16 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="relative">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Premium Digital <br/>Printing for <br/><span className="text-brand-700">Every Business.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Business Cards, Banners, ID Cards, Brochures, and Corporate Branding.
              Professional quality delivered with precision and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-xl bg-brand-900 text-white font-bold text-lg shadow-xl shadow-brand-900/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                Explore Services
              </button>
              <a href="https://wa.me/918287875040?text=Hi%20DIGIMAX%20PRINTING,%20I%20would%20like%20to%20request%20a%20quote!" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-xl border-2 border-gray-200 text-brand-900 font-bold text-lg hover:border-brand-900 hover:bg-brand-50 transition-all inline-flex items-center justify-center cursor-pointer">
                Request Quote
              </a>
            </div>
          </div>

          {/* Collage Images */}
          <div className="relative h-[600px] w-full hidden md:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-100 rounded-full blur-[80px] opacity-70"></div>
            
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-0 right-0 w-64 h-80 rounded-2xl shadow-2xl overflow-hidden border-4 border-white rotate-6 hover:scale-105 cursor-pointer">
              <Image src={collageImg1} alt="Business Card" fill className="object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute bottom-10 left-0 w-80 h-56 rounded-2xl shadow-2xl overflow-hidden border-4 border-white -rotate-3 z-10 hover:scale-105 cursor-pointer">
              <Image src={CATEGORY_IMAGES['Brochures']} alt="Brochure" fill className="object-cover" referrerPolicy="no-referrer" />
            </motion.div>

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }} className="absolute top-1/2 left-20 w-48 h-64 rounded-2xl shadow-2xl overflow-hidden border-4 border-white -rotate-12 z-20 hover:scale-105 cursor-pointer">
              <Image src={collageImg3} alt="ID Card" fill className="object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
        
        {/* GREEN STRIP / PATTI AT BOTTOM OF HERO */}
        <div className="w-full bg-brand-900 py-6 mt-16 relative z-20 shadow-2xl overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex overflow-hidden">
                <motion.div 
                  animate={{ x: ["0%", "-50%"] }} 
                  transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                  className="flex items-center w-max text-white font-bold text-xl tracking-widest uppercase opacity-80"
                >
                  <div className="flex items-center gap-16 px-8 whitespace-nowrap">
                    <span>Business Cards</span> • <span>Travelers</span> • <span>Books/Hard Binding</span> • <span>Posters/Tickets</span> • <span>Mug Printing</span> • <span>T-Shirt Printing</span> • <span>Pillow Printing</span> • <span>Mouse Pad Printing</span> • <span>Banner</span> • <span>Flex Printing</span> • <span>Vinyl Printing</span> • <span>Backlit Vinyl Banners</span> • <span>Vinyl Pasting</span>
                  </div>
                  <div className="flex items-center gap-16 px-8 whitespace-nowrap">
                    <span>Business Cards</span> • <span>Travelers</span> • <span>Books/Hard Binding</span> • <span>Posters/Tickets</span> • <span>Mug Printing</span> • <span>T-Shirt Printing</span> • <span>Pillow Printing</span> • <span>Mouse Pad Printing</span> • <span>Banner</span> • <span>Flex Printing</span> • <span>Vinyl Printing</span> • <span>Backlit Vinyl Banners</span> • <span>Vinyl Pasting</span>
                  </div>
                </motion.div>
             </div>
           </div>
        </div>
      </section>

      {/* HORIZONTAL IMAGE STRIP (PATTI KI USMEIN IMAGES) */}
      <section className="py-8 bg-gray-50 border-b border-gray-100 overflow-hidden">
        <div className="flex w-[200%] gap-4 px-2">
           <motion.div animate={{ x: [0, -1200] }} transition={{ repeat: Infinity, ease: 'linear', duration: 40 }} className="flex gap-4 min-w-max">
             {stripImages.map((imgSrc, i) => (
                <div key={i} className="w-64 h-40 rounded-xl overflow-hidden relative shadow-sm border border-gray-200 bg-white group cursor-pointer flex-shrink-0">
                  <Image src={imgSrc} alt="Print Sample" fill className="object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
             ))}
           </motion.div>
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Services</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-500 text-lg">Click on any category to view our complete range.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {MEGA_SERVICES.map((cat, i) => (
              <button 
                key={cat} onClick={() => onNavCategory(cat)}
                className="group rounded-3xl border border-gray-200 bg-white hover:shadow-2xl hover:border-brand-300 transition-all flex flex-col overflow-hidden text-left w-full shadow-sm"
              >
                <div className="w-full h-64 bg-gray-100 relative overflow-hidden">
                   <Image src={CATEGORY_IMAGES[cat]} alt={cat} fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 w-full">
                  <h3 className="font-display font-bold text-2xl text-gray-900 group-hover:text-brand-700 transition-colors mb-2">{cat}</h3>
                  <div className="text-brand-600 font-medium text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">View Details <ChevronRight className="w-4 h-4"/></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES / MACHINES GALLERY */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our State-of-the-Art Facility</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full mb-6"></div>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Equipped with advanced printing machinery to deliver precision, speed, and premium quality for all your commercial printing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({length: 8}).map((_, i) => (
              <div 
                key={i} 
                className="relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden group shadow-md border border-gray-200 cursor-zoom-in hover:shadow-xl transition-all" 
                onClick={() => setLightboxImg(stripImages[i]?.src || Object.values(CATEGORY_IMAGES)[i]?.src || Object.values(CATEGORY_IMAGES)[i] || `https://picsum.photos/seed/machine${i}/1600/1200`)}
              >
                 <Image src={stripImages[i] || Object.values(CATEGORY_IMAGES)[i] || `https://picsum.photos/seed/machine${i}/800/600`} alt={`Printing Machine ${i+1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium flex items-center gap-2"><ArrowUpRight className="w-5 h-5"/> View Full Size</span>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO / GALLERY */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mb-4">Gallery</h2>
            <p className="mt-4 text-gray-500 text-lg">Browse our highly crafted printing projects.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map(f => (
              <button 
                key={f} onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${filter === f ? 'bg-brand-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredPortfolio.map((p, i) => (
                <motion.div 
                  layout 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  key={p.img + i} 
                  className="aspect-square relative rounded-xl overflow-hidden group cursor-zoom-in shadow-sm border border-gray-100"
                  onClick={() => setLightboxImg(CATEGORY_IMAGES[p.cat]?.src || CATEGORY_IMAGES[p.cat] || `https://picsum.photos/seed/${p.img}/1000/1000`)}
                >
                  <Image src={p.cat === 'Business Cards' ? SUB_IMAGES[i % SUB_IMAGES.length] : (p.cat === 'Banners' ? BANNER_SUB_IMAGES[i % BANNER_SUB_IMAGES.length] : (p.cat === 'ID Cards' ? IDCARD_SUB_IMAGES[i % IDCARD_SUB_IMAGES.length] : (p.cat === 'Posters' ? POSTER_SUB_IMAGES[i % POSTER_SUB_IMAGES.length] : (p.cat === 'Letterheads' ? LETTERHEAD_SUB_IMAGES[i % LETTERHEAD_SUB_IMAGES.length] : (p.cat === 'Stamps' ? STAMP_SUB_IMAGES[i % STAMP_SUB_IMAGES.length] : (p.cat === 'Books & Hardbinding' ? BOOK_SUB_IMAGES[i % BOOK_SUB_IMAGES.length] : (p.cat === 'T-Shirts Printing' ? TSHIRT_SUB_IMAGES[i % TSHIRT_SUB_IMAGES.length] : (CATEGORY_IMAGES[p.cat] || `https://picsum.photos/seed/${p.img}/400/400`))))))))} alt={p.cat} fill className="object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold">{p.cat}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImg && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
              onClick={() => setLightboxImg(null)}
            >
              <button className="absolute top-6 right-6 text-white hover:text-gray-300" onClick={() => setLightboxImg(null)}>
                <X className="w-8 h-8" />
              </button>
              <motion.img 
                initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
                src={lightboxImg} alt="Magnified Work" className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl" 
                onClick={(e) => e.stopPropagation()} 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mb-4">Client Success Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow relative">
                <div className="text-yellow-400 mb-6 flex gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 text-lg mb-8 italic">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-200">
                    <Image src={`https://picsum.photos/seed/${review.img}/100/100`} alt={review.author} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{review.author}</div>
                    <div className="text-sm text-brand-700 font-medium">{review.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ---- CATEGORY VIEW ----
function CategoryView({ category, data, onNavProduct, onNavHome }: { category: string, data: any, onNavProduct: (c:string, s:string)=>void, onNavHome: ()=>void }) {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm font-medium text-gray-500 mb-8 flex items-center gap-2">
          <button onClick={onNavHome} className="hover:text-brand-900 transition-colors">Home</button> <ChevronRight className="w-4 h-4" /> 
          <span className="text-gray-900">{category}</span>
        </div>

        {/* Category Header */}
        <div className="bg-brand-900 rounded-3xl p-10 md:p-16 mb-12 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden md:block">
              <Image src={CATEGORY_IMAGES[category] || CATEGORY_IMAGES['Business Cards']} alt={category} fill className="object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-900 to-transparent"></div>
           </div>
           <div className="relative z-10 max-w-2xl">
             <div className="text-brand-300 font-bold tracking-widest uppercase text-sm mb-4">Product Category</div>
             <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">{data.title}</h1>
             <p className="text-lg md:text-xl text-white/80 leading-relaxed">
               {data.desc} Browse our specialized variations below and get exactly what you need.
             </p>
           </div>
        </div>

        {/* Sub Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.subs.map((sub: string, i: number) => (
            <motion.div 
              whileHover={{ y: -5 }}
              onClick={() => onNavProduct(category, sub)}
              key={sub} 
              className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-500 cursor-pointer transition-all group"
            >
              <div className="aspect-video w-full relative rounded-xl overflow-hidden bg-gray-100 mb-4">
                 <Image src={category === 'Business Cards' && SUB_IMAGES[i] ? SUB_IMAGES[i] : (category === 'Banners' && BANNER_SUB_IMAGES[i] ? BANNER_SUB_IMAGES[i] : (category === 'ID Cards' && IDCARD_SUB_IMAGES[i] ? IDCARD_SUB_IMAGES[i] : (category === 'Posters' && POSTER_SUB_IMAGES[i] ? POSTER_SUB_IMAGES[i] : (category === 'Letterheads' && LETTERHEAD_SUB_IMAGES[i] ? LETTERHEAD_SUB_IMAGES[i] : (category === 'Stamps' && STAMP_SUB_IMAGES[i] ? STAMP_SUB_IMAGES[i] : (category === 'Books & Hardbinding' && BOOK_SUB_IMAGES[i] ? BOOK_SUB_IMAGES[i] : (category === 'T-Shirts Printing' && TSHIRT_SUB_IMAGES[i] ? TSHIRT_SUB_IMAGES[i] : `https://picsum.photos/seed/${category.replace(/\s+/g,'')}${sub.replace(/\s+/g,'')}/400/300`)))))))} alt={sub} fill className="object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg group-hover:text-brand-900 mb-2">{sub}</h3>
              <div className="text-gray-500 text-sm flex items-center justify-between">
                <span>View Details</span>
                <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-900 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---- PRODUCT VIEW ----
function ProductView({ category, product, onNavCategory, onNavHome }: { category: string, product: string, onNavCategory: (c:string)=>void, onNavHome: ()=>void }) {
  const [activeImg, setActiveImg] = useState(0);

  const subIndex = CATEGORY_DATA[category]?.subs?.indexOf(product) || 0;
  let specificMainImage = CATEGORY_IMAGES[category] || CATEGORY_IMAGES['Business Cards'];
  
  if (category === 'Business Cards') {
    specificMainImage = SUB_IMAGES[subIndex % SUB_IMAGES.length];
  } else if (category === 'Banners') {
    specificMainImage = BANNER_SUB_IMAGES[subIndex % BANNER_SUB_IMAGES.length];
  } else if (category === 'ID Cards') {
    specificMainImage = IDCARD_SUB_IMAGES[subIndex % IDCARD_SUB_IMAGES.length];
  } else if (category === 'Posters') {
    specificMainImage = POSTER_SUB_IMAGES[subIndex % POSTER_SUB_IMAGES.length];
  } else if (category === 'Letterheads') {
    specificMainImage = LETTERHEAD_SUB_IMAGES[subIndex % LETTERHEAD_SUB_IMAGES.length];
  } else if (category === 'Stamps') {
    specificMainImage = STAMP_SUB_IMAGES[subIndex % STAMP_SUB_IMAGES.length];
  } else if (category === 'Books & Hardbinding') {
    specificMainImage = BOOK_SUB_IMAGES[subIndex % BOOK_SUB_IMAGES.length];
  } else if (category === 'T-Shirts Printing') {
    specificMainImage = TSHIRT_SUB_IMAGES[subIndex % TSHIRT_SUB_IMAGES.length];
  } else {
    specificMainImage = `https://picsum.photos/seed/${category.replace(/\s+/g,'')}${product.replace(/\s+/g,'')}/400/300`;
  }

  const images = product === 'Premium Business Cards' ? [
    bcThumb1,
    bcThumb2,
    bcThumb3,
    bcThumb4
  ] : product === 'Matte Finish Cards' ? [
    specificMainImage,
    matteAltImg1,
    matteAltImg2,
    matteAltImg3
  ] : category === 'Business Cards' ? [
    bcThumb1,
    bcThumb2,
    bcThumb3,
    bcThumb4
  ] : [
    specificMainImage,
    `https://picsum.photos/seed/${product.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}1/800/600`,
    `https://picsum.photos/seed/${product.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}2/800/600`,
    `https://picsum.photos/seed/${product.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}3/800/600`
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm font-medium text-gray-500 mb-8 flex items-center gap-2">
          <button onClick={onNavHome} className="hover:text-brand-900 transition-colors">Home</button> <ChevronRight className="w-4 h-4" /> 
          <button onClick={() => onNavCategory(category)} className="text-brand-700 hover:text-brand-900 transition-colors">{category}</button> <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{product}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square w-full relative rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-inner group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={category === 'Business Cards' && activeImg === 0 && (product === 'Premium Business Cards' || images[0] === bcThumb1) ? (bcMainImg as any)?.src || bcMainImg : (images[activeImg] as any)?.src || (images[activeImg] as any)} 
                  alt={product} 
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 cursor-zoom-in origin-center" 
                  referrerPolicy="no-referrer" 
                />
              </AnimatePresence>
              
              {/* Prev/Next overlay */}
              <button onClick={(e) => { e.stopPropagation(); setActiveImg((p) => p === 0 ? images.length-1 : p-1); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-gray-900 hover:bg-white shadow-lg border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
                 <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); setActiveImg((p) => p === images.length-1 ? 0 : p+1); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-gray-900 hover:bg-white shadow-lg border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
                 <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide py-2 px-1">
              {images.map((img, i) => (
                <button 
                  key={i} onClick={() => setActiveImg(i)}
                  className={`relative w-24 h-24 rounded-xl overflow-hidden shrink-0 transition-all border-2 bg-gray-50 ${activeImg === i ? 'border-brand-900 shadow-md ring-2 ring-brand-900/20' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={(img as any)?.src || (img as any)} alt="Thumb" className="w-full h-full object-contain p-1" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Details */}
          <div className="flex flex-col">
            <h1 className="font-display text-4xl font-extrabold text-gray-900 mb-4">{product}</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Premium quality {product.toLowerCase()} crafted to perfection. Enhance your professional, brand, and corporate identity with our state-of-the-art printing materials.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100 space-y-4">
              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span className="text-gray-500 font-medium">Available Sizes</span>
                <span className="text-gray-900 font-bold text-right">Standard (85x54mm)<br/>Custom Sizes</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span className="text-gray-500 font-medium">Available Quantity</span>
                <span className="text-gray-900 font-bold">100, 200, 500, 1000+</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span className="text-gray-500 font-medium">Material</span>
                <span className="text-gray-900 font-bold">Premium 350gsm / 400gsm Art Card</span>
              </div>
               <div className="flex justify-between">
                <span className="text-gray-500 font-medium">Delivery Time</span>
                <span className="text-gray-900 font-bold">1 Day</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <a href={`https://wa.me/918287875040?text=${encodeURIComponent('Hi DIGIMAX PRINTING, I would like to request a quote for ' + product + ' (' + category + ').')}`} target="_blank" rel="noreferrer" className="flex-1 bg-brand-900 text-white font-bold py-4 rounded-xl shadow-xl hover:bg-brand-800 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                Get Instant Quote
              </a>
              <a href="https://wa.me/918287875040" target="_blank" rel="noreferrer" className="flex-1 bg-[#25D366] text-white font-bold py-4 rounded-xl shadow-xl hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2">
                 <MessageCircle className="w-5 h-5" /> WhatsApp Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0F382E] text-white">
      {/* Decorative top strip */}
      <div className="w-full h-4 bg-repeat-x flex items-center justify-center opacity-50" style={{ backgroundImage: "radial-gradient(circle, #e73c3e 2px, transparent 2px), radial-gradient(circle, #ffffff 2px, transparent 2px)", backgroundSize: "30px 10px, 20px 10px", backgroundPosition: "0 0, 10px 0" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 */}
          <div>
            <h3 className="font-display text-2xl font-bold leading-tight mb-8">
              We&rsquo;re something other than duplicates... What&rsquo;s more, we do it right!
            </h3>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter className="w-5 h-5 fill-current" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook className="w-5 h-5 fill-current" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Get in touch */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Get in touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <p className="hover:text-white transition-colors cursor-pointer text-white/80">print.digimax@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <p className="font-bold text-white text-lg">+91 82878 75040</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <p className="leading-relaxed max-w-xs text-white/80 pt-1">Office PVR saket 110017<br/>Print shop F-2 Near Malviya Nagar Metro south delhi 110017</p>
              </div>
            </div>
          </div>

          {/* Col 3: Information */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Information</h4>
            <div className="flex flex-col space-y-4 text-white/80">
              <a href="#" className="hover:text-white transition-colors">About us</a>
              <a href="#" className="hover:text-white transition-colors">Our Blog</a>
              <a href="#" className="hover:text-white transition-colors">Start a Return</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="hover:text-white transition-colors">Shipping FAQ</a>
            </div>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Services</h4>
            <div className="flex flex-col space-y-4 text-white/80">
              <a href="#" className="hover:text-white transition-colors">Printing Services</a>
              <a href="#" className="hover:text-white transition-colors">Digital Services</a>
              <a href="#" className="hover:text-white transition-colors">Design Services</a>
              <a href="#" className="hover:text-white transition-colors">Copying Services</a>
              <a href="#" className="hover:text-white transition-colors">Customize Services</a>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/60 text-sm space-y-2 text-center md:text-left">
            <p>&copy; 2026 DIGIMAX PRINTING. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
          
          {/* Payment Methods */}
          <div className="flex flex-wrap gap-2 justify-center">
            {['AMEX', 'Apple Pay', 'G Pay', 'Mastercard', 'Shop Pay', 'VISA'].map(m => (
              <div key={m} className="px-3 py-1 bg-white text-[10px] font-bold text-[#0F382E] rounded flex items-center justify-center">
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const fs = require('fs');

let code = fs.readFileSync('app/ClientApp.tsx', 'utf-8');

const importRegex = /import {[\s\S]*?} from 'lucide-react';/;
code = code.replace(importRegex, match => {
  return match.replace(/}/, ', QrCode, Download, FlipHorizontal, ShoppingCart, Save }');
});

const startStr = "function InteractiveDesigner() {";
const endStr = "function Navbar";

const startIndex = code.indexOf(startStr);
const endIndex = code.indexOf(endStr);

if (startIndex === -1 || endIndex === -1) {
  console.log("Could not find start or end index");
  process.exit(1);
}

const newDesigner = `function InteractiveDesigner() {
  const [type, setType] = useState('Business Card');
  const [fontFamily, setFontFamily] = useState('font-sans');
  const [colorTheme, setColorTheme] = useState({ bg: 'bg-[#1a1a1a]', text: 'text-[#d4af37]', label: 'Luxury Black' });
  const [details, setDetails] = useState({
    name: 'Suresh Kumar',
    designation: 'CEO & Founder',
    phone: '+91 82878 75040',
    email: 'print.digimax@gmail.com',
    company: 'DIGIMAX PRINTING',
    website: 'www.digimaxprinting.com',
    frontExtra: 'Industrial Area, Phase 1, New Delhi',
    backExtra: 'Premium Printing Services\\nSatisfaction Guaranteed.',
    logoSize: 60,
    logoShape: 'square',
    showQr: true
  });
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

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
    let base = \`shadow-2xl border border-white/10 flex relative overflow-hidden \${fontFamily} transition-colors duration-500 \`;
    if (type === 'Business Card') return base + 'w-full max-w-[420px] aspect-[1.75/1] rounded-lg flex-col justify-center p-8 mx-auto';
    if (type === 'ID Card') return base + 'w-[250px] aspect-[1/1.58] rounded-xl flex-col p-6 mx-auto';
    if (type === 'Sticker') return base + 'w-[300px] aspect-square rounded-full flex-col justify-center items-center text-center p-8 mx-auto';
    return base;
  };

  const renderFrontside = () => {
    const isSticker = type === 'Sticker';
    const isId = type === 'ID Card';
    
    return (
      <div className={\`\${getContainerStyle()} \${colorTheme.bg} \${colorTheme.text} w-full h-full absolute inset-0\`} style={{ backfaceVisibility: 'hidden' }}>
        <div className={\`relative z-10 h-full flex w-full \${isSticker || isId ? 'flex-col items-center justify-center' : 'flex-col'}\`}>
          
          <div className={\`flex \${isSticker || isId ? 'flex-col items-center text-center mb-6' : 'justify-between items-start mb-6'}\`}>
             {logoUrl ? (
               /* eslint-disable-next-line @next/next/no-img-element */
               <img 
                 src={logoUrl} 
                 alt="Logo" 
                 style={{ width: \`\${details.logoSize}px\`, height: \`\${details.logoSize}px\` }}
                 className={\`object-cover \${details.logoShape === 'round' ? 'rounded-full' : 'rounded-md'} \${(isSticker||isId)?'mb-4':''}\`} 
               />
             ) : (
               <div 
                 style={{ width: \`\${details.logoSize}px\`, height: \`\${details.logoSize}px\` }}
                 className={\`bg-black/10 border border-white/20 flex items-center justify-center text-xs opacity-50 \${details.logoShape === 'round' ? 'rounded-full' : 'rounded-md'} \${(isSticker||isId)?'mb-4':''}\`}
               >
                 Logo
               </div>
             )}
             {!isSticker && !isId && (
               <div className="text-right">
                 <h3 className="font-black text-xl tracking-wider uppercase leading-tight">{details.company || 'Company Name'}</h3>
                 <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 mt-1">Design Studio</p>
               </div>
             )}
             {(isSticker || isId) && (
                <h3 className={\`font-black uppercase tracking-wider mt-2 text-center w-full \${isSticker ? 'text-2xl' : 'text-xl'}\`}>{details.company || 'Company Name'}</h3>
             )}
          </div>

          <div className={\`\${isSticker ? 'mt-2 text-center' : 'mt-auto w-full flex justify-between items-end'}\`}>
            
            <div className={\`\${isId ? 'text-center w-full' : ''}\`}>
              {!isSticker && (
                <>
                  <h2 className={\`font-bold \${isId ? 'text-2xl mb-1' : 'text-xl uppercase tracking-wide'}\`}>{details.name || 'Your Name'}</h2>
                  <p className={\`font-medium mb-4 opacity-80 \${isId ? 'text-lg' : 'text-sm'}\`}>{details.designation || 'Designation'}</p>
                </>
              )}
              
              <div className={\`mt-4 space-y-1.5 \${isSticker ? 'text-xs' : 'text-[11px] font-medium opacity-90'}\`}>
                {details.phone && <div className={\`flex items-center gap-2 \${isSticker || isId ? 'justify-center' : ''}\`}><Phone className="w-3.5 h-3.5 opacity-80"/> {details.phone}</div>}
                {details.email && <div className={\`flex items-center gap-2 \${isSticker || isId ? 'justify-center' : ''}\`}><Mail className="w-3.5 h-3.5 opacity-80"/> {details.email}</div>}
                {details.website && <div className={\`flex items-center gap-2 \${isSticker || isId ? 'justify-center' : ''}\`}><MapPin className="w-3.5 h-3.5 opacity-80"/> {details.website}</div>}
                {details.frontExtra && !isSticker && <div className="mt-3 opacity-70 whitespace-pre-wrap leading-tight max-w-[200px]">{details.frontExtra}</div>}
                {details.frontExtra && isSticker && <div className="mt-2 text-gray-800 font-medium whitespace-pre-wrap leading-tight">{details.frontExtra}</div>}
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
      <div className={\`\${getContainerStyle()} \${colorTheme.text === 'text-[#d4af37]' || colorTheme.text === 'text-[#f3e5ab]' ? 'bg-black text-white' : 'bg-white text-black'} items-center justify-center text-center p-8 w-full h-full absolute inset-0\`} style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
        {logoUrl ? (
           /* eslint-disable-next-line @next/next/no-img-element */
           <img 
             src={logoUrl} 
             alt="Logo" 
             style={{ width: \`\${details.logoSize * (type === 'ID Card' ? 2 : 1.5)}px\`, height: \`\${details.logoSize * (type === 'ID Card' ? 2 : 1.5)}px\` }}
             className={\`object-cover \${details.logoShape === 'round' ? 'rounded-full' : 'rounded-md'} mb-6\`} 
           />
         ) : (
           <div 
             style={{ width: \`\${details.logoSize * (type === 'ID Card' ? 2 : 1.5)}px\`, height: \`\${details.logoSize * (type === 'ID Card' ? 2 : 1.5)}px\` }}
             className={\`bg-gray-200/20 border border-gray-400/30 flex items-center justify-center text-xs opacity-50 \${details.logoShape === 'round' ? 'rounded-full' : 'rounded-md'} mb-6\`}
           >
             Logo
           </div>
         )}
         <div className={\`font-black \${type==='ID Card' ? 'text-2xl' : 'text-xl'} tracking-widest uppercase mb-4 opacity-100 text-center w-full\`}>{details.company || 'Company Name'}</div>
         <p className="whitespace-pre-wrap text-sm opacity-70 leading-relaxed mx-auto max-w-xs">{details.backExtra}</p>
         
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
            1000+ templates. Front & back editing. AI design suggestions. Premium luxury themes. Add logo, QR code, and customize everything.
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
                <option value="Business Card">Business Card (Standard 3.5" x 2")</option>
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
                      className={\`px-3 py-2 rounded-lg text-xs font-bold transition-all border \${colorTheme.label === theme.label ? 'border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-105' : 'border-[#333] hover:border-gray-500 text-gray-400'}\`}
                      style={{ backgroundColor: theme.bg.replace('bg-[', '').replace(']', ''), color: theme.text.replace('text-[', '').replace(']', '') }}
                    >
                      {theme.label}
                    </button>
                  ))}
                </div>
                
                <label className="block text-sm font-bold text-gray-300 mb-2 mt-4">Typography Variant</label>
                <select 
                  value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#333333] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] font-medium text-sm transition-colors"
                >
                  <option value="font-sans">Modern Sans Serif</option>
                  <option value="font-serif">Luxury Serif</option>
                  <option value="font-mono">Technical Monospace</option>
                </select>
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

            <div className="border-t border-white/10 pt-6 space-y-5 flex flex-col items-start bg-[#0a0a0a] -mx-6 -mb-6 p-6 rounded-b-3xl">
              <label className="block text-base font-bold text-white">Upload Custom Logo</label>
              
              <div className="w-full flex gap-4 items-center">
                <label className="flex-1 flex flex-col items-center justify-center h-20 border-2 border-[#333] border-dashed rounded-xl cursor-pointer bg-[#141414] hover:bg-[#1a1a1a] hover:border-[#d4af37] transition-colors group">
                  <div className="flex items-center gap-2">
                    <Upload className="w-5 h-5 text-gray-400 group-hover:text-[#d4af37] transition-colors" />
                    <span className="text-sm text-gray-400 group-hover:text-[#d4af37] font-medium">Browse Files</span>
                  </div>
                  <input type="file" className="hidden" accept="image/*" onChange={handleLogoUpload} />
                </label>
                
                {logoUrl && (
                  <div className="flex flex-col gap-3 w-1/2">
                    <div className="flex justify-between">
                       <label className="block text-xs font-medium text-gray-400">Scale</label>
                       <span className="text-[10px] text-gray-500">{details.logoSize}px</span>
                    </div>
                    <input type="range" min="30" max={type === 'Sticker' ? "200" : "150"} value={details.logoSize} onChange={(e) => setDetails({ ...details, logoSize: Number(e.target.value) })} className="w-full h-1 bg-[#333] rounded-lg appearance-none cursor-pointer accent-[#d4af37]" />
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Previews & Actions */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6 pt-0">
            
            <div className="w-full flex flex-col items-center p-8 md:p-12 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] rounded-3xl shadow-2xl relative overflow-hidden" style={{ perspective: '1200px' }}>
               <div className="absolute top-4 left-4 flex gap-2">
                 <span className="px-3 py-1 bg-[#d4af37] text-black text-[10px] font-black uppercase tracking-widest rounded-sm">HQ Preview</span>
                 <span className="px-3 py-1 bg-[#333] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm border border-white/10">300 DPI CMYK</span>
               </div>
               
               <AnimatePresence mode="wait">
                 <motion.div 
                   key={type}
                   initial={{ opacity: 0, scale: 0.9 }} 
                   animate={{ opacity: 1, scale: 1 }} 
                   exit={{ opacity: 0, scale: 0.9 }} 
                   className="w-full flex justify-center py-12 relative"
                 >
                    <motion.div 
                       className="relative"
                       style={{ 
                         width: type==='Business Card' ? '420px' : type==='ID Card' ? '250px' : '300px',
                         height: type==='Business Card' ? '240px' : type==='ID Card' ? '395px' : '300px',
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
      
`;

const updatedCode = code.substring(0, startIndex) + newDesigner + "\n" + code.substring(endIndex);

fs.writeFileSync('app/ClientApp.tsx', updatedCode);
console.log("Successfully replaced InteractiveDesigner Component!");

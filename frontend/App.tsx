// import { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useWallet } from "@aptos-labs/wallet-adapter-react";
// import { motion } from 'framer-motion';
// import { FileText, Shield, Brain, FolderOpen, PenTool, Lock, Bot, ChevronDown, Share, Search } from 'lucide-react';
// import { CardHeader, CardTitle } from "@/components/ui/card";
// import { WalletSelector } from "./components/WalletSelector";
// import ContractManagement from "@/components/ContractManagement";
// import SigningDocument from "@/components/SigningDocument";
// import ChatWithDocs from "@/components/ChatWithDocs";
// import Categorize from "@/components/Categorize";
// import SharedDocs from '@/components/SharedDocs';
// import { Vortex } from './components/ui/vortex';

// const features = [
//   {
//     icon: <FileText className="w-8 h-8" />,
//     title: "One-Click Drive Integration",
//     description: "Seamlessly connect and manage your Google Drive files from a single dashboard",
//   },
//   {
//     icon: <Shield className="w-8 h-8" />,
//     title: "IPFS Storage",
//     description: "Secure your documents with decentralized storage on IPFS",
//   },
//   {
//     icon: <Brain className="w-8 h-8" />,
//     title: "Talk2Doc AI Assistant",
//     description: "Chat with your documents using advanced AI for instant insights",
//   },
//   {
//     icon: <FolderOpen className="w-8 h-8" />,
//     title: "Smart Categorization",
//     description: "Auto-organize your files into intuitive categories",
//   },
//   {
//     icon: <PenTool className="w-8 h-8" />,
//     title: "Digital Signatures",
//     description: "Sign documents securely with blockchain verification",
//   },
//   {
//     icon: <Lock className="w-8 h-8" />,
//     title: "Access Control",
//     description: "Granular permissions and secure document sharing",
//   },
//   {
//     icon: <Bot className="w-8 h-8" />,
//     title: "On-Chain AI Agent",
//     description: "Automate document workflows with blockchain-powered AI",
//   }
// ];

// function App() {
//   const { connected } = useWallet();
//   const [isHovering, setIsHovering] = useState<number | null>(null);

//   return (
//     <div className="relative min-h-screen bg-[#030712] antialiased overflow-hidden">
//       {!connected ? (
//         <div className="relative flex flex-col min-h-screen">
//           {/* Enhanced Background with multiple layers */}
//           <div className="fixed inset-0">
//             {/* Base gradient */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
            
//             {/* Radial gradient overlay */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_65%)]" />
            
//             {/* Animated grain effect */}
//             <div className="absolute inset-0 opacity-[0.015] 
//               [background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==)]
//               animate-grain" />

//             {/* Mesh gradient spheres */}
//             <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_60%)] blur-2xl" />
//             <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_60%)] blur-2xl" />
//           </div>

//           {/* Content */}
//           <div className="relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
//             >
//               {/* Title with enhanced glow */}
//               {/* Title and tagline with enhanced gradients */}
//           <div className="relative mb-16 group">
//             {/* Upper gradient line */}
//             <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      
//             <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="relative"
//             >
//             <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200">
//               DecryptDocs
//             </h1>
//             <div className="absolute -inset-x-16 -inset-y-8 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
//             </motion.div>
        
//             <motion.div 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="relative mt-8"
//             >
//               <div className="flex items-center justify-center gap-6 text-xl text-emerald-100/80 font-light">
//                 <span className="flex items-center gap-2">
//                   <FileText className="w-5 h-5 text-emerald-400" />
//                   Store
//                 </span>
//                 <span className="text-emerald-400/50">•</span>
//                 <span className="flex items-center gap-2">
//                   <Share className="w-5 h-5 text-emerald-400" />
//                   Share
//                 </span>
//                 <span className="text-emerald-400/50">•</span>
//                 <span className="flex items-center gap-2">
//                   <Search className="w-5 h-5 text-emerald-400" />
//                   Search
//                 </span>
//               </div>
//               <p className="mt-6 text-emerald-100/60 text-lg font-light">
//                 Your Decentralized Document Hub for the Web3 Era
//               </p>
//             </motion.div>

//               {/* Lower gradient line */}
//               <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
//               </div>
//               {/* Enhanced glassmorphism wallet card */}
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="mb-16 relative group"
//               >
//                 <div className="absolute -inset-[2px] bg-gradient-to-r from-emerald-500/50 via-teal-500/50 to-emerald-500/50 rounded-2xl blur-xl opacity-10 group-hover:opacity-25 transition duration-1000" />
//                 <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/50 via-emerald-400/50 to-emerald-500/50 rounded-2xl opacity-20" />
//                 <CardHeader className="relative rounded-xl p-8 bg-black/20 backdrop-blur-xl border border-white/5 shadow-2xl">
//                   <CardTitle className="text-2xl mb-6 font-light text-emerald-200">
//                     Connect Your Wallet to Get Started
//                   </CardTitle>
//                   <WalletSelector />
//                 </CardHeader>
//               </motion.div>

//               {/* Scroll indicator */}
//               <motion.div
//                 animate={{
//                   y: [0, 10, 0],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className="absolute bottom-8"
//               >
//                 <ChevronDown className="w-8 h-8 text-emerald-400/50" />
//               </motion.div>
//             </motion.div>

//             {/* Features Grid with enhanced glassmorphism */}
//             <div className="max-w-7xl mx-auto px-4 py-24">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//               >
//                 {features.map((feature, index:number) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ scale: 1.02, y: -5 }}
//                     onHoverStart={() => setIsHovering(index)}
//                     onHoverEnd={() => setIsHovering(null)}
//                     className="relative group"
//                   >
//                     <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/50 via-emerald-400/50 to-emerald-500/50 rounded-xl opacity-20" />
//                     <div className="relative bg-black/20 backdrop-blur-xl p-8 rounded-xl border border-white/5 shadow-2xl">
//                       <motion.div
//                         animate={{
//                           rotate: isHovering === index ? 360 : 0
//                         }}
//                         transition={{ duration: 0.5 }}
//                         className="text-emerald-400 mb-6"
//                       >
//                         {feature.icon}
//                       </motion.div>
//                       <h3 className="text-xl font-semibold mb-4 text-emerald-200">{feature.title}</h3>
//                       <p className="text-emerald-100/60 font-light">{feature.description}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//           <div className="relative z-10 mt-24">
//               <motion.footer 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 className="relative overflow-hidden"
//               >
//                 {/* Gradient line */}
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                
//                 {/* Footer content */}
//                 <div className="max-w-7xl mx-auto px-4 py-12">
//                   <div className="relative">
//                     {/* Glow effect */}
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-32 bg-emerald-500/10 blur-[100px] rounded-full" />
                    
//                     <motion.div 
//                       initial={{ y: 20, opacity: 0 }}
//                       whileInView={{ y: 0, opacity: 1 }}
//                       transition={{ delay: 0.2 }}
//                       className="relative flex flex-col items-center justify-center space-y-4"
//                     >
//                       {/* Logo/Name */}
//                       <div className="text-2xl font-light text-emerald-300/80">
//                         DecryptDocs
//                       </div>
                      
//                       {/* Creator info */}
//                       <div className="text-sm text-emerald-200/60 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/10 bg-black/10">
//                         made with 💚 by{' '}
//                         <span className="text-emerald-400 font-medium">void main()</span>
//                         {' '}at{' '}
//                         <span className="bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent font-semibold">
//                           UNFOLD 24
//                         </span>
//                         {' '}<span className="text-emerald-300">{'<3'}</span>
//                       </div>
                      
//                       {/* Additional branding elements */}
//                       <div className="flex items-center gap-3 text-emerald-400/30 text-sm pt-2">
//                         <span>•</span>
//                         <span>Secure</span>
//                         <span>•</span>
//                         <span>Decentralized</span>
//                         <span>•</span>
//                         <span>Innovative</span>
//                         <span>•</span>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </div>

//                 {/* Bottom gradient line */}
//                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
//               </motion.footer>
//             </div>
//         </div>
//       ) : (
//         <Router>
//           <Routes>
//             <Route path="/" element={<ContractManagement />} />
//             <Route path="/chatwithdocs" element={<ChatWithDocs />} />
//             <Route path="/categorize" element={<Categorize />} />
//             <Route path="/shared-docs" element={<SharedDocs />} />
//             <Route path="/sign/:id" element={<SigningDocument />} />
//           </Routes>
//         </Router>
//       )}
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useWallet } from "@aptos-labs/wallet-adapter-react";
// import { motion } from 'framer-motion';
// import { FileText, Shield, Brain, FolderOpen, PenTool, Lock, Bot, ChevronDown, Share, Search } from 'lucide-react';
// import { CardHeader, CardTitle } from "@/components/ui/card";
// import { WalletSelector } from "./components/WalletSelector";
// import ContractManagement from "@/components/ContractManagement";
// import SigningDocument from "@/components/SigningDocument";
// import ChatWithDocs from "@/components/ChatWithDocs";
// import Categorize from "@/components/Categorize";
// import SharedDocs from '@/components/SharedDocs';
// import { Vortex } from './components/ui/vortex';
// import { TextGenerateEffect } from './components/ui/text-generate-effect';

// const features = [
//   {
//     icon: <FileText className="w-8 h-8" />,
//     title: "One-Click Drive Integration",
//     description: "Seamlessly connect and manage your Google Drive files from a single dashboard",
//   },
//   {
//     icon: <Shield className="w-8 h-8" />,
//     title: "IPFS Storage",
//     description: "Secure your documents with decentralized storage on IPFS",
//   },
//   {
//     icon: <Brain className="w-8 h-8" />,
//     title: "Talk2Doc AI Assistant",
//     description: "Chat with your documents using advanced AI for instant insights",
//   },
//   {
//     icon: <FolderOpen className="w-8 h-8" />,
//     title: "Smart Categorization",
//     description: "Auto-organize your files into intuitive categories",
//   },
//   {
//     icon: <PenTool className="w-8 h-8" />,
//     title: "Digital Signatures",
//     description: "Sign documents securely with blockchain verification",
//   },
//   {
//     icon: <Lock className="w-8 h-8" />,
//     title: "Access Control",
//     description: "Granular permissions and secure document sharing",
//   },
//   {
//     icon: <Bot className="w-8 h-8" />,
//     title: "On-Chain AI Agent",
//     description: "Automate document workflows with blockchain-powered AI",
//   }
// ];

// function App() {
//   const { connected } = useWallet();
//   const [isHovering, setIsHovering] = useState<number | null>(null);
//   const [scrollY, setScrollY] = useState(0);
//   const words = `"Beyond Storage. Beyond Security. Beyond Web2."`;

//   // Add scroll event listener
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Calculate opacity based on scroll position
//   const vortexOpacity = Math.max(0, 1 - (scrollY / 500));

//   return (
//     <div className="relative min-h-screen bg-[#030712] antialiased overflow-hidden">
//       {!connected ? (
//         <div className="relative flex flex-col min-h-screen">
//           {/* Background with Vortex for hero section */}
//           <div className="fixed inset-0" style={{ opacity: vortexOpacity, transition: 'opacity 0.3s ease-out' }}>
//             <Vortex backgroundColor="black" rangeY={2000} particleCount={100} baseHue={140} className="w-full h-full" />
//           </div>

//           {/* Rest of the background effects */}
//           <div className="fixed inset-0" style={{ opacity: Math.min(1, scrollY / 500), transition: 'opacity 0.3s ease-in' }}>
//             {/* Base gradient */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
            
//             {/* Radial gradient overlay */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_65%)]" />
            
//             {/* Animated grain effect */}
//             <div className="absolute inset-0 opacity-[0.015] 
//               [background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==)]
//               animate-grain" />

//             {/* Mesh gradient spheres */}
//             <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_60%)] blur-2xl" />
//             <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_60%)] blur-2xl" />
//           </div>

//           {/* Content */}
//           <div className="relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
//             >
//               {/* Title with enhanced glow */}
//               <div className="relative mb-16 group">
//                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          
//                 <motion.div
//   initial={{ scale: 0.9, opacity: 0 }}
//   animate={{ scale: 1, opacity: 1 }}
//   className="relative group"
// >
//   {/* Blur gradient background effect */}
//   <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-emerald-600/20 via-emerald-500/30 to-emerald-600/20 blur-3xl opacity-50 group-hover:opacity-75 transition-all duration-500" />
  
//   {/* Glow effect rings */}
//   <div className="absolute -inset-x-20 -inset-y-10">
//     <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//     <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75" />
//   </div>

//   {/* Title text */}
//   <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 relative z-10 group-hover:scale-[1.02] transition-transform duration-500">
//     DocCrypt
//   </h1>

//   {/* Animated glow pulse */}
//   <div className="absolute -inset-x-16 -inset-y-8 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse" />
// </motion.div>
            
//                 <motion.div 
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="relative mt-8"
//                 >
//                   <div className="flex items-center justify-center gap-6 text-xl text-emerald-100/80 font-light">
//                     <span className="flex items-center gap-2">
//                       <FileText className="w-5 h-5 text-emerald-400" />
//                       Store
//                     </span>
//                     <span className="text-emerald-400/50">•</span>
//                     <span className="flex items-center gap-2">
//                       <Share className="w-5 h-5 text-emerald-400" />
//                       Share
//                     </span>
//                     <span className="text-emerald-400/50">•</span>
//                     <span className="flex items-center gap-2">
//                       <Search className="w-5 h-5 text-emerald-400" />
//                       Search
//                     </span>
//                   </div>
                
//                   <TextGenerateEffect duration={2} filter={false} words={words} />;
//                 </motion.div>

//                 <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
//               </div>

//               {/* Enhanced glassmorphism wallet card */}
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="mb-16 relative group"
//               >
//                 <div className="absolute -inset-[2px] bg-gradient-to-r from-emerald-500/50 via-teal-500/50 to-emerald-500/50 rounded-2xl blur-xl opacity-10 group-hover:opacity-25 transition duration-1000" />
//                 <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/50 via-emerald-400/50 to-emerald-500/50 rounded-2xl opacity-20" />
//                 <CardHeader className="relative rounded-xl p-8 bg-black/20 backdrop-blur-xl border border-white/5 shadow-2xl">
//                   <CardTitle className="text-2xl mb-6 font-light text-emerald-200">
//                     Connect Your Wallet to Get Started
//                   </CardTitle>
//                   <WalletSelector />
//                 </CardHeader>
//               </motion.div>

//               {/* Scroll indicator */}
//               <motion.div
//                 animate={{
//                   y: [0, 10, 0],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className="absolute bottom-8"
//               >
//                 <ChevronDown className="w-8 h-8 text-emerald-400/50" />
//               </motion.div>
//             </motion.div>

//             {/* Features Grid with enhanced glassmorphism */}
//             <div className="max-w-7xl mx-auto px-4 py-24">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//               >
//                 {features.map((feature, index:number) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ scale: 1.02, y: -5 }}
//                     onHoverStart={() => setIsHovering(index)}
//                     onHoverEnd={() => setIsHovering(null)}
//                     className="relative group"
//                   >
//                     <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/50 via-emerald-400/50 to-emerald-500/50 rounded-xl opacity-20" />
//                     <div className="relative bg-black/20 backdrop-blur-xl p-8 rounded-xl border border-white/5 shadow-2xl">
//                       <motion.div
//                         animate={{
//                           rotate: isHovering === index ? 360 : 0
//                         }}
//                         transition={{ duration: 0.5 }}
//                         className="text-emerald-400 mb-6"
//                       >
//                         {feature.icon}
//                       </motion.div>
//                       <h3 className="text-xl font-semibold mb-4 text-emerald-200">{feature.title}</h3>
//                       <p className="text-emerald-100/60 font-light">{feature.description}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>

//           <div className="relative z-10 mt-24">
//             <motion.footer 
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               className="relative overflow-hidden"
//             >
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
              
//               <div className="max-w-7xl mx-auto px-4 py-12">
//                 <div className="relative">
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-32 bg-emerald-500/10 blur-[100px] rounded-full" />
                  
//                   <motion.div 
//                     initial={{ y: 20, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.2 }}
//                     className="relative flex flex-col items-center justify-center space-y-4"
//                   >
//                     <div className="text-2xl font-light text-emerald-300/80">
//                       DecryptDocs
//                     </div>
                    
//                     <div className="text-sm text-emerald-200/60 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/10 bg-black/10">
//                       made with 💚 by{' '}
//                       <span className="text-emerald-400 font-medium">void main()</span>
//                       {' '}at{' '}
//                       <span className="bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent font-semibold">
//                         UNFOLD 24
//                       </span>
//                       {' '}<span className="text-emerald-300">{'<3'}</span>
//                     </div>
                    
//                     <div className="flex items-center gap-3 text-emerald-400/30 text-sm pt-2">
//                       <span>•</span>
//                       <span>Secure</span>
//                       <span>•</span>
//                       <span>Decentralized</span>
//                       <span>•</span>
//                       <span>Innovative</span>
//                       <span>•</span>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
//             </motion.footer>
//           </div>
//         </div>
//       ) : (
//         <Router>
//           <Routes>
//             <Route path="/" element={<ContractManagement />} />
//             <Route path="/chatwithdocs" element={<ChatWithDocs />} />
//             <Route path="/categorize" element={<Categorize />} />
//             <Route path="/shared-docs" element={<SharedDocs />} />
//             <Route path="/sign/:id" element={<SigningDocument />} />
//           </Routes>
//         </Router>
//       )}
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useWallet } from "@aptos-labs/wallet-adapter-react";
// import { motion } from 'framer-motion';
// import { FileText, Shield, Brain, FolderOpen, PenTool, Lock, Bot, ChevronDown, Share, Search } from 'lucide-react';
// import { CardHeader, CardTitle } from "@/components/ui/card";
// import { WalletSelector } from "./components/WalletSelector";
// import ContractManagement from "@/components/ContractManagement";
// import SigningDocument from "@/components/SigningDocument";
// import ChatWithDocs from "@/components/ChatWithDocs";
// import Categorize from "@/components/Categorize";
// import SharedDocs from '@/components/SharedDocs';
// import { Vortex } from './components/ui/vortex';
// import { TextGenerateEffect } from './components/ui/text-generate-effect';

// const features = [
//   {
//     icon: <FileText className="w-8 h-8" />,
//     title: "One-Click Drive Integration",
//     description: "Seamlessly connect and manage your Google Drive files from a single dashboard",
//   },
//   {
//     icon: <Shield className="w-8 h-8" />,
//     title: "IPFS Storage",
//     description: "Secure your documents with decentralized storage on IPFS",
//   },
//   {
//     icon: <Brain className="w-8 h-8" />,
//     title: "Talk2Doc AI Assistant",
//     description: "Chat with your documents using advanced AI for instant insights",
//   },
//   {
//     icon: <FolderOpen className="w-8 h-8" />,
//     title: "Smart Categorization",
//     description: "Auto-organize your files into intuitive categories",
//   },
//   {
//     icon: <PenTool className="w-8 h-8" />,
//     title: "Digital Signatures",
//     description: "Sign documents securely with blockchain verification",
//   },
//   {
//     icon: <Lock className="w-8 h-8" />,
//     title: "Access Control",
//     description: "Granular permissions and secure document sharing",
//   },
//   {
//     icon: <Bot className="w-8 h-8" />,
//     title: "On-Chain AI Agent",
//     description: "Automate document workflows with blockchain-powered AI",
//   }
// ];

// function App() {
//   const { connected } = useWallet();
//   const [isHovering, setIsHovering] = useState<number | null>(null);
//   const [scrollY, setScrollY] = useState(0);
//   const words = `"Beyond Storage. Beyond Security. Beyond Web2."`;

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const vortexOpacity = Math.max(0, 1 - (scrollY / 500));

//   return (
//     <div className="relative min-h-screen bg-[#030712] antialiased overflow-hidden">
//       {!connected ? (
//         <div className="relative flex flex-col min-h-screen">
//           {/* Enhanced Background with Vortex and Gradients */}
//           <div className="fixed inset-0">
//             {/* Vortex Layer */}
//             <div className="absolute inset-0" style={{ opacity: vortexOpacity, transition: 'opacity 0.3s ease-out' }}>
//               <Vortex 
//                 backgroundColor="transparent" 
//                 rangeY={1500} 
//                 particleCount={80}
//                 baseHue={140} 
//                 className="w-full h-full opacity-70"
//               />
//             </div>

//             {/* Base gradient background */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
            
//             {/* Enhanced radial gradient overlay */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]" />
            
//             {/* Animated grain effect */}
//             <div className="absolute inset-0 opacity-[0.015] 
//               [background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==)]
//               animate-grain" />

//             {/* Enhanced mesh gradient spheres */}
//             <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,transparent_60%)] blur-2xl" />
//             <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,transparent_60%)] blur-2xl" />
//           </div>

//           {/* Content */}
//           <div className="relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
//             >
//               {/* Hero Section */}
//               <div className="relative mb-16 group">
//                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
//                 <motion.div
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   className="relative group"
//                 >
//                   {/* Subtle background glow */}
//                   <div className="absolute -inset-x-16 -inset-y-8 bg-gradient-to-r from-emerald-600/5 via-emerald-500/10 to-emerald-600/5 blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-700" />
                  
//                   {/* Refined hover glow */}
//                   <div className="absolute -inset-x-16 -inset-y-8">
//                     <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/15 to-emerald-500/0 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
//                   </div>

//                   {/* Title text */}
//                   <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 relative z-10 group-hover:scale-[1.01] transition-transform duration-700">
//                     DocCrypt
//                   </h1>
//                 </motion.div>

//                 <motion.div 
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className="relative mt-12 mb-16"
//                 >
//                   {/* Refined actions bar */}
//                   <div className="flex items-center justify-center gap-8 mb-8 text-lg text-emerald-100/90 font-light">
//                     <span className="flex items-center gap-2 transition-colors duration-300 hover:text-emerald-400">
//                       <FileText className="w-4 h-4 text-emerald-400" />
//                       Store
//                     </span>
//                     <span className="text-emerald-400/30">•</span>
//                     <span className="flex items-center gap-2 transition-colors duration-300 hover:text-emerald-400">
//                       <Share className="w-4 h-4 text-emerald-400" />
//                       Share
//                     </span>
//                     <span className="text-emerald-400/30">•</span>
//                     <span className="flex items-center gap-2 transition-colors duration-300 hover:text-emerald-400">
//                       <Search className="w-4 h-4 text-emerald-400" />
//                       Search
//                     </span>
//                   </div>
                  
//                   <TextGenerateEffect 
//                     duration={2} 
//                     filter={false} 
//                     words={words}
//                     className="text-2xl tracking-wide font-light"
//                   />
//                 </motion.div>

//                 <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
//               </div>

//               {/* Wallet Card */}
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="relative group max-w-xl w-full mx-auto mb-16"
//               >
//                 <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/20 via-emerald-400/20 to-emerald-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
//                 <CardHeader className="relative rounded-xl p-8 bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
//                   <CardTitle className="text-2xl mb-6 font-light text-emerald-100/90">
//                     Connect Your Wallet to Get Started
//                   </CardTitle>
//                   <WalletSelector />
//                 </CardHeader>
//               </motion.div>

//               {/* Scroll indicator */}
//               <motion.div
//                 animate={{
//                   y: [0, 10, 0],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className="absolute bottom-8"
//               >
//                 <ChevronDown className="w-8 h-8 text-emerald-400/50" />
//               </motion.div>
//             </motion.div>

//             {/* Features Grid */}
//             <div className="max-w-7xl mx-auto px-4 py-24">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//               >
//                 {features.map((feature, index:number) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ scale: 1.02, y: -5 }}
//                     onHoverStart={() => setIsHovering(index)}
//                     onHoverEnd={() => setIsHovering(null)}
//                     className="relative group"
//                   >
//                     <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/30 via-emerald-400/30 to-emerald-500/30 rounded-xl opacity-20" />
//                     <div className="relative bg-black/20 backdrop-blur-xl p-8 rounded-xl border border-white/5 shadow-2xl">
//                       <motion.div
//                         animate={{
//                           rotate: isHovering === index ? 360 : 0
//                         }}
//                         transition={{ duration: 0.5 }}
//                         className="text-emerald-400 mb-6"
//                       >
//                         {feature.icon}
//                       </motion.div>
//                       <h3 className="text-xl font-semibold mb-4 text-emerald-200">{feature.title}</h3>
//                       <p className="text-emerald-100/60 font-light">{feature.description}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="relative z-10 mt-24">
//             <motion.footer 
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               className="relative overflow-hidden"
//             >
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
              
//               <div className="max-w-7xl mx-auto px-4 py-12">
//                 <div className="relative">
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-32 bg-emerald-500/10 blur-[100px] rounded-full" />
                  
//                   <motion.div 
//                     initial={{ y: 20, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.2 }}
//                     className="relative flex flex-col items-center justify-center space-y-4"
//                   >
//                     <div className="text-2xl font-light text-emerald-300/80">
//                       DocCrypt
//                     </div>
                    
//                     <div className="text-sm text-emerald-200/60 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/10 bg-black/10">
//                       made with 💚 by{' '}
//                       <span className="text-emerald-400 font-medium">void main()</span>
//                       {' '}at{' '}
//                       <span className="bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent font-semibold">
//                         UNFOLD 24
//                       </span>
//                       {' '}<span className="text-emerald-300">{'<3'}</span>
//                     </div>
                    
//                     <div className="flex items-center gap-3 text-emerald-400/30 text-sm pt-2">
//                       <span>•</span>
//                       <span>Secure</span>
//                       <span>•</span>
//                       <span>Decentralized</span>
//                       <span>•</span>
//                       <span>Innovative</span>
//                       <span>•</span>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>

//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
//             </motion.footer>
//           </div>
//         </div>
//       ) : (
//         <Router>
//           <Routes>
//             <Route path="/" element={<ContractManagement />} />
//             <Route path="/chatwithdocs" element={<ChatWithDocs />} />
//             <Route path="/categorize" element={<Categorize />} />
//             <Route path="/shared-docs" element={<SharedDocs />} />
//             <Route path="/sign/:id" element={<SigningDocument />} />
//           </Routes>
//         </Router>
//       )}
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { motion } from 'framer-motion';
import { FileText, Shield, Brain, FolderOpen, PenTool, Lock, Bot, ChevronDown, Share, Search, UserCheck, Mic } from 'lucide-react';
import { CardHeader, CardTitle } from "@/components/ui/card";
import { WalletSelector } from "./components/WalletSelector";
import ContractManagement from "@/components/ContractManagement";
import SigningDocument from "@/components/SigningDocument";
import ChatWithDocs from "@/components/ChatWithDocs";
import Categorize from "@/components/Categorize";
import SharedDocs from '@/components/SharedDocs';
import { Vortex } from './components/ui/vortex';
import { TextGenerateEffect } from './components/ui/text-generate-effect';

const features = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "One-Click Drive Integration",
    description: "Seamlessly connect and manage your Google Drive files from a single dashboard",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "IPFS Storage",
    description: "Secure your documents with decentralized storage on IPFS",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Talk2Doc AI Assistant",
    description: "Chat with your documents using advanced AI for instant insights",
  },
  {
    icon: <FolderOpen className="w-8 h-8" />,
    title: "Smart Categorization",
    description: "Auto-organize your files into intuitive categories",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Digital Signatures",
    description: "Sign documents securely with blockchain verification",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Access Control",
    description: "Granular permissions and secure document sharing",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "On-Chain AI Agent",
    description: "Automate document workflows with blockchain-powered AI",
  },
  {
    icon: <UserCheck className="w-8 h-8" />, // Import UserCheck from lucide-react
    title: "Automated DocSign",
    description: "Streamline your document signing process with automatic routing and reminders",
  },
  {
    icon: <Mic className="w-8 h-8" />, // Import Mic from lucide-react
    title: "Voice Commands",
    description: "Control your document management with natural voice interactions and AI assistance",
  }
];

function App() {
  const { connected } = useWallet();
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const words = `"Beyond Storage. Beyond Security. Beyond Web2."`;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const vortexOpacity = Math.max(0, 1 - (scrollY / 500));

  return (
    <div className="relative min-h-screen bg-[#030712] antialiased overflow-hidden">
      {!connected ? (
        <div className="relative flex flex-col min-h-screen">
          {/* Enhanced Background with Vortex and Gradients */}
          <div className="fixed inset-0">
            {/* Vortex Layer */}
            <div className="absolute inset-0" style={{ opacity: vortexOpacity, transition: 'opacity 0.3s ease-out' }}>
              <Vortex 
                backgroundColor="transparent" 
                rangeY={1500} 
                particleCount={80}
                baseHue={140} 
                className="w-full h-full opacity-70"
              />
            </div>

            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
            
            {/* Enhanced radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]" />
            
            {/* Animated grain effect */}
            <div className="absolute inset-0 opacity-[0.015] 
              [background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==)]
              animate-grain" />

            {/* Enhanced mesh gradient spheres */}
            <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,transparent_60%)] blur-2xl" />
            <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,transparent_60%)] blur-2xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
            >
              {/* Hero Section */}
              <div className="relative mb-16 group w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="relative group"
                >
                  {/* Subtle background glow */}
                  <div className="absolute -inset-x-16 -inset-y-8 bg-gradient-to-r from-emerald-600/5 via-emerald-500/10 to-emerald-600/5 blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-700" />
                  
                  {/* Title text */}
                  <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 relative z-10 group-hover:scale-[1.01] transition-transform duration-700">
                    DocCrypt
                  </h1>
                </motion.div>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative mt-8 md:mt-12 mb-12 md:mb-16"
                >
                  {/* Refined actions bar */}
                  <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8 text-base md:text-lg text-emerald-100/90 font-light px-2">
                    <span className="flex items-center gap-2 transition-colors duration-300 hover:text-emerald-400">
                      <FileText className="w-4 h-4 text-emerald-400" />
                      Store
                    </span>
                    <span className="text-emerald-400/30 hidden sm:block">•</span>
                    <span className="flex items-center gap-2 transition-colors duration-300 hover:text-emerald-400">
                      <Share className="w-4 h-4 text-emerald-400" />
                      Share
                    </span>
                    <span className="text-emerald-400/30 hidden sm:block">•</span>
                    <span className="flex items-center gap-2 transition-colors duration-300 hover:text-emerald-400">
                      <Search className="w-4 h-4 text-emerald-400" />
                      Search
                    </span>
                  </div>
                  
                  <TextGenerateEffect 
                    duration={2} 
                    filter={false} 
                    words={words}
                    className="text-lg md:text-2xl tracking-wide font-light px-4 sm:px-0"
                  />
                </motion.div>

                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
              </div>

              {/* Wallet Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative group w-full max-w-xl mx-auto mb-16 px-4 sm:px-6"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/20 via-emerald-400/20 to-emerald-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                <CardHeader className="relative rounded-xl p-6 md:p-8 bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <CardTitle className="text-xl md:text-2xl mb-6 font-light text-emerald-100/90">
                    Connect Your Wallet to Get Started
                  </CardTitle>
                  <WalletSelector />
                </CardHeader>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-8 hidden md:block"
              >
                <ChevronDown className="w-8 h-8 text-emerald-400/50" />
              </motion.div>
            </motion.div>

            {/* Features Grid */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {features.map((feature, index:number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onHoverStart={() => setIsHovering(index)}
                    onHoverEnd={() => setIsHovering(null)}
                    className="relative group"
                  >
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/30 via-emerald-400/30 to-emerald-500/30 rounded-xl opacity-20" />
                    <div className="relative bg-black/20 backdrop-blur-xl p-6 md:p-8 rounded-xl border border-white/5 shadow-2xl">
                      <motion.div
                        animate={{
                          rotate: isHovering === index ? 360 : 0
                        }}
                        transition={{ duration: 0.5 }}
                        className="text-emerald-400 mb-6"
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-emerald-200">{feature.title}</h3>
                      <p className="text-sm md:text-base text-emerald-100/60 font-light">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 mt-16 md:mt-24">
            <motion.footer 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
              
              <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-32 bg-emerald-500/10 blur-[100px] rounded-full" />
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="text-xl md:text-2xl font-light text-emerald-300/80">
                      DocCrypt
                    </div>
                    
                    <div className="text-xs md:text-sm text-emerald-200/60 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/10 bg-black/10">
                      made with 💚 by{' '}
                      <span className="text-emerald-400 font-medium">void main()</span>
                      {' '}at{' '}
                      <span className="bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent font-semibold">
                        UNFOLD 24
                      </span>
                      {' '}<span className="text-emerald-300">{'<3'}</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-emerald-400/30 text-xs md:text-sm pt-2">
                      <span>•</span>
                      <span>Secure</span>
                      <span>•</span>
                      <span>Decentralized</span>
                      <span>•</span>
                      <span>Innovative</span>
                      <span>•</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
            </motion.footer>
          </div>
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<ContractManagement />} />
            <Route path="/chatwithdocs" element={<ChatWithDocs />} />
            <Route path="/categorize" element={<Categorize />} />
            <Route path="/shared-docs" element={<SharedDocs />} />
            <Route path="/sign/:id" element={<SigningDocument />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
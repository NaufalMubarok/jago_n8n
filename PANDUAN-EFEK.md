# 🎨 Panduan Implementasi Efek Animasi

## Efek yang Sudah Tersedia:

### ✅ 1. SCROLL REVEAL (Fade in saat scroll)
```tsx
import ScrollReveal from "../components/ScrollReveal";

<ScrollReveal direction="up" delay={100}>
  <div>Konten yang akan fade in</div>
</ScrollReveal>
```
- **direction**: "up", "down", "left", "right"
- **delay**: waktu delay dalam ms (0, 100, 200, dst)

### ✅ 2. FLOATING ANIMATION (Melayang naik-turun)
```tsx
<div className="animate-float">
  Elemen ini akan melayang
</div>
```

### ✅ 3. SHIMMER EFFECT (Kilau di button)
```tsx
<button className="relative overflow-hidden group">
  <span className="relative z-10">Text Button</span>
  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
</button>
```

### ✅ 4. 3D CARD HOVER (Card efek 3D)
```tsx
<div className="card-3d">
  Card dengan efek 3D saat hover
</div>
```

### ✅ 5. GLOW PULSE (Cahaya berdenyut)
```tsx
<div className="animate-glow">
  Elemen dengan efek glow
</div>
```

### ✅ 6. PARALLAX MOUSE (Ikut gerakan mouse)
```tsx
// Di component:
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);

// Di JSX:
<div 
  style={{
    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
  }}
>
  Elemen ikut mouse
</div>
```

### ✅ 7. GRADIENT ANIMATION (Background gradien bergerak)
```tsx
<section className="animate-gradient bg-gradient-to-br from-emerald-500 to-blue-500">
  Background gradien bergerak
</section>
```

### ✅ 8. HOVER SCALE (Membesar saat hover)
```tsx
<button className="hover-scale">
  Button ini membesar saat hover
</button>
```

---

## 📝 CARA PAKAI DI index.tsx:

### Step 1: Import yang diperlukan
```tsx
import ScrollReveal from "../components/ScrollReveal";
import { useEffect, useState } from "react";
```

### Step 2: Tambahkan mouse tracking
```tsx
export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    // JSX...
  )
}
```

### Step 3: Wrap section dengan ScrollReveal
```tsx
{/* Hero Section */}
<ScrollReveal direction="left">
  <div>Hero Content</div>
</ScrollReveal>

{/* Products */}
{products.map((p, index) => (
  <ScrollReveal key={p.id} delay={index * 100}>
    <ProductCard />
  </ScrollReveal>
))}
```

### Step 4: Tambahkan efek di elemen
```tsx
{/* Floating blob */}
<div className="animate-float animate-glow">

{/* Button dengan shimmer */}
<button className="relative overflow-hidden group hover-scale">
  <span className="relative z-10">Text</span>
  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
</button>

{/* Card 3D */}
<div className="card-3d">
  Card Product
</div>
```

---

## 🎯 CONTOH IMPLEMENTASI LENGKAP:

Lihat file: `pages/index.tsx` (file asli Anda)

Atau copy dari: `CONTOH-index-dengan-efek.txt` (jika saya buatkan)

---

## 💡 Tips:
1. Jangan terlalu banyak animasi di satu section
2. Gunakan delay yang berbeda untuk efek berurutan (100ms, 200ms, 300ms)
3. Kombinasikan beberapa efek untuk hasil maksimal
4. Test di mobile untuk memastikan performanya baik

---

## 🐛 Troubleshooting:
- **Animasi tidak jalan**: Pastikan `globals.css` sudah di-import di `_app.tsx`
- **ScrollReveal tidak muncul**: Cek apakah component `ScrollReveal.tsx` sudah dibuat
- **Performa lambat**: Kurangi jumlah animasi atau gunakan `will-change` CSS

---

Selamat mencoba! 🚀

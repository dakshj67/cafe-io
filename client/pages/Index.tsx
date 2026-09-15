import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Menu,
  Minus,
  Plus,
  Search,
  Sparkles,
  ShoppingBag,
  X,
} from "lucide-react";

const menuCategories = ["All", "Coffee", "Drinks", "Breads", "Cakes", "Savory"];

const foodImages = {
  latte: "https://images.pexels.com/photos/28496565/pexels-photo-28496565.jpeg",
  cafeAuLait: "https://images.pexels.com/photos/2638020/pexels-photo-2638020.jpeg",
  cortado: "https://images.pexels.com/photos/14704662/pexels-photo-14704662.jpeg",
  spritz: "https://images.pexels.com/photos/12086895/pexels-photo-12086895.jpeg",
  focaccia: "https://images.pexels.com/photos/14122639/pexels-photo-14122639.jpeg",
  pain: "https://images.pexels.com/photos/7333002/pexels-photo-7333002.jpeg",
  basque: "https://images.pexels.com/photos/24206900/pexels-photo-24206900.jpeg",
  victoria: "https://images.pexels.com/photos/10148398/pexels-photo-10148398.jpeg",
  tiramisu: "https://images.pexels.com/photos/17558644/pexels-photo-17558644.jpeg",
  croque: "https://images.pexels.com/photos/6416558/pexels-photo-6416558.jpeg",
  patatas: "https://images.pexels.com/photos/15801065/pexels-photo-15801065.jpeg",
  pasta: "https://images.pexels.com/photos/15820588/pexels-photo-15820588.jpeg",
};

const menuItems = [
  { name: "Cloud Nine Latte", description: "Espresso, brown sugar, vanilla cloud", price: "₹540", tag: "Signature", category: "Coffee", className: "drink-latte", art: "cup", symbol: "☕", image: foodImages.latte },
  { name: "Café au Lait", description: "French press coffee, silky steamed milk", price: "₹420", tag: "France", category: "Coffee", className: "coffee-french", art: "plate", symbol: "☕", image: foodImages.cafeAuLait },
  { name: "Cortado de Miel", description: "Spanish espresso, warm honey, orange zest", price: "₹460", tag: "Spain", category: "Coffee", className: "coffee-spanish", art: "plate", symbol: "◌", image: foodImages.cortado },
  { name: "Elderflower Spritz", description: "Elderflower, lemon, sparkling water, mint", price: "₹500", tag: "Refreshing", category: "Drinks", className: "drink-spritz", art: "plate", symbol: "✦", image: foodImages.spritz },
  { name: "Rosemary Focaccia", description: "Whipped ricotta, herbs, wild honey", price: "₹680", tag: "Italy", category: "Breads", className: "food-focaccia", art: "focaccia", symbol: "✦", image: foodImages.focaccia },
  { name: "Pain au Chocolat", description: "French butter pastry, dark chocolate batons", price: "₹590", tag: "France", category: "Breads", className: "bread-pastry", art: "plate", symbol: "⌁", image: foodImages.pain },
  { name: "Basque Cheesecake", description: "Caramelized top, berry compote", price: "₹800", tag: "Spain", category: "Cakes", className: "food-cake", art: "cake", symbol: "◆", image: foodImages.basque },
  { name: "Victoria Sponge", description: "Strawberry jam, vanilla cream, soft sponge", price: "₹720", tag: "Britain", category: "Cakes", className: "cake-sponge", art: "plate", symbol: "✿", image: foodImages.victoria },
  { name: "Tiramisu Cloud", description: "Mascarpone, espresso, cocoa, ladyfingers", price: "₹760", tag: "Italy", category: "Cakes", className: "cake-tiramisu", art: "plate", symbol: "◇", image: foodImages.tiramisu },
  { name: "Croque Monsieur", description: "Gruyère, smoked ham, béchamel, sourdough", price: "₹1,100", tag: "France", category: "Savory", className: "savory-croque", art: "plate", symbol: "▰", image: foodImages.croque },
  { name: "Patatas Bravas", description: "Crisp potatoes, smoked paprika aioli", price: "₹850", tag: "Spain", category: "Savory", className: "savory-potatoes", art: "plate", symbol: "●", image: foodImages.patatas },
  { name: "Mushroom Tagliatelle", description: "Wild mushrooms, parmesan, sage butter", price: "₹1,350", tag: "Italy", category: "Savory", className: "savory-pasta", art: "plate", symbol: "⌁", image: foodImages.pasta },
];

const navItems = ["Menu", "Our story", "Visit us"];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [reservationConfirmed, setReservationConfirmed] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [bookingName, setBookingName] = useState("");
  const [quantity, setQuantity] = useState(2);
  const [activeCategory, setActiveCategory] = useState("All");
  const [orderOpen, setOrderOpen] = useState(false);
  const [orderItems, setOrderItems] = useState<typeof menuItems>([]);
  const visibleMenuItems = activeCategory === "All" ? menuItems : menuItems.filter((item) => item.category === activeCategory);
  const orderTotal = orderItems.reduce((total, item) => total + Number(item.price.replace(/[^0-9]/g, "")), 0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ee] text-[#1d2924]">
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <header className="relative z-30 flex items-center justify-between border-b border-[#1d2924]/15 py-5 lg:py-7">
          <a href="#top" className="group flex items-center gap-3" aria-label="Juniper and Co. home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1d2924] text-[#f7f4ee] transition-transform group-hover:rotate-12">
              <span className="text-lg">✦</span>
            </span>
            <span className="font-serif text-xl tracking-[-0.03em]">Juniper &amp; Co.</span>
          </a>

          <nav className="hidden items-center gap-10 text-sm font-medium lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="transition-colors hover:text-[#bc6947]">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden rounded-full p-2 transition-colors hover:bg-[#e8e1d6] sm:block" aria-label="Search">
              <Search size={18} strokeWidth={1.8} />
            </button>
            <button onClick={() => setOrderOpen(true)} className="relative hidden items-center gap-2 rounded-full border border-[#1d2924]/20 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[#e8e1d6] sm:flex" aria-label="View order">
              <ShoppingBag size={16} /> Order{orderItems.length > 0 && <span className="grid h-5 min-w-5 place-items-center rounded-full bg-[#bc6947] px-1 text-[10px] text-white">{orderItems.length}</span>}
            </button>
            <button onClick={() => setReservationOpen(true)} className="rounded-full bg-[#bc6947] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#a75536] sm:px-5">
              Reserve a table
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-[#1d2924]/20 p-2.5 lg:hidden" aria-label="Toggle menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {menuOpen && (
            <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-[#1d2924]/10 bg-[#fbfaf7] p-4 shadow-xl lg:hidden">
              {navItems.map((item) => (
                <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="block rounded-xl px-4 py-3 font-medium hover:bg-[#eee8dc]">
                  {item}
                </a>
              ))}
            </div>
          )}
        </header>

        <section id="top" className="relative grid min-h-[680px] items-center gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6 lg:py-20">
          <div className="relative z-10 max-w-xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#bc6947]/30 bg-[#f2e4d6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#9c4f36]">
              <Sparkles size={14} /> A little place with a big heart
            </div>
            <h1 className="font-serif text-[clamp(4rem,8vw,7.6rem)] leading-[0.83] tracking-[-0.075em] text-[#1d2924]">
              Slow mornings.<br /><span className="text-[#bc6947]">Good company.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-[#52605a]">
              A neighborhood café and kitchen where seasonal plates, excellent coffee, and unhurried moments come together.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#menu" className="group inline-flex items-center gap-3 rounded-full bg-[#1d2924] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#bc6947]">
                Explore the menu <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#our-story" className="inline-flex items-center gap-2 px-3 py-3.5 text-sm font-semibold text-[#1d2924] underline decoration-[#bc6947] decoration-2 underline-offset-4">
                Our story
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6 border-t border-[#1d2924]/15 pt-5 text-sm text-[#52605a]">
              <span className="flex items-center gap-2"><Clock3 size={17} /> Mon–Sun, 7am–9pm</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#bc6947] sm:block" />
              <span className="hidden sm:inline">Bhimtal, India</span>
            </div>
          </div>

          <div className="relative mx-auto h-[480px] w-full max-w-[650px] lg:h-[580px]">
            <div className="absolute inset-4 rounded-[38px] bg-[#dfb58f] shadow-[0_30px_60px_rgba(80,45,30,0.15)] lg:inset-10" />
            <div className="relative h-full overflow-hidden rounded-[38px] border-[14px] border-[#f7f4ee] bg-[#f1e9dc] shadow-xl">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29970f0fe18b41d1b98d8778438e942c%2Ff215085077b3434d867ee13331b8d7ae?format=webp&width=800&height=1200" alt="Japanese welcome cat illustration" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1d2924]/65 to-transparent px-7 pb-7 pt-20 text-white"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f7d8bd]">いらっしゃいませ</p><p className="mt-2 font-serif text-3xl">Welcome in.</p></div>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1d2924] px-5 py-2 text-xs font-medium tracking-wide text-white shadow-lg">made with care</div>
          </div>
        </section>

        <section id="menu" className="border-t border-[#1d2924]/15 py-20 lg:py-32">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#bc6947]">From our kitchen</p>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">A little tour of<br /><span className="text-[#bc6947]">Europe, by plate.</span></h2>
              <p className="max-w-xs text-sm leading-6 text-[#68736d]">French pastries, Italian comfort food, Spanish sunshine, and British tea-room classics — made our way.</p>
            </div>
          </div>
          <div className="mb-10 flex gap-2 overflow-x-auto border-y border-[#1d2924]/15 py-4 scrollbar-none">
            {menuCategories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${activeCategory === category ? "bg-[#1d2924] text-white" : "bg-[#eee8dc] text-[#52605a] hover:bg-[#e4dccf]"}`}>
                {category}
              </button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleMenuItems.map((item, index) => (
              <article key={item.name} className={`group overflow-hidden rounded-[28px] bg-[#eee8dc] transition-transform hover:-translate-y-1 ${index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
                <div className={`menu-art min-h-64 lg:min-h-[290px] ${item.className}`}>
                  <span className="absolute left-5 top-5 rounded-full bg-[#f7f4ee]/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#1d2924]">{item.tag}</span>
                  <img src={item.image} alt={item.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d2924]/30 to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-7">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#bc6947]">{item.category}</p>
                  <div className="flex items-start justify-between gap-3"><h3 className="font-serif text-2xl leading-tight tracking-[-0.03em]">{item.name}</h3><span className="font-semibold text-[#bc6947]">{item.price}</span></div>
                  <p className="mt-3 text-sm leading-6 text-[#68736d]">{item.description}</p>
                  <button onClick={() => { setOrderItems((current) => [...current, item]); setOrderOpen(true); }} className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#1d2924] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#bc6947]">Add to order <Plus size={14} /></button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[28px] border border-[#1d2924]/15 bg-[#f2e4d6] px-7 py-6 text-center sm:flex-row sm:text-left"><p className="font-serif text-2xl tracking-[-0.03em]">The menu changes with the market.</p><a href="#visit-us" className="group flex items-center gap-2 text-sm font-semibold">Ask about tonight's specials <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a></div>
        </section>

        <section id="our-story" className="grid items-center gap-12 border-t border-[#1d2924]/15 py-16 lg:grid-cols-2 lg:gap-24 lg:py-24">
          <div className="relative h-[410px] overflow-hidden rounded-[32px] bg-[#c6d0c1] shadow-[0_25px_50px_rgba(55,44,35,0.12)]">
            <img src="https://images.pexels.com/photos/19214628/pexels-photo-19214628.jpeg" alt="Simple café table and chairs beside a sunlit wall" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d2924]/65 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-8 text-white"><p className="font-serif text-3xl">Your usual corner.</p><p className="mt-1 text-sm text-white/75">Table 04 · window light</p></div>
            <div className="absolute right-5 top-5 rounded-full bg-[#f7f4ee]/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1d2924]">sit a while</div>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#bc6947]">Our story</p>
            <h2 className="max-w-lg font-serif text-5xl leading-[0.95] tracking-[-0.055em] sm:text-6xl">A warm corner of the neighborhood.</h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#52605a]">Juniper &amp; Co. started with two friends, a tiny espresso machine, and a belief that the best days begin around a table. Today, we still roast in small batches, bake before sunrise, and know our regulars by name.</p>
            <a href="#visit-us" className="mt-8 inline-flex items-center gap-3 font-semibold text-[#1d2924]">More about us <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="grid gap-8 border-t border-[#1d2924]/15 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-24">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#bc6947]">The little details</p><h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl">A place made for lingering.</h2><p className="mt-6 max-w-sm leading-7 text-[#68736d]">Warm wood, chalky walls, afternoon light, and a table that always has room for one more.</p></div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="cafe-detail cafe-table"><span className="absolute bottom-5 left-5 font-serif text-2xl text-white">The table</span><span className="absolute right-4 top-4 rounded-full bg-white/75 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#1d2924]">oak + linen</span></div>
            <div className="cafe-detail cafe-wall"><div className="wall-frame" /><span className="absolute bottom-5 left-5 font-serif text-2xl text-[#1d2924]">The wall</span><span className="absolute right-4 top-4 text-3xl text-[#bc6947]">✦</span></div>
            <div className="cafe-detail cafe-corner"><span className="absolute bottom-5 left-5 font-serif text-2xl text-white">The corner</span><span className="absolute right-4 top-4 rounded-full bg-[#f7f4ee]/85 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#1d2924]">window seat</span></div>
          </div>
        </section>

        <section id="visit-us" className="relative mb-10 overflow-hidden rounded-[32px] bg-[#1d2924] px-7 py-14 text-[#f7f4ee] sm:px-14 lg:mb-20 lg:py-20">
          <div className="absolute -right-20 -top-40 h-96 w-96 rounded-full border-[60px] border-[#bc6947]/30" />
          <div className="relative z-10 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e8ab88]">Your table is waiting</p>
            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl">Come for coffee.<br />Stay for dinner.</h2>
            <p className="mt-6 max-w-md leading-7 text-[#becac3]">Bring a friend, bring a book, or bring your appetite. We’ll keep the light on.</p>
            <button onClick={() => setReservationOpen(true)} className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#e9a681] px-6 py-3.5 text-sm font-bold text-[#1d2924] transition-all hover:-translate-y-1 hover:bg-white">Make a reservation <CalendarDays size={17} /></button>
          </div>
          <div className="absolute bottom-8 right-10 hidden text-right text-sm text-[#becac3] md:block"><p className="mb-2 text-white">Bhimtal Lake Road</p><p>Nainital, Uttarakhand</p><p className="mt-4">+91 98765 43210</p></div>
        </section>

        <footer className="flex flex-col justify-between gap-5 border-t border-[#1d2924]/15 py-8 text-sm text-[#52605a] sm:flex-row sm:items-center">
          <span className="font-serif text-lg text-[#1d2924]">Juniper &amp; Co.</span>
          <div className="flex items-center gap-6"><a href="#instagram" className="hover:text-[#bc6947]"><Sparkles size={18} /></a><a href="#privacy" className="hover:text-[#bc6947]">Privacy</a><span>© 2024 Juniper &amp; Co.</span></div>
        </footer>
      </div>

      {reservationOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#1d2924]/60 p-5 backdrop-blur-sm" onClick={() => setReservationOpen(false)}>
          <div className="w-full max-w-md rounded-[28px] bg-[#f7f4ee] p-7 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-7 flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#bc6947]">A table for you</p><h2 className="mt-2 font-serif text-4xl tracking-[-0.05em]">Book your visit.</h2></div><button onClick={() => setReservationOpen(false)} className="rounded-full p-2 hover:bg-[#e8e1d6]" aria-label="Close reservation"><X size={20} /></button></div>
            <label className="block text-sm font-semibold">Booking name<input value={bookingName} onChange={(event) => setBookingName(event.target.value)} placeholder="Your name" className="mt-2 w-full rounded-xl border border-[#1d2924]/15 bg-white px-3 py-3 font-normal outline-none ring-[#bc6947] focus:ring-2" /></label>
            <div className="mt-4 grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold">Date<input type="date" className="mt-2 w-full rounded-xl border border-[#1d2924]/15 bg-white px-3 py-3 font-normal" /></label><label className="text-sm font-semibold">Time<select className="mt-2 w-full rounded-xl border border-[#1d2924]/15 bg-white px-3 py-3 font-normal"><option>7:00 PM</option><option>7:30 PM</option><option>8:00 PM</option></select></label></div>
            <div className="mt-5 flex items-center justify-between rounded-xl border border-[#1d2924]/15 bg-white px-4 py-3"><span className="text-sm font-semibold">Guests</span><div className="flex items-center gap-3"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="grid h-8 w-8 place-items-center rounded-full bg-[#eee8dc]" aria-label="Decrease guests"><Minus size={14} /></button><span className="w-4 text-center">{quantity}</span><button onClick={() => setQuantity(quantity + 1)} className="grid h-8 w-8 place-items-center rounded-full bg-[#eee8dc]" aria-label="Increase guests"><Plus size={14} /></button></div></div>
            <button disabled={!bookingName.trim()} onClick={() => { setReservationOpen(false); setReservationConfirmed(true); }} className="mt-6 w-full rounded-full bg-[#bc6947] py-3.5 font-bold text-white transition-colors hover:bg-[#a75536] disabled:cursor-not-allowed disabled:opacity-40">Reserve my table</button>
            <p className="mt-4 text-center text-xs text-[#68736d]">Reservations are held for 15 minutes.</p>
          </div>
        </div>
      )}

      {orderOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-[#1d2924]/60 p-4 backdrop-blur-sm" onClick={() => setOrderOpen(false)}>
          <div className="flex h-full w-full max-w-md flex-col rounded-[28px] bg-[#f7f4ee] p-7 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#bc6947]">Juniper to go</p><h2 className="mt-2 font-serif text-4xl tracking-[-0.05em]">Your order.</h2></div><button onClick={() => setOrderOpen(false)} className="rounded-full p-2 hover:bg-[#e8e1d6]" aria-label="Close order"><X size={20} /></button></div>
            <div className="mt-7 flex-1 space-y-3 overflow-y-auto">
              {orderItems.length === 0 ? <p className="rounded-2xl bg-[#eee8dc] p-5 text-sm text-[#68736d]">Your order is waiting for something delicious.</p> : orderItems.map((item, index) => <div key={`${item.name}-${index}`} className="flex items-center justify-between rounded-2xl bg-white p-4"><div><p className="font-serif text-lg">{item.name}</p><p className="text-xs text-[#68736d]">{item.category}</p></div><span className="font-semibold text-[#bc6947]">{item.price}</span></div>)}
            </div>
            <div className="border-t border-[#1d2924]/15 pt-5"><div className="mb-4 flex items-center justify-between font-semibold"><span>Total</span><span className="text-[#bc6947]">₹{orderTotal.toLocaleString("en-IN")}</span></div><button disabled={orderItems.length === 0} onClick={() => { setOrderOpen(false); setOrderConfirmed(true); }} className="w-full rounded-full bg-[#1d2924] py-3.5 font-bold text-white transition-colors hover:bg-[#bc6947] disabled:cursor-not-allowed disabled:opacity-40">Place order</button></div>
          </div>
        </div>
      )}

      {reservationConfirmed && (
        <div className="fixed bottom-6 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-4 rounded-2xl bg-[#1d2924] p-4 text-white shadow-2xl"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#9db79b] text-[#1d2924]">✓</div><div className="flex-1"><p className="font-semibold">Table reserved!</p><p className="text-sm text-[#becac3]">We’ll see you soon, {bookingName}.</p></div><button onClick={() => setReservationConfirmed(false)} className="text-[#becac3]" aria-label="Dismiss confirmation"><X size={18} /></button></div>
      )}

      {orderConfirmed && (
        <div className="fixed bottom-6 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-4 rounded-2xl bg-[#1d2924] p-4 text-white shadow-2xl"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#e9a681] text-[#1d2924]">✓</div><div className="flex-1"><p className="font-semibold">Order received!</p><p className="text-sm text-[#becac3]">We’re getting your favorites ready.</p></div><button onClick={() => setOrderConfirmed(false)} className="text-[#becac3]" aria-label="Dismiss order confirmation"><X size={18} /></button></div>
      )}
    </main>
  );
}

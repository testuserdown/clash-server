import {
  FaBolt, // Zap
  FaTrophy, // Trophy
  FaShieldAlt, // Shield
  FaCrown, // Crown
  FaMagic, // Sparkles
  FaGem, // Gem
  FaGlobe, // Globe
  FaCalendarAlt, // Calendar
  FaRegCommentDots, // MessageCircle
  FaStar, // Star
  FaCross, // Swords (alternatif, çünkü swords yok fa'da)
} from "react-icons/fa"; // Star
import bg from "./assets/bg.png";
import { heroes, troops } from "./components/data";
import { useEffect, useState } from "react";

const ENV = window.__ENV || {};
const title = ENV.TITLE || "ClashLegends Server";
const version = ENV.VERSION || "v15.0.4";
const x_link = ENV.X_LINK || "production";

export function App() {
  const [onlineCount, setOnlineCount] = useState(14);

  useEffect(() => {
    // Simulate fetching online player count from an API
    const fetchOnlineCount = () => {
      // Replace this with actual API call if available
      const simulatedCount = Math.floor(100 + Math.random() * 50);
      setOnlineCount(simulatedCount);
    };

    fetchOnlineCount();
    const interval = setInterval(fetchOnlineCount, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative h-[100dvh] w-[100vw] overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Background"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-3 border-b border-primary/20 bg-card/40 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <FaShieldAlt className="h-9 w-9 text-primary" />
              <FaMagic className="absolute -top-1 -right-1 h-4 w-4 text-accent animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">{title}</h1>
              <p className="text-xs text-primary">
                {version} • IP: play.clashlegends.net
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-bold text-primary">
                {onlineCount.toLocaleString()}
              </span>
              <span className="text-xs text-muted-foreground">Online</span>
            </div>
            <button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
            >
              Download APK
            </button>
          </nav>
        </header>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-[1fr_380px] gap-3 p-3 overflow-hidden">
          {/* LEFT PANEL */}
          <div className="flex flex-col gap-3 overflow-hidden">
            <div className="grid grid-cols-2 gap-3 flex-1 overflow-hidden">
              {/* HEROES */}
              <div className="rounded-lg border-2 border-primary/40 bg-card/60 p-3 flex flex-col overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <FaCrown className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-bold text-foreground">
                    Legendary Heroes
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2 flex-1 overflow-y-auto pr-1">
                  {heroes.map((h) => (
                    <div
                      key={h.name}
                      className="rounded-lg border border-primary/30 bg-gradient-to-br from-primary/20 to-accent/10 p-2 flex flex-col items-center justify-center hover:border-primary transition-all "
                    >
                      <img
                        src={h.img}
                        alt={h.name}
                        className="h-28 mb-1 object-cover"
                      />
                      <p className="text-xs font-bold text-foreground">
                        {h.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TROOPS */}
              <div className="rounded-lg border-2 border-primary/40 bg-card/60 p-3 flex flex-col overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <FaCross className="h-4 w-4 text-accent" />
                  <h3 className="text-sm font-bold text-foreground">
                    Elite Troops
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-2 flex-1 overflow-y-auto pr-1">
                  {troops.map((t) => (
                    <div
                      key={t.name}
                      className="rounded-lg border border-accent/30 bg-gradient-to-br from-accent/20 to-primary/10 p-2 flex flex-col items-center justify-center hover:border-accent transition-all "
                    >
                      <img src={t.img} alt={t.name} className="h-20 mb-1" />
                      <p className="text-xs font-bold text-foreground">
                        {t.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 gap-3">
              {/* Top Players */}
              <div className="rounded-lg border border-border bg-card/60 backdrop-blur-sm p-3">
                <div className="flex items-center gap-2 mb-2">
                  <FaTrophy className="h-4 w-4 text-primary" />
                  <h3 className="text-xs font-bold text-foreground">
                    Top Players
                  </h3>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 p-1.5 rounded bg-primary/10 border border-primary/20">
                    <span className="text-xs font-bold text-primary">1.</span>
                    <span className="text-xs text-foreground flex-1">
                      DragonSlayer
                    </span>
                    <span className="text-xs text-accent">8,542</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded bg-secondary/50">
                    <span className="text-xs font-bold text-muted-foreground">
                      2.
                    </span>
                    <span className="text-xs text-foreground flex-1">
                      WarChief
                    </span>
                    <span className="text-xs text-muted-foreground">8,201</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded bg-secondary/50">
                    <span className="text-xs font-bold text-muted-foreground">
                      3.
                    </span>
                    <span className="text-xs text-foreground flex-1">
                      KingCrusher
                    </span>
                    <span className="text-xs text-muted-foreground">7,998</span>
                  </div>
                </div>
              </div>

              {/* Top Clans */}
              <div className="rounded-lg border border-border bg-card/60 backdrop-blur-sm p-3">
                <div className="flex items-center gap-2 mb-2">
                  <FaShieldAlt className="h-4 w-4 text-accent" />
                  <h3 className="text-xs font-bold text-foreground">
                    Top Clans
                  </h3>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 p-1.5 rounded bg-accent/10 border border-accent/20">
                    <span className="text-xs font-bold text-accent">1.</span>
                    <span className="text-xs text-foreground flex-1">
                      Elite Warriors
                    </span>
                    <span className="text-xs text-primary">50/50</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded bg-secondary/50">
                    <span className="text-xs font-bold text-muted-foreground">
                      2.
                    </span>
                    <span className="text-xs text-foreground flex-1">
                      Dark Knights
                    </span>
                    <span className="text-xs text-muted-foreground">50/50</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded bg-secondary/50">
                    <span className="text-xs font-bold text-muted-foreground">
                      3.
                    </span>
                    <span className="text-xs text-foreground flex-1">
                      Phoenix Rising
                    </span>
                    <span className="text-xs text-muted-foreground">48/50</span>
                  </div>
                </div>
              </div>

              {/* Recent Victory */}
              <div className="rounded-lg border border-border bg-card/60 backdrop-blur-sm p-3">
                <div className="flex items-center gap-2 mb-2">
                  <FaStar className="h-4 w-4 text-primary" />
                  <h3 className="text-xs font-bold text-foreground">
                    Recent Victory
                  </h3>
                </div>
                <div className="space-y-1.5">
                  <div className="p-2 rounded bg-primary/10 border border-primary/20">
                    <p className="text-xs font-bold text-primary mb-1">
                      Elite Warriors vs Dark Knights
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Clan War • 3 hours ago
                    </p>
                    <p className="text-xs text-foreground mt-1">
                      Perfect War: 150 ⭐
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex flex-col gap-3 overflow-hidden">
            {" "}
            {/* Welcome Panel */}
            <div className="rounded-lg border-2 border-primary/40 bg-gradient-to-br from-primary/20 to-accent/10 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <FaCrown className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-foreground">
                  Welcome, Chief!
                </h2>
              </div>
              <p className="text-xs text-foreground/90 leading-relaxed mb-3">
                Experience Clash of Clans like never before! Join 50,000+
                players on the most advanced private server with unlimited
                resources and instant upgrades.
              </p>
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg">
                Start Playing Now
              </button>
            </div>
            {/* Server Features */}
            <div className="flex-1 rounded-lg border border-border bg-card/60 backdrop-blur-sm p-3 overflow-y-auto">
              <h3 className="font-bold text-foreground flex items-center gap-2 mb-2">
                <FaBolt className="h-4 w-4 text-accent" />
                Server Features
              </h3>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 border border-primary/20 hover:border-primary/40 transition-all">
                  <FaBolt className="h-4 w-4 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      10x Faster Progression
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Level up faster than official game
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 border border-primary/20 hover:border-primary/40 transition-all">
                  <FaGem className="h-4 w-4 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      Unlimited Resources
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Infinite gems, gold, and elixir
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 border border-primary/20 hover:border-primary/40 transition-all">
                  <FaCross className="h-4 w-4 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      Exclusive Custom Troops
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Unique units only on this server
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 border border-primary/20 hover:border-primary/40 transition-all">
                  <FaTrophy className="h-4 w-4 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      Enhanced Clan Wars
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Bigger rewards & epic battles
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 border border-primary/20 hover:border-primary/40 transition-all">
                  <FaCalendarAlt className="h-4 w-4 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      Weekly Tournaments
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Compete for exclusive prizes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 border border-primary/20 hover:border-primary/40 transition-all">
                  <FaGlobe className="h-4 w-4 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      Global Low-Latency
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Fast servers worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* How to Join */}
            <div className="rounded-lg border border-border bg-card/60 backdrop-blur-sm p-3">
              <h3 className="text-xs font-bold text-foreground mb-2">
                How to Join
              </h3>
              <div className="space-y-1.5">
                <div className="flex items-start gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </span>
                  <p className="text-xs text-foreground flex-1">
                    Download the APK file
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </span>
                  <p className="text-xs text-foreground flex-1">
                    Install and launch the game
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </span>
                  <p className="text-xs text-foreground flex-1">
                    Create account and start playing!
                  </p>
                </div>
              </div>
            </div>
            {/* Social & Stats */}
            <div className="grid grid-cols-2 gap-2">
              <button
                variant="outline"
                size="sm"
                className="border-primary/30 hover:bg-primary/10 bg-transparent flex items-center gap-3 text-[16px] justify-center"
                onClick={() => window.open(`https://x.com/${x_link}`, "_blank")}
              >
                <FaRegCommentDots className="h-4 w-4 mr-1" />
                Join X
              </button>
              <div className="rounded-lg bg-card/80 border border-border p-2 text-center backdrop-blur-sm">
                <p className="text-lg font-bold text-primary">24/7</p>
                <p className="text-xs text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-between px-6 py-2 border-t border-primary/20 bg-card/40 backdrop-blur-sm">
          <p className="text-xs text-muted-foreground">
            © 2025 ClashLegends • Not affiliated with Supercell • 100% Free
            Forever
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-primary font-bold">
              ⭐ 5.0 Rating from 50,000+ Players
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}

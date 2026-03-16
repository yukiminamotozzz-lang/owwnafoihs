import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, Facebook, Wifi, Home as HomeIcon, Bath, Utensils, BarChart3, Wind, ParkingCircle, ChevronRight } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Airbnb-style with warm, cozy colors
 * - Color Palette: Warm browns (#d4845c), cream (#faf8f6), natural earth tones
 * - Typography: Playfair Display for headings (elegant), Inter for body (readable)
 * - Layout: Asymmetric, spacious with ample whitespace
 * - Interactions: Smooth transitions, subtle hover effects, premium feel
 */

export default function Home() {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState("2");

  const handleBooking = () => {
    if (checkInDate && checkOutDate && guests) {
      alert(`Yêu cầu đặt phòng:\nNgày nhận phòng: ${checkInDate}\nNgày trả phòng: ${checkOutDate}\nSố khách: ${guests}\n\nVui lòng liên hệ với chúng tôi để xác nhận.`);
    } else {
      alert("Vui lòng điền đầy đủ thông tin đặt phòng.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
              🦉
            </div>
            <span className="heading-md text-lg">Owl's Night</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-accent transition-all duration-300">Giới thiệu</a>
            <a href="#features" className="text-sm hover:text-accent transition-all duration-300">Tiện nghi</a>
            <a href="#gallery" className="text-sm hover:text-accent transition-all duration-300">Thư viện ảnh</a>
            <a href="#reviews" className="text-sm hover:text-accent transition-all duration-300">Đánh giá</a>
            <a href="#booking" className="text-sm hover:text-accent transition-all duration-300">Đặt phòng</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero-homestay.jpg')`,
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <div className="mb-6 animate-fade-in">
            <div className="text-6xl mb-4"></div>
            <h1 className="heading-display text-white drop-shadow-lg mb-4">
              Owl's Night Homestay
            </h1>
            <p className="text-2xl font-light drop-shadow-md mb-8">
              Nơi yên bình của bạn tại Thủ Đức, TP.HCM
            </p>
          </div>

          <div className="flex items-center gap-2 mb-8 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-lg font-semibold">Đánh giá 5.0 từ khách hàng</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            >
              Đặt phòng ngay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            >
              Xem phòng
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Về Homestay của chúng tôi</h2>
              <p className="text-body mb-4 text-muted-foreground">
                Owl's Night Homestay là một ngôi nhà riêng tư yên tĩnh được thiết kế để mang lại sự thoải mái và thư giãn. Nằm ở khu vực yên tĩnh của Thủ Đức, cơ sở của chúng tôi mang đến sự cân bằng hoàn hảo giữa yên bình và tiện lợi.
              </p>
              <p className="text-body mb-6 text-muted-foreground">
                Chúng tôi tin vào việc tạo ra những trải nghiệm đáng nhớ cho khách hàng. Mỗi chi tiết đã được chúng tôi chăm sóc kỹ lưỡng để đảm bảo kỳ nghỉ của bạn thoải mái, ấm áp và thực sự đặc biệt.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">✓</span>
                  </div>
                  <span className="text-sm font-medium">Riêng tư hoàn toàn</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">✓</span>
                  </div>
                  <span className="text-sm font-medium">Không gian ấm cúng & thân thiện</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">✓</span>
                  </div>
                  <span className="text-sm font-medium">Tiện nghi hiện đại</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/about-homestay.jpg"
                alt="Phòng khách"
                className="rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-warm">
        <div className="container">
          <h2 className="heading-lg text-center mb-16">Tiện nghi & Dịch vụ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: HomeIcon, title: "2 Phòng ngủ", desc: "Rộng rãi và thoải mái" },
              { icon: Bath, title: "3 Phòng tắm", desc: "Hiện đại và đầy đủ tiện nghi" },
              { icon: BarChart3, title: "Phòng khách rộng", desc: "Hoàn hảo để thư giãn" },
              { icon: Utensils, title: "Bếp đầy đủ tiện nghi", desc: "Tất cả những gì bạn cần" },
              { icon: Wind, title: "Ban công", desc: "Thưởng thức không khí trong lành" },
              { icon: ParkingCircle, title: "Đỗ xe miễn phí", desc: "Tiện lợi cho khách" },
              { icon: Wifi, title: "WiFi tốc độ cao", desc: "Luôn kết nối" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="heading-md text-lg mb-2">{feature.title}</h3>
                <p className="text-subtle">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container">
          <h2 className="heading-lg text-center mb-16">Thư viện ảnh</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663440293485/Tfjfu95G33WNsCy8jmg7NP/2025-06-24_3e27608e.jpg",
                title: "Phòng ngủ chính",
              },
              {
                src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663440293485/Tfjfu95G33WNsCy8jmg7NP/704386279_b16eab89.jpg",
                title: "Phòng khách & Bếp",
              },
              {
                src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663440293485/Tfjfu95G33WNsCy8jmg7NP/704387077_1addf4ab.jpg",
                title: "Phòng tắm",
              },
              {
                src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663440293485/Tfjfu95G33WNsCy8jmg7NP/704386463_cf98d890.jpg",
                title: "Phòng ngủ & Không gian làm việc",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-80"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <p className="text-white font-semibold p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </p>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-warm">
        <div className="container max-w-4xl">
          <h2 className="heading-lg text-center mb-16">Đánh giá từ khách hàng</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Thảo Nhân",
                rating: 5,
                text: "Rất hài lòng. Chu đáo nhiệt tình. Sạch sẽ thoáng mát.",
                avatar: "TN",
              },
              {
                name: "Michael Chen",
                rating: 5,
                text: "Hoàn hảo cho một kỳ nghỉ gia đình. Các con tôi yêu thích nó và chúng tôi cảm thấy hoàn toàn thoải mái.",
                avatar: "MC",
              },
              {
                name: "Emma Wilson",
                rating: 5,
                text: "Tuyệt đối tuyệt vời với sự hiếu khách ấm áp nhất. Rất khuyến nghị!",
                avatar: "EW",
              },
              {
                name: "David Martinez",
                rating: 5,
                text: "Giá trị tốt nhất trong khu vực. Đẹp, sạch sẽ và rất thoải mái.",
                avatar: "DM",
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <div className="flex gap-1">
                      {Array(review.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-subtle italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="heading-lg text-center mb-12">Vị trí</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <p className="text-muted-foreground">
                    55/1C Đường Cây Keo, Tam Phú, Thủ Đức, TP.HCM
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="heading-md mb-6">Vị trí thuận tiện</h3>
              <p className="text-body mb-6 text-muted-foreground">
                Nằm ở khu vực yên tĩnh của Tam Phú, Thủ Đức, homestay của chúng tôi mang đến sự cân bằng hoàn hảo giữa yên bình và dễ tiếp cận.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Khu vực yên tĩnh</p>
                    <p className="text-subtle">Tránh xa sự ồn ào và xô bồ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Dễ tiếp cận thành phố</p>
                    <p className="text-subtle">Gần các điểm tham quan và mua sắm chính</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">An toàn & Bảo mật</p>
                    <p className="text-subtle">Cộng đồng có cổng với an ninh 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gradient-warm">
        <div className="container max-w-2xl">
          <h2 className="heading-lg text-center mb-4">Sẵn sàng đặt phòng?</h2>
          <p className="text-center text-muted-foreground mb-12">
            Kiểm tra tính khả dụng và đặt kỳ nghỉ hoàn hảo của bạn
          </p>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold mb-2">Ngày nhận phòng</label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Ngày trả phòng</label>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Số lượng khách</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="1">1 khách</option>
                  <option value="2">2 khách</option>
                  <option value="3">3 khách</option>
                  <option value="4">4 khách</option>
                  <option value="5">5+ khách</option>
                </select>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              onClick={handleBooking}
            >
              Đặt phòng ngay
            </Button>

            <p className="text-center text-subtle mt-6">
              Hoặc gọi cho chúng tôi trực tiếp tại <span className="font-semibold">+84 96 232 33 03</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container text-center max-w-3xl">
          <h2 className="heading-lg mb-6 text-white">Trải nghiệm sự thoải mái như ở nhà</h2>
          <p className="text-lg mb-8 text-white/90">
            Khám phá sự kết hợp hoàn hảo giữa sang trọng và thoải mái tại Owl's Night Homestay. Nơi yên bình của bạn đang chờ đợi.
          </p>
          <Button
            size="lg"
            className="bg-white text-accent hover:bg-white/90 px-10 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Đặt phòng hôm nay
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  🦉
                </div>
                <span className="font-bold">Owl's Night</span>
              </div>
              <p className="text-sm text-white/70">
                Nơi yên bình của bạn ở TP.HCM
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liên kết nhanh</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#about" className="hover:text-white transition-all duration-300">Giới thiệu</a></li>
                <li><a href="#features" className="hover:text-white transition-all duration-300">Tiện nghi</a></li>
                <li><a href="#gallery" className="hover:text-white transition-all duration-300">Thư viện ảnh</a></li>
                <li><a href="#reviews" className="hover:text-white transition-all duration-300">Đánh giá</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liên hệ</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  55/1C Đường Cây Keo, Tam Phú, Thủ Đức, TP.HCM
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +84 96 232 33 03
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Theo dõi chúng tôi</h4>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2026 Owl's Night Homestay.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

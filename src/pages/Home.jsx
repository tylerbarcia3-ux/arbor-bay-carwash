import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cloud, MapPin, Navigation, Droplets, ArrowRight, Sun, CloudRain } from 'lucide-react';

const getWeatherLabel = (code) => {
  if (code === 0) return 'Clear';
  if (code >= 1 && code <= 3) return 'Cloudy';
  if (code >= 45 && code <= 48) return 'Foggy';
  if (code >= 51 && code <= 67) return 'Rain';
  if (code >= 71 && code <= 77) return 'Snow';
  if (code >= 80 && code <= 82) return 'Rain Showers';
  if (code >= 85 && code <= 86) return 'Snow Showers';
  if (code >= 95) return 'Thunderstorm';
  return 'Clear';
};

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');

  const fetchWeather = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.4406&longitude=-79.9959&current=temperature_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph');
      if (!response.ok) throw new Error('API Error');
      const data = await response.json();
      
      const current = data.current;
      setWeather({
        temp: `${Math.round(current.temperature_2m)}°F`,
        condition: getWeatherLabel(current.weather_code),
        windSpeed: `${Math.round(current.wind_speed_10m)} mph`
      });
      
      const now = new Date();
      setLastUpdated(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 10 * 60 * 1000); // 10 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero bg-water">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="badge">Open 24/7 in Pittsburgh</div>
            <h1>Fast, Reliable Car Washing — <span>Open 24/7</span></h1>
            <p>Touchless automatic washes and self-serve bays available anytime. Professional results with state-of-the-art equipment.</p>
            <div className="hero-btns">
              <Link to="/wash-options" className="btn btn-primary">
                View Wash Options <ArrowRight size={18} />
              </Link>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=5625+Babcock+Blvd+Pittsburgh+PA+15237"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ border: '2px solid var(--primary)', color: 'var(--primary)' }}
              >
                Get Directions <Navigation size={18} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper" style={{ backgroundImage: 'url("/hero-touchless-illustration.png")' }}>
              <div className="floating-info glass-card">
                <Droplets size={24} color="var(--primary)" />
                <div>
                  <strong>Touchless Tech</strong>
                  <span>Gentle on your car</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather & Salt Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="weather-banner glass-card">
            <div className="weather-info">
              <div className="weather-icon">
                {error ? <Cloud size={48} color="var(--text-light)" /> :
                 loading && !weather ? <Cloud size={48} color="var(--secondary)" className="weather-pulse" /> :
                 (weather?.condition.includes('Rain') || weather?.condition.includes('Snow')) ? <CloudRain size={48} color="var(--primary)" /> :
                 weather?.condition.includes('Cloud') ? <Cloud size={48} color="var(--secondary)" /> :
                 <Sun size={48} color="#f59e0b" />}
              </div>
              <div className="weather-details">
                <h3 id="pittsburgh-weather">
                  {error ? 'Weather unavailable' : 
                   loading && !weather ? 'Updating weather...' : 
                   `Pittsburgh: ${weather?.temp} & ${weather?.condition}`}
                </h3>
                {weather && !error && (
                   <div className="weather-meta">
                     Wind: {weather.windSpeed} &bull; Last updated: {lastUpdated}
                     {loading && <span className="updating-indicator"> (Updating...)</span>}
                   </div>
                )}
                <p>Road conditions may vary. Protect your vehicle today.</p>
              </div>
            </div>
            <div className="weather-msg">
              <p>"Bad weather? Road salt? Stop by anytime — <strong>Arbor Bay CarWash is open 24/7.</strong>"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Callout Section */}
      <section className="section bg-light">
        <div className="container text-center">
          <div className="support-callout glass-card">
            <h2>Need Help With a Wash?</h2>
            <p>If you experienced a system malfunction, were charged incorrectly, or have an issue with a wash, please contact us here so we can make it right.</p>
            <a href="/customer-support" className="btn btn-primary btn-large">
              File a Complaint / Request a Refund
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="section">
        <div className="container info-grid">
          <div className="info-card glass-card">
            <Droplets size={32} />
            <h3>2 Touchless Bays</h3>
            <p>Our premium touchless automatic bays offer a high-pressure, scratch-free clean using laser-guided technology.</p>
          </div>
          <div className="info-card glass-card">
            <div className="icon-group">
              <Droplets size={32} />
              <Droplets size={32} />
            </div>
            <h3>6 Self-Serve Bays</h3>
            <p>Wash it your way with our professional-grade pressure washing equipment and specialized cleaning solutions.</p>
          </div>
          <div className="info-card glass-card">
            <MapPin size={32} />
            <h3>Prime Location</h3>
            <p>Conveniently located at 5625 Babcock Blvd, serving Pittsburgh, Wexford, and the North Hills area.</p>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hero {
          padding: 8rem 0 4rem;
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
          gap: 4rem;
        }
        .hero-text {
          align-self: center;
        }
        .badge {
          display: inline-block;
          padding: 6px 12px;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }
        .hero h1 span {
          color: var(--secondary);
        }
        .hero p {
          font-size: 1.2rem;
          color: var(--text-light);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }
        .hero-btns {
          display: flex;
          gap: 1.5rem;
        }
        .hero-image {
          position: relative;
          display: flex;
          height: 100%;
          align-items: stretch;
        }
        .image-wrapper {
          position: relative;
          flex: 1;
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .floating-info {
          position: absolute;
          bottom: 20px;
          left: 20px;
          padding: 15px 25px;
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .floating-info strong {
          display: block;
          color: var(--primary);
        }
        .floating-info span {
          font-size: 0.8rem;
          color: var(--text-light);
        }

        .weather-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 3rem;
          gap: 2rem;
        }
        .weather-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .weather-msg {
          max-width: 400px;
          border-left: 2px solid var(--primary-light);
          padding-left: 2rem;
        }
        .weather-msg p {
          font-size: 1.1rem;
          color: var(--text-light);
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .info-card {
          padding: 3rem 2rem;
          text-align: center;
          transition: var(--transition);
        }
        .info-card:hover {
          transform: translateY(-10px);
        }
        .info-card h3 {
          margin: 1.5rem 0 1rem;
        }
        .info-card svg {
          color: var(--primary);
        }

        @media (max-width: 992px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-image {
            min-height: 350px;
          }
          .hero p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-btns {
            justify-content: center;
          }
          .weather-banner {
            flex-direction: column;
            text-align: center;
          }
          .weather-msg {
            border-left: none;
            border-top: 2px solid var(--primary-light);
            padding-left: 0;
            padding-top: 2rem;
          }
        }
        @media (max-width: 768px) {
          .hero {
            padding: 5rem 0 3rem;
          }
          .hero h1 {
            font-size: 2.5rem;
          }
          .info-grid {
            grid-template-columns: 1fr;
          }
        }
        @keyframes pulse-opacity {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .weather-pulse {
          animation: pulse-opacity 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .weather-meta {
          font-size: 0.9rem;
          color: var(--text-light);
          margin-bottom: 8px;
        }
        .updating-indicator {
          font-size: 0.8rem;
          color: var(--secondary);
          font-style: italic;
        }
      `}} />
    </div>
  );
};

export default Home;

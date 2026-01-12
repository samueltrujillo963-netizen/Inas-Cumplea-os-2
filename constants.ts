import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Set de Globos Arcoíris Mega",
    category: "Globos",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqYCQiUaBiWWYJ_rDv4B259dN8Yf5zx5PnT7ryUaryXliDaicvCGsn7xAlnp4i-aYa2WVdWRbIznYLb6hk3B57Am4TLjBzFHis3tu4noWzvihnDdwK5UZUqGuEJmPElGBwQovJ2DRhb_oEscv63CuO45lt6ckTqvu_OZnpqUwja_b62LeQdPz9T8Gefrxt672r_lfnBOV6rxsh5oE-rAGVKNItUF_EX0JDsHjx0PFiuzTvoQsKqQKCwl7rQvz5YCzmqVCF--ryeFI6",
    rating: 4.5,
    reviewCount: 42,
    price: 24.99,
    events: ['cumpleanos', 'julio4']
  },
  {
    id: 2,
    name: "Set de Velas Brillantes",
    category: "Decoraciones",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaheOGk9jwEhTCb7bopGWNRczgTx1XPXtwV5Uf9E5D68hJXpJ5YiHnqdGGPiq8-WrYs1ErIFSTlNrX36DVMziQJHomyomlBSUslwxWFCdBYge6JL00LBsdPojUtG0o0MIPUyZPzPmnToTGSWp1Ngr4ABzQlCgRjc8Qgq01ka_7SvyuE1dhX-Pm5nEs5TmtTxo6Q8GbvYgD7t1RzH2y3ZCfBY86afalRlSrzzHdzMVDUcnMPayeBYyH7QAaCKds4K-ZK5MyByw_raew",
    rating: 5,
    reviewCount: 128,
    price: 8.50,
    badge: {
      text: "Más vendido",
      color: "secondary"
    },
    events: ['cumpleanos']
  },
  {
    id: 3,
    name: "Gorros de Fiesta Deluxe (10pk)",
    category: "Disfraces",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuq814qdavuBjEVA7rNiWlBvEAGeDJGnxbHpJiybyuQu5_fXvi-KDykfqwEp6Y2taoWPOgbRTft9YAbnRWx-7PXJ7h3TNS7uu8GFJmOogX2Wmsx3dOPoJJ5jP87KIEG1DkqcypuSTlJc90dVNiZFaIt-jLMdngfU6tispuVoWMWm12RAoTnjZ_hJj3YIwAvsAE-cxsmWUEhv64MKp6ldFmefOadE-l8BeQ_V6d0pOS2SWmsNbwrdGxfOtL14Op5cQN9bVx9PU0Yg7_",
    rating: 3,
    reviewCount: 15,
    price: 12.99,
    events: ['cumpleanos', 'anoNuevo']
  },
  {
    id: 4,
    name: "Envoltura de Regalo Premium",
    category: "Suministros",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfvPFQjft691ZLCUIhermxWGr1TnZSPGAHIEYtYh5TW1KUOqpu3zSzO77kfsJA9SNZ1RYnw2ynLwD_F-ebqDmiKbV9akJQFNqui72jlrPK7ig7bhVx7_Z_SK0xbPx7rnZHrGH1aMCPyUbHnfkKtcq9VNloi3_ExxxZMtyU01aLNSWsTyNkAxY_lbe3T_qqQjcI7-2EuIk732TOOHcDZdWXHYCm8FpqE-QJNe-zt2EOj3X9Z_S0FCnr6pcdU-QIiXhqCl_rzyyAR0BQ",
    rating: 4,
    reviewCount: 8,
    price: 5.95,
    originalPrice: 7.00,
    badge: {
      text: "-15% DCTO",
      color: "accent"
    },
    events: ['cumpleanos', 'sanValentin']
  },
  {
    id: 5,
    name: "Cañones de Confeti (Par)",
    category: "Recuerdos",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuzP8Vblp41ch8q2ZRsAyn5rMYwCyzB4_Be9yLxj8Rog_Dojj0y3Z0BQ1PNh4ychq0kIjEOQiROVwtlastUtYG1tTCSimzNz6Y4fLHXAXqLFzVck2pLeAxkzvdEVZ5vnL2XTM2gkkuoKAMyrbJ5956Y9pRpuGZmgsweb8if1aOlZ0crId3ECTu3YBGzc7eRZ9JitNq_59Pelz0b7xM137PH_Ux9VZC0mr0LwfMTwJD9Wb4bAjHLvv1M98oalLFpx6EiKvnIVXcGxlq",
    rating: 5,
    reviewCount: 56,
    price: 14.50,
    events: ['anoNuevo', 'cumpleanos']
  },
  {
    id: 6,
    name: "Capa de Superhéroe",
    category: "Disfraces",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi8f-G4kIVehilruvW-UBN3EtWd9B5g0pAOzbpMMQYCG813jeinyXZF6xNzLQiMwX1yvhkp3Ea-GNIhJa8YpYK5iyukU-YbH7gEUvj6zWO9Fez74W40i1dpOq0EpzxYTGAl3YpPVgOq717BBwHG9uRIqOrWh7X23wNSmCP_2jngrxUTeQT_EpTJff7LHSDiNJXAfm5EUAIdOYwxTcJ1F96yW77rqHbIn8xkN7Du8d5UoKNRvLF1Hlbl-6i7WVJWF6upx_bwWr9JdMy",
    rating: 4.5,
    reviewCount: 22,
    price: 19.99,
    events: ['cumpleanos']
  }
];
import { Timeline } from '@/components/ui/timeline';
import React from 'react'
import { Hotel } from './ChatBox';
import HotelCardItem from './HotelCardItem';
import PlaceCardItem from './PlaceCardItem';

const TRIP_DATA = {
    "destination": "Istanbul, Turkey",
    "duration": "7 days",
    "origin": "São Paulo, Brazil",
    "budget": "Medium",
    "group_size": "Solo",
    "hotels": [
        {
            "hotel_name": "Hotel Amira Istanbul",
            "hotel_address": "Kucuk Ayasofya Mahallesi, Mustafapasa Sokak No:8, Sultanahmet, Fatih, 34122 Istanbul, Turkey",
            "price_per_night": "€90 - €150",
            "hotel_image_url": "https://example.com/hotel_amira.jpg",
            "geo_coordinates": {
                "latitude": 41.0021,
                "longitude": 28.9795
            },
            "rating": 9.2,
            "description": "A highly-rated boutique hotel located in the historic Sultanahmet area, offering elegant rooms, a terrace with sea views, and excellent service. Perfect for exploring major cultural sights on foot."
        },
        {
            "hotel_name": "Levni Hotel & Spa",
            "hotel_address": "Hocapaşa Mh., Orhaniye Cd. No:1, Sirkeci, Fatih, 34110 Istanbul, Turkey",
            "price_per_night": "€80 - €130",
            "hotel_image_url": "https://example.com/levni_hotel.jpg",
            "geo_coordinates": {
                "latitude": 41.0125,
                "longitude": 28.9785
            },
            "rating": 8.8,
            "description": "Situated in the heart of Sultanahmet, close to Topkapi Palace and Hagia Sophia. Features an indoor pool, spa facilities, and comfortable rooms. Offers a great balance of location and amenities."
        },
        {
            "hotel_name": "Witt Istanbul Suites",
            "hotel_address": "Defterdar Yokuşu No:26, Cihangir, Beyoğlu, 34433 Istanbul, Turkey",
            "price_per_night": "€100 - €180",
            "hotel_image_url": "https://example.com/witt_istanbul.jpg",
            "geo_coordinates": {
                "latitude": 41.0315,
                "longitude": 28.9829
            },
            "rating": 9.1,
            "description": "A stylish design hotel in the trendy Cihangir district, offering spacious loft-style suites with kitchenettes and city views. Ideal for those who prefer a more modern, vibrant neighborhood with great food and nightlife options."
        }
    ],
    "itinerary": [
        {
            "day": 1,
            "day_plan": "Arrival in Istanbul & Historic Sultanahmet Exploration",
            "best_time_to_visit_day": "Morning to evening",
            "activities": [
                {
                    "place_name": "Hagia Sophia Grand Mosque",
                    "place_details": "A magnificent architectural masterpiece, originally a cathedral, then a mosque, museum, and now a mosque again. Witness its stunning mosaics and grand dome.",
                    "place_image_url": "https://example.com/hagia_sophia.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0086,
                        "longitude": 28.9802
                    },
                    "place_address": "Sultan Ahmet, Ayasofya Meydanı No:1, 34122 Fatih/İstanbul",
                    "ticket_price": "Free (as of 2024)",
                    "time_travel_each_location": "2-3 hours",
                    "best_time_to_visit": "Early morning (9:00 AM) to avoid crowds"
                },
                {
                    "place_name": "Blue Mosque (Sultan Ahmed Mosque)",
                    "place_details": "Iconic mosque known for its six minarets and stunning blue İznik tiles that adorn its interior. Currently undergoing restoration, but accessible.",
                    "place_image_url": "https://example.com/blue_mosque.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0054,
                        "longitude": 28.9768
                    },
                    "place_address": "Sultan Ahmet, Atmeydanı Cd. No:7, 34122 Fatih/İstanbul",
                    "ticket_price": "Free",
                    "time_travel_each_location": "1-1.5 hours",
                    "best_time_to_visit": "Mid-morning, avoiding prayer times"
                },
                {
                    "place_name": "Topkapi Palace Museum",
                    "place_details": "Former residence and administrative headquarters of the Ottoman sultans. Explore the opulent courtyards, treasury, and the Harem.",
                    "place_image_url": "https://example.com/topkapi_palace.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0116,
                        "longitude": 28.9839
                    },
                    "place_address": "Cankurtaran, 34122 Fatih/İstanbul",
                    "ticket_price": "Approx. ₺750 (Palace + Harem + Hagia Irene)",
                    "time_travel_each_location": "3-4 hours",
                    "best_time_to_visit": "Afternoon, post-lunch"
                },
                {
                    "place_name": "Sultanahmet Dinner & Dervish Show (Optional)",
                    "place_details": "Enjoy traditional Turkish cuisine in a local restaurant in Sultanahmet, followed by an optional whirling dervish show for a spiritual cultural experience.",
                    "place_image_url": "https://example.com/dervish_show.jpg",
                    "geo_coordinates": {
                        "latitude": 41.007,
                        "longitude": 28.977
                    },
                    "place_address": "Sultanahmet area restaurants",
                    "ticket_price": "Dinner: €20-€40; Dervish show: €25-€35",
                    "time_travel_each_location": "2-3 hours",
                    "best_time_to_visit": "Evening (7:00 PM onwards)"
                }
            ]
        },
        {
            "day": 2,
            "day_plan": "Bazaars, Cisterns & Bosphorus Charm",
            "best_time_to_visit_day": "Morning to evening",
            "activities": [
                {
                    "place_name": "Grand Bazaar",
                    "place_details": "One of the oldest and largest covered markets in the world, offering textiles, jewelry, ceramics, spices, and more. A vibrant sensory overload.",
                    "place_image_url": "https://example.com/grand_bazaar.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0102,
                        "longitude": 28.9667
                    },
                    "place_address": "Beyazıt, Kalpakçılar Cd. No:22, 34126 Fatih/İstanbul",
                    "ticket_price": "Free (shopping extra)",
                    "time_travel_each_location": "2-3 hours",
                    "best_time_to_visit": "Morning (10:00 AM) to avoid peak crowds"
                },
                {
                    "place_name": "Spice Bazaar (Egyptian Bazaar)",
                    "place_details": "Aromatic market filled with spices, dried fruits, nuts, Turkish delight, and traditional Turkish coffee. Great for foodies and souvenir shopping.",
                    "place_image_url": "https://example.com/spice_bazaar.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0186,
                        "longitude": 28.9700
                    },
                    "place_address": "Rüstem Paşa, Erzak Ambarı Sok. No:92, 34116 Fatih/İstanbul",
                    "ticket_price": "Free (shopping extra)",
                    "time_travel_each_location": "1-1.5 hours",
                    "best_time_to_visit": "Late morning"
                },
                {
                    "place_name": "Basilica Cistern",
                    "place_details": "The largest ancient underground cistern in Istanbul, built in the 6th century. Famous for its inverted Medusa heads and atmospheric lighting.",
                    "place_image_url": "https://example.com/basilica_cistern.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0076,
                        "longitude": 28.9775
                    },
                    "place_address": "Alemdar, Yerebatan Cd. 1/3, 34110 Fatih/İstanbul",
                    "ticket_price": "Approx. ₺600",
                    "time_travel_each_location": "1 hour",
                    "best_time_to_visit": "Early afternoon, after the markets"
                },
                {
                    "place_name": "Bosphorus Cruise",
                    "place_details": "Enjoy a scenic cruise along the Bosphorus Strait, separating Europe and Asia. See palaces, mosques, and traditional houses from the water.",
                    "place_image_url": "https://example.com/bosphorus_cruise.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0210,
                        "longitude": 28.9750
                    },
                    "place_address": "Eminönü or Karakoy ferry terminals",
                    "ticket_price": "€10-€25 (public ferry or short tour)",
                    "time_travel_each_location": "1.5-2 hours",
                    "best_time_to_visit": "Late afternoon (e.g., 4:00 PM) for golden hour views"
                },
                {
                    "place_name": "Karakoy & Galata Nightlife",
                    "place_details": "Explore the trendy Karakoy district, known for its cafes, art galleries, and modern restaurants. Cross to Galata for lively bars and rooftop venues near the Galata Tower.",
                    "place_image_url": "https://example.com/karakoy_nightlife.jpg",
                    "geo_coordinates": {
                        "latitude": 41.025,
                        "longitude": 28.977
                    },
                    "place_address": "Karakoy and Galata districts",
                    "ticket_price": "Varies by venue",
                    "time_travel_each_location": "3-4 hours",
                    "best_time_to_visit": "Evening (8:00 PM onwards)"
                }
            ]
        },
        {
            "day": 3,
            "day_plan": "Asian Side Charm & Beyoğlu Buzz",
            "best_time_to_visit_day": "Morning to evening",
            "activities": [
                {
                    "place_name": "Kadıköy (Asian Side)",
                    "place_details": "Take a ferry to the vibrant Kadıköy district on the Asian side. Explore its bustling fish market, Moda neighborhood, antique shops, and street art. A great local experience.",
                    "place_image_url": "https://example.com/kadikoy.jpg",
                    "geo_coordinates": {
                        "latitude": 40.9922,
                        "longitude": 29.0252
                    },
                    "place_address": "Kadıköy, İstanbul (ferry from Eminönü or Karakoy)",
                    "ticket_price": "Ferry: ₺15-₺20",
                    "time_travel_each_location": "4-5 hours (including travel)",
                    "best_time_to_visit": "Morning/early afternoon"
                },
                {
                    "place_name": "Istiklal Avenue & Taksim Square",
                    "place_details": "Walk down Istiklal Avenue, a bustling pedestrian street with shops, cafes, cinemas, and historic buildings. It leads to Taksim Square, a major transportation hub.",
                    "place_image_url": "https://example.com/istiklal_avenue.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0355,
                        "longitude": 28.9768
                    },
                    "place_address": "Taksim, Beyoğlu/İstanbul",
                    "ticket_price": "Free (shopping extra)",
                    "time_travel_each_location": "2-3 hours",
                    "best_time_to_visit": "Late afternoon/early evening"
                },
                {
                    "place_name": "Galata Tower",
                    "place_details": "A medieval stone tower offering panoramic views of Istanbul, including the Golden Horn, Bosphorus, and the historical peninsula. Climb to the top for stunning sunset views.",
                    "place_image_url": "https://example.com/galata_tower.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0257,
                        "longitude": 28.9742
                    },
                    "place_address": "Bereketzade, Galata Kulesi Sk. No:1, 34421 Beyoğlu/İstanbul",
                    "ticket_price": "Approx. ₺650",
                    "time_travel_each_location": "1-1.5 hours",
                    "best_time_to_visit": "Before sunset (e.g., 6:00 PM)"
                },
                {
                    "place_name": "Cihangir & Nevizade Street Nightlife",
                    "place_details": "Dine in the bohemian Cihangir neighborhood, known for its trendy cafes and art scene. Afterwards, explore Nevizade Street near Istiklal Avenue for lively pubs and traditional meyhanes (taverns).",
                    "place_image_url": "https://example.com/nevizade.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0315,
                        "longitude": 28.9829
                    },
                    "place_address": "Cihangir and Nevizade Street, Beyoğlu",
                    "ticket_price": "Varies by venue",
                    "time_travel_each_location": "3-4 hours",
                    "best_time_to_visit": "Evening (8:00 PM onwards)"
                }
            ]
        },
        {
            "day": 4,
            "day_plan": "Palaces, Art & Modern Istanbul",
            "best_time_to_visit_day": "Morning to evening",
            "activities": [
                {
                    "place_name": "Dolmabahçe Palace",
                    "place_details": "A stunning 19th-century palace, the last residence of the Ottoman sultans. It showcases European Baroque, Rococo, and Neoclassical styles, blended with traditional Ottoman architecture.",
                    "place_image_url": "https://example.com/dolmabahce_palace.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0387,
                        "longitude": 29.0044
                    },
                    "place_address": "Vişnezade, Dolmabahçe Cd., 34357 Beşiktaş/İstanbul",
                    "ticket_price": "Approx. ₺650 (Palace + Harem)",
                    "time_travel_each_location": "2.5-3 hours",
                    "best_time_to_visit": "Morning (9:00 AM) to avoid tour groups"
                },
                {
                    "place_name": "Istanbul Modern Art Museum",
                    "place_details": "Turkey's first private museum to organize modern and contemporary art exhibitions. Located on the Karakoy waterfront, offering a great collection and Bosphorus views.",
                    "place_image_url": "https://example.com/istanbul_modern.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0257,
                        "longitude": 28.9774
                    },
                    "place_address": "Kılıçali Paşa, Tophane İskelesi Cd. No:1/1, 34433 Beyoğlu/İstanbul",
                    "ticket_price": "Approx. ₺350",
                    "time_travel_each_location": "2 hours",
                    "best_time_to_visit": "Afternoon"
                },
                {
                    "place_name": "Ortaköy & Bosphorus Bridge View",
                    "place_details": "Visit the charming Ortaköy neighborhood, famous for its beautiful mosque right on the Bosphorus, street food (especially kumpir - baked potatoes), and vibrant atmosphere. Enjoy views of the Bosphorus Bridge.",
                    "place_image_url": "https://example.com/ortakoy.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0487,
                        "longitude": 29.0264
                    },
                    "place_address": "Mecidiye, Dereboyu Cd. No:4, 34347 Beşiktaş/İstanbul",
                    "ticket_price": "Free (food extra)",
                    "time_travel_each_location": "2 hours",
                    "best_time_to_visit": "Late afternoon/Sunset"
                },
                {
                    "place_name": "Rooftop Bar Experience",
                    "place_details": "Enjoy cocktails and stunning panoramic views of the city at one of Istanbul's many rooftop bars, particularly in Beyoğlu or Karakoy.",
                    "place_image_url": "https://example.com/rooftop_bar.jpg",
                    "geo_coordinates": {
                        "latitude": 41.030,
                        "longitude": 28.975
                    },
                    "place_address": "Various locations in Beyoğlu/Karakoy (e.g., 360 Istanbul, Mikla)",
                    "ticket_price": "Varies (drinks €10-€20+)",
                    "time_travel_each_location": "2-3 hours",
                    "best_time_to_visit": "Evening (sunset onwards)"
                }
            ]
        },
        {
            "day": 5,
            "day_plan": "Local Neighborhoods & Authentic Experiences",
            "best_time_to_visit_day": "Morning to evening",
            "activities": [
                {
                    "place_name": "Balat & Fener Districts",
                    "place_details": "Explore the colorful and historic Jewish and Greek Orthodox neighborhoods of Balat and Fener. Wander through narrow, cobblestone streets with brightly painted houses, quirky cafes, and historic churches/synagogues.",
                    "place_image_url": "https://example.com/balat.jpg",
                    "geo_coordinates": {
                        "latitude": 41.028,
                        "longitude": 28.950
                    },
                    "place_address": "Balat and Fener, Fatih/İstanbul",
                    "ticket_price": "Free (food/coffee extra)",
                    "time_travel_each_location": "3-4 hours",
                    "best_time_to_visit": "Morning (9:30 AM onwards) for photography and fewer crowds"
                },
                {
                    "place_name": "Turkish Bath (Hammam) Experience",
                    "place_details": "Indulge in a traditional Turkish bath experience for relaxation and rejuvenation. A cultural ritual involving steam, scrubbing, and massage.",
                    "place_image_url": "https://example.com/turkish_bath.jpg",
                    "geo_coordinates": {
                        "latitude": 41.008,
                        "longitude": 28.977
                    },
                    "place_address": "Various hammams (e.g., Ayasofya Hürrem Sultan Hamamı, Cağaloğlu Hamamı)",
                    "ticket_price": "€50-€100+",
                    "time_travel_each_location": "1.5-2 hours",
                    "best_time_to_visit": "Afternoon, for relaxation after walking"
                },
                {
                    "place_name": "Chora Church (Kariye Museum)",
                    "place_details": "A Byzantine church converted into a mosque and then a museum, famous for its incredibly detailed Byzantine mosaics and frescoes depicting scenes from the life of Christ and the Virgin Mary. (Currently undergoing restoration, check accessibility).",
                    "place_image_url": "https://example.com/chora_church.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0294,
                        "longitude": 28.9497
                    },
                    "place_address": "Dervişali, Kariye Camii Sk. No:18, 34087 Fatih/İstanbul",
                    "ticket_price": "Approx. ₺350 (if open)",
                    "time_travel_each_location": "1.5 hours",
                    "best_time_to_visit": "Late afternoon"
                },
                {
                    "place_name": "Süleymaniye Mosque & Surroundings",
                    "place_details": "Visit the magnificent Süleymaniye Mosque, an Ottoman imperial mosque built by Mimar Sinan. Enjoy its grand architecture, peaceful courtyard, and panoramic views of the Golden Horn and Bosphorus.",
                    "place_image_url": "https://example.com/suleymaniye_mosque.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0163,
                        "longitude": 28.9634
                    },
                    "place_address": "Süleymaniye, Prof. Sıddık Sami Onar Cd. No:1, 34116 Fatih/İstanbul",
                    "ticket_price": "Free",
                    "time_travel_each_location": "1.5-2 hours",
                    "best_time_to_visit": "Late afternoon for sunset views"
                }
            ]
        },
        {
            "day": 6,
            "day_plan": "Princes' Islands Escape & Farewell Dinner",
            "best_time_to_visit_day": "Full day",
            "activities": [
                {
                    "place_name": "Princes' Islands (Büyükada)",
                    "place_details": "Take a ferry to Büyükada, the largest of the Princes' Islands. Enjoy a car-free environment, rent an electric buggy or bicycle, explore historic mansions, pine forests, and enjoy coastal views.",
                    "place_image_url": "https://example.com/buyukada.jpg",
                    "geo_coordinates": {
                        "latitude": 40.8757,
                        "longitude": 29.1235
                    },
                    "place_address": "Büyükada, Adalar/İstanbul (ferry from Kabataş or Eminönü)",
                    "ticket_price": "Ferry: ₺20-₺30 each way; Buggy/Bike rental: ₺50-₺150",
                    "time_travel_each_location": "6-8 hours (including travel)",
                    "best_time_to_visit": "Morning (catch an early ferry) to enjoy the whole day"
                },
                {
                    "place_name": "Farewell Dinner in Galata/Karakoy",
                    "place_details": "Return to the European side and enjoy a farewell dinner in one of the vibrant neighborhoods like Galata or Karakoy, offering diverse culinary options from traditional to modern, with lively atmospheres.",
                    "place_image_url": "https://example.com/galata_dinner.jpg",
                    "geo_coordinates": {
                        "latitude": 41.025,
                        "longitude": 28.975
                    },
                    "place_address": "Restaurants in Galata or Karakoy",
                    "ticket_price": "€30-€60+",
                    "time_travel_each_location": "2-3 hours",
                    "best_time_to_visit": "Evening (7:30 PM onwards)"
                }
            ]
        },
        {
            "day": 7,
            "day_plan": "Last-minute Souvenirs & Departure",
            "best_time_to_visit_day": "Morning",
            "activities": [
                {
                    "place_name": "Arasta Bazaar",
                    "place_details": "A smaller, less crowded bazaar near the Blue Mosque, offering authentic Turkish goods, carpets, ceramics, and souvenirs. Perfect for last-minute shopping.",
                    "place_image_url": "https://example.com/arasta_bazaar.jpg",
                    "geo_coordinates": {
                        "latitude": 41.0041,
                        "longitude": 28.9774
                    },
                    "place_address": "Sultan Ahmet, Arasta Çarşısı No:110, 34122 Fatih/İstanbul",
                    "ticket_price": "Free (shopping extra)",
                    "time_travel_each_location": "1-1.5 hours",
                    "best_time_to_visit": "Morning"
                },
                {
                    "place_name": "Turkish Coffee Experience",
                    "place_details": "Enjoy a final authentic Turkish coffee at a traditional cafe, savoring the rich flavor and predicting your fortune from the grounds (tasseography).",
                    "place_image_url": "https://example.com/turkish_coffee.jpg",
                    "geo_coordinates": {
                        "latitude": 41.008,
                        "longitude": 28.978
                    },
                    "place_address": "Various cafes in Sultanahmet or Grand Bazaar area",
                    "ticket_price": "€3-€5",
                    "time_travel_each_location": "0.5-1 hour",
                    "best_time_to_visit": "Late morning"
                },
                {
                    "place_name": "Departure from Istanbul",
                    "place_details": "Travel to Istanbul Airport (IST) or Sabiha Gökçen Airport (SAW) for your flight back to São Paulo.",
                    "place_image_url": "https://example.com/istanbul_airport.jpg",
                    "geo_coordinates": {
                        "latitude": 41.2584,
                        "longitude": 28.7402
                    },
                    "place_address": "Tayakadın, Terminal Cd No:1, 34283 Arnavutköy/İstanbul (IST)",
                    "ticket_price": "Airport Transfer: €10-€50 (public transport to private shuttle)",
                    "time_travel_each_location": "2-3 hours (travel to airport + check-in)",
                    "best_time_to_visit": "According to flight schedule"
                }
            ]
        }
    ]
}


const Itinerary = () => {
    const data = [
        {
            title: "Recommended  Hotels",
            content: (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4' >
                    {TRIP_DATA.hotels.map((hotel: Hotel, idx) => (
                       <HotelCardItem  hotel={hotel} key={idx}/>
                    ))}
                </div>
            ),
        },
        ...TRIP_DATA.itinerary.map((dayData) => ({
            title: `Day ${dayData.day}`,
            content: (
                <div>
                    <p>Best Time: {dayData.best_time_to_visit_day}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {dayData.activities.map((activity, idx) => (
                          <PlaceCardItem activity={activity} key={idx} />
                        ))}
                    </div>
                </div>
            )
        }))

    ];
    return (
        <div className="relative w-full h-[83vh] overflow-auto">
            <Timeline data={data} tripData={TRIP_DATA} />
        </div>
    )
}

export default Itinerary
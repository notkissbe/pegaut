-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Ápr 19. 10:15
-- Kiszolgáló verziója: 10.4.25-MariaDB
-- PHP verzió: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `pejodatabase`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `peugeotmodels`
--

CREATE TABLE `peugeotmodels` (
  `Model` varchar(50) DEFAULT NULL,
  `Type` varchar(50) DEFAULT NULL,
  `Year` int(11) DEFAULT NULL,
  `Price` int(11) NOT NULL,
  `EngineType` varchar(50) DEFAULT NULL,
  `RangeDistance` varchar(50) DEFAULT NULL,
  `kepLink` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `peugeotmodels`
--

INSERT INTO `peugeotmodels` (`Model`, `Type`, `Year`, `Price`, `EngineType`, `RangeDistance`, `kepLink`) VALUES
('107', 'Hatchback', 2005, 678000, '1.0L Petrol', '450 km', '107Ha.jpg'),
('206', 'Hatchback', 2005, 987600, '1.4L Diesel', '500 km', '206Ha.jpg'),
('208', 'Hatchback', 2005, 450000, '1.6L Petrol', '550 km', '208Ha.webp'),
('301', 'Sedan', 2005, 678000, '1.6L Diesel', '600 km', '301Se.jpg'),
('308', 'Hatchback', 2005, 300000, '2.0L Petrol', '650 km', '308Ha.jpg'),
('407', 'Sedan', 2010, 123000, '2.2L Petrol', '700 km', '407Se.jpg'),
('508', 'Wagon', 2010, 934000, '2.0L Petrol', '750 km', '508Wa.jpg'),
('607', 'Sedan', 2010, 477800, '2.2L Petrol', '800 km', '607Se.jpg'),
('1007', 'Hatchback', 2005, 546700, '1.4L Petrol', '850 km', '1007Ha.jpg'),
('2008', 'SUV', 2013, 980000, '1.6L Petrol', '900 km', '2008SUV.jpg'),
('3008', 'SUV', 2005, 435200, '1.6L Diesel', '950 km', '3008SUV.jpg'),
('4007', 'SUV', 2005, 129800, '2.0L Petrol', '1000 km', '4007SUV.jpg'),
('5008', 'MPV', 2017, 470000, '1.6L Diesel', '1050 km', '5008MPV.webp'),
('Partner', 'Van', 2005, 683500, '1.6L Petrol', '1100 km', 'PartnerVan.jpg'),
('Expert', 'Van', 2005, 28400, '1.6L Diesel', '1150 km', 'ExpertVan.jpg'),
('Boxer', 'Van', 2005, 83700, '2.0L Petrol', '1200 km', 'BoxerVan.jpg'),
('206 CC', 'Convertible', 2005, 345000, '1.6L Petrol', '1250 km', '206CCCo.jpg'),
('307 SW', 'Wagon', 2005, 567000, '2.0L Petrol', '1300 km', '307SWWa.jpg'),
('308 CC', 'Convertible', 2005, 987600, '2.0L Petrol', '1350 km', '308CCCo.jpg'),
('RCZ', 'Coupe', 2012, 5647800, '1.6L Petrol', '1400 km', 'RCZCo.webp'),
('4008', 'SUV', 2015, 876500, '1.6L Petrol', '1450 km', '4008SUV.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
